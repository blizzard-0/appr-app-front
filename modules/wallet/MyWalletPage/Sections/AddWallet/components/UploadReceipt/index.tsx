import React, { useRef } from 'react';
import { Dropzone } from '../../../../../../../components/Dropzone';
import { useDropzone } from 'react-dropzone';
import { UploadIcon } from '..';
import { useWalletUploadContextProvider } from '../../../../../context/upload';
import { Placeholder } from './Placeholder';
import { AppButton } from '@/components/v2';

export const UploadReceipt: React.FC = () => {
  const { handleAddWalletItemFromReceipt } = useWalletUploadContextProvider();
  const dropzoneRef = useRef<HTMLDivElement>(null);

  const handleUpload = () => {
    if (!dropzoneRef.current) return;
    dropzoneRef.current.click();
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => handleAddWalletItemFromReceipt(files[0]),
    accept: 'image/jpeg, image/png, image/gif, .pdf',
    multiple: false,
  });

  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-480-px mx-auto mt-0 font-maison-neue-book text-center">
      <div className="flex justify-center">
        <Placeholder />
      </div>
      <div className="mt-6 mb-6">
        <h2 className="font-maison-neue-bold text-32-px leading-42-px mb-4">
          Upload receipt
        </h2>
        <p className="text-base leading-snug mb-5 text-gray-800">
          We will add your items to your wallet and verify them for ownership.
        </p>
      </div>
      <Dropzone
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={false}
      >
        <div
          className="w-full bg-gray-100 border border-gray-250 pt-8 pb-6 flex flex-col items-center"
          ref={dropzoneRef}
        >
          <UploadIcon />
          <p className="mt-4 text-14-px leading-8 text-gray-900">
            Drag and drop a receipt
          </p>
        </div>
      </Dropzone>
      <p className="mt-5 text-14-px leading-6 text-gray-800">OR</p>
      <p className="mt-5 text-14-px leading-6 text-gray-800">
        Choose a photo or document of your receipt
      </p>
      <div className="mt-3 w-full lg:w-350-px mx-auto mb-5">
        <AppButton onClick={handleUpload} $block>
          Upload
        </AppButton>
      </div>
    </div>
  );
};
