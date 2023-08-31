import { useState } from 'react';
import { EMPTY_PLACEHOLDER_URL } from '../../../../consts/consts';
import { useAddWalletItemWithImageUrl_Mutation } from '../../../../generated/graphql';
import { useMyWalletPage } from '..';
import { useMyWalletPageContext } from '../../context';

export const useAddWalletWithoutPhoto = () => {
  const [uploading, setUploading] = useState(false);
  const [addWalletItemWithImageUrl] = useAddWalletItemWithImageUrl_Mutation();
  const { refetch } = useMyWalletPage();
  const {
    startBackgroundProgress,
    updateBackgroundProgress,
    clearBackgroundProgress,
  } = useMyWalletPageContext();

  const handleAddWalletItemWithoutPhoto = async (
    brand: string,
    product: string,
  ) => {
    try {
      setUploading(true);
      startBackgroundProgress('Wallet is being uploaded.');
      await addWalletItemWithImageUrl({
        variables: {
          input: {
            imageUrl: EMPTY_PLACEHOLDER_URL,
            unidentifiedBrandName: brand,
            unidentifiedProductName: product,
          },
        },
      });
      updateBackgroundProgress(90);
      await refetch();
      updateBackgroundProgress(100);
    } finally {
      clearBackgroundProgress();
      setUploading(false);
    }
  };

  return {
    handleAddWalletItemWithoutPhoto,
    uploading,
  };
};
