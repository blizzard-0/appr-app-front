/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from 'react';
import { Modal, DockedButton, AppButton, Upload } from '@/components/v2';

import { WALLET_ITEM_GRID_IMAGE_SIZE } from '@/consts/consts';
import { Dropzone } from '@/components/Dropzone';
import { useDropzone } from 'react-dropzone';
import { Spinner } from '@/components/Spinner';
import { useWalletModalContext } from '../../context/modal';
import { useWalletUploadContextProvider } from '../../context/upload';
import { useMediaQuery } from 'react-responsive';

export const AddReceiptModal: React.FC = () => {
  const {
    addReceipt: active,
    walletItem,
    setAddReceipt,
    setWalletItem,
    setViewReceipt,
  } = useWalletModalContext();
  const {
    handleDropReceipt,
    handleAttachReceipt,
    loading,
    uploadStatus,
    setUploadStatus,
  } = useWalletUploadContextProvider();
  const [imageLoading, setImageLoading] = useState(true);

  const onClose = useCallback(() => {
    setAddReceipt(false);
    setWalletItem(null);
    setViewReceipt(false);
    setUploadStatus({ status: 'idle' });
  }, [setAddReceipt, setWalletItem, setViewReceipt, setUploadStatus]);

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDropReceipt,
    accept: 'image/jpeg, image/png, image/gif, .pdf',
    multiple: false,
  });

  const handleSave = async () => {
    if (!walletItem) return;
    try {
      await handleAttachReceipt(walletItem.id);
    } finally {
      onClose();
    }
  };

  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header $showClose onClose={onClose}>
        Attach receipt
      </Modal.Header>
      <Modal.Content className="p-5 justify-center flex">
        <>
          {uploadStatus.status === 'success' && (
            <>
              <div style={{ display: imageLoading ? 'block' : 'none' }}>
                <Spinner />
              </div>
              <div style={{ display: imageLoading ? 'none' : 'block' }}>
                <img
                  src={uploadStatus.result[0].image.url.replace(
                    'h_215,w_246/',
                    '',
                  )}
                  width={WALLET_ITEM_GRID_IMAGE_SIZE.WIDTH}
                  height={WALLET_ITEM_GRID_IMAGE_SIZE.HEIGHT}
                  alt="add receipt"
                  className="w-full object-cover"
                  onLoad={() => setImageLoading(false)}
                />
              </div>
            </>
          )}
          {uploadStatus.status === 'idle' && (
            <div className="text-center grid gap-5 leading-6 text-gray-800">
              <Dropzone
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                isDragActive={false}
              >
                <Upload $size="small">Drag and drop a receipt</Upload>
              </Dropzone>
              <p className="text-14-px">OR</p>
              <p className="text-base">
                Choose a photo or document of your receipt
              </p>
            </div>
          )}
          {uploadStatus.status === 'uploading' && <Spinner />}
        </>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton
            disabled={uploadStatus.status !== 'success' || imageLoading}
            onClick={handleSave}
            $loading={loading}
            $block
          >
            Upload
          </AppButton>
          {(uploadStatus.status === 'success' || !isDesktop) && (
            <AppButton $variant="secondary" $block onClick={onClose}>
              Cancel
            </AppButton>
          )}
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
