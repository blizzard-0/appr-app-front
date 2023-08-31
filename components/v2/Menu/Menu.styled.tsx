import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledMenuWrapper = styled.div``;

export const StyledDivider = styled.div`
  ${tw`h-[1px] w-full bg-lightgray-800`}
`;

export const StyledMenuItems = styled.div<{ position: 'left' | 'right' }>`
  ${tw`absolute top-full mt-1 border bg-white border-gray-250 shadow-lg z-10 w-360-px`}
  ${(props) =>
    props.position === 'left' ? tw`-right-3 md:right-0` : tw`-left-3 md:left-0`}
`;
