import React from 'react';

import {
  StyledInlineInputWrapper,
  StyledInlineInputBefore,
  StyledInlineInputTitle,
} from './InlineInput.styled';

interface InlineInputProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const InlineInput: React.FC<InlineInputProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <StyledInlineInputWrapper>
      <StyledInlineInputBefore>
        {icon}
        <StyledInlineInputTitle>{title}</StyledInlineInputTitle>
      </StyledInlineInputBefore>
      <div className="flex-1">{children}</div>
    </StyledInlineInputWrapper>
  );
};
