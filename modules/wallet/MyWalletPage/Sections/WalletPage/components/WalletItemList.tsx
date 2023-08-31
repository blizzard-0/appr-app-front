import React, { useCallback } from 'react';
import { WalletItem } from '../../../../context/types';
import { WalletItemDetail } from '../components';
import { useMyWalletPageContext } from '../../../../context';
import { SkeletonCard } from './Skeleton/Card';
import { useWalletUploadContextProvider } from '../../../../context/upload';

interface WalletItemListProps {
  walletItems: WalletItem[];
  onOpenDetails: (walletItem: WalletItem) => void;
  blurred: boolean;
}

export const WalletItemList: React.FC<WalletItemListProps> = ({
  walletItems,
  onOpenDetails,
  blurred,
}) => {
  const onClick = useCallback(
    (item: WalletItem) => {
      onOpenDetails(item);
    },
    [onOpenDetails],
  );
  const { backgroundUpload } = useMyWalletPageContext();
  const { newItemDetail, noPhotoUploading, uploadingFromReceipt } =
    useWalletUploadContextProvider();
  const showSkeleton =
    (backgroundUpload.started && !!newItemDetail) ||
    noPhotoUploading ||
    uploadingFromReceipt;

  return (
    <div
      role="list"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 place-items-center relative"
    >
      {showSkeleton && <SkeletonCard />}
      {walletItems.map((item) => (
        <WalletItemDetail
          item={item}
          onClick={() => onClick(item)}
          key={item.id}
        />
      ))}
      {blurred && (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-100 opacity-80" />
      )}
    </div>
  );
};
