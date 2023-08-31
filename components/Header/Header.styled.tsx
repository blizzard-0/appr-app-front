import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledLogoWrapper = styled.div`
  ${tw`block  w-auto `}
  max-height: 24px;
`;

interface HeaderProps {
  blog?: boolean;
  theme?: 'purple' | 'green' | 'yellow' | 'red';
}

export const StyledCTAWrapper = styled.a<HeaderProps>`
  ${tw`border-2  text-light-gray hover:bg-light-gray  font-maison-neue-book uppercase    font-bold text-center  text-navcta tracking-widest rounded-full`}

  ${(p) =>
    p.theme == 'purple'
      ? tw`bg-theme-purple-3 hover:border-theme-purple-3 hover:text-theme-purple-3`
      : tw``}
  ${(p) =>
    p.theme == 'green'
      ? tw`bg-theme-green-3 hover:border-theme-green-3 hover:text-theme-green-3`
      : tw``}
  ${(p) =>
    p.theme == 'yellow'
      ? tw`bg-theme-yellow-3 hover:border-theme-yellow-3 hover:text-theme-yellow-3`
      : tw``}
  ${(p) =>
    p.theme == 'red'
      ? tw`bg-theme-red-3 hover:border-theme-red-3 hover:text-theme-red-3`
      : tw``}
`;
