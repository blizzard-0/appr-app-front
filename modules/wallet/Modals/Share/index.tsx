import React, { useState } from 'react';
import { Modal, DockedButton, AppButton } from '@/components/v2';
import { Radio, Option } from '@/components/v2/Radio';
import { WalletItemVisibilityEnumType } from '../../../../generated/graphql';

const SHARE_OPTIONS: Option[] = [
  {
    label: 'Make Private (Only seen by me)',
    value: WalletItemVisibilityEnumType.Private,
  },
  {
    label: 'Make Public (Seen by members) ',
    value: WalletItemVisibilityEnumType.Public,
  },
];

interface ModalProps {
  active: boolean;
  loading: boolean;
  title: string;
  onClose: () => void;
  onProceed: (visibility: WalletItemVisibilityEnumType) => void;
}

export const ShareModal: React.FC<ModalProps> = ({
  active,
  onClose,
  title,
  onProceed,
  loading,
}) => {
  const [option, setOption] = useState(
    WalletItemVisibilityEnumType.Private as string,
  );
  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content className="p-5 text-left">
        <Radio items={SHARE_OPTIONS} selected={option} onChange={setOption} />
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton
            onClick={() => onProceed(option as WalletItemVisibilityEnumType)}
            $loading={loading}
            $block
          >
            Submit
          </AppButton>
          <AppButton $variant="secondary" onClick={onClose} $block>
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
