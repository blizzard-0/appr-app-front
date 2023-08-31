import React, { HTMLAttributes } from 'react';

import { StyledModalFooter } from './Footer.styled';

export const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <StyledModalFooter {...rest}>{children}</StyledModalFooter>;
};
