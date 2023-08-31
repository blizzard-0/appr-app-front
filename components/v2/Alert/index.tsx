import React, { HTMLAttributes } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/outline';

import { StyledAlert, StyledIcon } from './Alert.styled';

type AlertVariantType = 'success' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  $variant: AlertVariantType;
}

export const Alert: React.FC<AlertProps> = ({
  $variant,
  children,
  ...rest
}) => {
  return (
    <StyledAlert $variant={$variant} {...rest} role="alert">
      <StyledIcon $variant={$variant}>
        {$variant === 'error' ? (
          <XCircleIcon width={20} height={20} />
        ) : (
          <CheckCircleIcon width={20} height={20} />
        )}
      </StyledIcon>
      {children}
    </StyledAlert>
  );
};
