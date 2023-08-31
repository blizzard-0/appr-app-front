import React, { memo, useCallback, useState } from 'react';
import { useIngestGmailInboxMailIds_Mutation } from '../../../generated/graphql';
import { useKeyPress } from '../../../hooks/useKeyPress';
import { useRouter } from 'next/router';
import { routes } from '../../../modules/routes';
import { useWalletModalContext } from '../context/modal';
import { useCurrentUser } from '@/modules/auth/hooks';
import { DockedButton, AppButton, Modal } from '@/components/v2';

const GmailSyncModal: React.FC = () => {
  const { showGmailSyncModal, setShowGmailSyncModal } = useWalletModalContext();
  const [showDoneButton, setShowDoneButton] = useState(false);
  const { currentUser } = useCurrentUser();
  const router = useRouter();
  const [ingest] = useIngestGmailInboxMailIds_Mutation();

  const onClose = useCallback(() => {
    setShowGmailSyncModal(false);
    setShowDoneButton(false);
    router.push(routes.appFrontend.myWallet.fillPath(null));
  }, [setShowGmailSyncModal]);

  const handleGmailInboxSync = async () => {
    const { data, errors } = await ingest();
    if (
      data?.ingestGmailInboxMailIds.__typename ===
      'IngestGmailInboxMailIdsMutationSuccess'
    ) {
      setShowDoneButton(true);
    } else {
      setShowGmailSyncModal(false);
    }
  };
  useKeyPress('Escape', onClose);

  if (!currentUser) return null;
  return (
    <>
      <Modal.Base $show={showGmailSyncModal} onClose={onClose}>
        <Modal.Header>Success!</Modal.Header>
        <hr />
        <Modal.Content className="p-5">
          <p className="text-base leading-6 text-center text-gray-800">
            Your Gmail inbox successfully connected to{' '}
            {currentUser.primaryEmailAddress}{' '}
          </p>
          <p className="text-base leading-6 text-center text-gray-800 py-3">
            We’ll automatically filter for any supported receipts and
            automatically add and verify items to your wallet.
          </p>
        </Modal.Content>

        {!showDoneButton && (
          <Modal.Footer>
            <DockedButton>
              <AppButton onClick={handleGmailInboxSync}>Sync</AppButton>
              <AppButton $variant="secondary" onClick={onClose}>
                Not now
              </AppButton>
            </DockedButton>
          </Modal.Footer>
        )}
        {showDoneButton && (
          <DockedButton>
            <AppButton onClick={onClose}>Done</AppButton>
          </DockedButton>
        )}
      </Modal.Base>
    </>
  );
};

export default memo(GmailSyncModal);
