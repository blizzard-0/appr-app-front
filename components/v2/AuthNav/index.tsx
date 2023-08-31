import React from 'react';
import { Wrapper, Container, Nav } from './AuthNav.styled';
import { Logo } from '../Logo';
export const AuthNav: React.FC = () => {
  return (
    <Wrapper role="navigation">
      <Nav>
        <Container>
          <Logo />
        </Container>
      </Nav>
    </Wrapper>
  );
};
