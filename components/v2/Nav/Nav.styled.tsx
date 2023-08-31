import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`fixed top-0 left-0 z-20 w-full font-maison-neue-book`}
`;

export const StyledNavbarLink = styled.li<{
  $disabled: boolean;
  $active: boolean;
}>`
  ${tw`uppercase leading-6 tracking-wider list-none`}
  ${tw`text-xs mt-6 md:mt-0 ml-0 md:ml-6 first:m-0`}
  ${(props) =>
    props.$disabled
      ? tw`text-gray-250`
      : props.$active
      ? tw`text-gray-900`
      : tw`text-gray-600 hover:text-gray-800`}
`;

export const StyledLink = styled.a`
  ${tw`cursor-pointer leading-6 block`}
`;

export const StyledSpan = styled.span`
  ${tw`cursor-pointer leading-6 block`}
`;

export const StyledNavbarUser = styled.div`
  ${tw`flex items-center`}
`;

export const StyledNavbarAvatarWrapper = styled.div`
  ${tw`w-12 h-12 rounded-full bg-gray-250 mr-4 uppercase text-white flex items-center justify-center text-nav-avatar select-none`}
`;

export const StyledNavbarAvatar = styled.img`
  ${tw`rounded-full w-full h-full object-cover`}
`;

export const StyledNavbarUserInfo = styled.div`
  ${tw`tracking-wider max-w-full`}
`;

export const StyledNavbarUserName = styled.h4`
  ${tw`uppercase font-medium text-gray-800 leading-6`}
`;

export const StyledNavbarUserEmail = styled.p`
  ${tw`text-xs text-gray-600 leading-6 truncate`}
`;

export const StyledDivider = styled.div`
  ${tw`h-[1px] w-full bg-gray-300 my-8`}
`;

export const StyledMenuItem = styled.div<{ $active?: boolean }>`
  ${tw`uppercase leading-6 tracking-wider text-gray-600 hover:text-gray-800 cursor-pointer`}
  ${(props) => (props.$active ? tw`text-gray-900 hover:text-gray-900` : tw``)}
`;

export const StyledNavWrapper = styled.nav`
  ${tw`bg-white py-5 px-5 md:px-6 flex items-center w-full border-b-px border-gray-300 relative`}
`;

export const StyledLogo = styled.a`
  ${tw`inline-block h-6 cursor-pointer`}
`;

export const StyledVerticalDivider = styled.span`
  ${tw`w-[1px] h-6 bg-nav-divider mx-6 hidden md:flex`}
`;

export const StyledNavItems = styled.ul`
  ${tw`items-center hidden md:flex`}
`;

export const StyledMobileButton = styled.div`
  ${tw`p-5 flex justify-end`}
`;

export const StyledMobileMenu = styled.div`
  ${tw`block md:hidden`}
`;

export const StyledMenuWrapper = styled.div`
  ${tw`p-8`}
`;

export const StyledBottomNavigation = styled.div`
  box-shadow: 0px -1px 1px rgba(34, 34, 34, 0.1);
  backdrop-filter: blur(20px);
  z-index: 15;
  ${tw`fixed bottom-0 left-0 w-full bg-white flex gap-0.5 md:hidden`}
`;

export const StyledBottomNavigationButton = styled.a<{
  $active?: boolean;
}>`
  letter-spacing: 0.1px;
  ${tw`flex-1 font-maison-neue-medium text-[11px] leading-[15px] outline-none h-[63px] font-medium`}
  ${tw`flex flex-col gap-1 items-center justify-center`}
  ${(props) => (!props.$active ? tw`text-[#909090]` : tw`text-gray-900`)}
`;
