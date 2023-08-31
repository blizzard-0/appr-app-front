import styled from 'styled-components';
import tw from 'twin.macro';

import type { ButtonProps } from '.';

export const BaseButton = styled.button`
  ${tw`inline-flex justify-center items-center text-white font-maison-neue-book active:outline-primary focus-within:outline-primary border`}
`;

export const AppreciateStyledButton = styled(BaseButton)<ButtonProps>`
  ${(props) =>
    props.$variant === 'pagination' && props.$loading ? tw`text-gray-500` : ''}
  ${(props) =>
    props.$variant === 'primary'
      ? tw`bg-gray-900 border-gray-900 hover:bg-gray-800 hover:border-gray-800 active:bg-gray-800 active:border-gray-800 disabled:bg-gray-300 disabled:border-gray-300`
      : props.$variant === 'secondary'
      ? tw`bg-white border-gray-250 hover:bg-gray-100 hover:border-gray-250 active:bg-gray-100 active:border-gray-500 disabled:bg-white disabled:border-gray-250 text-gray-700 hover:text-gray-800 active:text-gray-900 disabled:text-gray-250 focus-within:text-gray-700`
      : props.$variant === 'tertiary'
      ? tw`bg-gray-600 text-white border-gray-600 hover:bg-gray-500 hover:border-gray-500 active:bg-gray-500 active:border-gray-500 disabled:bg-gray-350 disabled:border-gray-350`
      : props.$variant === 'transparent'
      ? tw`bg-transparent text-base border border-walkthrough-color px-6 h-12 text-walkthrough-color`
      : tw`bg-gray-100 border-gray-250 text-gray-700 hover:border-gray-500 disabled:text-gray-250 disabled:border-gray-250 focus-within:text-gray-700`}
  ${(props) => (props.disabled ? tw`cursor-not-allowed` : tw`cursor-pointer`)}
  ${(props) => (props.$block ? tw`w-full` : tw`w-auto`)}
  ${(props) =>
    props.$size === 'large'
      ? tw`px-6 h-14 text-xl leading-6`
      : tw`py-1 px-8 rounded text-14-px leading-6`}
`;
