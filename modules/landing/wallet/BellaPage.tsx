import React from 'react';

import { Header } from './components/Header';
import { WalletHeader } from './components/WalletHeader';
import { WalletItems } from './components/WalletItems';

const WalletHeaderData = {
  fullName: 'Bella Hadid',
  avatarImage: '../wallet/avatar/Bella.jpeg',
  totalCount: 21,
  numVerifiedWalletItems: 21,
  totalValue: '$212K',
};
const WalletItemList = [
  {
    image: '../wallet/Metallic Silver Chèvre Birkin 25.png',
    productName: 'Metallic Silver Chèvre Birkin 25',
    brandName: 'Hermes',
    resalePrice: '$135,000',
    retailPrice: '$11,200',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Large Book Tote Blue Dior Oblique.png',
    productName: 'Large Book Tote Blue Dior Oblique',
    brandName: 'Christian Dior',
    resalePrice: '$3,035',
    retailPrice: '$3,500',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Eyes Backpack.png',
    productName: 'Eyes Backpack',
    brandName: 'Anya Hindmarch',
    resalePrice: '$350',
    retailPrice: '$595',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Diorama Metallic Bag.png',
    productName: 'Diorama Metallic Bag',
    brandName: 'Christian Dior',
    resalePrice: '$2,092',
    retailPrice: '$3,300',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Sac De Jour Nano Bag.png',
    productName: 'Sac De Jour Nano Bag',
    brandName: 'Saint Laurent',
    resalePrice: '$1,345',
    retailPrice: '$2,250',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Nigo Keepall Bandouliere 50.png',
    productName: 'Nigo Keepall Bandouliere 50',
    brandName: 'Louis Vuitton',
    resalePrice: '$3,850',
    retailPrice: '$3,000',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Panthere de Cartier Watch.png',
    productName: 'Panthere de Cartier Watch',
    brandName: 'Cartier',
    resalePrice: '$19,995',
    retailPrice: '$29,900',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Supreme Multiwheel 45L.png',
    productName: 'Supreme Multiwheel 45L',
    brandName: 'Rimowa',
    resalePrice: '$3,888',
    retailPrice: '$1,600',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Le Cagole Washed Denim.jpeg',
    productName: 'Le Cagole Washed Denim',
    brandName: 'Balenciaga',
    resalePrice: '$2,050',
    retailPrice: '$2,600',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Lindsay Medium Shoulder Bag.png',
    productName: 'Lindsay Medium Shoulder Bag',
    brandName: 'Balenciaga',
    resalePrice: '$1,557',
    retailPrice: '$2,050',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Enchanted Allover Beaded Pochette.png',
    productName: 'Enchanted Allover Beaded Pochette',
    brandName: 'Judith Leiber',
    resalePrice: '$2,427',
    retailPrice: '$3,495',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Teddy Jacket in Lana.png',
    productName: 'Teddy Jacket in Lana',
    brandName: 'Saint Laurent',
    resalePrice: '$1,543',
    retailPrice: '$2,690',
    coverage: 'Covered',
  },
  {
    image: '../wallet/BB 2.0 Necklace.png',
    productName: 'BB 2.0 Necklace',
    brandName: 'Balenciaga',
    resalePrice: '$1,875',
    retailPrice: '$2,150',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Brenda Black Boots.png',
    productName: 'Brenda Black Boots',
    brandName: 'Miista',
    resalePrice: '$329',
    retailPrice: '$530',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Small TB Bambi Bag.png',
    productName: 'Small TB Bambi Bag',
    brandName: 'Burberry',
    resalePrice: '$1,295',
    retailPrice: '$2,450',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Xx Small Flap Croc-embossed.png',
    productName: 'Xx Small Flap Croc-embossed',
    brandName: 'Balenciaga',
    resalePrice: '$1,476',
    retailPrice: '$1,790',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Commes Des Garcones Homme Plus Foam Posite Sneakers.png',
    productName: 'Commes Des Garcones Homme Plus Foam Posite Sneakers',
    brandName: 'Nike',
    resalePrice: '$575',
    retailPrice: '$520',
    coverage: 'Covered',
  },
  {
    image: '../wallet/18k White Gold Diamond Floral Earrings.png',
    productName: '18k White Gold Diamond Floral Earrings',
    brandName: 'Chopard',
    resalePrice: '$14,300',
    retailPrice: '$17,700',
    coverage: 'Covered',
  },
  {
    image: '../wallet/18k White Gold Five Line Diamond Ring.png',
    productName: '18k White Gold Five Line Diamond Ring',
    brandName: 'De Beers Jewellers',
    resalePrice: '$12,850',
    retailPrice: '$15,900',
    coverage: 'Covered',
  },
  {
    image: '../wallet/Heiress Pouch Rhinestone Mesh.png',
    productName: 'Heiress Pouch Rhinestone Mesh',
    brandName: 'Alexander Wang',
    resalePrice: '$450',
    retailPrice: '$695',
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
