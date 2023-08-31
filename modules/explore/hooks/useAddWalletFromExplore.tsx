import { useState } from 'react';
import { GoogleSearchProduct } from '../../../pages/api/image';
import { useAddWalletItemWithImageUrl_Mutation } from '../../../generated/graphql';
import { useMyWalletPage } from '../../wallet/hooks';

export const useAddWalletFromExplore = () => {
  const [uploading, setUploading] = useState(false);
  const [addWalletItemWithImageUrl] = useAddWalletItemWithImageUrl_Mutation();
  const { refetch } = useMyWalletPage();

  const handleAddWalletItem = async (product: GoogleSearchProduct) => {
    setUploading(true);
    try {
      await addWalletItemWithImageUrl({
        variables: {
          input: {
            imageUrl: product.link,
            unidentifiedBrandName: product.brand_name,
            unidentifiedProductName: product.title,
            pricingKey: product.item_id,
          },
        },
      });
      await refetch();
      setUploading(false);
    } catch {
      return Promise.reject('Failed getting the product image.');
    }
  };

  return {
    handleAddWalletItem,
    uploading,
  };
};
