import React, { useContext, createContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useUnboxingExperience, IdentifiedUnboxingItem } from '../hooks';
import { ProgressIndicator } from '@/components/v2';
import { routes } from '@/modules/routes';
import { useCurrentUser } from '@/modules/auth/hooks';
import { CurrentUser } from '@/modules/auth/context/types';

type CredentialStep = 'Information' | 'Playing' | 'Confirmation';

type UnboxingContextType = {
  step: CredentialStep;
  identifiedItems: IdentifiedUnboxingItem[];
  currentUser: CurrentUser | null;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setStep: (s: CredentialStep) => void;
};

const DEFAULT_UNBOXING_CONTEXT: UnboxingContextType = {
  step: 'Information',
  identifiedItems: [],
  currentUser: null,
  currentIndex: 0,
  setCurrentIndex: () => null,
  setStep: () => null,
};

const UnboxingContext = createContext<UnboxingContextType>(
  DEFAULT_UNBOXING_CONTEXT,
);

interface UnboxingCOntextProviderProps {
  children?: React.ReactNode;
  receiptId: string;
}

export const UnboxingContextProvider: React.FC<UnboxingCOntextProviderProps> =
  ({ children, receiptId }) => {
    const { loading, identifiedWalletItems } = useUnboxingExperience(receiptId);
    const router = useRouter();
    const { currentUser, loading: authLoading } = useCurrentUser();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState<CredentialStep>('Information');

    if (loading || authLoading) {
      return <ProgressIndicator active />;
    }

    if (identifiedWalletItems.length === 0 || !currentUser) {
      router.push(routes.appFrontend.myWallet.fillPath(null));
      return null;
    }

    return (
      <UnboxingContext.Provider
        value={{
          identifiedItems: identifiedWalletItems,
          step,
          currentUser,
          currentIndex,
          setCurrentIndex,
          setStep,
        }}
      >
        {children}
      </UnboxingContext.Provider>
    );
  };

export const useUnboxingContext = () => {
  return useContext(UnboxingContext);
};
