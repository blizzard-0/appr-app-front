import React, { useCallback } from 'react';

import { ConfirmModal } from '@/modules/wallet/Modals';

import { useWalletModalContext } from '../../context/modal';
import { useDeleteWalletItems } from '../../hooks';

export const DeleteItemModal: React.FC = () => {
  const {
    walletItem,
    confirmDeleteOpened,
    setConfirmDeleteOpened,
    setWalletItem,
    setViewDetail,
  } = useWalletModalContext();

  const { deleteWalletItems, loading } = useDeleteWalletItems();

  const handleConfirmDelete = useCallback(async () => {
    if (!walletItem) return;
    const itemsToDelete = [walletItem];
    const result = await deleteWalletItems(itemsToDelete);
    if (result) {
      setConfirmDeleteOpened(false);
      setTimeout(() => {
        setViewDetail(false);
        setWalletItem(null);
      }, 250);
    }
  }, [
    walletItem,
    deleteWalletItems,
    setConfirmDeleteOpened,
    setWalletItem,
    setViewDetail,
  ]);

  return (
    <ConfirmModal
      active={confirmDeleteOpened}
      title={'Remove item?'}
      text={'This item will be removed from your wallet permanently.'}
      onClose={() => setConfirmDeleteOpened(false)}
      onProceed={handleConfirmDelete}
      loading={loading}
      cta="Remove"
    />
  );
};
