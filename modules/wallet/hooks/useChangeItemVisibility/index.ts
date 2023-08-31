import { Option } from '@/components/v2/Listbox';
import {
  WalletItemVisibilityEnumType,
  useUpdateWalletItemsVisibilityMutation,
} from '../../../../generated/graphql';

export const SHARING_OPTIONS: Option<WalletItemVisibilityEnumType>[] = [
  {
    label: 'Public (Seen By Everyone)',
    value: WalletItemVisibilityEnumType.Public,
  },
  {
    label: 'Private (Seen Only By Me)',
    value: WalletItemVisibilityEnumType.Private,
  },
];

export const useChangeItemVisibility = () => {
  const [updateWalletItemsVisibilityMutation] =
    useUpdateWalletItemsVisibilityMutation();

  const changeItemVisibility = async (
    visibility: WalletItemVisibilityEnumType,
    itemId: string,
  ) => {
    try {
      const result = await updateWalletItemsVisibilityMutation({
        variables: {
          input: {
            items: [itemId],
            visibility,
          },
        },
      });

      if (
        result.data?.setWalletItemsVisibility?.__typename ===
        'SetWalletItemsVisibilityMutationSuccess'
      ) {
        const message = `You've successfully update a wallet item`;
        return message;
      } else {
        throw new Error('Something went wrong, please try again later.');
      }
    } catch {
      throw new Error('Something went wrong, please try again later.');
    }
  };

  return {
    changeItemVisibility,
  };
};
