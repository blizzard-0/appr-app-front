import styled from 'styled-components';
import tw from 'twin.macro';

export const InformationWrapper = styled.div`
  ${tw`max-w-[640px] mx-auto w-full bg-white min-h-screen text-center px-6 pt-5 pb-10 flex flex-col items-center`}
`;

export const LogoWrapper = styled.div`
  ${tw`flex justify-start lg:justify-center mb-5 w-full`}
`;

export const Details = styled.div`
  ${tw`w-full max-w-[342px] mx-auto mb-10`}
`;

export const WelcomeMessage = styled.h3`
  ${tw`text-xl mb-4 font-maison-neue-medium text-[#303A3F]`}
`;

export const Disclaimer = styled.div`
  ${tw`w-full max-w-[460px]`}
`;

export const DisclaimerHeading = styled.h5`
  ${tw`mb-2 text-base leading-7 text-black font-maison-neue-medium`}
`;

export const DisclaimerText = styled.p`
  ${tw`text-base text-black`}
`;
