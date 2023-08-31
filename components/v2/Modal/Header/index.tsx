import React, { HTMLAttributes } from 'react';

import {
  StyledModalHeader,
  StyledModalCloseButton,
  StyledBorder,
} from './Header.styled';
import { CloseIcon } from './icon/CloseIcon';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  $showClose?: boolean;
  $hideBorder?: boolean;
  onClose?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  $showClose,
  $hideBorder,
  onClose,
  ...rest
}) => {
  return (
    <>
      <StyledModalHeader $showClose={$showClose} {...rest}>
        {children}
        {$showClose && (
          <StyledModalCloseButton onClick={onClose}>
            <CloseIcon />
          </StyledModalCloseButton>
        )}
      </StyledModalHeader>
      {!$hideBorder && <StyledBorder />}
    </>
  );
};
