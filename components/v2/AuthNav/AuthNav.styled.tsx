import styled from 'styled-components';

import tw from 'twin.macro';

export const Wrapper = styled.div``;
export const Nav = styled.nav`
  ${tw`px-6 bg-krestrel-surfaceWhite flex h-16 items-center`}
  @media (max-width: 1000px) {
    ${tw`items-center justify-center h-12 `}
  }
`;
export const Container = styled.div`
  ${tw`flex`}
`;
