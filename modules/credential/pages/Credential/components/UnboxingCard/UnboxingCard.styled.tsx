import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCard = styled.div`
  ${tw`w-[342px] bg-white rounded-[2px] shadow-md p-5 gap-4 grid grid-cols-1`}
`;

export const StyledCardImage = styled.div<{ $bgUrl: string }>`
  ${tw`w-full h-[215px] flex items-center relative justify-center bg-center bg-cover`}
  background-image: url(${(props) => props.$bgUrl});
`;

export const StyledCardInfo = styled.div`
  ${tw`grid grid-cols-1 gap-2`}
`;

export const StyledCardTitle = styled.h6`
  ${tw`text-14-px leading-5 text-gray-900 font-maison-neue-demi`}
`;

export const StyledCardName = styled.p`
  ${tw`text-14-px leading-5 text-gray-900`}
`;

export const StyledBadge = styled.div`
  ${tw`absolute top-1 right-1`}
`;
