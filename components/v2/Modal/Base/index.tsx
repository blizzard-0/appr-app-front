import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import {
  StyledModalOverlay,
  StyledModalWrapper,
  StyledModalContainer,
  StyledModalPanel,
} from './Base.styled';

export type ModalSizeType = 'large' | 'medium' | 'small';

interface ModalBaseProps {
  $size?: ModalSizeType;
  $show?: boolean;
  $popup?: boolean;
  $fullscreen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const ModalBase: React.FC<ModalBaseProps> = ({
  $size = 'medium',
  $fullscreen = false,
  $show = false,
  $popup = false,
  onClose = () => null,
  children,
}) => {
  return (
    <Transition appear show={$show} as={Fragment}>
      <Dialog as="div" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <StyledModalOverlay $popup={$popup} />
        </Transition.Child>

        <StyledModalWrapper $popup={$popup}>
          <StyledModalContainer $fullscreen={$fullscreen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel as={Fragment}>
                <StyledModalPanel $size={$size} $fullscreen={$fullscreen}>
                  {children}
                </StyledModalPanel>
              </Dialog.Panel>
            </Transition.Child>
          </StyledModalContainer>
        </StyledModalWrapper>
      </Dialog>
    </Transition>
  );
};
