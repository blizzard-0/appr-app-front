import React, { useCallback } from 'react';

import { Modal, DockedButton, AppButton } from '@/components/v2';
import { useWalletModalContext } from '../../context/modal';
import { useMyWalletPageContext } from '../../context';

export const ProtectionModal: React.FC = () => {
  const { requestProtection: active, setRequestProtection } =
    useWalletModalContext();
  const { setAppState } = useMyWalletPageContext();

  const onClose = useCallback(() => {
    setRequestProtection(false);
  }, [setRequestProtection]);

  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header>Request coverage</Modal.Header>
      <Modal.Content className="py-8 px-6 text-center grid grid-cols-1 gap-3 tracking-0.02em">
        <p>
          Our luxury coverage plan protects against damage, loss, and theft.
          Coverage is available for all brands and incident reports are
          completed within 30 days.
        </p>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton
            $block
            $variant="primary"
            onClick={() => setAppState('RequestCoverage')}
          >
            Request
          </AppButton>
          <AppButton $block $variant="secondary" onClick={onClose}>
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
