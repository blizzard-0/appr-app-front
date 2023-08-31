import {
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { PreUpload } from '../../image-upload/cloudinary';
import { WalletModalProvider } from './modal';
import { WalletUploadContextProvider } from './upload';

import { AppState, WalletPageQueryCurrentUser } from './types';
import {
  useMyWalletPage,
  useSortWallet,
  SortKey,
  SortOrderEnumType,
} from '../hooks';
import { AuthWrapper } from './wrapper';
import { ToastContextProvider } from '@/modules/toast';
import { ProgressToast } from '@/components/v2/ProgressToast';

type AppPreUpload = PreUpload | null;
export type BackgroundUpload = {
  started: boolean;
  progress: number;
  text: string;
};

type MyWalletPageState = {
  appState: AppState;
  loading: boolean;
  currentUser: WalletPageQueryCurrentUser | null;
  preUpload: AppPreUpload;
  backgroundUpload: BackgroundUpload;
  sort: SortKey;
  sortOrder: SortOrderEnumType;
};

type MyWalletPageAction = {
  setAppState: (s: AppState) => void;
  setPreUpload: (p: AppPreUpload) => void;
  setBackgroundUpload: (b: BackgroundUpload) => void;
  changeSortType: (t: SortKey) => void;
  changeSortDirection: () => void;
  updateBackgroundProgress: (p: number) => void;
  clearBackgroundProgress: () => void;
  startBackgroundProgress: (t: string) => void;
};

type MyWalletPageContextType = MyWalletPageState & MyWalletPageAction;

const DEFAULT_MY_WALLET_PAGE_CONTEXT: MyWalletPageContextType = {
  appState: 'MyWalletPage',
  loading: true,
  currentUser: null,
  preUpload: null,
  sort: 'date',
  sortOrder: SortOrderEnumType.Asc,
  backgroundUpload: {
    started: false,
    progress: 0,
    text: '',
  },
  setAppState: () => null,
  setPreUpload: () => null,
  setBackgroundUpload: () => null,
  changeSortDirection: () => null,
  changeSortType: () => null,
  updateBackgroundProgress: () => null,
  clearBackgroundProgress: () => null,
  startBackgroundProgress: () => null,
};

const MyWalletPageContext = createContext<MyWalletPageContextType>(
  DEFAULT_MY_WALLET_PAGE_CONTEXT,
);

interface MyWalletPageProviderProps {
  children: ReactNode;
}

export function MyWalletPageProvider({ children }: MyWalletPageProviderProps) {
  const [appState, setAppState] = useState<AppState>('MyWalletPage');
  const { loading, data } = useMyWalletPage();
  const [preUpload, setPreUpload] = useState<AppPreUpload>(null);
  const [backgroundUpload, setBackgroundUpload] = useState<BackgroundUpload>({
    progress: 0,
    started: false,
    text: '',
  });
  const { sort, sortOrder, changeSortDirection, changeSortType } =
    useSortWallet();

  const currentUser = useMemo<WalletPageQueryCurrentUser | null>(() => {
    if (!data) return null;
    if (data.currentUser.__typename !== 'CurrentUser') return null;
    return data.currentUser;
  }, [data]);

  const updateBackgroundProgress = useCallback((p: number) => {
    setBackgroundUpload((b) => ({
      ...b,
      progress: p,
    }));
  }, []);

  const clearBackgroundProgress = useCallback(() => {
    setBackgroundUpload({
      progress: 0,
      started: false,
      text: '',
    });
  }, []);

  const startBackgroundProgress = useCallback((t: string) => {
    setBackgroundUpload({
      progress: 0,
      started: true,
      text: t,
    });
  }, []);

  const contextValue = useMemo<MyWalletPageContextType>(() => {
    return {
      currentUser,
      loading,
      appState,
      preUpload,
      backgroundUpload,
      sort,
      sortOrder,
      setAppState,
      setPreUpload,
      setBackgroundUpload,
      changeSortDirection,
      changeSortType,
      updateBackgroundProgress,
      clearBackgroundProgress,
      startBackgroundProgress,
    };
  }, [
    changeSortDirection,
    changeSortType,
    updateBackgroundProgress,
    clearBackgroundProgress,
    startBackgroundProgress,
    currentUser,
    loading,
    appState,
    preUpload,
    backgroundUpload,
    sort,
    sortOrder,
  ]);

  return (
    <MyWalletPageContext.Provider value={contextValue}>
      <AuthWrapper>
        <WalletModalProvider>
          <WalletUploadContextProvider>
            <ToastContextProvider>
              {children}
              {backgroundUpload.started && (
                <ProgressToast
                  $progress={backgroundUpload.progress}
                  $text={backgroundUpload.text}
                />
              )}
            </ToastContextProvider>
          </WalletUploadContextProvider>
        </WalletModalProvider>
      </AuthWrapper>
    </MyWalletPageContext.Provider>
  );
}

export function useMyWalletPageContext() {
  return useContext(MyWalletPageContext);
}

export type { WalletPageQueryCurrentUser };
