import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { getDimensionsFromObjectUrl } from '../../../utils/file';
import {
  MIN_WALLET_ITEM_IMAGE_SIZE,
  WALLET_ITEM_GRID_IMAGE_SIZE,
} from '../../../consts/consts';
import { PreUpload } from '../../image-upload/cloudinary';
import {
  ImageUploadState,
  useImageUpload,
} from '../../image-upload/useImageUpload';
import { handleTrack } from '../MyWalletPage/handleTrack';
import {
  InvalidImageModal,
  NewWalletItemModal,
  NewWalletItemProps,
} from '../Modals';
import {
  addItemCacheUpdate,
  addReceiptCacheUpdate,
} from '../MyWalletPage/utils/cache';
import { useMyWalletPageContext } from '.';
import {
  useAddReceipt_Mutation,
  useAddWalletItem_Mutation,
} from '../../../generated/graphql';
import {
  useAddWalletWithoutPhoto,
  useAddWalletItemFromReceipt,
} from '../hooks';
import { useToastContext } from '@/modules/toast';

type WalletUploadContextState = {
  preUpload: PreUpload | null;
  uploadInitiated: boolean;
  newItemModal: boolean;
  invalidImage: string;
  loading: boolean;
  noPhotoUploading: boolean;
  uploadStatus: ImageUploadState;
  newItemDetail: NewWalletItemProps | null;
  uploadingFromReceipt: boolean;
};

type WalletUploadContextAction = {
  handleDrop: (files: File[]) => Promise<void>;
  handleSubmitNewWalletItem: (d: NewWalletItemProps) => void;
  handleDropReceipt: (files: File[]) => void;
  handleAttachReceipt: (itemId: string) => Promise<void>;
  setLoading: (l: boolean) => void;
  handleAddWalletItemWithoutPhoto: (b: string, p: string) => Promise<void>;
  handleAddWalletItemFromReceipt: (f: File) => Promise<void>;
  setUploadStatus: (status: ImageUploadState) => void;
};

type WalletUploadContextType = WalletUploadContextState &
  WalletUploadContextAction;

const DEFAULT_WALLET_UPLOAD_CONTEXT: WalletUploadContextType = {
  handleDrop: Promise.resolve,
  handleSubmitNewWalletItem: () => null,
  handleDropReceipt: () => null,
  handleAttachReceipt: Promise.resolve,
  setLoading: () => null,
  handleAddWalletItemWithoutPhoto: Promise.resolve,
  handleAddWalletItemFromReceipt: Promise.resolve,
  setUploadStatus: () => null,
  invalidImage: '',
  uploadStatus: { status: 'idle' },
  newItemModal: false,
  preUpload: null,
  uploadInitiated: false,
  loading: false,
  newItemDetail: null,
  noPhotoUploading: false,
  uploadingFromReceipt: false,
};

const WalletUploadContext = createContext<WalletUploadContextType>(
  DEFAULT_WALLET_UPLOAD_CONTEXT,
);

export const WalletUploadContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [addWalletItem] = useAddWalletItem_Mutation({
    update(cache, { data }) {
      addItemCacheUpdate(cache, data);
    },
  });
  const [addReceipt] = useAddReceipt_Mutation({
    update(cache, { data }) {
      addReceiptCacheUpdate(cache, data);
    },
  });

  const [
    uploadImages,
    uploadStatus,
    uploadProgress,
    initUploadProgress,
    setUploadStatus,
  ] = useImageUpload();
  const {
    clearBackgroundProgress,
    startBackgroundProgress,
    updateBackgroundProgress,
    setAppState,
  } = useMyWalletPageContext();
  const { pushSuccess, pushError } = useToastContext();
  const [invalidImage, setInvalidImage] = useState('');
  const [uploadInitiated, setUploadInitiated] = useState(false);
  const [newItemModal, setNewItemModal] = useState(false);
  const [receiptUploading, setReceiptUploading] = useState(false);

  const [preUpload, setPreUpload] = useState<PreUpload | null>(null);
  const [newItemDetail, setNewItemDetail] = useState<NewWalletItemProps | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  const handleDrop = useCallback(
    (files: File[]) => {
      const upload = async () => {
        for (const iu of files) {
          const dimensions = await getDimensionsFromObjectUrl(iu);
          if (
            dimensions.width < MIN_WALLET_ITEM_IMAGE_SIZE.WIDTH ||
            dimensions.height < MIN_WALLET_ITEM_IMAGE_SIZE.HEIGHT
          ) {
            setInvalidImage(iu.name);
            return;
          }
        }

        const file = files[0];
        const preUpload: PreUpload = {
          imageUploadId: uuid(),
          file,
          uploadSource: 'filesystem',
        };
        setPreUpload(preUpload);
        setNewItemModal(true);
        uploadImages([preUpload])
          .then(() => {
            handleTrack.initiateNewWalletItem(preUpload);
          })
          .catch(() => {
            pushError('Failed to upload image');
            setPreUpload(null);
            initUploadProgress();
            clearBackgroundProgress();
            setUploadInitiated(false);
          });
      };

      return upload();
    },
    [uploadImages, pushError, initUploadProgress, clearBackgroundProgress],
  );

  const handleDropReceipt = useCallback(
    (files: File[]) => {
      const upload = async () => {
        for (const iu of files) {
          if (!iu.type.endsWith('pdf')) {
            const dimensions = await getDimensionsFromObjectUrl(iu);
            if (
              dimensions.width < MIN_WALLET_ITEM_IMAGE_SIZE.WIDTH ||
              dimensions.height < MIN_WALLET_ITEM_IMAGE_SIZE.HEIGHT
            ) {
              setInvalidImage(iu.name);
              return;
            }
          }
        }
      };
      const file = files[0];
      const preUpload: PreUpload = {
        imageUploadId: uuid(),
        file,
        uploadSource: 'filesystem',
      };
      setPreUpload(preUpload);
      setReceiptUploading(true);
      startBackgroundProgress('Receipt is being uploaded');

      uploadImages([preUpload])
        .catch(() => {
          pushError('Failed to upload receipt');
          setPreUpload(null);
          initUploadProgress();
          setUploadInitiated(false);
          clearBackgroundProgress();
        })
        .finally(() => {
          clearBackgroundProgress();
        });

      upload();
    },
    [
      uploadImages,
      pushError,
      initUploadProgress,
      clearBackgroundProgress,
      startBackgroundProgress,
    ],
  );

  const handleSubmitNewWalletItem = useCallback(
    (detail: NewWalletItemProps) => {
      setAppState('MyWalletPage');
      startBackgroundProgress('Wallet item is being uploaded.');
      setNewItemDetail(detail);
      setNewItemModal(false);
    },
    [startBackgroundProgress, setAppState],
  );

  const handleAddNewWalletItem = useCallback(
    (props: NewWalletItemProps) => {
      const {
        unidentifiedBrandName,
        unidentifiedProductName,
        imageCropWidth: cropWidth,
        imageCropHeight: cropHeight,
        originalCropWidth,
        originalCropHeight,
        imageCropStartX: cropStartX,
        imageCropStartY: cropStartY,
      } = props;
      const uploadMethod = async () => {
        if (!preUpload) {
          pushError('Something went wrong');
          return;
        }
        const wi = {
          imageUploadId: preUpload.imageUploadId,
          unidentifiedBrandName,
          unidentifiedProductName,
          crop: {
            x: cropStartX,
            y: cropStartY,
            width: cropWidth,
            height: cropHeight,
            cropWidth: originalCropWidth,
            cropHeight: originalCropHeight,
          },
        };
        try {
          await addWalletItem({
            variables: {
              item: wi,
              imageAdjustments: {
                width: WALLET_ITEM_GRID_IMAGE_SIZE.WIDTH,
                height: WALLET_ITEM_GRID_IMAGE_SIZE.HEIGHT,
              },
            },
          });
          pushSuccess(`You've successfully uploaded a wallet item.`);
          handleTrack.submitNewWalletItem(preUpload);
          setNewItemDetail(null);
        } catch {
          pushError(`Failed to uploaded a wallet item.`);
        } finally {
          setPreUpload(null);
          initUploadProgress();
          setUploadInitiated(false);
          clearBackgroundProgress();
        }
      };

      return uploadMethod();
    },
    [
      addWalletItem,
      setPreUpload,
      preUpload,
      pushError,
      initUploadProgress,
      pushSuccess,
      clearBackgroundProgress,
    ],
  );

  const handleAttachReceipt = useCallback(
    (id: string) => {
      const uploadMethod = async () => {
        if (!preUpload) {
          pushError('Something went wrong');
          return;
        }
        setLoading(true);
        try {
          if (uploadStatus.status === 'success') {
            await addReceipt({
              variables: {
                input: {
                  walletItemId: id,
                  receiptRawString: JSON.stringify(uploadStatus.raw.data),
                },
              },
            });
            pushSuccess(`You've successfully uploaded a receipt.`);
          }
        } catch {
          pushError(`Failed to uploaded a receipt.`);
        } finally {
          setLoading(false);
          setPreUpload(null);
          initUploadProgress();
          setUploadInitiated(false);
          setReceiptUploading(false);
        }
      };

      return uploadMethod();
    },
    [
      preUpload,
      pushError,
      uploadStatus,
      addReceipt,
      pushSuccess,
      initUploadProgress,
    ],
  );

  const { handleAddWalletItemWithoutPhoto, uploading: noPhotoUploading } =
    useAddWalletWithoutPhoto();
  const { handleAddWalletItemFromReceipt, uploading: uploadingFromReceipt } =
    useAddWalletItemFromReceipt();

  useEffect(() => {
    if (receiptUploading && uploadStatus.status === 'uploading') {
      updateBackgroundProgress(uploadProgress);
    }
  }, [
    receiptUploading,
    uploadStatus,
    uploadProgress,
    updateBackgroundProgress,
  ]);

  useEffect(() => {
    if (!newItemDetail || uploadInitiated) {
      return;
    }
    if (uploadStatus.status === 'uploading') {
      updateBackgroundProgress(uploadProgress);
    }
    if (uploadStatus.status === 'failure') {
      pushError(`Failed to uploaded a wallet item.`);
      setPreUpload(null);
      initUploadProgress();
      setUploadInitiated(false);
      clearBackgroundProgress();
      return;
    }
    if (uploadProgress < 90) {
      return;
    }
    handleAddNewWalletItem(newItemDetail);
    setUploadInitiated(true);
  }, [
    uploadProgress,
    newItemDetail,
    uploadInitiated,
    handleAddNewWalletItem,
    initUploadProgress,
    pushError,
    uploadStatus,
    clearBackgroundProgress,
    updateBackgroundProgress,
  ]);

  const renderContent = useMemo(() => {
    return (
      <>
        {!!newItemModal && !!preUpload && (
          <NewWalletItemModal
            preUpload={preUpload}
            onClose={setPreUpload.bind(this, null)}
            onSubmit={handleSubmitNewWalletItem}
          />
        )}
        <InvalidImageModal
          active={!!invalidImage}
          fileName={invalidImage}
          onClose={setInvalidImage.bind(this, '')}
        />
      </>
    );
  }, [handleSubmitNewWalletItem, invalidImage, newItemModal, preUpload]);

  const contextValue = useMemo<WalletUploadContextType>(() => {
    return {
      invalidImage,
      newItemModal,
      preUpload,
      uploadInitiated,
      loading,
      uploadStatus,
      newItemDetail,
      noPhotoUploading,
      uploadingFromReceipt,
      handleAttachReceipt,
      setLoading,
      handleDrop,
      handleSubmitNewWalletItem,
      handleDropReceipt,
      handleAddWalletItemWithoutPhoto,
      handleAddWalletItemFromReceipt,
      setUploadStatus,
    };
  }, [
    handleDrop,
    handleDropReceipt,
    handleSubmitNewWalletItem,
    handleAttachReceipt,
    handleAddWalletItemWithoutPhoto,
    handleAddWalletItemFromReceipt,
    setUploadStatus,
    noPhotoUploading,
    newItemDetail,
    loading,
    invalidImage,
    newItemModal,
    preUpload,
    uploadInitiated,
    uploadStatus,
    uploadingFromReceipt,
  ]);

  return (
    <WalletUploadContext.Provider value={contextValue}>
      {children}
      {renderContent}
    </WalletUploadContext.Provider>
  );
};

export const useWalletUploadContextProvider = () => {
  return useContext(WalletUploadContext);
};
