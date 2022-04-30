FROM node:16-alpine AS packages
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY packages ./packages
# Find and remove non-package.json files
RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=packages /app ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

FROM node:16-alpine AS builder_starter
WORKDIR /app
COPY --from=deps /app ./
COPY . .
# Restore workspaces symlinks && build fresh packages (Sharp)
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn add -W sharp
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn workspace starter build

# App - Production image
FROM node:16-alpine AS runner_starter
RUN yarn global add pm2
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/starter/.next/standalone ./
COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/starter/next.config.js ./apps/starter
COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/starter/.next/static ./apps/starter/.next/static
COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/starter/public ./apps/starter/public
# # @TODO: this is causing trouble with the standalone version.
COPY --from=builder_starter --chown=nextjs:nodejs /app/packages/ui/public/icons.svg ./apps/starter/public/icons.svg

USER nextjs
EXPOSE 8080
ENV PORT 8080
CMD [ "pm2-runtime", "start", "apps/starter/server.js"]

# UI - Rebuild the source code only when needed
FROM node:16-alpine AS builder_ui
WORKDIR /app
COPY --from=deps /app ./
COPY . .
# Restore workspaces symlinks && build fresh packages (Sharp)
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
ENV NODE_ENV production
RUN yarn workspace @vactory/ui build

# UI - Production image
FROM node:16-alpine AS runner_ui
RUN yarn global add http-server pm2
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder_ui /app/packages/ui/storybook-static ./public
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "http-server", "./public"]

# DOCS - Rebuild the source code only when needed
FROM node:16-alpine AS builder_docs
WORKDIR /app
COPY --from=deps /app ./
COPY . .
# Restore workspaces symlinks && build fresh packages (Sharp)
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
ENV NODE_ENV production
RUN yarn workspace docs build

# DOCS - Production image
FROM node:16-alpine AS runner_docs
RUN yarn global add http-server pm2
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder_docs /app/apps/docs/build ./public
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "http-server", "./public"]
