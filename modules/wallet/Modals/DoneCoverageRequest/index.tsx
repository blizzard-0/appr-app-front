import React, { useCallback } from 'react';

import { Modal, DockedButton, AppButton } from '@/components/v2';

import { useWalletModalContext } from '../../context/modal';
import { WalletItemProtectionStateEnumType } from '@/generated/graphql';

export const DoneCoverageRequest: React.FC = () => {
  const {
    showRequestDoneModal: active,
    setShowRequestDoneModal,
    setWalletItem,
    walletItem,
    setViewDetail,
  } = useWalletModalContext();

  const onClose = useCallback(() => {
    setShowRequestDoneModal(false);
    if (!walletItem) return;
    setWalletItem({
      ...walletItem,
      protectionState: WalletItemProtectionStateEnumType.Requested,
    });
    setViewDetail(true);
  }, [setShowRequestDoneModal, setViewDetail, setWalletItem, walletItem]);

  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header>Thank you</Modal.Header>
      <Modal.Content className="py-8 px-6 text-center grid grid-cols-1 gap-3 tracking-0.02em">
        <p>
          Your coverage request has been submitted and shared with our insurance
          partner, WAX. You will receive a personalized policy and quote via
          email.
        </p>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={onClose}>
            Done
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
