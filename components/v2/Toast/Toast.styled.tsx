import styled from 'styled-components';
import tw from 'twin.macro';

import { ToastProps } from '.';

export const Wrapper = styled.div<ToastProps>`
  ${tw`text-sm leading-6 font-maison-neue-book gap-4`}
  ${tw`flex w-full md:w-auto md:max-w-full mx-auto shadow-lg rounded-lg duration-100 cursor-pointer`}
  ${(props) =>
    props.$variant === 'alert' ? tw`text-gray-900` : tw`text-white`}
  ${(props) =>
    props.$variant === 'success'
      ? tw`bg-krestrel-success-primary`
      : props.$variant === 'error'
      ? tw`bg-krestrel-error-primary`
      : props.$variant === 'alert'
      ? tw`bg-krestrel-alert-primary`
      : props.$variant === 'info'
      ? tw`bg-krestrel-info-primary`
      : tw`bg-krestrel-tertiary-75`}
  ${(props) => (props.$showIcon ? tw`p-6` : tw`px-6 py-4`)}
  ${(props) =>
    !props.$showClose && !props.$showIcon ? tw`text-center` : tw`text-left`}
`;

export const Content = styled.div`
  ${tw`flex-1`}
`;

export const StyledButton = styled.button`
  ${tw`w-6 h-6 inline-flex outline-none`}
`;
