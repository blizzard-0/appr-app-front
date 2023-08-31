import { ImageCropData } from '@/modules/cropper';
import { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  ImageUploadPurpose,
  useUpdateUserAvatarMutation,
} from '../generated/graphql';
import {
  handleMultiFileCloudinaryUpload,
  PreUpload,
} from '../modules/image-upload/cloudinary';

export const useUploadUserAvatar = () => {
  const [uploading, setUploading] = useState(false);
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const uploadAvatar = useCallback(
    (avatarImage: File, props?: ImageCropData, cb?: () => void) => {
      setUploading(true);
      const preUpload: PreUpload = {
        imageUploadId: uuid(),
        file: avatarImage,
        uploadSource: 'filesystem',
      };
      handleMultiFileCloudinaryUpload([preUpload])
        .then((result) => {
          if (result.type === 'success') {
            const upload = result.uploads[0];
            const registerArg = {
              id: upload.preUpload.imageUploadId,
              payload: upload.data,
              uploadPurpose: ImageUploadPurpose.AvatarPhoto,
            };
            let crop = undefined;
            if (props) {
              crop = {
                x: props.imageCropStartX,
                y: props.imageCropStartY,
                width: props.imageCropWidth,
                height: props.imageCropHeight,
                cropWidth: props.originalCropWidth,
                cropHeight: props.originalCropHeight,
              };
            }
            updateUserAvatar({
              variables: {
                input: registerArg,
                crop,
              },
            });
            if (typeof cb !== 'undefined') {
              cb();
            }
          }
        })
        .finally(() => {
          setUploading(false);
        });
    },
    [updateUserAvatar],
  );

  return { uploading, uploadAvatar };
};
