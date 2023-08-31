import React, { LabelHTMLAttributes } from 'react';

import { StyledFormLabel } from './Form.styled';

export const FormLabel: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  ...rest
}) => {
  return <StyledFormLabel {...rest}>{children}</StyledFormLabel>;
};
