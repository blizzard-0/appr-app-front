import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledBackground = styled.div`
  ${tw`h-screen bg-[#E6E9EB] overflow-hidden`}
`;

export const StyledVideoWrapper = styled.div`
  ${tw`w-full overflow-hidden relative`}
  height: calc(100vh - 60px);
`;

export const StyledUnboxingCardWrapper = styled.div`
  ${tw`absolute animate-unboxing-card-mobile lg:animate-unboxing-card z-10 left-1/2`}
  transform: translateY(calc(-100vh + 240px)) translateX(-50%);

  @media (max-width: 1024px) {
    transform: translateY(calc(-100vh + 180px)) translateX(-50%);
  }
`;
