import React, { InputHTMLAttributes, useState } from 'react';

import { StyledInput } from './Form.styled';

type FormInputSize = 'medium' | 'large';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $size?: FormInputSize;
  $hasError?: boolean;
  $noBorder?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  $size = 'medium',
  $hasError = false,
  $noBorder = false,
  placeholder,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      $size={$size}
      $hasError={$hasError}
      $noBorder={$noBorder}
      placeholder={focused ? '' : placeholder}
      {...rest}
    />
  );
};
