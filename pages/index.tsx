/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react';
import { Meta } from '../components/Meta';
import { OwnersPage } from '../modules/landing/owners/OwnersPage';

export default function LandingPage() {
  return (
    <>
      <Head>
        {/* Hotjar Tracking Code for https://appreciate.it/ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3120725,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </Head>
      <Meta
        title="Connecting luxury brands and owners post-purchase"
        ogTitle="appreciate is elevating ownership"
        description="appreciate is a platform connecting luxury brands with their owners to create post-purchase experiences that drive brand loyalty and community engagement."
        url="https://appreciate.it/"
        images={[
          {
            url: 'https://appreciate.it/assets/og-brands-hero.png',
          },
        ]}
      />
      <OwnersPage />
    </>
  );
}
