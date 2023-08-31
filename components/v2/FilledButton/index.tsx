import React from 'react';
import { StyledButton } from './FilledButton.styled';
import { FilledButtonProps } from './types';
import { LoadingIcon } from './icon/Loading';

export const FilledButton: React.FC<FilledButtonProps> = ({
  $block,
  $size = 'large',
  $loading,
  $color,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $color={$color}
      $block={$block}
      disabled={disabled || $loading}
      $size={$size}
      {...rest}
    >
      {$loading ? <LoadingIcon /> : children}
    </StyledButton>
  );
};
