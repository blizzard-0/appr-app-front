import React, { useRef } from 'react';
import { Dropzone } from '../../../../../../../components/Dropzone';
import { useDropzone } from 'react-dropzone';
import { Placeholder } from './Placeholder';
import { UploadIcon } from '..';
import { useWalletUploadContextProvider } from '../../../../../context/upload';
import { AppButton } from '@/components/v2';
import { routes } from '@/modules/routes';
import router from 'next/router';

export const UploadPhoto: React.FC = () => {
  const { handleDrop } = useWalletUploadContextProvider();
  const dropzoneRef = useRef<HTMLDivElement>(null);

  const handleUpload = () => {
    if (!dropzoneRef.current) return;
    dropzoneRef.current.click();
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/jpeg, image/png, image/gif',
    multiple: false,
  });

  return (
    <div className="w-full px-5 lg:px-0 lg:max-w-480-px mx-auto mt-0 font-maison-neue-book text-center">
      <div className="flex justify-center">
        <Placeholder />
      </div>
      <div className="mt-6 mb-6">
        <h2 className="font-maison-neue-demi text-32-px leading-42-px mb-2">
          Upload item photo
        </h2>
        <p className="text-base text-center leading-snug mb-5 text-gray-800">
          The photos should be clear, well lit, and show the entirety
          <br /> of your item.
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
            Drag a photo from your computer
          </p>
        </div>
      </Dropzone>
      <p className="mt-5 text-14-px leading-6 text-gray-800">OR</p>
      <p className="mt-5 text-14-px leading-6 text-gray-800">
        Choose a photo of your item
      </p>
      <div className="mt-3 w-full lg:w-350-px mx-auto mb-5">
        <AppButton onClick={handleUpload} $block>
          Upload
        </AppButton>
      </div>
    </div>
  );
};
