import React from 'react';
import { ToastProps } from './types';
import { Wrapper, StyledButton, Content } from './Toast.styled';
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from './icons';

export const Toast: React.FC<ToastProps> = ({
  $variant,
  $showClose,
  $showIcon,
  children,
  onClose,
}) => {
  return (
    <Wrapper $variant={$variant} $showClose={$showClose} $showIcon={$showIcon}>
      {$showIcon &&
        {
          default: null,
          success: <SuccessIcon />,
          error: <ErrorIcon />,
          info: <InfoIcon />,
          alert: <WarningIcon />,
        }[$variant]}
      <Content>{children}</Content>
      {$showClose && (
        <StyledButton onClick={onClose}>
          <CloseIcon />
        </StyledButton>
      )}
    </Wrapper>
  );
};
