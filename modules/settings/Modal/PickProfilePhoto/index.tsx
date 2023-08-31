import React, { useState, useMemo } from 'react';

import { PreUpload } from '@/modules/image-upload/cloudinary';

import { AppButton, DockedButton, Modal } from '@/components/v2';

import {
  ImageCropData,
  ImageCropper,
  DEFAULT_CROP_DATA,
} from '@/modules/cropper';
import { useUploadUserAvatar } from '@/hooks/useUploadUserAvatar';
import { useToastContext } from '@/modules/toast';

export const CROP_ZONE = {
  width: 60,
  height: 60,
};

export const PickProfilePhotoModal: React.FC<{
  preUpload: PreUpload | null;
  onClose: () => void;
}> = ({ preUpload, onClose }) => {
  const image = useMemo(() => {
    if (!preUpload) return '';
    return URL.createObjectURL(preUpload.file);
  }, [preUpload]);

  const [cropData, setCropData] = useState<ImageCropData>(DEFAULT_CROP_DATA);
  const { uploadAvatar } = useUploadUserAvatar();
  const [loading, setLoading] = useState(false);
  const { pushSuccess } = useToastContext();

  const handleUploadAvatar = async () => {
    if (!preUpload) {
      return;
    }
    setLoading(true);
    uploadAvatar(preUpload.file, cropData, () => {
      setLoading(false);
      pushSuccess('Profile photo updated successfully.');
      onClose();
    });
  };

  return (
    <Modal.Base $show={Boolean(preUpload)} onClose={onClose}>
      <Modal.Header onClose={onClose} $showClose>
        Update your photo
      </Modal.Header>
      <Modal.Content className="py-6 px-5 md:px-6 text-center">
        {image && (
          <ImageCropper
            image={image}
            cropSize={CROP_ZONE}
            onCrop={setCropData}
          />
        )}
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={handleUploadAvatar} $loading={loading}>
            Submit
          </AppButton>
          <AppButton $variant="secondary" onClick={onClose} $block>
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
