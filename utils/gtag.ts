import { publicRuntimeConfig } from '../modules/config';

export const gtagReport = (url?: string) => {
  if (!publicRuntimeConfig.NEXT_PUBLIC_IS_GTM_ENABLED) {
    return;
  }
  if (window) {
    window.gtag_report_conversion(url);
  }
};
