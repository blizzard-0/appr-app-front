/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProviderWithErrorContext } from '../apollo-client';
import { ToastContainer } from '../components/Toast';
import { publicRuntimeConfig } from '../modules/config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const gtmEnabled = publicRuntimeConfig.NEXT_PUBLIC_IS_GTM_ENABLED;

  return (
    <>
      <Head>
        {gtmEnabled && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-10815488489"
            />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-10815488489'); gtag('config', 'G-VBKGG7ZRDM');`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10815488489/rDz5CPqj_qsDEOmDnaUo', 'event_callback': callback }); return false; }`,
              }}
            />
          </>
        )}
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                 fbq('init', '1304804486993503'); 
                fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1304804486993503&ev=PageView&noscript=1"
          />
        </noscript>
        <script async src="//embed.typeform.com/next/embed.js"></script>
      </Head>
      <ApolloProviderWithErrorContext>
        <Component {...pageProps} />
      </ApolloProviderWithErrorContext>
      <ToastContainer />
    </>
  );
}
export default MyApp;
