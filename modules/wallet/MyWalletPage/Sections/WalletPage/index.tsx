import { useState, useRef, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Dropzone } from '@/components/Dropzone';
import { useSticky } from '@/hooks/useSticky';
import { AppButton } from '@/components/v2';
import {
  WalletPageQueryCurrentUser,
  useMyWalletPageContext,
} from '../../../context';
import { useWalletModalContext } from '../../../context/modal';
import { useMyWalletPage, useDraftWalletItem } from '../../../hooks';
import {
  WalkthroughStep,
  WALKTHROUGH_STEPS,
  Welcome,
  UserDetailsSection,
  Walkthrough,
  WalletToolbarSection,
  WalletItemList,
} from './components';
import { loadMoreItemsCacheUpdate } from '../../utils/cache';
import GmailSyncModal from '@/modules/wallet/Modal/GmailSyncModal';
import {
  AddReceiptModal,
  DetailsModal,
  DeleteItemModal,
  ProtectionModal,
  ViewReceiptModal,
  DoneCoverageRequest,
  CoverageInformation,
} from '../../../Modals';
import { useWalletUploadContextProvider } from '@/modules/wallet/context/upload';
import { Placeholder } from './components/Placeholder';

export const MyWalletPageInner: React.FC<{
  currentUser: WalletPageQueryCurrentUser;
}> = ({ currentUser }) => {
  const {
    loading: loadingMyWalletPage,
    sort,
    sortOrder,
    setAppState,
    backgroundUpload,
  } = useMyWalletPageContext();
  const { setWalletItem, setShowGmailSyncModal, setViewDetail } =
    useWalletModalContext();
  const { handleDrop, preUpload } = useWalletUploadContextProvider();
  const { fetchMore } = useMyWalletPage();
  const [visible, setVisible] = useState(true);
  const userDetailsSticker = useRef<HTMLDivElement>(null);
  const actionsSticker = useRef<HTMLDivElement>(null);
  const { visibleIndex } = useSticky([userDetailsSticker, actionsSticker]);
  const [appWalkthrough, setAppWalkthrough] = useState<WalkthroughStep>();
  const [loadingMore, setLoadingMore] = useState(false);
  const dropzoneRef = useRef<HTMLDivElement>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/jpeg, image/png, image/gif',
    multiple: false,
  });

  const {
    getRootProps: getRootWalletProps,
    getInputProps: getInputWalletProps,
    isDragActive: isDragActiveWallet,
  } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/jpeg, image/png, image/gif',
    multiple: false,
  });

  const handleFetchMore = useCallback(async () => {
    const { items } = currentUser.defaultWallet;
    setLoadingMore(true);
    try {
      await fetchMore({
        variables: {
          sort: {
            [sort]: sortOrder,
          },
          offset: items.paginated.length,
        },
        updateQuery(prev, { fetchMoreResult }) {
          return loadMoreItemsCacheUpdate(prev, fetchMoreResult);
        },
      });
    } finally {
      setLoadingMore(false);
    }
  }, [fetchMore, currentUser, sort, sortOrder]);

  useEffect(() => {
    if (
      currentUser.userSettings.welcomeExperienceShown === false &&
      !preUpload &&
      !appWalkthrough &&
      currentUser.defaultWallet.items.paginated &&
      currentUser.defaultWallet.items.paginated.length > 0
    ) {
      setAppWalkthrough(
        currentUser.defaultWallet.items.paginated.length > 1
          ? WALKTHROUGH_STEPS.SHOW_ADD_BUTTON
          : WALKTHROUGH_STEPS.SHOW_WALLET_ITEM,
      );
    }
  }, [
    currentUser.userSettings.welcomeExperienceShown,
    preUpload,
    appWalkthrough,
    currentUser.defaultWallet.items.paginated,
  ]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('gmail_sync')) {
      setShowGmailSyncModal(true);
    }
  }, [setShowGmailSyncModal]);

  const { defaultWallet } = currentUser;

  useDraftWalletItem();

  return (
    <div className="pb-16">
      {!currentUser.userSettings.welcomeExperienceShown &&
        !preUpload &&
        !appWalkthrough &&
        currentUser.defaultWallet.items.paginated.length === 0 && (
          <Welcome
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            name={currentUser.fullName}
            onSkip={() => setVisible(false)}
            active={backgroundUpload.started ? false : visible}
          />
        )}
      <AddReceiptModal />
      <DetailsModal />
      <ViewReceiptModal />
      <ProtectionModal />
      <CoverageInformation />
      <DeleteItemModal />
      <GmailSyncModal />
      <DoneCoverageRequest />
      <UserDetailsSection
        ref={userDetailsSticker}
        stickyVisible={visibleIndex === 0}
      />
      {defaultWallet.items.paginated.length > 0 && (
        <div className="w-full md:w-small-container-tablet lg:w-small-container mx-auto relative">
          <Walkthrough step={appWalkthrough} setStep={setAppWalkthrough} />
          <Dropzone
            getInputProps={getInputProps}
            getRootProps={getRootProps}
            isDragActive={false}
          >
            <div ref={dropzoneRef}></div>
          </Dropzone>
          <WalletToolbarSection
            walkthrough={appWalkthrough}
            stickyVisible={visibleIndex === 1}
            ref={actionsSticker}
          />
          <WalletItemList
            walletItems={defaultWallet.items.paginated}
            onOpenDetails={(item) => {
              setViewDetail(true);
              setWalletItem(item);
            }}
            blurred={appWalkthrough === WALKTHROUGH_STEPS.SHOW_ADD_BUTTON}
          />
          {defaultWallet.items.hasNext && (
            <div className="mt-4">
              <AppButton
                $variant="pagination"
                $loading={loadingMyWalletPage || loadingMore}
                disabled={!defaultWallet.items.hasNext}
                onClick={handleFetchMore}
              >
                Load more ...
              </AppButton>
            </div>
          )}
        </div>
      )}
      {!defaultWallet.items.paginated.length && !visible && (
        <div className="w-full md:w-small-container-tablet lg:w-small-container mx-auto relative">
          <Walkthrough step={appWalkthrough} setStep={setAppWalkthrough} />
          <WalletToolbarSection
            walkthrough={appWalkthrough}
            stickyVisible={visibleIndex === 1}
            ref={actionsSticker}
          />
          <WalletItemList
            walletItems={defaultWallet.items.paginated}
            onOpenDetails={(item) => {
              setViewDetail(true);
              setWalletItem(item);
            }}
            blurred={appWalkthrough === WALKTHROUGH_STEPS.SHOW_ADD_BUTTON}
          />
          <div className="flex flex-col items-center justify-center mt-12">
            <Placeholder />
            <h1 className="mt-6 mb-4 font-maison-neue-book text-xl">
              Build your collection
            </h1>
            <a
              className="cursor-pointer text-base font-maison-neue-medium leading-snug text-dark-blue"
              onClick={() => setAppState('WEXAddWallet')}
            >
              Add an item now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
