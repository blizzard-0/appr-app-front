import { useContext, createContext, ReactNode, useMemo } from 'react';
import { useToast, ToastOptions } from '../../components/Toast';

type ToastFunc = (msg: string, options?: ToastOptions) => void;

type ToastAction = {
  pushSuccess: ToastFunc;
  pushError: ToastFunc;
  pushInfo: ToastFunc;
  pushWarning: ToastFunc;
};

type ToastContextType = ToastAction;

const DEFAULT_TOAST_CONTEXT: ToastContextType = {
  pushError: () => null,
  pushSuccess: () => null,
  pushInfo: () => null,
  pushWarning: () => null,
};

const ToastContext = createContext<ToastContextType>(DEFAULT_TOAST_CONTEXT);

interface ToastContextProviderProps {
  children: ReactNode;
}

export function ToastContextProvider({ children }: ToastContextProviderProps) {
  const { pushError, pushSuccess, pushInfo, pushWarning, toastElement } =
    useToast();

  const contextValue = useMemo<ToastContextType>(() => {
    return {
      pushError,
      pushSuccess,
      pushInfo,
      pushWarning,
    };
  }, [pushSuccess, pushError, pushInfo, pushWarning]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toastElement}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToastContext);
}
