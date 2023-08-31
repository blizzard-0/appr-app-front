import React, { useContext, createContext, useMemo } from 'react';

type ProfileContextState = {
  loading: boolean;
};

type ProfileContextType = ProfileContextState;

const DEFAULT_PROFILE_CONTEXT: ProfileContextType = {
  loading: false,
};

const ProfileContext = createContext<ProfileContextType>(
  DEFAULT_PROFILE_CONTEXT,
);

interface ProfileContextProviderProps {
  children?: React.ReactNode;
}

export const ProfileContextProvider: React.FC<ProfileContextProviderProps> = ({
  children,
}) => {
  const contextValue = useMemo<ProfileContextType>(
    () => ({
      loading: false,
    }),
    [],
  );

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContextProvider = () => {
  return useContext(ProfileContext);
};
