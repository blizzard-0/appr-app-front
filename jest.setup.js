// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { setConfig } from 'next/config';
setConfig({
  publicRuntimeConfig: {
    NODE_ENV: 'testing',
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: '/',
    NEXT_PUBLIC_APP_BACKEND_BASE_URL: '/',
    NEXT_PUBLIC_APP_FRONTEND_BASE_URL: '/',
    NEXT_PUBLIC_BLOG_BASE_URL: '/',
    NEXT_PUBLIC_CLOUDINARY_API_KEY: '',
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: '',
    NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET: '',
    NEXT_PUBLIC_INSTAGRAM_APP_ID: '',
    NEXT_PUBLIC_MIXPANEL_TOKEN: '',
    NEXT_PUBLIC_MIXPANEL_DEBUG: 'false',
    NEXT_PUBLIC_IS_GTM_ENABLED: 'false',
    NEXT_PUBLIC_IS_EXPLORE_ENABLED: 'true',
  },
});
