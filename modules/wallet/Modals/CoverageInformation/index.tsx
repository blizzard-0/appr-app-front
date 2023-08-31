import React, { useCallback } from 'react';

import { Modal, DockedButton, AppButton } from '@/components/v2';
import { useWalletModalContext } from '../../context/modal';
import Link from 'next/link';

export const CoverageInformation: React.FC = () => {
  const { coverageInformation: active, setCoverageInformation } =
    useWalletModalContext();

  const onClose = useCallback(() => {
    setCoverageInformation(false);
  }, [setCoverageInformation]);

  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header>Coverage requested</Modal.Header>
      <Modal.Content className="py-8 px-6 text-center grid grid-cols-1 gap-3 tracking-0.02em">
        <p>
          Our coverage team will reach out to you with a quote and policy
          details via email. To learn more about our luxury coverage plans,
          visit our{' '}
          <Link href="https://appreciate.it/faq" passHref>
            <a className="cursor-pointer text-base leading-snug text-indigo">
              FAQ
            </a>
          </Link>{' '}
          page.
        </p>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block $variant="secondary" onClick={onClose}>
            Close
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
