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
WORKDIR /app
COPY --from=deps /app ./
RUN yarn install --frozen-lockfile
ARG NEXT_PUBLIC_DRUPAL_BASE_URL
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_IMAGE_DOMAIN
ARG DRUPAL_SITE_ID
ARG DRUPAL_CLIENT_ID
ARG DRUPAL_CLIENT_SECRET
ARG DRUPAL_PREVIEW_SECRET
ARG OAUTH_CLIENT_ID
ARG OAUTH_CLIENT_SECRET
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET
ARG JWT_SIGNING_PRIVATE_KEY
ARG SENTRY_DSN
ARG NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
ARG NEXT_PUBLIC_RECAPTCHA_SITEKEY
ARG RECAPTCHA_SECRETKEY
ARG KEYCLOAK_ID
ARG KEYCLOAK_SECRET
ARG KEYCLOAK_ISSUER

ENV NEXT_PUBLIC_DRUPAL_BASE_URL $NEXT_PUBLIC_DRUPAL_BASE_URL
ENV NEXT_PUBLIC_BASE_URL $NEXT_PUBLIC_BASE_URL
ENV NEXT_IMAGE_DOMAIN $NEXT_IMAGE_DOMAIN
ENV DRUPAL_SITE_ID $DRUPAL_SITE_ID
ENV DRUPAL_CLIENT_ID $DRUPAL_CLIENT_ID
ENV DRUPAL_CLIENT_SECRET $DRUPAL_CLIENT_SECRET
ENV OAUTH_CLIENT_ID $OAUTH_CLIENT_ID
ENV OAUTH_CLIENT_SECRET $OAUTH_CLIENT_SECRET
ENV NEXTAUTH_URL $NEXTAUTH_URL
ENV JWT_SIGNING_PRIVATE_KEY $JWT_SIGNING_PRIVATE_KEY
ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID $NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
ENV NEXT_PUBLIC_RECAPTCHA_SITEKEY $NEXT_PUBLIC_RECAPTCHA_SITEKEY
ENV RECAPTCHA_SECRETKEY $RECAPTCHA_SECRETKEY
ENV KEYCLOAK_ID $KEYCLOAK_ID
ENV KEYCLOAK_SECRET $KEYCLOAK_SECRET
ENV KEYCLOAK_ISSUER $KEYCLOAK_ISSUER

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
