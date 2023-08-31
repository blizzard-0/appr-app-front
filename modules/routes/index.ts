import { finalizeRoutes } from '@appreciate/routes';
import { publicRuntimeConfig } from '../config';

export const routes = finalizeRoutes({
  appBackendBaseURL: publicRuntimeConfig.NEXT_PUBLIC_APP_BACKEND_BASE_URL,
  appFrontendBaseURL: publicRuntimeConfig.NEXT_PUBLIC_APP_FRONTEND_BASE_URL,
  appBlogBaseUrl: publicRuntimeConfig.NEXT_PUBLIC_BLOG_BASE_URL,
});
