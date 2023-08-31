import { useAddWalletFromExplore } from '../../../explore/hooks/useAddWalletFromExplore';
import { useMyWalletPageContext } from '../../context';
import { useEffect, useRef } from 'react';
import { useToastContext } from '@/modules/toast';

export function useDraftWalletItem() {
  const { handleAddWalletItem } = useAddWalletFromExplore();
  const { currentUser } = useMyWalletPageContext();
  const { pushSuccess, pushError } = useToastContext();
  const inited = useRef(false);

  const LOCAL_STORAGE_DRAFT_ITEM_KEY = 'draftWalletItem';

  useEffect(() => {
    if (!currentUser) return;

    const draftWalletItem = localStorage.getItem(LOCAL_STORAGE_DRAFT_ITEM_KEY);
    if (!draftWalletItem) return;

    const walletItem = JSON.parse(draftWalletItem);
    if (!walletItem.link || !walletItem.title) return;

    const pricingKey = walletItem.item_id;
    const user = currentUser.defaultWallet;
    const alreadyInWallet = !!user.items.paginated.find((item) => {
      if (item.pricingKey === pricingKey) {
        return true;
      }
      return false;
    });
    if (inited.current) {
      return;
    }
    inited.current = true;
    if (alreadyInWallet) {
      pushError(`You've already added that item in your wallet.`);
      localStorage.removeItem(LOCAL_STORAGE_DRAFT_ITEM_KEY);
      return;
    }
    handleAddWalletItem(walletItem)
      .then(() => {
        pushSuccess('Item successfully added to your wallet.');
        localStorage.removeItem(LOCAL_STORAGE_DRAFT_ITEM_KEY);
      })
      .catch((e) => {
        pushError(e);
      });
  }, [handleAddWalletItem, currentUser, pushError, pushSuccess]);
}
