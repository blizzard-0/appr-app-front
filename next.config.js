/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const publicRuntimeConfig = {
  NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  NEXT_PUBLIC_APP_BACKEND_BASE_URL:
    process.env.NEXT_PUBLIC_APP_BACKEND_BASE_URL,
  NEXT_PUBLIC_APP_FRONTEND_BASE_URL:
    process.env.NEXT_PUBLIC_APP_FRONTEND_BASE_URL,
  NEXT_PUBLIC_BLOG_BASE_URL: process.env.NEXT_PUBLIC_BLOG_BASE_URL,
  NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET:
    process.env.NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET,
  NEXT_PUBLIC_INSTAGRAM_APP_ID: process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID,
  NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
  NEXT_PUBLIC_MIXPANEL_DEBUG: process.env.NEXT_PUBLIC_MIXPANEL_DEBUG,
  NEXT_PUBLIC_IS_GTM_ENABLED: process.env.NEXT_PUBLIC_IS_GTM_ENABLED,
  NEXT_PUBLIC_IS_EXPLORE_ENABLED: process.env.NEXT_PUBLIC_IS_EXPLORE_ENABLED,
};

// IMPORTANT: We want all public configs to be present on the server-side configs as well.
// This means that we should keep our jenkins ci build env vars and ecs deployed nextjs container
// env vars in sync.

const moduleExports = {
  reactStrictMode: true,
  publicRuntimeConfig,
  serverRuntimeConfig: {
    ...publicRuntimeConfig,
    NODE_ENV: process.env.NODE_ENV,
  },
  images: {
    loader: 'default',
    domains: [
      'res.cloudinary.com',
      'scontent.cdninstagram.com',
      'via.placeholder.com',
      'localhost',
    ],
  },
  headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'content-type', value: 'application/json' }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/bella-hadid',
        destination: '/wallet/bella-hadid',
        permanent: true,
      },
      {
        source: '/zendaya',
        destination: '/wallet/zendaya',
        permanent: true,
      },
      {
        source: '/kylie-jenner',
        destination: '/wallet/kylie-jenner',
        permanent: true,
      },
      {
        source: '/gigi-hadid',
        destination: '/wallet/gigi-hadid',
        permanent: true,
      },
      {
        source: '/xenia-adonts',
        destination: '/wallet/xenia-adonts',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' };
    }
    return config;
  },
};

module.exports = withSentryConfig
  ? withSentryConfig(moduleExports, sentryWebpackPluginOptions)
  : moduleExports;
