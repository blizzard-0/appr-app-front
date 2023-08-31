/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { BrandsPage } from '../modules/landing/brands/BrandsPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Connecting luxury brands and owners post-purchase"
        ogTitle="Delight, connect, and serve your customers post-purchase"
        description="appreciate is a platform connecting luxury brands with their owners to create post-purchase experiences that drive brand loyalty and community engagement."
        url="https://appreciate.it/brands"
        images={[
          {
            url: 'https://appreciate.it/assets/og-brands-hero.png',
          },
        ]}
      />
      <BrandsPage />
    </>
  );
}
