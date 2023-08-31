import styled from 'styled-components';
import tw from 'twin.macro';

import { ModalSizeType } from '.';

interface StyledModalContainerProps {
  $fullscreen: boolean;
}

interface StyledModalPanelProps {
  $fullscreen: boolean;
  $size: ModalSizeType;
}

export const StyledModalOverlay = styled.div<{ $popup: boolean }>`
  ${(props) => (props.$popup ? tw`z-30` : tw`z-20`)}
  ${tw`fixed inset-0 bg-black bg-opacity-50`}
`;

export const StyledModalWrapper = styled.div<{ $popup: boolean }>`
  ${tw`fixed inset-0 overflow-y-auto`}
  ${(props) => (props.$popup ? tw`z-30` : tw`z-20`)}
`;

export const StyledModalContainer = styled.div<StyledModalContainerProps>`
  ${tw`flex h-full items-center justify-center text-center`}
  ${(props) => (props.$fullscreen ? tw`p-0 lg:p-4` : tw`p-4`)}
`;

export const StyledModalPanel = styled.div<StyledModalPanelProps>`
  ${tw`w-modal max-w-full transform overflow-hidden bg-white text-left shadow-xl transition-all max-h-full flex flex-col`}

  ${(props) =>
    props.$fullscreen
      ? props.$size === 'small'
        ? tw`w-screen h-screen lg:w-modal-small lg:h-auto`
        : props.$size === 'medium'
        ? tw`w-screen h-screen lg:w-modal lg:h-auto`
        : tw`w-screen h-screen lg:w-modal-large lg:h-auto`
      : props.$size === 'small'
      ? tw`w-modal-small`
      : props.$size === 'medium'
      ? tw`w-modal`
      : tw`w-modal-large`}
`;
