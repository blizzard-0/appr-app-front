import React from 'react';

import { Header } from './components/Header';
import { WalletHeader } from './components/WalletHeader';
import { WalletItems } from './components/WalletItemsList';
import { WalletProps } from '@/modules/landing/wallet/WalletProps';
import { getCurrency } from '@/utils/currency';

interface WalletPageProps {
  wallet: WalletProps;
}

export const WalletPage: React.FC<WalletPageProps> = ({ wallet }) => {
  return (
    <div className="bg-grey-100 text-panda-dark">
      <Header />
      <div className="pb-16">
        <WalletHeader
          fullName={wallet.attributes.userName}
          avatarImage={wallet.attributes.avatarImage.data.attributes.url}
          totalCount={wallet.attributes.totalWalletItems}
          numVerifiedWalletItems={wallet.attributes.totalVerifiedWalletItems}
          totalValue={getCurrency(wallet.attributes.totalValue)}
        />

        <WalletItems walletItemsData={wallet.attributes.walletItem} />
      </div>
    </div>
  );
};
