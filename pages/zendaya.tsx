/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { WalletPage } from '../modules/landing/wallet/ZendayaPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Zendaya’s appreciate wallet"
        ogTitle="Zendaya’s appreciate wallet"
        description="Explore Zendaya’s wallet of luxury designer goods. Her collection has Valentino and Bulgari. Download the appreciate app to build your wallet."
        url="https://appreciate.it/zendaya"
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
