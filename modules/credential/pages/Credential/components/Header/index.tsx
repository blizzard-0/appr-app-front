import React from 'react';

import { Logo } from '@/components/v2';
import { StyledHeader } from './Header.styled';

export const UnboxingHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Logo $variant="tiny" />
    </StyledHeader>
  );
};
