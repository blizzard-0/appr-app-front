/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { WalletPage } from '../modules/landing/wallet/BellaPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Bella Hadid’s appreciate wallet"
        ogTitle="Bella Hadid’s appreciate wallet"
        description="Explore Bella Hadid’s wallet of luxury designer goods. Her collection has Balenciaga and Givenchy. Download the appreciate app to build your wallet."
        url="https://appreciate.it/bella-hadid"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />
      <WalletPage />
    </>
  );
}
