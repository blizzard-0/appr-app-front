/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Meta } from '../components/Meta';
import { WalletPage } from '../modules/landing/wallet/GigiPage';

export default function LandingPage() {
  return (
    <>
      <Meta
        title="Gigi Hadid’s appreciate wallet"
        ogTitle="Gigi Hadid’s appreciate wallet"
        description="Explore Gigi Hadid’s wallet of luxury designer goods. Her collection has Fendi and Missoni. Download the appreciate app to build your wallet."
        url="https://appreciate.it/gigi-hadid"
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
