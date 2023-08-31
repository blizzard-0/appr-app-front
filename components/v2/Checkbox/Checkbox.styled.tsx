import styled from 'styled-components';
import tw from 'twin.macro';

import { CheckboxProps, CheckboxSizeType } from '.';

export const StyledLabel = styled.label<{ $size: CheckboxSizeType }>`
  ${(props) =>
    props.$size === 'large' ? tw`text-sm` : tw`text-14-px leading-4`}
  ${tw`relative inline-flex gap-2 font-maison-neue-book items-start`}
`;

export const StyledCheckbox = styled.input`
  ${tw`opacity-0 absolute w-0 h-0`}
`;

export const StyledCheckboxContainer = styled.div<CheckboxProps>`
  ${(props) =>
    props.$size === 'large'
      ? tw`w-6 h-6 border-2 hover:border-3`
      : tw`w-4 h-4 border-px hover:border-2`}
  ${tw`flex items-center justify-center transition-all cursor-pointer flex-shrink-0`}
  ${(props) =>
    props.checked
      ? tw`bg-gray-800 border-gray-800 hover:bg-gray-900 hover:border-gray-900`
      : tw`bg-white border-gray-600`}
`;
