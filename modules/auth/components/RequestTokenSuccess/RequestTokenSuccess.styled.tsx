import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledEmailHeader = styled.div`
  ${tw`font-maison-neue-extended flex text-center justify-center text-24-px`}
`;

export const StyledEmailContent = styled.div`
  ${tw`font-maison-neue-book leading-5 text-center pt-5`}
  font-size: 14px;
`;
export const StyledContainer = styled.div`
  ${tw`mx-auto bg-gray-100 mt-10 w-small-container-mobile`}
  max-width: 351px;
  @media (max-width: 961px) {
    margin-top: 0;
  }
`;
