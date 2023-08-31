import Link from 'next/link';
import React from 'react';
import { Modal, DockedButton, AppButton } from '@/components/v2';

export const TakeMeBackModal: React.FC<{
  active: boolean;
  children: React.ReactNode;
  redirectPath: string;
}> = ({ active, children, redirectPath }) => {
  return (
    <Modal.Base $show={active}>
      <Modal.Header>Hmm...</Modal.Header>
      <Modal.Content className="p-5 text-center">{children}</Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <Link href={redirectPath} passHref>
            <AppButton $block>Take me back</AppButton>
          </Link>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
