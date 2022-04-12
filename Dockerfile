# Install dependencies only when needed
FROM node:16-alpine AS deps
ARG CACHEBUST=2
ENV YARN_CACHE_FOLDER=/tmp/yarn_cache
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
# RUN --mount=type=cache,target=/tmp/yarn_cache yarn install --prefer-offline --frozen-lockfile
RUN yarn install --frozen-lockfile

# App - Rebuild the source code only when needed
FROM node:16-alpine AS builder_app
ARG CACHEBUST=2
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
# TODO: figure this out
COPY apps/starter/.env.example ./apps/starter/.env
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn workspace starter build

# UI - Rebuild the source code only when needed
FROM node:16-alpine AS builder_ui
WORKDIR /app
COPY --from=deps /app ./
ENV NODE_ENV production
RUN yarn workspace @vactory/ui build

# DOCS - Rebuild the source code only when needed
FROM node:16-alpine AS builder_docs
WORKDIR /app
COPY --from=deps /app ./
ENV NODE_ENV production
RUN yarn workspace docs build

# UI - Production image
FROM node:16-alpine AS runner_ui
RUN yarn global add http-server pm2
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder_ui /app/packages/ui/storybook-static ./public
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "http-server", "./public"]

# DOCS - Production image
FROM node:16-alpine AS runner_docs
RUN yarn global add http-server pm2
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder_docs /app/apps/docs/build ./public
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "http-server", "./public"]

# UI - Production image
FROM node:16-alpine AS runner_app
ARG CACHEBUST=2
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter ./
# COPY --from=builder_app --chown=nextjs:nodejs /app/node_modules/next ./node_modules/next

# COPY --from=builder_app --chown=nextjs:nodejs /app/node_modules ./node_modules
# # Automatically leverage output traces to reduce image size 
# # https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/.next/standalone ./
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/next.config.js ./apps/starter/next.config.js
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/.next/static ./apps/starter/.next/static
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/public ./apps/starter/public
# # # @TODO: this is causing trouble with the standalone version.
COPY --from=builder_app --chown=nextjs:nodejs /app/packages/ui/public/icons.svg ./apps/starter/public/icons.svg

USER nextjs
EXPOSE 8080
ENV PORT 8080
# ENTRYPOINT [ "tail", "-f", "/dev/null" ]
CMD ["node", "apps/starter/server.js"]
