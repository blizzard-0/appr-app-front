/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from 'react';
import {
  DeleteIcon,
  DownloadIcon,
  EditIcon,
} from '../../../../components/Icons';
import { Spinner } from '../../../../components/Spinner';
import {
  useDeleteReceipt_Mutation,
  WalletItemModerationFlagEnumType,
} from '../../../../generated/graphql';
import { deleteReceiptCacheUpdate } from '../../MyWalletPage/utils/cache';
import {
  RECEIPT_PLACEHOLDER_URL,
  WALLET_ITEM_GRID_IMAGE_SIZE,
} from '../../../../consts/consts';
import { ConfirmModal } from '..';
import { Modal } from '@/components/v2/Modal';

import { useWalletModalContext } from '../../context/modal';
import { useToastContext } from '@/modules/toast';
import { IconButton } from '@/components/v2';

export const ViewReceiptModal: React.FC = () => {
  const {
    viewReceipt,
    setViewReceipt,
    setWalletItem,
    walletItem,
    setAddReceipt,
  } = useWalletModalContext();
  const [deleteReceiptForWalletItem, deleteReceiptForWalletItemState] =
    useDeleteReceipt_Mutation({
      update(cache, { data }) {
        deleteReceiptCacheUpdate(cache, data);
      },
    });
  const [showDeleteReceiptModal, setShowDeleteReceiptModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { pushError, pushSuccess } = useToastContext();

  const onClose = useCallback(() => {
    setViewReceipt(false);
    setTimeout(() => {
      setWalletItem(null);
    }, 500);
  }, [setWalletItem, setViewReceipt]);

  const download = (url: string, name: string) => {
    if (!url) {
      throw new Error('Resource URL not provided! You need to provide one');
    }
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobURL;

        if (name && name.length) a.download = name;
        document.body.appendChild(a);
        a.click();
      })
      .catch(() => {
        return Promise.reject('Something went wrong.');
      });
  };

  const handleDeleteReceipt = async () => {
    if (!walletItem) return;
    const { data } = await deleteReceiptForWalletItem({
      variables: {
        walletItemId: walletItem.id,
      },
    });
    if (
      data?.deleteReceiptForWalletItem.__typename ===
      'DeleteReceiptForWalletItemMutationSuccess'
    ) {
      pushSuccess('You’ve successfully deleted your receipt');
    } else {
      pushError('An error occurred while performing the requested action!');
    }
    setShowDeleteReceiptModal(false);
    onClose();
  };

  if (!walletItem) return null;

  if (!walletItem.receiptImage || !walletItem.receiptImage.url) {
    return null;
  }

  let originalImageUrl = RECEIPT_PLACEHOLDER_URL;
  if (
    (walletItem.moderationFlag === WalletItemModerationFlagEnumType.Pending ||
      walletItem.moderationFlag ===
        WalletItemModerationFlagEnumType.Identified) &&
    walletItem.hasReceiptUpload
  ) {
    originalImageUrl = walletItem.receiptImage.url.replace('h_215,w_246/', '');
  }

  const originalUrl = walletItem.receiptImage.url.replace(
    'h_215,w_246/c_fill,f_auto,q_auto:best/',
    '',
  );

  return (
    <>
      <Modal.Base
        $show={viewReceipt && !showDeleteReceiptModal}
        onClose={onClose}
      >
        <Modal.Header onClose={onClose}>Receipt</Modal.Header>
        <>
          <div className="border-b border-gray-300">
            <div className="inline-flex gap-4 justify-end w-full py-3 px-6">
              {walletItem.moderationFlag ===
                WalletItemModerationFlagEnumType.Pending && (
                <IconButton
                  onClick={() => {
                    setViewReceipt(false);
                    setTimeout(() => {
                      setAddReceipt(true);
                    }, 500);
                  }}
                  $variant="modal"
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton
                onClick={() => download(originalUrl, walletItem.id)}
                $variant="modal"
              >
                <DownloadIcon />
              </IconButton>
              {walletItem.moderationFlag ===
                WalletItemModerationFlagEnumType.Pending && (
                <IconButton
                  onClick={setShowDeleteReceiptModal.bind(this, true)}
                  $variant="modal"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          </div>
          <Modal.Content className="p-5 text-center">
            <div className="mx-auto flex justify-center">
              <div style={{ display: loading ? 'inline-block' : 'none' }}>
                <Spinner />
              </div>
              <div style={{ display: loading ? 'none' : 'block' }}>
                <img
                  src={originalImageUrl}
                  width={WALLET_ITEM_GRID_IMAGE_SIZE.WIDTH}
                  height={WALLET_ITEM_GRID_IMAGE_SIZE.HEIGHT}
                  alt="view receipt"
                  className="w-full object-cover"
                  onLoad={() => setLoading(false)}
                />
              </div>
            </div>
          </Modal.Content>
        </>
      </Modal.Base>
      <ConfirmModal
        active={showDeleteReceiptModal}
        title="Are you sure you want to delete this?"
        onClose={setShowDeleteReceiptModal.bind(this, false)}
        text=""
        loading={deleteReceiptForWalletItemState.loading}
        onProceed={handleDeleteReceipt}
        cta="Delete"
      />
    </>
  );
};
