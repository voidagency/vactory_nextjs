# Install dependencies only when needed
FROM node:16-alpine AS deps
ARG CACHEBUST=1
ENV YARN_CACHE_FOLDER=/tmp/yarn_cache
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/tmp/yarn_cache yarn install --prefer-offline --frozen-lockfile

# App - Rebuild the source code only when needed
FROM node:16-alpine AS builder_app
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV production
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
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/next.config.js ./
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/public ./public
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/package.json ./package.json
COPY --from=builder_app --chown=nextjs:nodejs /app/node_modules ./node_modules
# @TODO: this is causing trouble with the standalone version.
COPY --from=builder_app --chown=nextjs:nodejs /app/packages/ui/public/icons.svg ./public/icons.svg
# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/.next/standalone ./
COPY --from=builder_app --chown=nextjs:nodejs /app/apps/starter/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
# ENTRYPOINT [ "tail", "-f", "/dev/null" ]
CMD ["node", "apps/starter/server.js"]
