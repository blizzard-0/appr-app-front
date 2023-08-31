import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import ToastMessage from './Message';
import { v4 as uuidv4 } from 'uuid';

const TOAST_CONTAINER_ID = 'toast-container';

type TostMessageType = 'Info' | 'Success' | 'Warning' | 'Error';

export type Toast = {
  id: string;
  message: string | React.ReactNode;
  type?: TostMessageType;
  options: ToastOptions;
};

const DEFAULT_DISMISS_TIMEOUT = 3000;

export type ToastOptions = {
  duration?: number;
  hideIcon?: boolean;
  autoClose?: boolean;
};

export const useToast = () => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);
  const [pageRendered, setPageRendered] = useState(false);

  const push = (
    message: string,
    type: TostMessageType,
    options?: ToastOptions,
  ) => {
    const newToast: Toast = {
      id: uuidv4(),
      message: message,
      type: type,
      options: {
        duration: options?.duration || DEFAULT_DISMISS_TIMEOUT,
        hideIcon: options?.hideIcon === undefined ? true : options?.hideIcon,
        autoClose: options?.autoClose === undefined ? true : options?.autoClose,
      },
    };

    setToasts((prevState) => [...prevState, newToast]);
  };

  /**
   * Made these push functions as callback functions with no dependencies so that they are only created when the page is mounted
   * If we don't wrap them with useCallback, it will be created whenever the component we are using this hooks is re-rendered
   */
  const pushError = useCallback(
    (message: string, options?: ToastOptions) =>
      push(message, 'Error', options),
    [],
  );

  const pushWarning = useCallback(
    (message: string, options?: ToastOptions) =>
      push(message, 'Warning', options),
    [],
  );

  const pushSuccess = useCallback(
    (message: string, options?: ToastOptions) =>
      push(message, 'Success', options),
    [],
  );

  const pushInfo = useCallback(
    (message: string, options?: ToastOptions) => push(message, 'Info', options),
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevState) => prevState.filter((e) => e.id != id));
  }, []);

  const toastElement = useMemo(() => {
    if (!pageRendered) {
      return null;
    }
    const CONTAINER_ELEM = document.getElementById(TOAST_CONTAINER_ID);
    if (!CONTAINER_ELEM) {
      return null;
    }

    return createPortal(
      <>
        {toasts.map((toast, index) => {
          return (
            <div
              key={toast.id}
              className={clsx(
                'flex w-full',
                'transform transition-all duration-300 pointer-events-auto',
                index === 0 ? '' : 'mb-2',
              )}
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                onRemove={removeToast}
                options={toast.options}
              />
            </div>
          );
        })}
      </>,
      CONTAINER_ELEM,
    );
  }, [toasts, removeToast, pageRendered]);

  useEffect(() => {
    setPageRendered(true);

    return () => {
      setPageRendered(false);
    };
  }, []);

  return {
    pushError,
    pushInfo,
    pushSuccess,
    pushWarning,
    toastElement,
  };
};
