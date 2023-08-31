import React, { ButtonHTMLAttributes } from 'react';

import { StyledIconButton } from './IconButton.styled';

export type IconButtonVariant = 'action' | 'modal';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $wide?: boolean;
  $variant?: IconButtonVariant;
  $outline?: boolean;
  $iconLeft?: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  $wide = false,
  $variant = 'action',
  $outline = true,
  disabled,
  $iconLeft,
  ...rest
}) => {
  return (
    <StyledIconButton
      $wide={$wide}
      $variant={$variant}
      $outline={$outline}
      disabled={disabled}
      {...rest}
    >
      {$iconLeft && <span>{$iconLeft}</span>}
      {children}
    </StyledIconButton>
  );
};
