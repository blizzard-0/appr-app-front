import styled from 'styled-components';
import tw from 'twin.macro';
import { IconButtonVariant } from '.';

interface IconButtonProps {
  $wide?: boolean;
  $variant?: IconButtonVariant;
  $outline?: boolean;
}

export const StyledIconButton = styled.button<IconButtonProps>`
  ${tw`h-42-px flex items-center font-sans text-sm leading-6 text-gray-800 border border-gray-300 hover:border-gray-400 active:border-gray-700 gap-2`}
  ${(props) =>
    props.$outline ? tw`focus:outline-primary` : tw`focus:outline-none`}
  ${(props) => (props.$wide ? tw`px-4 py-2` : tw`px-2 py-2`)}
  ${(props) => (props.$variant === 'action' ? tw`bg-gray-100` : tw`bg-white`)}
  ${(props) =>
    props.disabled ? tw`cursor-not-allowed opacity-30` : tw`cursor-pointer`}
`;
