import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledProgressToastWrapper = styled.div`
  ${tw`bottom-[63px] md:bottom-0 left-1/2 -translate-x-1/2 transform fixed z-40 md:w-toast p-0 md:px-4 md:py-20 max-h-screen overflow-hidden flex-col-reverse justify-end flex-1 flex mr-8 pointer-events-none w-full`}
`;

export const StyledProgressToastInner = styled.div`
  ${tw`flex w-full transform transition-all duration-300 pointer-events-auto md:w-370-px md:max-w-full mx-auto visible flex-row shadow-lg rounded-sm cursor-pointer bg-white`}
`;

export const StyledProgressToastContent = styled.div`
  ${tw`h-60-px relative w-full`}
`;

export const StyledProgressToastProgress = styled.div`
  ${tw`h-2 bg-success absolute top-0 left-0 transition-all`}
`;

export const StyledProgressToastText = styled.p`
  ${tw`text-14-px w-full md:w-small-container-mobile md:max-w-full mx-auto h-full flex items-center justify-center font-book text-gray-900`}
`;
