/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Meta } from '../components/Meta';
import { FaqPage } from '../modules/landing/faq/FaqPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Frequently Asked Questions about appreciate"
        ogTitle="Frequently asked questions about appreciate"
        description="Our FAQ page has answered to frequently asked questions about appreciate."
        url="https://appreciate.it/faq"
        images={[
          {
            url: 'https://appreciate.it/assets/og-owners-hero.png',
          },
        ]}
      />
      <FaqPage />
    </>
  );
}
