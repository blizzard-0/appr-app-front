import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledLogoWrapper = styled.div`
  ${tw`block  w-auto `}
  max-height: 24px;
`;

export const StyledCTAWrapper = styled.a`
  ${tw`border-2  text-light-gray hover:bg-light-gray  font-maison-neue-book cursor-pointer uppercase    font-bold text-center  text-navcta tracking-widest rounded-full bg-theme-green-3 border-theme-green-3 hover:text-theme-green-3`}
  padding: 6px 10px;
`;
