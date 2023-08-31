import styled from 'styled-components';
import tw from 'twin.macro';

import { TagProps } from '.';

export const StyledTag = styled.div<TagProps>`
  ${tw`font-maison-neue-book text-tag leading-4 tracking-tag px-1 pt-tiny uppercase inline-flex rounded-sm whitespace-pre`}
  ${(props) =>
    props.$variant === 'default'
      ? tw`bg-gray-300 text-gray-700`
      : props.$variant === 'success'
      ? tw`bg-tag-success text-tag-success-text`
      : tw`bg-tag-warning text-tag-warning-text`}
`;
