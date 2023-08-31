import styled from 'styled-components';
import tw from 'twin.macro';

import type { FormInputProps } from './FormInput';
import type { FormControlProps } from './FormControl';

export const StyledFormLabel = styled.label`
  ${tw`mb-2 text-base leading-5 text-gray-600 font-maison-neue-book block`}
`;

export const StyledFormErrorMessage = styled.p`
  ${tw`block mt-5 text-base leading-5 font-maison-neue-book text-error`}
`;

const BaseInput = styled.input`
  ${tw`border bg-white block w-full focus:outline-none focus:shadow-none focus:ring-transparent focus:ring-0 font-maison-neue-book text-gray-800`}
  text-align: inherit;
`;

export const StyledInput = styled(BaseInput)<FormInputProps>`
  ${(props) =>
    props.$size === 'medium'
      ? tw`h-42-px py-2 px-3 text-base leading-5`
      : tw`h-14 p-4 text-xl leading-6`}
  ${(props) =>
    props.$noBorder
      ? tw`border-white hover:border-white focus:border-white`
      : tw`border-gray-250 hover:border-gray-400 focus:border-gray-700`}
  ${(props) =>
    props.$hasError
      ? tw`bg-krestrel-error-input border-krestrel-error-text hover:border-krestrel-error-text focus:border-krestrel-error-text`
      : tw``}
`;

export const StyledFormControl = styled.div<FormControlProps>`
  ${tw`block`}
  ${(props) => (props.$align === 'left' ? tw`text-left` : tw`text-center`)}
`;

export const AppreciateStyledInput = styled(BaseInput)<FormInputProps>`
  ${(props) =>
    props.$size === 'medium'
      ? tw`h-42-px py-2 px-3 text-base leading-5`
      : tw`h-14 p-4 text-xl leading-6`}
  ${(props) =>
    props.$noBorder
      ? tw`border-white hover:border-white focus:border-white`
      : tw`border-gray-250 hover:border-gray-400 focus:border-gray-700`}
${(props) =>
    props.$hasError
      ? tw` border-krestrel-error-text hover:border-krestrel-error-text focus:border-krestrel-error-text`
      : tw``}
`;

export const AppreciateStyledFormLabel = styled.label`
  ${tw`mb-2 text-base leading-5 text-gray-600 font-maison-neue-book block`}
`;

export const AppreciateStyledFormErrorMessage = styled.p`
  ${tw`block mt-5 text-base leading-5 font-maison-neue-book text-error`}
`;
