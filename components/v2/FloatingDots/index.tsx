import React, { HTMLAttributes } from 'react';

import { StyledFloatingDots, StyledLoader } from './FloatingDots.styled';

export const FloatingDots: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <StyledLoader {...props}>
      <StyledFloatingDots />
    </StyledLoader>
  );
};
