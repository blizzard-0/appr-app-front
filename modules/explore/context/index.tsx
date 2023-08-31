import { useContext, createContext, ReactNode, useMemo } from 'react';

import { WalletPageQueryCurrentUser } from '../../wallet/context/types';
import { useMyWalletPage } from '../../wallet/hooks';
import { ToastContextProvider } from '@/modules/toast';

type ExplorePageState = {
  currentUser: WalletPageQueryCurrentUser | null;
  loading: boolean;
};

type ExplorePageContextType = ExplorePageState;

const DEFAULT_EXPLORE_PAGE_CONTEXT: ExplorePageContextType = {
  currentUser: null,
  loading: false,
};

const ExplorePageContext = createContext<ExplorePageContextType>(
  DEFAULT_EXPLORE_PAGE_CONTEXT,
);

interface ExplorePageProviderProps {
  children: ReactNode;
}

export function ExplorePageProvider({ children }: ExplorePageProviderProps) {
  const { loading, data } = useMyWalletPage();

  const currentUser = useMemo<WalletPageQueryCurrentUser | null>(() => {
    if (!data) return null;
    if (data.currentUser.__typename !== 'CurrentUser') return null;
    return data.currentUser;
  }, [data]);

  const contextValue = useMemo<ExplorePageContextType>(() => {
    return {
      currentUser,
      loading,
    };
  }, [currentUser, loading]);

  return (
    <ExplorePageContext.Provider value={contextValue}>
      <ToastContextProvider>{children}</ToastContextProvider>
    </ExplorePageContext.Provider>
  );
}

export function useExplorePageContext() {
  return useContext(ExplorePageContext);
}

export type { WalletPageQueryCurrentUser };
