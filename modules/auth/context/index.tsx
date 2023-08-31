import React, { useContext, createContext, useMemo } from 'react';

import { useCurrentUser } from '../hooks/useCurrentUser';
import { ProgressIndicator } from '@/components/v2';
import { AlreadyLoggedInModal } from '../Modals';

import { CurrentUser } from './types';

type AuthContextState = {
  currentUser: CurrentUser | null;
  loading: boolean;
};

type AuthContextType = AuthContextState;

const DEFAULT_AUTH_CONTEXT: AuthContextType = {
  currentUser: null,
  loading: false,
};

const AuthContext = createContext<AuthContextType>(DEFAULT_AUTH_CONTEXT);

interface AuthContextProviderProps {
  children?: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const { currentUser, loading } = useCurrentUser();
  const contextValue = useMemo<AuthContextType>(
    () => ({
      currentUser,
      loading,
    }),
    [currentUser, loading],
  );

  const innerChildren = useMemo(() => {
    if (loading) {
      return <ProgressIndicator active />;
    }
    return children;
  }, [loading, children]);

  return (
    <AuthContext.Provider value={contextValue}>
      <AlreadyLoggedInModal />
      {innerChildren}
    </AuthContext.Provider>
  );
};

export const useAuthContextProvider = () => {
  return useContext(AuthContext);
};
