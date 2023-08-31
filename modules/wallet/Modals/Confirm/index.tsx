import React from 'react';
import { Modal, DockedButton, AppButton } from '@/components/v2';

type CTAProps = 'Continue' | 'Delete' | 'Remove';
interface ModalProps {
  active: boolean;
  loading: boolean;
  title: string;
  text?: string;
  onClose: () => void;
  onProceed: () => void;
  cta?: CTAProps;
}

export const ConfirmModal: React.FC<ModalProps> = ({
  active,
  onClose,
  title,
  text,
  onProceed,
  loading,
  cta = 'Continue',
}) => {
  return (
    <Modal.Base $show={active} onClose={onClose} $popup>
      <Modal.Header id="Confirm Modal">{title}</Modal.Header>
      {text && (
        <>
          <Modal.Content className="p-5 text-center">{text}</Modal.Content>
        </>
      )}
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={onProceed} $loading={loading}>
            {cta}
          </AppButton>
          <AppButton $variant="secondary" $block onClick={onClose}>
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
