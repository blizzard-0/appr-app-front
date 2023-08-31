import React from 'react';
import { Wrapper, Container, Dot } from './AuthFooter.styled';
import { AuthFooterProps } from './types';
import { HyperLink } from '../HyperLink';

export const AuthFooter: React.FC<AuthFooterProps> = ({}) => {
  return (
    <Wrapper>
      <Container>
        <HyperLink href="/faq">FAQ</HyperLink>
        <Dot />
        <HyperLink href="/privacy">Privacy Policy</HyperLink>
      </Container>
    </Wrapper>
  );
};
