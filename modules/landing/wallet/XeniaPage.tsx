import React from 'react';

import { Header } from './components/Header';
import { WalletHeader } from './components/WalletHeader';
import { WalletItems } from './components/WalletItems';

const WalletHeaderData = {
  fullName: 'Xenia Adonts',
  avatarImage: '../wallet/avatar/Xenia.jpeg',
  totalCount: 20,
  numVerifiedWalletItems: 20,
  totalValue: '$162K',
};

const WalletItemList = [
  {
    image: '../wallet/Horizon 55 Monogram.png',
    productName: 'Horizon 55 Monogram',
    brandName: 'Louis Vuitton',
    resalePrice: '$3,050',
    retailPrice: '$3,400',
    coverage: 'Covered',
  },
  {
    image: '../wallet/OnTheGo GM By the Pool.png',
    productName: 'OnTheGo GM By the Pool',
    brandName: 'Louis Vuitton',
    resalePrice: '$2,970',
    retailPrice: '$3,400',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Cannes.png',
    productName: 'Cannes',
    brandName: 'Louis Vuitton',
    resalePrice: '$3,320',
    retailPrice: '$3,750',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Baguette Denim.png',
    productName: 'Baguette Denim',
    brandName: 'Louis Vuitton',
    resalePrice: '$3,600',
    retailPrice: '$2,400',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Coco Handle.png',
    productName: 'Coco Handle',
    brandName: 'Chanel',
    resalePrice: '$5,800',
    retailPrice: '$3,900',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Saddle Ultramatte.png',
    productName: 'Saddle Ultramatte',
    brandName: 'Christian Dior',
    resalePrice: '$3,300',
    retailPrice: '$3,950',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Birkin 35.png',
    productName: 'Birkin 35',
    brandName: 'Hermes',
    resalePrice: '$18,800',
    retailPrice: '$10,100',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Kelly 20 MIni Sellier II.png',
    productName: 'Kelly 20 MIni Sellier II',
    brandName: 'Hermes',
    resalePrice: '$33,700',
    retailPrice: '$8,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Crochet 19.png',
    productName: 'Crochet 19',
    brandName: 'Chanel',
    resalePrice: '$4,700',
    retailPrice: '$6,700',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Le Cagole.jpeg',
    productName: 'Le Cagole',
    brandName: 'Balenciaga',
    resalePrice: '$2,050',
    retailPrice: '$2,300',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Palm Spring Mini.png',
    productName: 'Palm Spring Mini',
    brandName: 'Louis Vuitton',
    resalePrice: '$2,050',
    retailPrice: '$2,440',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Wallet on Strap Bubblegram.png',
    productName: 'Wallet on Strap Bubblegram',
    brandName: 'Louis Vuitton',
    resalePrice: '$2,295',
    retailPrice: '$2,570',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Kelly 20 Mini II Sellier.png',
    productName: 'Kelly 20 Mini II Sellier',
    brandName: 'Hermès',
    resalePrice: '$32,500',
    retailPrice: '$8,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Flask Holder Monogram Velvet.png',
    productName: 'Flask Holder Monogram Velvet',
    brandName: 'Louis Vuitton',
    resalePrice: '$1,950',
    retailPrice: '$2,170',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Blondie Shoulder Bag.png',
    productName: 'Blondie Bag',
    brandName: 'Gucci',
    resalePrice: '$2,400',
    retailPrice: '$3,600',
    coverage: 'Covered',
  },

  {
    image: '../wallet/Mini Pochette Accessoires Empriente.png',
    productName: 'Mini Pochette Accessoires Empriente',
    brandName: 'Louis Vuitton',
    resalePrice: '$790',
    retailPrice: '$880',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Coussin PM.png',
    productName: 'Coussin PM',
    brandName: 'Louis Vuitton',
    resalePrice: '$4,395',
    retailPrice: '$4,700',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Aqua Cleo Satin with Crystals.png',
    productName: 'Aqua Cleo Satin with Crystals',
    brandName: 'Prada',
    resalePrice: '$3,850',
    retailPrice: '$3,700',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Seduttori Watch.png',
    productName: 'Serpenti Seduttori Watch',
    brandName: 'Bulgari',
    resalePrice: '$23,650',
    retailPrice: '$33,100',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Epi Twist MM.png',
    productName: 'Epi Twist MM',
    brandName: 'Louis Vuitton',
    resalePrice: '$4,760',
    retailPrice: '$5,000',
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
