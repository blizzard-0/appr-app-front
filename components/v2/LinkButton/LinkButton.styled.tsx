import styled from 'styled-components';
import tw from 'twin.macro';

import { LinkButtonProps } from '.';

export const StyledLinkButton = styled.button<LinkButtonProps>`
  ${tw`text-base font-maison-neue-book outline-none transition-colors text-left`}
  ${(props) => (props.$noUnderline ? tw`` : tw`underline`)}
  ${(props) =>
    props.$color === 'default'
      ? tw`text-gray-500 hover:text-gray-400 active:text-gray-600`
      : props.$color === 'success'
      ? tw`text-success hover:text-green-400 active:text-green-500`
      : props.$color === 'danger'
      ? tw`text-error hover:text-red-400 active:text-red-500`
      : props.$color === 'warning'
      ? tw`text-warning hover:text-yellow-300 active:text-yellow-500`
      : tw`text-info hover:text-blue-400 active:text-blue-500`}
`;

export const AppreciateLink = styled.a`
  ${tw`text-link hover:underline focus:underline visited:bg-krestrel-action-hyperlinkVisited cursor-pointer`}
`;
