import React, { HTMLAttributes } from 'react';

import {
  AppreciateStyledFormErrorMessage,
  StyledFormErrorMessage,
} from './Form.styled';

export const FormErrorMessage: React.FC<HTMLAttributes<HTMLParagraphElement>> =
  ({ children, ...rest }) => {
    return (
      <StyledFormErrorMessage {...rest}>{children}</StyledFormErrorMessage>
    );
  };

export const AppreciateFormErrorMessage: React.FC<
  HTMLAttributes<HTMLParagraphElement>
> = ({ children, ...rest }) => {
  return (
    <AppreciateStyledFormErrorMessage {...rest}>
      {children}
    </AppreciateStyledFormErrorMessage>
  );
};
