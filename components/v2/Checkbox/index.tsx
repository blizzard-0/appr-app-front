import React, { InputHTMLAttributes } from 'react';

import { TickLarge, TickSmall } from './icons';
import {
  StyledLabel,
  StyledCheckbox,
  StyledCheckboxContainer,
} from './Checkbox.styled';

export type CheckboxSizeType = 'small' | 'large';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  $size?: CheckboxSizeType;
  children?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  children,
  $size = 'large',
  ...rest
}) => {
  return (
    <StyledLabel htmlFor={id} $size={$size}>
      <StyledCheckbox type="checkbox" id={id} checked={checked} {...rest} />
      <StyledCheckboxContainer $size={$size} checked={checked}>
        {checked && ($size === 'large' ? <TickLarge /> : <TickSmall />)}
      </StyledCheckboxContainer>
      {children}
    </StyledLabel>
  );
};
