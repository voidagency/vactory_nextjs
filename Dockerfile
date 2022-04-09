# Install dependencies only when needed
FROM node:16-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

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
