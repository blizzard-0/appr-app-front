/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { VerifiedIcon } from './icon/Verified';
import { Modal, AppButton, DockedButton } from '@/components/v2';
import { WalletItemProps } from '@/modules/landing/wallet/WalletProps';
import { formatter } from '@/utils/currency';

interface WalletItemsListProps {
  walletItemsData: WalletItemProps[];
}
export const WalletItems: React.FC<WalletItemsListProps> = ({
  walletItemsData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [activeWalletItem, setActiveWalletItem] = useState<WalletItemProps>(
    walletItemsData[0],
  );

  return (
    <>
      <section className="w-full md:w-small-container-tablet lg:w-small-container mx-auto relative pt-5 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 place-items-center relative">
          {walletItemsData.map((item: WalletItemProps) => (
            <WalletItem
              key={item.id}
              productImage={item.productImage.data.attributes.url}
              productName={item.productName}
              brandName={item.brandName}
              resalePrice={item.resalePrice}
              verified={item.verified}
              onClick={() => {
                setActiveWalletItem(item);
                setShowModal(true);
              }}
            />
          ))}
          {showModal ? (
            <WalletItemModal
              walletItem={activeWalletItem}
              active={true}
              onClose={() => setShowModal(false)}
            />
          ) : null}
        </div>
      </section>
    </>
  );
};

interface WalletItemListProps {
  brandName: string;
  productName: string;
  productImage: string;
  resalePrice: number;
  verified: boolean;
  onClick?: () => void;
}

export const WalletItem: React.FC<WalletItemListProps> = ({
  brandName,
  productName,
  productImage,
  resalePrice,
  verified,
  onClick,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="p-5 bg-white border-b md:border border-gray-300 md:border-white hover:border-gray-300 rounded-sm  transition-colors w-full md:w-72 relative gap-4 flex flex-row-reverse md:flex-col font-maison-neue-book text-gray-900 cursor-pointer justify-between"
      >
        <div className="relative w-40 h-[141px] md:w-[246px] md:h-[246px] bg-white overflow-hidden">
          <img
            src={productImage}
            alt={`${brandName}-${productName}`}
            className="flex-shrink-0 mx-auto w-40 md:w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          {verified ? (
            <div className="absolute right-1 top-1">
              <VerifiedIcon />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="overflow-hidden flex-1 flex flex-col md:flex-row justify-start md:justify-between items-start gap-2">
          <div className="flex flex-col gap-2 text-14-px leading-5 overflow-hidden w-full">
            <h4 className="font-maison-neue-demi truncate w-full">
              {brandName}
            </h4>
            <div className="truncate w-full">{productName}</div>
            <div className="truncate w-full">
              {formatter.format(resalePrice)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface WalletItemModalProps {
  walletItem: WalletItemProps;
  active: boolean;
  onClose: () => void;
}
export const WalletItemModal: React.FC<WalletItemModalProps> = ({
  walletItem,
  active,
  onClose,
}) => {
  return (
    <Modal.Base $show={active} onClose={onClose}>
      <Modal.Header $showClose onClose={onClose}>
        Item Details
      </Modal.Header>
      <Modal.Content className="p-5">
        <div className="">
          <div className="grid grid-cols-1 gap-6">
            <img
              className="w-full"
              src={walletItem.productImage.data.attributes.url}
              alt={walletItem.productName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 text-left pt-6">
          <div>
            <div className="flex text-gray-600 leading-5 font-maison-neue-book items-center mb-2">
              Brand
            </div>
            <div className="font-maison-neue-book font-medium text-gray-800 text-xl leading-6 tracking-wider break-words flex items-center">
              {walletItem.brandName}
            </div>
          </div>
          <div>
            <div className="flex text-gray-600 leading-5 font-maison-neue-book items-center mb-2">
              Product
            </div>
            <div className="font-maison-neue-book font-medium text-gray-800 text-xl leading-6 tracking-wider break-words flex items-center">
              {walletItem.productName}
            </div>
          </div>
          <div>
            <div className="flex text-gray-600 leading-5 font-maison-neue-book items-center mb-2">
              Coverage
            </div>
            <div className="font-maison-neue-book font-medium text-gray-800 text-xl leading-6 tracking-wider break-words flex items-center">
              {`${walletItem.coverage ? 'Covered' : 'Not Covered'} `}
            </div>
          </div>
          <div>
            <div className="flex text-gray-600 leading-5 font-maison-neue-book items-center mb-2">
              Retail Value
            </div>
            <div className="font-maison-neue-book font-medium text-gray-800 text-xl leading-6 tracking-wider break-words flex items-center">
              {formatter.format(walletItem.retailPrice)}
            </div>
          </div>
          <div>
            <div className="flex text-gray-600 leading-5 font-maison-neue-book items-center mb-2">
              Resale Value
            </div>
            <div className="font-maison-neue-book font-medium text-gray-800 text-xl leading-6 tracking-wider break-words flex items-center">
              {formatter.format(walletItem.resalePrice)}
            </div>
          </div>
        </div>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block $variant="secondary" onClick={onClose}>
            Close
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
