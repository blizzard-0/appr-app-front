import styled from 'styled-components';
import tw from 'twin.macro';
import { FilledButtonProps } from './types';

export const BaseButton = styled.button`
  ${tw`flex justify-center text-krestrel-onSurfaceWhite font-maison-neue-book font-semibold rounded-[28px] focus-within:outline-border active:bg-krestrel-action-pressed`}
`;

export const StyledButton = styled(BaseButton)<FilledButtonProps>`
  ${(props) => (props.$block ? tw`w-full rounded-[26px]` : tw`w-auto`)}
  ${(props) =>
    props.$size === 'large'
      ? tw`text-large px-10 py-[14px]`
      : tw`text-small px-4 py-[6px]`}

${(props) =>
    props.$color === 'primary'
      ? tw`bg-krestrel-action-primary hover:bg-krestrel-action-pressed`
      : props.$color === 'accent1'
      ? tw`bg-krestrel-action-accent1 hover:bg-krestrel-action-accent1Hover`
      : props.$color === 'accent2'
      ? tw`text-krestrel-onSurfacePrimary bg-krestrel-action-accent2 hover:bg-krestrel-action-accent2Hover`
      : props.$color === 'accent3'
      ? tw`bg-krestrel-action-accent3 hover:bg-krestrel-action-accent3Hover`
      : props.$color === 'danger'
      ? tw`bg-krestrel-error-primary`
      : tw`bg-gray-100 text-black`}

${(props) =>
    props.disabled
      ? tw`pointer-events-none text-krestrel-action-pressed bg-krestrel-action-disabled cursor-not-allowed `
      : tw`cursor-pointer`}
`;
