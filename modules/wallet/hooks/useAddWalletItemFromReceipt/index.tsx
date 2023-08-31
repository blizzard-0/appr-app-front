import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAddWalletItemFromReceipt_Mutation } from '../../../../generated/graphql';
import { useMyWalletPage } from '..';
import { useMyWalletPageContext } from '../../context';
import { useImageUpload } from '../../../image-upload/useImageUpload';
import { PreUpload } from '../../../image-upload/cloudinary';

export const useAddWalletItemFromReceipt = () => {
  const [uploading, setUploading] = useState(false);
  const [addWalletItemFromReceipt] = useAddWalletItemFromReceipt_Mutation();
  const { refetch } = useMyWalletPage();
  const {
    startBackgroundProgress,
    updateBackgroundProgress,
    clearBackgroundProgress,
    setAppState,
  } = useMyWalletPageContext();
  const [uploadImages, uploadStatus, uploadProgress] = useImageUpload();

  useEffect(() => {
    if (!uploading) return;
    if (uploadStatus.status === 'uploading') {
      updateBackgroundProgress(uploadProgress);
    }
    if (uploadStatus.status === 'success') {
      const upload = async () => {
        await addWalletItemFromReceipt({
          variables: {
            receiptRawString: JSON.stringify(uploadStatus.raw.data),
          },
        });
        updateBackgroundProgress(90);
        await refetch();
        updateBackgroundProgress(100);
        setUploading(false);
      };
      upload();
    }
  }, [
    uploadStatus,
    uploading,
    refetch,
    updateBackgroundProgress,
    addWalletItemFromReceipt,
    uploadProgress,
  ]);

  const handleAddWalletItemFromReceipt = async (file: File) => {
    try {
      setAppState('MyWalletPage');
      setUploading(true);
      startBackgroundProgress('Receipt is being uploaded.');
      const preUpload: PreUpload = {
        imageUploadId: uuid(),
        file,
        uploadSource: 'filesystem',
      };
      await uploadImages([preUpload]);
      if (uploadStatus.status === 'success') {
        console.log(uploadStatus.raw.data);
      }
    } finally {
      clearBackgroundProgress();
      setUploading(false);
    }
  };

  return {
    handleAddWalletItemFromReceipt,
    uploading,
  };
};
