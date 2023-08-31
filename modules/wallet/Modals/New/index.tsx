import React, { useState, useMemo } from 'react';
import {
  ImageCropper,
  DEFAULT_CROP_DATA,
  ImageCropData,
} from '../../../cropper';

import { PreUpload } from '@/modules/image-upload/cloudinary';
import {
  ProductSearch,
  SearchResult,
} from '../../MyWalletPage/Sections/WalletPage/components/ProductSearch';
import { AppButton, DockedButton, Modal } from '../../../../components/v2';

export const CROP_ZONE = {
  width: 246,
  height: 215,
};

export interface NewWalletItemProps {
  unidentifiedBrandName: string;
  unidentifiedProductName: string;
  imageCropWidth: number;
  imageCropHeight: number;
  originalCropWidth: number;
  originalCropHeight: number;
  imageCropStartX: number;
  imageCropStartY: number;
}

export const NewWalletItemModal: React.FC<{
  preUpload: PreUpload;
  onClose: () => void;
  onSubmit: (props: NewWalletItemProps) => void;
}> = ({ preUpload, onClose, onSubmit }) => {
  const image = useMemo(() => {
    return URL.createObjectURL(preUpload.file);
  }, [preUpload]);
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const [cropData, setCropData] = useState<ImageCropData>(DEFAULT_CROP_DATA);

  const resetForm = () => {
    setBrand('');
    setProduct('');
  };

  const onProductSearchComplete = (searchResult: SearchResult) => {
    setBrand(searchResult.brandLabel);
    setProduct(searchResult.productLabel);
  };

  const handleSubmit = () => {
    onSubmit({
      ...cropData,
      unidentifiedBrandName: brand,
      unidentifiedProductName: product,
    });
    resetForm();
  };

  const canSubmit = !!brand && !!product;

  return (
    <Modal.Base $show $fullscreen onClose={onClose}>
      <Modal.Header onClose={onClose} $showClose>
        Item upload
      </Modal.Header>
      <Modal.Content className="p-5">
        <ImageCropper cropSize={CROP_ZONE} image={image} onCrop={setCropData} />
        <div className="mt-6">
          <ProductSearch onComplete={onProductSearchComplete} />
        </div>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={handleSubmit} disabled={!canSubmit}>
            Submit
          </AppButton>
          <AppButton
            $variant="secondary"
            onClick={() => {
              resetForm();
              onClose();
            }}
            $block
          >
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
