import React, { HTMLAttributes } from 'react';

import { StyledFormControl } from './Form.styled';

type FormControlAlignType = 'center' | 'left';

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  $align?: FormControlAlignType;
}

export const FormControl: React.FC<FormControlProps> = ({
  $align = 'left',
  children,
  ...rest
}) => {
  return (
    <StyledFormControl $align={$align} {...rest}>
      {children}
    </StyledFormControl>
  );
};
