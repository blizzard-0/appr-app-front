import styled from 'styled-components';
import tw from 'twin.macro';
import { StyledCard } from '../Card/Card.styled';

export const StyledWalletItem = styled(StyledCard)`
  ${tw`relative gap-4 flex flex-row-reverse md:flex-col font-maison-neue-book text-gray-900 cursor-pointer justify-between`}
`;

export const StyledWalletItemImage = styled.div`
  ${tw`relative w-40 h-[141px] md:w-[246px] md:h-[215px] bg-white overflow-hidden`}
`;

export const StyledWalletImage = styled.img`
  ${tw`flex-shrink-0 mx-auto w-40 md:w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
`;

export const StyledVerifiedBadge = styled.div`
  ${tw`absolute right-1 top-1`}
`;

export const StyledDetailSection = styled.div`
  ${tw`overflow-hidden flex-1 flex flex-col md:flex-row justify-start md:justify-between items-start gap-2`}
`;

export const StyledItemInfo = styled.div`
  ${tw`flex flex-col gap-2 text-14-px leading-5 overflow-hidden w-full`}
`;

export const StyledStatusInfo = styled.div`
  ${tw`flex flex-col gap-2 justify-between md:mt-auto`}
`;

export const StyledWalletText = styled.p`
  ${tw`truncate w-full`}
`;

export const StyledStatusInfoRow = styled.div`
  ${tw`flex items-center h-5 justify-start lg:justify-end`}
`;
