import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledInlineInputWrapper = styled.div`
  ${tw`mb-4 pl-4 pr-2 h-14 bg-gray-100 border border-gray-300 flex items-center`}
`;

export const StyledInlineInputBefore = styled.div`
  ${tw`flex items-center w-40`}
`;

export const StyledInlineInputTitle = styled.p`
  ${tw`text-sm leading-6 ml-4 text-gray-800 font-sans`}
`;
