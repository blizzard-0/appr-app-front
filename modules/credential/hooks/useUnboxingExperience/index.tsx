import { useMemo } from 'react';
import { useUnboxingExperienceForReceipt_Query } from '@/generated/graphql';

export type IdentifiedUnboxingItem = {
  brandName: string;
  productName: string;
  resalePrice: number;
  imageUrl: string;
};

export const useUnboxingExperience = (receiptId: string) => {
  const { data, loading } = useUnboxingExperienceForReceipt_Query({
    variables: { receiptId },
  });

  const identifiedWalletItems = useMemo<IdentifiedUnboxingItem[]>(() => {
    try {
      if (
        data?.unboxingExperienceForReceipt.__typename !==
        'UnboxingExperienceForReceiptQuerySuccess'
      ) {
        return [];
      }
      const { items } = data.unboxingExperienceForReceipt;
      const identifiedItems: IdentifiedUnboxingItem[] = [];
      items.forEach((item) => {
        if (item.__typename === 'UnidentifiedWalletItem') return;
        else {
          identifiedItems.push({
            brandName: item.product.brand.name,
            productName: item.product.name,
            resalePrice: item.product.currentResalePrice.amount,
            imageUrl: item.image.url,
          });
        }
      });
      return identifiedItems;
    } catch {
      return [];
    }
  }, [data]);

  return {
    identifiedWalletItems,
    loading,
  };
};
