/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo, useCallback } from 'react';
import {
  Modal,
  DockedButton,
  AppButton,
  Lockup,
  AppListbox,
  BadgeList,
  LinkButton,
} from '@/components/v2';

import { formatter } from '@/utils/currency';
import {
  ProductSearch,
  SearchResult,
} from '../../MyWalletPage/Sections/WalletPage/components/ProductSearch';
import { updateUnverifiedItemCacheUpdate } from '../../MyWalletPage/utils/cache';
import {
  useUpdateItem_Mutation,
  WalletItemVisibilityEnumType,
} from '@/generated/graphql';
import { useChangeItemVisibility, SHARING_OPTIONS } from '../../hooks';
import { useWalletModalContext } from '../../context/modal';
import { getCredentialText, getProtectionText } from '../../../../utils/item';
import { useToastContext } from '@/modules/toast';

export const DetailsModal: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const { changeItemVisibility } = useChangeItemVisibility();
  const { pushSuccess, pushError } = useToastContext();
  const {
    viewDetail,
    setViewDetail,
    walletItem,
    setWalletItem,
    setConfirmDeleteOpened,
    setAddReceipt,
    setViewReceipt,
    setRequestProtection,
    setCoverageInformation,
  } = useWalletModalContext();

  const [sharing, setSharing] = useState<WalletItemVisibilityEnumType>(
    walletItem ? walletItem.visibility : WalletItemVisibilityEnumType.Private,
  );

  const onProductSearchComplete = (searchResult: SearchResult) => {
    setBrand(searchResult.brandLabel);
    setProduct(searchResult.productLabel);
  };

  const [updateItem] = useUpdateItem_Mutation({
    update(cache, { data }) {
      updateUnverifiedItemCacheUpdate(cache, data);
    },
  });

  const handleSave = async () => {
    if (!walletItem) return;
    const result = await updateItem({
      variables: {
        input: {
          id: walletItem.id,
          unidentifiedBrandName: brand,
          unidentifiedProductName: product,
          sharing:
            sharing === WalletItemVisibilityEnumType.Private ? false : true,
        },
      },
    });
    if (result) {
      setViewDetail(false);
      setTimeout(() => {
        setWalletItem(null);
      }, 250);
    }
  };

  const handleChangeShareOption = useCallback(
    async (option: WalletItemVisibilityEnumType) => {
      if (!walletItem) return;
      setSharing(option);
      try {
        const message = await changeItemVisibility(option, walletItem.id);
        pushSuccess(message);
      } catch (err) {
        pushError('Something went wrong.');
      }
    },
    [changeItemVisibility, pushError, pushSuccess, walletItem],
  );

  const canSubmit = useMemo(() => {
    if (!walletItem) return false;
    if (walletItem.__typename === 'IdentifiedWalletItem') {
      return true;
    } else if (brand && product) {
      if (
        brand !== walletItem.unidentifiedBrandName ||
        product !== walletItem.unidentifiedProductName
      ) {
        return true;
      }
    }
    return false;
  }, [brand, product, walletItem]);

  const modalInnerContent = useMemo(() => {
    if (!walletItem) return null;
    const { protectionState, hasReceiptUpload, image } = walletItem;
    return (
      <div className="grid grid-cols-1 gap-6">
        <div>
          <img src={image.url} alt="wallet item image" className="w-full" />
        </div>
        {walletItem.__typename === 'UnidentifiedWalletItem' && (
          <>
            <div>
              <ProductSearch
                onComplete={onProductSearchComplete}
                initialValues={{
                  brandLabel: walletItem.unidentifiedBrandName as string,
                  productLabel: walletItem.unidentifiedProductName as string,
                }}
                isUpdatingWallet
              />
            </div>
            <div className="flex justify-between items-end">
              <Lockup label="Credential">
                {getCredentialText(walletItem)}
              </Lockup>
              {hasReceiptUpload && (
                <LinkButton
                  onClick={() => {
                    setViewDetail(false);
                    setTimeout(() => {
                      setViewReceipt(true);
                    }, 500);
                  }}
                >
                  View receipt
                </LinkButton>
              )}
              {!hasReceiptUpload && (
                <AppButton
                  $size="small"
                  onClick={() => {
                    setViewDetail(false);
                    setTimeout(() => {
                      setAddReceipt(true);
                    }, 500);
                  }}
                >
                  Attach receipt
                </AppButton>
              )}
            </div>
          </>
        )}
        {walletItem.__typename === 'IdentifiedWalletItem' && (
          <>
            <Lockup label="Brand">{walletItem.product.brand.name}</Lockup>
            <Lockup label="Product">{walletItem.product.name}</Lockup>
            <div className="flex justify-between items-end">
              <div>
                <Lockup label="Coverage">
                  {getProtectionText(walletItem)}
                </Lockup>
              </div>
              {protectionState !== 'requested' &&
                protectionState !== 'protected' && (
                  <AppButton
                    $size="small"
                    onClick={() => {
                      setViewDetail(false);
                      setTimeout(() => {
                        setRequestProtection(true);
                      }, 500);
                    }}
                  >
                    Request coverage
                  </AppButton>
                )}
              {protectionState === 'requested' && (
                <LinkButton
                  onClick={() => {
                    setViewDetail(false);
                    setTimeout(() => {
                      setCoverageInformation(true);
                    }, 500);
                  }}
                >
                  Learn more
                </LinkButton>
              )}
            </div>
            <div className="flex justify-between items-end">
              <Lockup label="Credential">
                {getCredentialText(walletItem)}
              </Lockup>
              {hasReceiptUpload && (
                <LinkButton
                  onClick={() => {
                    setViewDetail(false);
                    setTimeout(() => {
                      setViewReceipt(true);
                    }, 500);
                  }}
                >
                  View receipt
                </LinkButton>
              )}
              {!hasReceiptUpload && (
                <AppButton
                  $size="small"
                  onClick={() => {
                    setViewDetail(false);
                    setTimeout(() => {
                      setAddReceipt(true);
                    }, 500);
                  }}
                >
                  Attach receipt
                </AppButton>
              )}
            </div>
            <Lockup label="Resale Value">
              {formatter.format(walletItem.product.currentResalePrice.amount)}
            </Lockup>
            {walletItem.product.badges.length > 0 && (
              <BadgeList badges={walletItem.product.badges} />
            )}
          </>
        )}
        {walletItem.__typename === 'IdentifiedWalletItem' && (
          <Lockup label="Sharing">
            <AppListbox
              options={SHARING_OPTIONS}
              value={sharing}
              onChange={(value) =>
                handleChangeShareOption(value as WalletItemVisibilityEnumType)
              }
            />
          </Lockup>
        )}
        <LinkButton onClick={() => setConfirmDeleteOpened(true)}>
          Remove item
        </LinkButton>
      </div>
    );
  }, [
    walletItem,
    sharing,
    setViewDetail,
    setViewReceipt,
    setAddReceipt,
    setRequestProtection,
    setCoverageInformation,
    handleChangeShareOption,
    setConfirmDeleteOpened,
  ]);

  const onClose = () => {
    setViewDetail(false);
    setTimeout(() => {
      setWalletItem(null);
    }, 100);
  };

  return (
    <Modal.Base $fullscreen $show={viewDetail} onClose={onClose}>
      <Modal.Header $showClose onClose={onClose}>
        Item Details
      </Modal.Header>
      <Modal.Content className="p-5">{modalInnerContent}</Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={handleSave} disabled={!canSubmit}>
            Save
          </AppButton>
          <AppButton $block $variant="secondary" onClick={onClose}>
            Close
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
