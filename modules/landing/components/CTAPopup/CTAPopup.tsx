/* eslint-disable @next/next/no-img-element */

import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import clsx from 'clsx';

import { CloseIcon, AppStoreIcon } from './Icons';

interface CTAPopupProps {
  active: boolean;
  onClose: () => void;
}

export const CTAPopup: React.FC<CTAPopupProps> = ({
  active = false,
  onClose,
}) => {
  return (
    <>
      <>
        <Transition appear show={active} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-[99] overflow-y-auto text-panda-dark"
            onClose={onClose}
            open={active}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay
                className="fixed inset-0 bg-black opacity-50"
                data-testid="modal-overlay"
              />
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div
                  className={clsx(
                    'inline-block w-[650px] pb-[105px] align-middle transition-all transform bg-theme-green-0 rounded-[56px] shadow-xl max-w-2xl',
                  )}
                  data-testid="modal-inner-body"
                >
                  <div>
                    <div className="pt-[39px] pr-[43px] pb-[34px] flex items-center justify-end">
                      <button onClick={onClose} className="cursor-pointer">
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="maison-neue-extended-medium text-5xl leading-[80px] mb-12">
                      Download our app
                    </h2>
                    <div className="qr-code flex justify-center mb-12">
                      <img
                        src={`${process.env.NEXT_PUBLIC_APP_FRONTEND_BASE_URL}/qr-code/QR-code.png`}
                        alt="QR"
                      />
                    </div>
                    <div className="app-store-icon flex justify-center">
                      <AppStoreIcon />
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  );
};
