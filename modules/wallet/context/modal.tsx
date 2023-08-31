import React, { createContext, useContext, useMemo, useState } from 'react';
import { WalletItem } from '../context/types';

export type WalletModalItem = WalletItem | null;

type WalletModalContextState = {
  addReceipt: boolean;
  viewReceipt: boolean;
  requestProtection: boolean;
  confirmDeleteOpened: boolean;
  showGmailSyncModal: boolean;
  viewDetail: boolean;
  walletItem: WalletModalItem;
  showRequestDoneModal: boolean;
  coverageInformation: boolean;
};

type WalletModalContextAction = {
  setWalletItem: (w: WalletModalItem) => void;
  setConfirmDeleteOpened: (c: boolean) => void;
  setAddReceipt: (r: boolean) => void;
  setViewReceipt: (r: boolean) => void;
  setRequestProtection: (r: boolean) => void;
  setCoverageInformation: (r: boolean) => void;
  setShowRequestDoneModal: (r: boolean) => void;
  setShowGmailSyncModal: (r: boolean) => void;
  setViewDetail: (v: boolean) => void;
};

type WalletModalContextType = WalletModalContextState &
  WalletModalContextAction;

const DEFAULT_WALLET_MODAL_CONTEXT: WalletModalContextType = {
  walletItem: null,
  confirmDeleteOpened: false,
  addReceipt: false,
  viewReceipt: false,
  requestProtection: false,
  showGmailSyncModal: false,
  viewDetail: false,
  showRequestDoneModal: false,
  coverageInformation: false,
  setWalletItem: () => null,
  setConfirmDeleteOpened: () => null,
  setAddReceipt: () => null,
  setViewReceipt: () => null,
  setRequestProtection: () => null,
  setCoverageInformation: () => null,
  setShowRequestDoneModal: () => null,
  setShowGmailSyncModal: () => null,
  setViewDetail: () => null,
};

const WalletModalContext = createContext<WalletModalContextType>(
  DEFAULT_WALLET_MODAL_CONTEXT,
);

interface WalletModalProviderProps {
  children?: React.ReactNode;
}

export const WalletModalProvider: React.FC<WalletModalProviderProps> = ({
  children,
}) => {
  const [walletItem, setWalletItem] = useState<WalletModalItem>(null);
  const [confirmDeleteOpened, setConfirmDeleteOpened] = useState(false);
  const [addReceipt, setAddReceipt] = useState(false);
  const [viewReceipt, setViewReceipt] = useState(false);
  const [requestProtection, setRequestProtection] = useState(false);
  const [showGmailSyncModal, setShowGmailSyncModal] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [showRequestDoneModal, setShowRequestDoneModal] = useState(false);
  const [coverageInformation, setCoverageInformation] = useState(false);

  const contextValue = useMemo<WalletModalContextType>(() => {
    return {
      walletItem,
      confirmDeleteOpened,
      addReceipt,
      viewReceipt,
      requestProtection,
      showGmailSyncModal,
      viewDetail,
      showRequestDoneModal,
      coverageInformation,
      setCoverageInformation,
      setShowRequestDoneModal,
      setWalletItem,
      setConfirmDeleteOpened,
      setAddReceipt,
      setViewReceipt,
      setRequestProtection,
      setShowGmailSyncModal,
      setViewDetail,
    };
  }, [
    walletItem,
    confirmDeleteOpened,
    addReceipt,
    viewReceipt,
    requestProtection,
    showGmailSyncModal,
    viewDetail,
    showRequestDoneModal,
    coverageInformation,
  ]);

  return (
    <WalletModalContext.Provider value={contextValue}>
      {children}
    </WalletModalContext.Provider>
  );
};

export const useWalletModalContext = () => {
  return useContext(WalletModalContext);
};
