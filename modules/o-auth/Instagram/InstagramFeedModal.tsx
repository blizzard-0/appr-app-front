/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image';
import { InstagramMedia, InstagramModalContainerProps } from '.';
import { CheckedIcon } from '../../../components/Icons';
import { Modal } from '@/components/v2/Modal';
import { AppButton, DockedButton } from '@/components/v2';

interface ModalProps extends InstagramModalContainerProps {
  medias: InstagramMedia[];
  title?: string;
  showLoadMore: boolean;
  onLoadMore: () => void;
}

export const InstagramFeedModal: React.FC<ModalProps> = ({
  active,
  onClose,
  title = 'Import from Instagram',
  onProceed,
  medias,
  showLoadMore,
  onLoadMore,
}) => {
  const [selected, setSelected] = useState<InstagramMedia>();
  const handleClose = () => {
    onClose();
    setSelected(undefined);
  };
  return (
    <Modal.Base $show={active} onClose={onClose}>
      <>
        <Modal.Header>{title}</Modal.Header>
        <hr />
        <Modal.Content className="p-5">
          <div className="grid grid-cols-3 xs:grid-cols-4 gap-1 overflow-y-auto max-h-96">
            {medias &&
              medias.map((media) => (
                <div className="relative" key={media.id}>
                  <Image
                    src={media.media_url}
                    alt={media.caption || ''}
                    onClick={() => setSelected(media)}
                    width={80}
                    height={80}
                  />
                  {media.id === selected?.id ? (
                    <div className="absolute bottom-3 right-2">
                      <CheckedIcon />
                    </div>
                  ) : null}
                </div>
              ))}
          </div>
          {showLoadMore && (
            <span
              className="underline hover:text-blue-300 cursor-pointer mt-4"
              onClick={onLoadMore}
            >
              Load More
            </span>
          )}
        </Modal.Content>
        <hr />
        <Modal.Footer>
          <DockedButton>
            <AppButton $variant="secondary" onClick={handleClose} $block>
              Cancel
            </AppButton>
            <AppButton
              onClick={() => {
                onProceed(selected);
                handleClose();
              }}
              $block
            >
              Select
            </AppButton>
          </DockedButton>
        </Modal.Footer>
      </>
    </Modal.Base>
  );
};
