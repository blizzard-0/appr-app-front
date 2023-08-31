import React from 'react';

import { Header } from './components/Header';
import { WalletHeader } from './components/WalletHeader';
import { WalletItems } from './components/WalletItems';

const WalletHeaderData = {
  fullName: 'Kylie Jenner',
  avatarImage: '../wallet/avatar/KylieJenner.jpeg',
  totalCount: 20,
  numVerifiedWalletItems: 20,
  totalValue: '$812K',
};
const WalletItemList = [
  {
    image: '../wallet/Sac Faubourg Birkin 20.png',
    productName: 'Sac Faubourg Birkin 20',
    brandName: 'Hermes',
    resalePrice: '$320,000',
    retailPrice: '$30,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Himalayna Crocodile.png',
    productName: 'Himalayna Crocodile',
    brandName: 'Hermes',
    resalePrice: '$175,000',
    retailPrice: '$45,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Saddle Bag.png',
    productName: 'Saddle Bag',
    brandName: 'Christian Dior',
    resalePrice: '$3,000',
    retailPrice: '$3,950',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Birkin 25 Sellier.png',
    productName: 'Birkin 25 Sellier',
    brandName: 'Hermes',
    resalePrice: '$34,500',
    retailPrice: '$10,100',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Kelly Mini 20 Alligator.png',
    productName: 'Birkin 25 Sellier',
    brandName: 'Hermes',
    resalePrice: '$76,500',
    retailPrice: '$25,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Kelly 20 Mini II Sellier Blue.png',
    productName: 'Kelly 20 Mini II Sellier',
    brandName: 'Hermes',
    resalePrice: '$24,250',
    retailPrice: '$8,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/1995 CC Heart Bag.png',
    productName: '1995 CC Heart Bag',
    brandName: 'Chanel',
    resalePrice: '$43,390',
    retailPrice: '$990',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Mink Bumbag.png',
    productName: 'Mink Bumbag',
    brandName: 'Louis Vuitton',
    resalePrice: '$50,000',
    retailPrice: '$25,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Glitter Damier Keepall Bandouliere 50.png',
    productName: 'Glitter Damier Keepall Bandouliere 50',
    brandName: 'Louis Vuitton',
    resalePrice: '$7,950',
    retailPrice: '$4,600',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Cinderella Pumpkin.png',
    productName: 'Cinderella Pumpkin',
    brandName: 'Judith Leiber',
    resalePrice: '$7,250',
    retailPrice: '$5,695',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Cat Jinx.png',
    productName: 'Cat Jinx',
    brandName: 'Judith Leiber',
    resalePrice: '$6,250',
    retailPrice: '$5,295',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Stack of Cash Billions Clutch.png',
    productName: 'Stack of Cash Billions Clutch',
    brandName: 'Judith Leiber',
    resalePrice: '$5,450',
    retailPrice: '$5,695',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Point Knit Pouch.png',
    productName: 'Point Knit Pouch',
    brandName: 'Bottega Veneta',
    resalePrice: '$2,756',
    retailPrice: '$3,200',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Le Cagole.jpeg',
    productName: 'Le Cagole',
    brandName: 'Balenciaga',
    resalePrice: '$2050',
    retailPrice: '$2,300',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Birkin 30 Dalmatian Buffalo.png',
    productName: 'Birkin 30 Dalmatian Buffalo',
    brandName: 'Hermes',
    resalePrice: '$35,000',
    retailPrice: '$12,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Nano Speedy Monogram.png',
    productName: 'Nano Speedy Monogram',
    brandName: 'Louis Vuitton',
    resalePrice: '$1,990',
    retailPrice: '$1,760',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Crystal Lipstick Purse.png',
    productName: 'Crystal Lipstick Purse',
    brandName: 'Judith Leiber',
    resalePrice: '$4,500',
    retailPrice: '$5,495',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Supreme Keepall Bandouliere 45.png',
    productName: 'Supreme Keepall Bandouliere 45',
    brandName: 'Louis Vuitton',
    resalePrice: '$9,045',
    retailPrice: '$3,650',
    coverage: 'Covered',
  },
  {
    image: '../wallet/CC Small Bowler Bag.png',
    productName: 'CC Small Bowler Bag',
    brandName: 'Chanel',
    resalePrice: '$2,300',
    retailPrice: '$800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Alma BB Vernis.png',
    productName: 'Alma BB Vernis',
    brandName: 'Louis Vuitton',
    resalePrice: '$1,100',
    retailPrice: '$1,430',
    coverage: 'Covered',
  },
];

export const WalletPage: React.FC = () => {
  return (
    <div className="bg-grey-100 text-panda-dark">
      <Header />
      <div className="pb-16">
        <WalletHeader
          fullName={WalletHeaderData.fullName}
          avatarImage={WalletHeaderData.avatarImage}
          totalCount={WalletHeaderData.totalCount}
          numVerifiedWalletItems={WalletHeaderData.numVerifiedWalletItems}
          totalValue={WalletHeaderData.totalValue}
        />
        <WalletItems walletItemsData={WalletItemList} />
      </div>
    </div>
  );
};
