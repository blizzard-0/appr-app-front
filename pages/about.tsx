/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { AboutPage } from '../modules/landing/about/AboutPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="appreciate - Empowering luxury brands, owners, partners"
        ogTitle="Learn more about appreciate"
        description="appreciate connects brands, partners, items, and owners — creating a network that optimizes for ownership utility, mindful consumerism, and community engagement."
        url="https://appreciate.it/about"
        images={[
          {
            url: 'https://appreciate.it/assets/og-brands-hero.png',
          },
        ]}
      />
      <AboutPage />
    </>
  );
}
