/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { WalletPage } from '../modules/landing/wallet/XeniaPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Xenia’s appreciate wallet"
        ogTitle="Xenia’s appreciate wallet"
        description="Explore Xenia Adonts’s wallet of luxury designer goods. Her collection has Hermès and Louis Vuitton. Download the appreciate app to build your wallet."
        url="https://appreciate.it/xenia-adonts"
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
