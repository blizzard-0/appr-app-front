import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactCrop, { Crop } from 'react-image-crop';
import Cropper from 'react-easy-crop';
import _ from 'lodash';

import 'react-image-crop/dist/ReactCrop.css';

export interface ImageCropData {
  imageCropWidth: number;
  imageCropHeight: number;
  originalCropWidth: number;
  originalCropHeight: number;
  imageCropStartX: number;
  imageCropStartY: number;
}

export const DEFAULT_CROP_DATA: ImageCropData = {
  imageCropWidth: 0,
  imageCropHeight: 0,
  originalCropWidth: 0,
  originalCropHeight: 0,
  imageCropStartX: 0,
  imageCropStartY: 0,
};

interface MediaSizeProps {
  width: number;
  height: number;
  naturalWidth: number;
  naturalHeight: number;
}

interface MediaCroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageCropperProps {
  image: string;
  onCrop: (crop: ImageCropData) => void;
  cropSize: {
    width: number;
    height: number;
  };
}

export const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  onCrop,
  cropSize: { width: CROP_WIDTH, height: CROP_HEIGHT },
}) => {
  const [crop, setCrop] = useState<Crop>({
    aspect: CROP_WIDTH / CROP_HEIGHT,
    unit: 'px',
    width: CROP_WIDTH,
    height: CROP_HEIGHT,
    x: 0,
    y: 0,
  });
  const [mobileCrop, setMobileCrop] = useState({
    x: 20,
    y: 40,
  });
  const [zoom, setZoom] = useState(1);
  const [cropperWidth, setCropperWidth] = useState(0);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const [mediaSize, setMediaSize] = useState<MediaSizeProps>({
    height: 0,
    naturalHeight: 0,
    naturalWidth: 0,
    width: 0,
  });
  const [mediaCroppedArea, setMediaCroppedArea] = useState<MediaCroppedArea>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onLoad = (size: MediaSizeProps) => {
    setMediaSize(size);
  };

  useEffect(() => {
    setCropperWidth(window.innerWidth - 80);
  }, []);

  const onCropComplete = (
    _: MediaCroppedArea,
    croppedAreaPixels: MediaCroppedArea,
  ) => {
    setMediaCroppedArea(croppedAreaPixels);
  };

  useEffect(() => {
    if (!isDesktop) return;
    const { naturalWidth, naturalHeight, width, height } = mediaSize;
    const scaleX = naturalWidth / width;
    const scaleY = naturalHeight / height;
    onCrop({
      imageCropWidth: crop.width * scaleX,
      imageCropHeight: crop.height * scaleY,
      originalCropWidth: crop.width,
      originalCropHeight: crop.height,
      imageCropStartX: crop.x * scaleX,
      imageCropStartY: crop.y * scaleY,
    });
  }, [crop, mediaSize, onCrop, isDesktop]);

  useEffect(() => {
    if (isDesktop) return;
    onCrop({
      imageCropWidth: mediaCroppedArea.width,
      imageCropHeight: mediaCroppedArea.height,
      originalCropWidth: cropperWidth,
      originalCropHeight: cropperWidth - 40,
      imageCropStartX: mediaCroppedArea.x,
      imageCropStartY: mediaCroppedArea.y,
    });
  }, [cropperWidth, mediaCroppedArea, onCrop, isDesktop]);

  if (isDesktop) {
    return (
      <ReactCrop
        src={image}
        onImageLoaded={(img) => {
          onLoad({
            height: img.height,
            naturalHeight: img.naturalHeight,
            width: img.width,
            naturalWidth: img.naturalWidth,
          });
        }}
        crop={crop}
        keepSelection
        minWidth={CROP_WIDTH}
        minHeight={CROP_HEIGHT}
        onChange={_.debounce((newCrop) => {
          if (!_.isEqual(crop, newCrop)) {
            setCrop(newCrop);
          }
        }, 0)}
      />
    );
  }

  return (
    <div className="w-full pb-full relative overflow-hidden">
      <Cropper
        image={image}
        crop={mobileCrop}
        zoom={zoom}
        aspect={CROP_WIDTH / CROP_HEIGHT}
        onCropChange={setMobileCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropSize={{
          width: cropperWidth,
          height: cropperWidth,
        }}
        restrictPosition
        objectFit={
          mediaSize.height > mediaSize.width
            ? 'horizontal-cover'
            : 'vertical-cover'
        }
        showGrid={false}
        style={{
          cropAreaStyle: {
            border: '1px dashed #26CBB6',
          },
          mediaStyle: {
            maxWidth: 'max-content',
            maxHeight: 'max-content',
          },
        }}
        initialCroppedAreaPixels={{
          x: 0,
          y: 0,
          width: cropperWidth,
          height: cropperWidth - 40,
        }}
        onMediaLoaded={onLoad}
      />
    </div>
  );
};
