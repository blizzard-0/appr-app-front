import { useState } from 'react';
import gql from 'graphql-tag';
import {
  ImageUploadPurpose,
  LqipStrategy,
  useRegisterImageUploads_Mutation,
} from '../../generated/graphql';
import { PreUpload, handleMultiFileCloudinaryUpload } from './cloudinary';
import { WALLET_ITEM_GRID_IMAGE_SIZE } from '../../consts/consts';

export const REGISTER_IMAGE_UPLOADS_QUERY = gql`
  mutation registerImageUploads_(
    $input: [RegisterSingleImageUploadInput!]!
    $imageAdjustments: ImageAdjustmentsInput!
  ) {
    registerImageUploads(input: $input) {
      ... on RegisterImageUploadsMutationSuccess {
        __typename
        imageUploads {
          id
          image(adjustments: $imageAdjustments) {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
        }
      }
    }
  }
`;
type IdleUploadState = {
  status: 'idle';
};
type UploadingUploadState = {
  status: 'uploading';
};
type SuccessUploadState = {
  status: 'success';
  raw: any;
  result: Array<{
    id: string;
    image: {
      url: string;
      lqip: {
        url: string;
        strategy: LqipStrategy;
      };
    };
  }>;
};
type FailedUploadState = {
  status: 'failure';
};
export type ImageUploadState =
  | IdleUploadState
  | UploadingUploadState
  | SuccessUploadState
  | FailedUploadState;

export const useImageUpload = (
  uploadPurpose: ImageUploadPurpose = ImageUploadPurpose.WalletItemUpload,
) => {
  const [uploadStatus, setUploadStatus] = useState<ImageUploadState>({
    status: 'idle',
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [, setSubProgress] = useState<Record<string, number>>({});
  const [registerImageUploads] = useRegisterImageUploads_Mutation();

  const handleUploadProgress = (progress: number, id: string) => {
    setSubProgress((prevSubProgress) => {
      const newSubProgress = { ...prevSubProgress, [id]: progress };
      setUploadProgress(
        Object.values(newSubProgress).reduce((acc, cur) => acc + cur, 0),
      );
      return newSubProgress;
    });
  };

  const initUploadProgress = () => {
    setUploadStatus({ status: 'idle' });
    setUploadProgress(0);
  };

  const upload = (files: PreUpload[]) => {
    setUploadStatus({
      status: 'uploading',
    });
    const newProgress: Record<string, number> = {};
    files.forEach((f) => {
      newProgress[f.imageUploadId] = 0;
    });
    setSubProgress(newProgress);
    return handleMultiFileCloudinaryUpload(files, handleUploadProgress).then(
      (result) => {
        if (result.type === 'success') {
          if (!result.uploads.length) {
            return Promise.reject(false);
          }
          const registerArgs = result.uploads.map(
            ({ data, preUpload: file }) => ({
              id: file.imageUploadId,
              payload: data,
              uploadPurpose,
            }),
          );
          return registerImageUploads({
            variables: {
              input: registerArgs,
              imageAdjustments: {
                height: WALLET_ITEM_GRID_IMAGE_SIZE.HEIGHT,
                width: WALLET_ITEM_GRID_IMAGE_SIZE.WIDTH,
              },
            },
          }).then(({ data, errors }) => {
            if (!data) {
              setUploadStatus({
                status: 'failure',
              });
              if (errors) {
                return { error: errors[0] };
              }
              return {
                error: 'Something went wrong.',
              };
            } else if (
              data.registerImageUploads.__typename !==
              'RegisterImageUploadsMutationSuccess'
            ) {
              setUploadStatus({
                status: 'failure',
              });
              return {
                error: data.registerImageUploads,
              };
            } else {
              setUploadProgress(90);
              setSubProgress({});
              setUploadStatus({
                status: 'success',
                result: data.registerImageUploads.imageUploads,
                raw: result.uploads[0],
              });
              return {
                result: data.registerImageUploads.imageUploads,
              };
            }
          });
        } else {
          return Promise.reject(false);
        }
      },
    );
  };
  return [
    upload,
    uploadStatus,
    uploadProgress,
    initUploadProgress,
    setUploadStatus,
  ] as const;
};
