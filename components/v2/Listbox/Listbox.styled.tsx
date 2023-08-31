import styled from 'styled-components';
import tw from 'twin.macro';

import { AppListboxVariant } from '.';

interface StyledProps {
  $variant: AppListboxVariant;
}

export const StyledListOptions = styled.ul<StyledProps>`
  ${tw`absolute max-h-[212px] w-full overflow-y-auto border-l border-r border-b border-gray-250 font-sans shadow-lg outline-none`}
  ${(props) => (props.$variant === 'white' ? tw`bg-white` : tw`bg-gray-100`)}
`;

export const StyledListOption = styled.li<{
  $active?: boolean;
  $variant: AppListboxVariant;
}>`
  ${tw`relative cursor-pointer select-none text-14-px leading-6 py-2 px-3 border-b border-lightgray-800 last:border-none outline-none text-gray-800`}
  ${(props) => (props.$variant === 'white' ? tw`bg-white` : tw`bg-gray-100`)}
  ${(props) =>
    props.$active
      ? props.$variant === 'white'
        ? tw`bg-lightgray-800`
        : tw`bg-white`
      : props.$variant === 'white'
      ? tw`bg-white hover:bg-lightgray-800`
      : tw`bg-gray-100 hover:bg-white`}
`;

export const StyledListWrapper = styled.div`
  ${tw`relative w-full z-10`}
`;

export const StyledListSelector = styled.div`
  ${tw`relative cursor-default`}
`;

export const StyledListButton = styled.span`
  ${tw`absolute inset-y-0 right-0 flex items-center pr-3 outline-none`}
`;

export const StyledListButtonContainer = styled.button<StyledProps>`
  ${tw`border border-gray-250 block w-full focus:outline-none font-sans text-gray-800 h-42-px py-2 px-3`}
  ${(props) => (props.$variant === 'white' ? tw`bg-white` : tw`bg-gray-100`)}
`;

export const StyledListButtonContent = styled.span<StyledProps>`
  ${tw`block truncate text-left leading-6`}
  ${(props) => (props.$variant === 'sort' ? tw`text-16-px` : tw`text-14-px`)}
`;
