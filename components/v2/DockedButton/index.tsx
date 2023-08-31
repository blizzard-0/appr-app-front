import React from 'react';

import {
  StyledDockedButtonBorder,
  StyledDockedButtonWrapper,
} from './DockedButton.styled';

interface DockedButtonProps {
  children?: React.ReactNode;
}

export const DockedButton: React.FC<DockedButtonProps> = ({ children }) => {
  return (
    <>
      <StyledDockedButtonBorder />
      <StyledDockedButtonWrapper>{children}</StyledDockedButtonWrapper>
    </>
  );
};
