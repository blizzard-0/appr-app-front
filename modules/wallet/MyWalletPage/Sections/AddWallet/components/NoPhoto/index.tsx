import React, { useState } from 'react';
import { ProductSearch } from '../../../WalletPage/components';
import { useMyWalletPageContext } from '../../../../../context';
import { useWalletUploadContextProvider } from '../../../../../context/upload';
import { AppButton } from '@/components/v2';

export const NoPhoto: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const { handleAddWalletItemWithoutPhoto } = useWalletUploadContextProvider();
  const { setAppState } = useMyWalletPageContext();

  const handleUpload = async () => {
    try {
      handleAddWalletItemWithoutPhoto(brand, product);
      setAppState('MyWalletPage');
    } catch {
    } finally {
    }
  };

  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-350-px mx-auto mt-8 font-maison-neue-book text-left">
      <div className="mt-6 mb-8">
        <h2 className="font-maison-neue-demi text-32-px leading-42-px mb-2">
          You can add an item to your wallet without a photo or receipt.
        </h2>
        <p className="text-base leading-snug mb-5 text-gray-800">
          Your item will be added to your wallet as unverified. To verify
          ownership, upload a picture and a receipt for your item.
        </p>
      </div>
      <div className="mb-9">
        <ProductSearch
          initialValues={{ brandLabel: brand, productLabel: product }}
          onComplete={({ brandLabel, productLabel }) => {
            setBrand(brandLabel);
            setProduct(productLabel);
          }}
        />
      </div>
      <div className="w-full">
        <AppButton disabled={!brand || !product} onClick={handleUpload} $block>
          Upload
        </AppButton>
      </div>
    </div>
  );
};
