import React, { HTMLAttributes } from 'react';

import { StyledLockupContent, StyledLockupLabel } from './Lockup.styled';

interface LockupProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const Lockup: React.FC<LockupProps> = ({ label, children }) => {
  return (
    <div>
      <StyledLockupLabel>{label}</StyledLockupLabel>
      <StyledLockupContent>{children}</StyledLockupContent>
    </div>
  );
};
