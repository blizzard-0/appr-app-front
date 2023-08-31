import styled from 'styled-components';
import tw from 'twin.macro';

import { AlertProps } from '.';

export const StyledAlert = styled.div<AlertProps>`
  ${tw`p-4 rounded-md font-maison-neue-book flex items-center text-sm gap-3`}
  ${(props) =>
    props.$variant === 'success'
      ? tw`bg-blue-50 text-green-800`
      : tw`bg-red-50 text-red-700`}
`;

export const StyledIcon = styled.div<AlertProps>`
  ${tw`w-5 h-5 inline-flex justify-center items-center`}
  ${(props) =>
    props.$variant === 'success' ? tw`text-green-400` : tw`text-red-400`}
`;
