import styled from 'styled-components';
import tw from 'twin.macro';

import { HeaderProps } from '.';

export const StyledModalHeader = styled.div<HeaderProps>`
  ${tw`w-full flex items-center justify-center relative font-maison-neue-medium text-gray-950`}
  ${(props) =>
    props.$showClose
      ? tw`justify-start p-5 lg:px-6 lg:py-5 text-2xl leading-6`
      : tw`justify-center p-5 pt-6 text-2xl lg:text-32-px lg:leading-10`}
`;

export const StyledModalCloseButton = styled.button`
  ${tw`absolute top-5 right-5 outline-none text-gray-600 hover:text-gray-500 active:text-gray-700`}
`;

export const StyledBorder = styled.hr`
  ${tw`border-gray-300`}
`;
