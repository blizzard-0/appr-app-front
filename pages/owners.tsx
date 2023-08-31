/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { OwnersPage } from '../modules/landing/owners/OwnersPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Digital wallet for luxury brand ownership"
        ogTitle="Organize, flex, and interact with your luxury items"
        description="appreciate is a digital wallet for owners to connect with luxury brands and partners — empowering them with greater utility for their luxury items."
        url="https://appreciate.it/owners"
        images={[
          {
            url: 'https://appreciate.it/assets/og-owners-hero.png',
          },
        ]}
      />
      <OwnersPage />
    </>
  );
}
