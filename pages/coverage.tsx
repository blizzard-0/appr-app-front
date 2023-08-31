/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { CoveragePage } from '../modules/landing/coverage/CoveragePage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Luxury coverage to protect your collection"
        ogTitle="Luxury coverage to protect your collection"
        description="Request coverage to protect your luxury items from damage, loss, & theft. Affordable and comprehensive coverage plans for your handbags, jewelry, & more."
        url="https://appreciate.it/coverage"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />
      <CoveragePage />
    </>
  );
}
