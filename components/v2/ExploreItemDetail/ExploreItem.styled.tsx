import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledExploreItemDetail = styled.div`
  ${tw`w-full flex flex-col md:flex-row gap-6`}
`;

export const StyledExploreItemSection = styled.div`
  ${tw`flex-1`}
`;

export const StyledExploreItemDetails = styled(StyledExploreItemSection)`
  ${tw`flex flex-col gap-6 text-left`}
`;

export const StyledExploreItemImage = styled.img`
  ${tw`w-full`}
`;

export const StyledAddButton = styled.button`
  ${tw`cursor-pointer p-2 text-14-px leading-6 flex justify-center items-center text-center font-medium font-maison-neue-book text-white uppercase bg-light-green tracking-widest w-full focus-within:outline-primary`}
`;
