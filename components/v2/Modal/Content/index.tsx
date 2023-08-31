import React, { HTMLAttributes } from 'react';

import { StyledModalContent } from './Content.styled';

export const Content: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <StyledModalContent {...rest}>{children}</StyledModalContent>;
};
