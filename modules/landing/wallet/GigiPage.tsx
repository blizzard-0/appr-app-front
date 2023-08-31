import React from 'react';

import { Header } from './components/Header';
import { WalletHeader } from './components/WalletHeader';
import { WalletItems } from './components/WalletItems';

const WalletHeaderData = {
  fullName: 'Gigi Hadid',
  avatarImage: '../wallet/avatar/gigi.png',
  totalCount: 20,
  numVerifiedWalletItems: 20,
  totalValue: '$56K',
};
const WalletItemList = [
  {
    image: '../wallet/Sunny Yellow Triangle.jpg',
    productName: 'Sunny Yellow Triangle',
    brandName: 'Prada',
    resalePrice: '$1,945',
    retailPrice: '$2,500',
    coverage: 'Covered',
  },
  {
    image: '../wallet/DK88 Bag Top Handle.jpg',
    productName: 'DK88 Bag Top Handle',
    brandName: 'Burberry',
    resalePrice: '$720',
    retailPrice: '$2,495',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Top Handle 2 Mini - Natural Ring Lizard.png',
    productName: 'Top Handle 2.0 Mini - Natural Ring Lizard',
    brandName: 'Stalvey',
    resalePrice: '$4,100',
    retailPrice: '$5,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Multi Pochette Accessoires.png',
    productName: 'Multi Pochette Accessoires',
    brandName: 'Louis Vuitton',
    resalePrice: '$2,100',
    retailPrice: '$2,570',
    coverage: 'Covered',
  },
  {
    image: '../wallet/255 Reissue Flap Bag.jpg',
    productName: '2.55 Reissue Flap Bag',
    brandName: 'Chanel',
    resalePrice: '$6,995',
    retailPrice: '$8,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Small Tassel Bucket Bag.png',
    productName: 'Small Tassel Bucket Bag',
    brandName: 'Tom Ford',
    resalePrice: '$750',
    retailPrice: '$1,990',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Jitney 28 Meteo Shower Top Handle Bag.jpg',
    productName: 'Jitney 2.8 Meteo Shower Top Handle Bag',
    brandName: 'Off-White',
    resalePrice: '$950',
    retailPrice: '$1,495',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Oversized Bicolor Jacquard 1945 Heritage Clutch.png',
    productName: 'Oversized Bicolor Jacquard 1945 Heritage Clutch',
    brandName: 'Balmain',
    resalePrice: '$2,450',
    retailPrice: '$3,950',
    coverage: 'Covered',
  },
  {
    image: '../wallet/La Medusa Bag.jpg',
    productName: 'La Medusa Bag',
    brandName: 'Versace',
    resalePrice: '$2,175',
    retailPrice: '$2,825',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Blue Monogram Cloud Soft Trunk.jpg',
    productName: 'Blue Monogram Cloud Soft Trunk',
    brandName: 'Louis Vuitton',
    resalePrice: '$3,575',
    retailPrice: '$2,430',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Paulas Ibiza Elephant Pocket.png',
    productName: "Paula's Ibiza Elephant Pocket",
    brandName: 'Loewe',
    resalePrice: '$715',
    retailPrice: '$790',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Forever Chain Wallet.png',
    productName: 'Serpenti Forever Chain Wallet',
    brandName: 'Bulgari',
    resalePrice: '$1,175',
    retailPrice: '$2,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/VLTN Rockstud Spike It bag.jpg',
    productName: 'VLTN Rockstud Spike It bag',
    brandName: 'Valentino',
    resalePrice: '$1,850',
    retailPrice: '$2,995',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Barcode Boy Brick Lego Clutch.jpg',
    productName: 'Barcode Boy Brick Lego Clutch',
    brandName: 'Chanel',
    resalePrice: '$13,928',
    retailPrice: '$3,600',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Lace Up DotCom Satchel Caipiorska Bubblegum.jpg',
    productName: 'Lace Up DotCom Satchel Caipiorska Bubblegum',
    brandName: 'Fendi',
    resalePrice: '$995',
    retailPrice: '$3,500',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Envelope Medium Chain Matelasse.png',
    productName: 'Envelope Medium Chain Matelasse',
    brandName: 'Saint Laurent',
    resalePrice: '$2,175',
    retailPrice: '$2,590',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Le Bambino Bag.jpeg',
    productName: 'Le Bambino Bag',
    brandName: 'Jacquemus',
    resalePrice: '$375',
    retailPrice: '$625',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Soapy Chain Necklace.png',
    productName: 'Soapy Chain Necklace',
    brandName: 'Louis Vuitton',
    resalePrice: '$4,503',
    retailPrice: '$4,550',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Le Cloussin Bag.png',
    productName: 'Le Coussin Bag',
    brandName: 'Louis Vuitton',
    resalePrice: '$4,395',
    retailPrice: '$4,700',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Galleria Saffiano Leater Medium Bag.png',
    productName: 'Galleria Saffiano Leater Medium Bag',
    brandName: 'Prada',
    resalePrice: '$900',
    retailPrice: '$2,490',
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
