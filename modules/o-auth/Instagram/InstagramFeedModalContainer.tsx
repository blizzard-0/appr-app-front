import React, { useEffect, useState } from 'react';
import { InstagramFeedModal } from '.';
import { useToast } from '../../../components/Toast/Provider';
import { InstagramMedia, useLoadInstagramMedia } from './useInstagramMedia';

export type InstagramOAuthToken = {
  __typename: 'InstagramOAuthToken';
  accessToken: string;
};

export interface InstagramModalContainerProps {
  active: boolean;
  oAuthToken: string;
  onClose: () => void;
  onProceed: (selectedMedias: InstagramMedia | undefined) => void;
}

export const InstagramFeedModalContainer: React.FC<InstagramModalContainerProps> =
  ({ active, onClose, onProceed, oAuthToken }) => {
    const { toastElement, pushError } = useToast();
    const [loadUserMedia, { loadStatus, hasMoreMedia, medias }] =
      useLoadInstagramMedia(oAuthToken);

    useEffect(() => {
      if (active && loadStatus.status === 'idle') {
        loadUserMedia().catch(() => {
          pushError(
            'An error occurred while performing the requested action!',
            { autoClose: true },
          );
        });
      }
    }, [active, loadStatus.status, loadUserMedia, pushError]);
    return (
      <>
        {medias && (
          <InstagramFeedModal
            active={active}
            medias={medias}
            onClose={onClose}
            onProceed={onProceed}
            oAuthToken={oAuthToken}
            onLoadMore={loadUserMedia}
            showLoadMore={hasMoreMedia}
          />
        )}
        {toastElement}
      </>
    );
  };
