import React, { HTMLAttributes } from 'react';

import { StyledCard } from './Card.styled';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  $full?: boolean;
}

export const Card: React.FC<CardProps> = ({
  $full = false,
  children,
  ...rest
}) => {
  return (
    <StyledCard $full={$full} {...rest}>
      {children}
    </StyledCard>
  );
};
