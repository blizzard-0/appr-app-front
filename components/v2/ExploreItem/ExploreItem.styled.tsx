import styled from 'styled-components';
import tw from 'twin.macro';
import { StyledCard } from '../Card/Card.styled';

export const StyledExploreItem = styled(StyledCard)`
  ${tw`relative gap-4 flex flex-row-reverse md:flex-col font-maison-neue-book text-gray-900 cursor-pointer justify-between`}
`;

export const StyledExploreItemImage = styled.div`
  ${tw`relative`}
`;

export const StyledExploreImage = styled.img`
  ${tw`flex-shrink-0 mx-auto w-40 md:w-full object-contain h-[141px] md:h-[215px]`}
`;

export const StyledDetailSection = styled.div`
  ${tw`overflow-hidden flex-1 flex flex-col md:flex-row justify-between items-start gap-2`}
`;

export const StyledItemInfo = styled.div`
  ${tw`flex flex-col gap-2 text-14-px leading-5 overflow-hidden w-full`}
`;

export const StyledItemText = styled.p`
  ${tw`truncate w-full`}
`;

export const StyledAddedBadge = styled.div`
  ${tw`absolute top-0 right-0 cursor-pointer text-gray-900 inline-flex`}
`;
