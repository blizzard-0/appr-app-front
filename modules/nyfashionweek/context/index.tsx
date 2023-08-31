import React, { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProgressIndicator } from '@/components/v2';
import { routes } from '@/modules/routes';
import { useCurrentUser } from '@/modules/auth/hooks';
import { CurrentUser } from '@/modules/auth/context/types';

export type NyfashionweekStep =
  | 'Idle'
  | 'Camera'
  | 'Verifying'
  | 'Success'
  | 'Error';

export type ResultData = {
  id: string;
  celebrityName: string;
  image: any;
};

type NyfashionweekContextType = {
  step: NyfashionweekStep;
  currentUser: CurrentUser | null;
  setStep: (s: NyfashionweekStep) => void;
  successResult: ResultData;
  setSuccessResult: React.Dispatch<React.SetStateAction<ResultData>>;
  showRules: boolean;
  setShowRules: (s: boolean) => void;
  errorMessage: string;
  setErrorMessage: (s: string) => void;
};

const DEFAULT_NYFASHIONWEEK_CONTEXT: NyfashionweekContextType = {
  step: 'Idle',
  currentUser: null,
  setStep: () => null,
  successResult: {
    id: '',
    celebrityName: '',
    image: '',
  },
  setSuccessResult: () => null,
  showRules: false,
  setShowRules: () => null,
  errorMessage: '',
  setErrorMessage: () => null,
};

const NyfashionweekContext = createContext<NyfashionweekContextType>(
  DEFAULT_NYFASHIONWEEK_CONTEXT,
);

interface NyfashionweekContextProviderProps {
  children?: React.ReactNode;
}

export const NyfashionweekContextProvider: React.FC<NyfashionweekContextProviderProps> =
  ({ children }) => {
    const router = useRouter();
    const { currentUser, loading: authLoading } = useCurrentUser();
    const [step, setStep] = useState<NyfashionweekStep>('Idle');
    const [successResult, setSuccessResult] = useState({
      celebrityName: 'Zendaya',
      id: '',
      image: '/wallet/avatar/zendaya.jpeg',
    });
    const [showRules, setShowRules] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    if (authLoading) {
      return <ProgressIndicator active />;
    }

    if (!currentUser) {
      router.push(routes.appFrontend.myWallet.fillPath(null));
      return null;
    }

    return (
      <NyfashionweekContext.Provider
        value={{
          step,
          currentUser,
          setStep,
          successResult,
          setSuccessResult,
          showRules,
          setShowRules,
          errorMessage,
          setErrorMessage,
        }}
      >
        {children}
      </NyfashionweekContext.Provider>
    );
  };

export const useNyfashionweekContext = () => {
  return useContext(NyfashionweekContext);
};
