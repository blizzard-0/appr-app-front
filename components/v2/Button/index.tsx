import React, { ButtonHTMLAttributes } from 'react';
import { AppreciateStyledButton } from './Button.styled';

import { LoadingIcon } from './icon/Loading';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'pagination'
  | 'transparent';
export type ButtonSize = 'large' | 'small';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
  $block?: boolean;
  $loading?: boolean;
  $size?: ButtonSize;
}

export const AppButton: React.FC<ButtonProps> = ({
  $variant = 'primary',
  $block,
  $size = 'large',
  $loading,
  disabled,
  children,
  ...rest
}) => {
  return (
    <AppreciateStyledButton
      $variant={$variant}
      $block={$block || $variant === 'pagination'}
      disabled={disabled || $loading}
      $size={$size}
      {...rest}
    >
      {$loading ? <LoadingIcon /> : children}
    </AppreciateStyledButton>
  );
};
