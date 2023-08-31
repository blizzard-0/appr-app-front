import React, { HTMLAttributes } from 'react';

import { StyledTag } from './Tag.styled';

type TagVariant = 'success' | 'warning' | 'default';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  $variant?: TagVariant;
}

export const Tag: React.FC<TagProps> = ({ $variant = 'default', children }) => {
  return <StyledTag $variant={$variant}>{children}</StyledTag>;
};
