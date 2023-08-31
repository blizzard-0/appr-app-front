import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
export const StyledAuthPageInner = styled.div`
  ${tw`flex justify-center items-center max-w-md px-4 mx-auto`}
`;

export const StyledAuthPageContent = styled.div`
  ${tw`flex-col items-center justify-between`}
  width: 351px;
`;

export const StyledAuthPageLogo = styled.div<{ $showMobile?: boolean }>`
  ${tw`flex justify-center mt-36 text-center`}
  ${(props) => (props.$showMobile ? tw`flex md:hidden` : tw`hidden md:flex`)}
  @media (max-width: 1000px) {
    margin-top: 72px;
  }
`;

export const StyledTos = styled.div`
  ${tw`mb-9 text-gray-700 font-normal text-14-px leading-5 text-center font-maison-neue-book`}
  @media(max-width: 961px) {
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled.a`
  ${tw`underline inline-block cursor-pointer`}
`;

export const StyledAuthWrapper = styled.div`
  ${tw`flex justify-center mt-32 lg:mt-40 text-center`}
`;
