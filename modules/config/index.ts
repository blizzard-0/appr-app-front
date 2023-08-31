import * as t from 'io-ts';
import * as E from 'fp-ts/Either';
import getConfig from 'next/config';
import { BooleanFromString } from 'io-ts-types';

// All public runtime env vars should be available to the serverside config as well.
// This is why we'll add public vars to the publicRuntimeCodec, and server-side only
// env vars to the serverSideOnlyConfigCodec, and finally join them together via
// t.intersect for serverRuntimeConfigCodec. This ensures that all public env vars
// are programmatically enforced to be present under the server runtime as well..

const publicRuntimeConfigCodec = t.type({
  NEXT_PUBLIC_GRAPHQL_ENDPOINT: t.string,
  NEXT_PUBLIC_APP_BACKEND_BASE_URL: t.string,
  NEXT_PUBLIC_APP_FRONTEND_BASE_URL: t.string,
  NEXT_PUBLIC_BLOG_BASE_URL: t.string,
  NEXT_PUBLIC_CLOUDINARY_API_KEY: t.string,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: t.string,
  NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET: t.string,
  NEXT_PUBLIC_INSTAGRAM_APP_ID: t.string,
  NEXT_PUBLIC_MIXPANEL_TOKEN: t.string,
  NEXT_PUBLIC_MIXPANEL_DEBUG: BooleanFromString,
  NEXT_PUBLIC_IS_GTM_ENABLED: BooleanFromString,
  NEXT_PUBLIC_IS_EXPLORE_ENABLED: BooleanFromString,
});

const serverOnlyConfigCodec = t.type({
  NODE_ENV: t.string,
});

const serverRuntimeConfigCodec = t.intersection([
  serverOnlyConfigCodec,
  publicRuntimeConfigCodec,
]);

const getPublicRuntimeConfig = () => {
  const env = getConfig().publicRuntimeConfig;
  const config = publicRuntimeConfigCodec.decode(env);
  if (E.isLeft(config)) {
    config.left.forEach((validationError, index) => {
      const keysList = validationError.context.map((v) => v.key);
      const key = keysList.join(' > ');
      console.error(`Index: ${index}, Key: ${key}`);
    });
    throw new Error('Client config is not configured properly');
  } else {
    return {
      ...config.right,
    };
  }
};

// We build and export the publicRuntimeConfig but
// we delay execution on the serverRuntimeConfig because
// even though the server always has access to the public runtime
// config, the client may not have access to the server runtime
// config. For that reason, whenever we want to access the server runtime
// config, we'll call the function.

export const publicRuntimeConfig = getPublicRuntimeConfig();

export const getServerRuntimeConfig = () => {
  const env = getConfig().serverRuntimeConfig;
  const config = serverRuntimeConfigCodec.decode(env);
  if (E.isLeft(config)) {
    throw new Error('Server config is not configured properly');
  } else {
    return config.right;
  }
};
