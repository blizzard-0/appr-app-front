import { useDeleteWalletItems_Mutation } from '@/generated/graphql';
import { useToastContext } from '@/modules/toast';

import { deleteItemsCacheUpdate } from '@/modules/wallet/MyWalletPage/utils/cache';
import { WalletItem } from '../../context/types';
import { handleTrack } from '../../MyWalletPage/handleTrack';

export const useDeleteWalletItems = () => {
  const [deleteItems, { loading }] = useDeleteWalletItems_Mutation();
  const { pushError, pushSuccess } = useToastContext();

  const deleteWalletItems = async (items: WalletItem[]) => {
    try {
      const { data, errors } = await deleteItems({
        variables: {
          items: items.map(({ id }) => ({ walletItemId: id })),
        },
        update(cache, { data }) {
          deleteItemsCacheUpdate(cache, data, items);
        },
      });
      if (!data || errors) {
        throw new Error('SomethingWentWrong');
      }
      if (
        data.deleteWalletItems.__typename === 'DeleteWalletItemsMutationSuccess'
      ) {
        handleTrack.removeWalletItems({
          numRemoved: items.length,
        });
        pushSuccess(`You've successfully deleted a wallet item`);
        return true;
      }
      throw new Error('SomethingWentWrong');
    } catch {
      pushError('An error occurred while performing the requested action!');
      return false;
    }
  };

  return { deleteWalletItems, loading };
};
