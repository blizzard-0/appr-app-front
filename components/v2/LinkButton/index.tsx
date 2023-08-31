import React, { ButtonHTMLAttributes } from 'react';

import { StyledLinkButton } from './LinkButton.styled';

type LinkButtonColor = 'default' | 'success' | 'warning' | 'danger' | 'info';

export interface LinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $color?: LinkButtonColor;
  $noUnderline?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  $color = 'default',
  $noUnderline = false,
  children,
  ...rest
}) => {
  return (
    <StyledLinkButton $noUnderline={$noUnderline} $color={$color} {...rest}>
      {children}
    </StyledLinkButton>
  );
};
