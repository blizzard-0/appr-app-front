/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { WalletPage } from '../modules/landing/wallet/KyliePage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Kylie Jenner’s appreciate wallet"
        ogTitle="Kylie Jenner’s appreciate wallet"
        description="Explore Kylie Jenner’s wallet of luxury designer goods. Her collection has Balenciaga and Judith Leiber. Download the appreciate app to build your wallet."
        url="https://appreciate.it/kylie-jenner"
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
