import React from 'react';

import { Header } from './components/Header';
import { WalletHeader } from './components/WalletHeader';
import { WalletItems } from './components/WalletItems';

const WalletHeaderData = {
  fullName: 'ZENDAYA',
  avatarImage: '../wallet/avatar/zendaya.jpeg',
  totalCount: 21,
  numVerifiedWalletItems: 21,
  totalValue: '$125K',
};
const WalletItemList = [
  {
    image: '../wallet/Valentino One Stud Mini Lambskin Top Handle Bag.png',
    productName: 'One Stud Mini Lambskin Top Handle Bag',
    brandName: 'Valentino',
    resalePrice: '$2,650',
    retailPrice: '$3,250',
    coverage: 'Covered',
  },
  {
    image: '../wallet/One Stud Tote.jpeg',
    productName: 'One Stud Tote',
    brandName: 'Valentino',
    resalePrice: '$2,150',
    retailPrice: '$2,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Roman Stud 520 Top Handle Bag.png',
    productName: 'Roman Stud 520 Top Handle Bag',
    brandName: 'Valentino',
    resalePrice: '$1,990',
    retailPrice: '$2,690',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Large Roman Stud.png',
    productName: 'Large Roman Stud',
    brandName: 'Valentino',
    resalePrice: '$2,990',
    retailPrice: '$3,990',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Viper RIng.png',
    productName: 'Serpenti Viper RIng',
    brandName: 'Bulgari',
    resalePrice: '$11,900',
    retailPrice: '$15,400',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Viper White Gold Ring.png',
    productName: 'Serpenti Viper White Gold Ring',
    brandName: 'Bulgari',
    resalePrice: '$5,790',
    retailPrice: '$8,450',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Viper 18k Pink Gold Diamond Bracelet.png',
    productName: 'Serpenti Viper 18k Pink Gold Diamond Bracelet',
    brandName: 'Bulgari',
    resalePrice: '$16,250',
    retailPrice: '$28,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Viper 18k Yellow Gold Diamond Bracelet.png',
    productName: 'Serpenti Viper 18k Yellow Gold Diamond Bracelet',
    brandName: 'Bulgari',
    resalePrice: '$16,250',
    retailPrice: '$28,800',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Serpenti Viper 18k White Gold Diamond Bracelet.png',
    productName: 'Serpenti Viper 18k White Gold Diamond Bracelet',
    brandName: 'Bulgari',
    resalePrice: '$21,880',
    retailPrice: '$30,300',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Keepall Bandouliere 50.png',
    productName: 'Keepall Bandouliere 50',
    brandName: 'Louis Vuitton',
    resalePrice: '$1,700',
    retailPrice: '$2,500',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Classic Flap Mini Black.png',
    productName: 'Classic Flap Mini Black',
    brandName: 'Chanel',
    resalePrice: '$5,885',
    retailPrice: '$4,200',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Classic Flap Mini Pink.png',
    productName: 'Classic Flap Mini Pink',
    brandName: 'Chanel',
    resalePrice: '$5,700',
    retailPrice: '$4,200',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Jean Striped Clutch.png',
    productName: 'Jean Striped Clutch',
    brandName: 'Edie Parker',
    resalePrice: '$212',
    retailPrice: '$1,190',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Jungle Croc-Embossed Circle Bag.png',
    productName: 'Jungle Croc-Embossed Circle Bag',
    brandName: 'Vivienne Westwood',
    resalePrice: '$286',
    retailPrice: '$420',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Classic Flap Jumbo Lambskin.png',
    productName: 'Classic Flap Jumbo Lambskin',
    brandName: 'Chanel',
    resalePrice: '$7,700',
    retailPrice: '$9,500',
    coverage: 'Covered',
  },
  {
    image: '../wallet/One Stud Clutch.png',
    productName: 'One Stud Clutch',
    brandName: 'Valentino',
    resalePrice: '$1,075',
    retailPrice: '$1,690',
    coverage: 'Covered',
  },
  {
    image: '../wallet/VLOGO Flap Chain Shoulder.png',
    productName: 'VLOGO Flap Chain Shoulder',
    brandName: 'Valentino',
    resalePrice: '$1,850',
    retailPrice: '$2,600',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Large Roman Stud Black.png',
    productName: 'Large Roman Stud',
    brandName: 'Valentino',
    resalePrice: '$2,135',
    retailPrice: '$3,650',
    coverage: 'Covered',
  },
  {
    image: '../wallet/B.Zero1 18k Pink Gold Pendant.png',
    productName: 'B.Zero1 18k Pink Gold Pendant',
    brandName: 'Bulgari',
    resalePrice: '$2,695',
    retailPrice: '$3,950',
    coverage: 'Covered',
  },
  {
    image: '../wallet/B.Zero1 Bracelet Yellow Gold.png',
    productName: 'B.Zero1 Bracelet Yellow Gold',
    brandName: 'Bulgari',
    resalePrice: '$12,300',
    retailPrice: '$18,900',
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
