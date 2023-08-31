import styled from 'styled-components';
import tw from 'twin.macro';

export const UnboxingItemWrapper = styled.div`
  ${tw`relative`}
`;

export const UnboxingItemTop = styled.div<{ $bgUrl: string }>`
  width: 342px;
  height: 299px;
  background-image: url(${(props) => props.$bgUrl});
  ${tw`flex items-center justify-center bg-no-repeat bg-cover bg-center cursor-pointer shadow-sm relative z-1`}
`;

export const UnboxingItemSecond = styled.div`
  top: 5px;
  left: 4px;
  ${tw`absolute w-full h-full bg-gray-250 rotate-[-0.42deg] shadow-sm`}
`;

export const UnboxingItemThird = styled.div`
  top: 8px;
  left: 6px;
  ${tw`absolute w-full h-full bg-[#A9A9A9] rotate-[-0.98deg] shadow-sm`}
`;

export const UnboxingItemDescription = styled.p`
  ${tw`mt-12 text-base text-center tracking-0.01em text-[#303A3F]`}
`;
