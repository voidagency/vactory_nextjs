# Install dependencies only when needed
FROM node:16-alpine AS deps
ARG CACHEBUST=2
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
# RUN --mount=type=cache,target=/tmp/yarn_cache yarn install --prefer-offline --frozen-lockfile
RUN yarn install --frozen-lockfile
RUN yarn cache clean

# UI - Rebuild the source code only when needed
FROM node:16-alpine AS builder_ui
WORKDIR /app
COPY --from=deps /app ./
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
