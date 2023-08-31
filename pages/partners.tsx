/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { PartnersPage } from '../modules/landing/partners/PartnersPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Connecting you with luxury brands and owners post-purchase"
        ogTitle="Engage and empower your customers"
        description="The appreciate platform empowers partners to engage with luxury brands and owners to create community engagement and item utility."
        url="https://appreciate.it/partners"
        images={[
          {
            url: 'https://appreciate.it/assets/og-partners-hero.png',
          },
        ]}
      />
      <PartnersPage />
    </>
  );
}
