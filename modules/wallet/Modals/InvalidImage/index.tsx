import React from 'react';

import { Modal, AppButton, DockedButton } from '@/components/v2';

interface ModalProps {
  active: boolean;
  fileName: string;
  onClose: () => void;
}

export const InvalidImageModal: React.FC<ModalProps> = ({
  active,
  fileName,
  onClose,
}) => {
  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header>Invalid image upload!</Modal.Header>
      <Modal.Content className="text-center p-5">
        Uploaded image <span className="underline">&quot;{fileName}&quot;</span>{' '}
        should be at least 500x500, and one of the following types: JPEG,PNG or
        GIF
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={onClose}>
            Close
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
