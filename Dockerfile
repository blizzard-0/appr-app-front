FROM public.ecr.aws/docker/library/node:16-alpine  as base
ENV NEXT_TELEMETRY_DISABLED=1

# Setting up global npm
RUN npm config set registry https://registry.npmjs.org/
RUN npm install -g npm@7.19.1


# Creating monorepo root
RUN mkdir /appreciate-app-front


# Setting up monorepo root core files
WORKDIR /appreciate-app-front
COPY / /appreciate-app-front
# COPY ./package.json ./package.json
# COPY ./package-lock.json ./package-lock.json
# COPY ./tsconfig.json ./tsconfig.json
# COPY ./tailwind.config.js ./tailwind.config.js
# COPY ./postcss.config.js ./postcss.config.js
# COPY ./.prettierrc.js ./.prettierrc.js
# COPY ./.gitmodules ./.gitmodules
# COPY ./envconfig.ts ./envconfig.ts

# COPY ./.storybook ./.storybook
# COPY ./envgen ./envgen
# COPY ./generated ./generated
# COPY ./components ./components
# COPY ./hooks ./hooks
# COPY ./modules ./modules
# COPY ./pages ./pages
# COPY ./public ./public
# COPY ./styles ./styles
# COPY ./utils ./utils

# Installing monorepo npm dependencies
RUN npm ci

# Compiling local package dependency source codes
COPY appreciate-routes appreciate-routes/
RUN cd ./appreciate-routes && npm run build

# Copying source code into the image

FROM base as storybook
ENV NEXT_TELEMETRY_DISABLED=1

# Building local env vars because next/config needs them
RUN npm run envgen

# Building an image to deploy & serve storybook
WORKDIR /appreciate-app-front
RUN npm run build-storybook
CMD npm run serve-storybook

# FROM base as prebuild TODO: uncomment

# # Linting and testing
# WORKDIR /appreciate-monorepo/services/nextjs-app-frontend
# RUN npm run lint
# RUN npm run test
# RUN npm run codegen

FROM base as build
ARG NEXT_PUBLIC_GRAPHQL_ENDPOINT
ARG NEXT_PUBLIC_APP_BACKEND_BASE_URL
ARG NEXT_PUBLIC_APP_FRONTEND_BASE_URL
ARG NEXT_PUBLIC_BLOG_BASE_URL
ARG NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET
ARG NEXT_PUBLIC_CLOUDINARY_API_KEY
ARG NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
ARG NEXT_PUBLIC_INSTAGRAM_APP_ID
ARG NEXT_PUBLIC_MIXPANEL_TOKEN
ARG NEXT_PUBLIC_SENTRY_DSN
ARG NEXT_PUBLIC_MIXPANEL_DEBUG
ARG NEXT_PUBLIC_IS_GTM_ENABLED
ARG NEXT_PUBLIC_IS_EXPLORE_ENABLED
ARG SENTRY_AUTH_TOKEN
ENV NEXT_TELEMETRY_DISABLED=1

# Compiling service source code
RUN npm run build

# Removing dev dependencies
WORKDIR /appreciate-app-front
RUN npm prune --production

# Give cache modifying access to the server
RUN mkdir -p /appreciate-app-front/.next/cache
RUN mkdir -p /appreciate-app-front/.next/cache/images
RUN chown -Rh node /appreciate-app-front/.next/cache
RUN chown -Rh node /appreciate-app-front/.next/cache/images

# Switching users
USER node

# Running the service
WORKDIR /appreciate-app-front
CMD ["npm", "run", "start:prod"]

# CMD /bin/sh -c "while sleep 1000; do :; done"