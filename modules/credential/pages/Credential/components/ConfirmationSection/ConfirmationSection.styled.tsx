import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledBackground = styled.div`
  ${tw`bg-[#E6E9EB] h-screen`}
`;

export const StyledContent = styled.div`
  ${tw`w-[342px] mt-10 lg:mt-[100px] mx-auto grid grid-cols-1 gap-6`}
`;

export const StyledTitle = styled.h2`
  ${tw`text-xl text-black tracking-0.01em font-maison-neue-medium text-center`}
`;

export const StyledActiveIndicator = styled.div`
  ${tw`w-full flex items-center justify-center gap-[10px]`}
`;

export const StyledDot = styled.div<{ $active: boolean }>`
  ${tw`w-2 h-2 rounded-full`}
  ${(props) => (props.$active ? tw`bg-black` : tw`bg-[#6D6D6D] opacity-20`)}
}`;

export const StyledSkip = styled.a`
  ${tw`font-maison-neue-demi text-base mt-2 text-center`}
`;
