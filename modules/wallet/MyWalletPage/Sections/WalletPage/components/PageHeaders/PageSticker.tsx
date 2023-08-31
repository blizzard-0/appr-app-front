import React from 'react';
import { Transition } from '@headlessui/react';

interface PageStickerProps {
  children?: React.ReactNode;
  visible?: boolean;
}

const PageSticker: React.FC<PageStickerProps> = ({
  children,
  visible = false,
}) => {
  return (
    <Transition
      as={React.Fragment}
      show={visible}
      enter="transform transition duration-200"
      enterFrom="opacity-0 scale-y-50"
      enterTo="opacity-100 scale-y-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-y-100"
      leaveTo="opacity-0 scale-y-95"
    >
      <div className="fixed top-16 z-10 mt-px w-full left-0 origin-top bg-gray-100 border-b-px border-gray-300">
        {children}
      </div>
    </Transition>
  );
};
PageSticker.displayName = 'PageSticker';

export default PageSticker;
