/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare interface Window {
  analytics: any;
  dataLayer: any;
  gtag_report_conversion: (url?: string) => any;
}

declare namespace JSX {
  interface IntrinsicElements {
    'amp-analytics': any;
  }
}
