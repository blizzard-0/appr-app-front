import React, { useEffect } from 'react';
import { Toast } from './Provider';
import clsx from 'clsx';

import CloseIcon from './icons/CloseIcon';
import SuccessIcon from './icons/SuccessIcon';
import InfoIcon from './icons/InfoIcon';
import WarningIcon from './icons/WarningIcon';
import ErrorIcon from './icons/ErrorIcon';

const VARIANTS = {
  Info: {
    base: 'bg-info',
    iconstyle: 'text-white ',
    icon: <InfoIcon />,
  },

  Error: {
    base: 'bg-error',
    iconstyle: 'text-red-500 ',
    icon: <ErrorIcon />,
  },

  Warning: {
    base: 'bg-warning',
    iconstyle: 'text-yellow-500 ',
    icon: <WarningIcon />,
  },

  Success: {
    base: 'bg-success',
    iconstyle: 'text-green-500 ',
    icon: <SuccessIcon />,
  },
};

export type ToastMessageType = {
  id: string;
  variant?: keyof typeof VARIANTS | undefined;
  onRemove?: (id: string) => void;
} & Toast;

const ToastMessage = ({
  id,
  message,
  onRemove,
  type,
  options,
}: ToastMessageType) => {
  const MESSAGE_STYLE = type
    ? VARIANTS[type]
    : {
        base: 'bg-success',
        iconstyle: '',
        icon: <></>,
      };

  const { duration, autoClose, hideIcon } = options;
  const MESSAGE_COLOR = type === 'Warning' ? 'text-black' : 'text-white';
  const TEXT_ALIGN = autoClose && hideIcon ? 'text-center' : 'text-left';
  const MESSAGE_PADDING = hideIcon ? 'px-6 py-4' : 'p-6';

  useEffect(() => {
    if (autoClose && duration && onRemove) {
      setTimeout(() => {
        onRemove(id);
      }, duration);
    }
  }, [duration, autoClose, id, onRemove]);

  return (
    <div
      className={clsx(
        'flex w-full md:w-auto md:max-w-full mx-auto visible flex-row shadow-lg',
        'rounded-sm duration-100 cursor-pointer',
        MESSAGE_STYLE.base,
      )}
    >
      <div
        className={clsx('flex flex-row flex-no-wrap w-full', MESSAGE_PADDING)}
      >
        {!hideIcon && (
          <div
            className={clsx(
              'flex items-center h-6 w-6',
              'mx-auto mr-4 select-none',
            )}
          >
            {MESSAGE_STYLE.icon}
          </div>
        )}

        <div className="flex flex-col flex-no-wrap w-full">
          <p
            className={clsx(
              'break-all flex-1 w-full font-book',
              'text-sm leading-6',
              TEXT_ALIGN,
              MESSAGE_COLOR,
            )}
          >
            {message}
          </p>
        </div>
        {!autoClose && (
          <div
            onClick={() => onRemove && onRemove(id)}
            className={clsx(
              'w-6 h-6 items-center mx-auto ml-4',
              'text-center leading-none text-lg',
              MESSAGE_COLOR,
            )}
            data-testid="toast-close"
          >
            <CloseIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToastMessage;
