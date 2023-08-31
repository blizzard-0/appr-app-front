import React from 'react';
import { Modal, AppButton, DockedButton } from '@/components/v2';

interface DeleteUserConfirmModalProps {
  active: boolean;
  onClose: () => void;
  onProceed: () => void;
}

export const DeleteUserConfirmModal: React.FC<DeleteUserConfirmModalProps> = ({
  active,
  onClose,
  onProceed,
}) => {
  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header>Delete your account?</Modal.Header>
      <Modal.Content className="p-5 text-center">
        <p className="mb-5">
          Are you sure you want to do this? Deleting your account will
          automatically remove all items currently in your wallet.
        </p>
        <p className="font-maison-neue-demi">This is permanent and final.</p>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={onProceed}>
            Continue
          </AppButton>
          <AppButton $block $variant="secondary" onClick={onClose}>
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
