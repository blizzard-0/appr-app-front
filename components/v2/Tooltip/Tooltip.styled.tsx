import styled from 'styled-components';
import tw from 'twin.macro';

import { ToolTipPositionType } from '.';

export const StyledTooltipWrapper = styled.div`
  ${tw`relative inline-block z-1`}
`;

export const StyledTooltipContent = styled.div<{
  $position: ToolTipPositionType;
}>`
  ${tw`absolute hidden items-center group-hover:flex`}
  ${tw`font-maison-neue-book text-xs leading-4`}
  ${tw`top-1/2 transform`}
  ${(props) =>
    props.$position === 'left'
      ? tw`right-full pr-1 -translate-y-2/4`
      : props.$position === 'right'
      ? tw`left-full pl-1 -translate-y-2/4`
      : tw`-translate-x-2/4 left-1/2 -top-full -mt-8`}
`;

export const StyledTooltipText = styled.span<{
  $position: ToolTipPositionType;
}>`
  ${tw`relative z-10 p-3 text-xs text-white bg-gray-900`}
  ${(props) =>
    props.$position === 'top' ? tw`w-32 text-center` : tw`w-[200px]`}
`;

export const StyledArrow = styled.div`
  ${tw`w-4 h-4 transform rotate-45 bg-gray-900`}
`;
