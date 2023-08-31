import React from 'react';
import { WalletItem } from '../../../../../context/types';
import { WalletItem as WalletItemCard } from '@/components/v2';
import { formatter } from '../../../../../../../utils/currency';
import { RECEIPT_PLACEHOLDER_URL } from '../../../../../../../consts/consts';

interface WalletItemDetailProps {
  item: WalletItem;
  onClick: () => void;
}

export const WalletItemDetail: React.FC<WalletItemDetailProps> = ({
  item,
  onClick,
}) => {
  const identified = item.__typename === 'IdentifiedWalletItem';

  const walletItemImageUrl =
    item.__typename === 'UnidentifiedWalletItem' &&
    item.hasReceiptUpload &&
    !item.unidentifiedProductName
      ? RECEIPT_PLACEHOLDER_URL
      : item.image.url;

  return (
    <>
      {item.__typename === 'UnidentifiedWalletItem' && (
        <WalletItemCard
          image={walletItemImageUrl}
          brandName={item.unidentifiedBrandName || `-`}
          productName={item.unidentifiedProductName || 'Pending...'}
          priceLabel="-"
          visibility={item.visibility}
          identified={identified}
          onClick={onClick}
          protection={item.protectionState}
          hasReceipt={item.hasReceiptUpload}
        />
      )}
      {item.__typename === 'IdentifiedWalletItem' && (
        <WalletItemCard
          image={item.image.url}
          brandName={item.product.brand.name}
          productName={item.product.name}
          priceLabel={formatter.format(item.product.currentResalePrice.amount)}
          visibility={item.visibility}
          identified={identified}
          badges={item.product.badges}
          onClick={onClick}
          protection={item.protectionState}
          hasReceipt={item.hasReceiptUpload}
        />
      )}
    </>
  );
};
