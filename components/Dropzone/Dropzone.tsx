import React from 'react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import Image from 'next/image';
import { SmallText } from '../Text';

export const Dropzone: React.FC<{
  getRootProps(): DropzoneRootProps;
  getInputProps(): DropzoneInputProps;
  isDragActive: boolean;
  children?: React.ReactNode;
}> = ({ getRootProps, getInputProps, isDragActive, children }) => {
  return (
    <div {...getRootProps()} className="focus:outline-primary">
      <input {...getInputProps()} />
      {children ? (
        children
      ) : (
        <>
          <div className="h-12 w-12 mx-auto relative cursor-pointer">
            <Image
              src={'/upload-icon.svg'}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex justify-center px-6 text-center cursor-pointer">
            {isDragActive ? (
              <SmallText>Drop the files from your computer</SmallText>
            ) : (
              <SmallText>Drag or upload a file from your computer</SmallText>
            )}
          </div>
        </>
      )}
    </div>
  );
};
