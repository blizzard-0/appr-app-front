import React, { Fragment } from 'react';
import clsx from 'clsx';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import { useUpdateSettingsMutation } from '../../../../../../../generated/graphql';
import { Transition } from '@headlessui/react';
import { ChevronRightIcon, CircleRightArrowIcon } from '@/components/Icons';
import { AppButton } from '@/components/v2';
import tw from 'twin.macro';
import { useMyWalletPageContext } from '@/modules/wallet/context';

export const WALKTHROUGH_STEPS = {
  SHOW_WALLET_ITEM: 'showWalletItem',
  SHOW_ADD_BUTTON: 'showAddButton',
  DONE: 'done',
};

type Keys = keyof typeof WALKTHROUGH_STEPS;
type Values = typeof WALKTHROUGH_STEPS[Keys];

export type WalkthroughStep = Values;

interface WelcomeProps {
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
  name: string;
  onSkip: () => void;
  active: boolean;
}

interface WalkthroughProps {
  step: WalkthroughStep | undefined;
  setStep: React.Dispatch<React.SetStateAction<WalkthroughStep | undefined>>;
}

interface GuideStepProps {
  onClick: () => void;
}

const stepCommonClasses =
  'font-maison-neue-book absolute bg-walkthrough-background text-walkthrough-color rounded px-6 py-6';

const ProductStep: React.FC<GuideStepProps> = ({ onClick }) => {
  return (
    <div
      className={clsx(
        stepCommonClasses,
        'w-full md:w-walkthrough lg:w-walkthrough-wide left-0 top-32 md:top-24 lg:left-80 lg:right-0 lg:top-40',
      )}
    >
      <div className="absolute top-16 -left-5 hidden lg:block">
        <svg
          width="320"
          height="24"
          viewBox="0 0 320 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0627 23.4532L-1.00536e-06 11.9532L20.0627 0.453188L20.0627 9.96133L320 9.9615L320 13.9452L20.0627 13.945L20.0627 23.4532Z"
            fill="#F6E9CD"
          />
        </svg>
      </div>
      <div className="absolute -bottom-5 left-44 md:left-32 -rotate-90 transform block lg:hidden">
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9982 23.4563L-1.00509e-06 11.9532L20.0018 0.456301L19.9982 23.4563Z"
            fill="#F6E9CD"
          />
        </svg>
      </div>

      <p className="pb-6 lg:pr-2">
        You&lsquo;ve uploaded your first item with us — we&lsquo;re virtually
        high-fiving you!
      </p>
      <AppButton $variant="transparent" $block onClick={onClick}>
        Next
      </AppButton>
    </div>
  );
};

const AddNewItemStep: React.FC<GuideStepProps> = ({ onClick }) => {
  return (
    <div
      className={clsx(
        stepCommonClasses,
        'w-full md:w-walkthrough-wide right-0 top-28',
      )}
    >
      <div className="absolute transform rotate-90 top-1.5 left-60 hidden lg:block">
        <svg
          width="76"
          height="24"
          viewBox="0 0 76 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0627 23.4532L-1.00536e-06 11.9532L20.0627 0.453188L20.0627 9.96133L76 9.9615L76 13.9452L20.0627 13.945L20.0627 23.4532Z"
            fill="#F6E9CD"
          />
        </svg>
      </div>
      <div className="absolute -top-5 right-16 rotate-90 transform block lg:hidden">
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9982 23.4563L-1.00509e-06 11.9532L20.0018 0.456301L19.9982 23.4563Z"
            fill="#F6E9CD"
          />
        </svg>
      </div>
      <p className="pb-6 lg:pr-2 relative">
        You can add items to your wallet by uploading a photo, providing a
        receipt, or manually listing your luxury items.
      </p>
      <AppButton $variant="transparent" $block onClick={onClick}>
        Done
      </AppButton>
    </div>
  );
};

export const Welcome: React.FC<WelcomeProps> = ({ name, onSkip, active }) => {
  const { setAppState } = useMyWalletPageContext();
  return (
    <Transition appear show={active} as={Fragment}>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-30 bg-walkthrough-mobile md:bg-walkthrough-desktop overflow-y-auto bg-cover bg-no-repeat flex-1 no-scrollbar">
        {/* @todo: Replace with modal component - https://github.com/tailwindlabs/headlessui/issues/479 */}
        <div className="md:px-4 text-center relative top-48 md:block flex justify-between flex-col h-walkthrough">
          <div
            className={clsx(
              'inline-block align-middle transition-all transform bg-white shadow-xl max-w-full w-modal-medium rounded',
            )}
          >
            <div className="p-5 pt-6 md:p-6 md:pt-8">
              <h3
                className="text-center text-gray-900 text-page-header font-maison-neue-book md:text-heading md:leading-10 truncate"
                id="headlessui-dialog-title-44"
              >
                Welcome, {name}!
              </h3>
            </div>
            <hr />
            <div className="px-10 md:px-11 pt-5 md:pt-6 font-maison-neue-book text-gray-900">
              <p className="pb-3 md:text-2xl text-xl font-maison-neue-medium">
                Build your collection
              </p>
              <p className="pb-3 text-sm text-gray-750 leading-6 font-maison-neue-medium">
                The appreciate wallet is the future of ownership. You can track
                the value of your items, purchase coverage, and explore luxury
                content. Do more stuff — with your stuff.
              </p>
            </div>
            <AppButton
              onClick={() => setAppState('WEXAddWallet')}
              css={tw`mt-3.5 mb-9 w-350-px`}
            >
              <div className="relative inline-flex w-full items-center">
                <p className="text-center w-full font-maison-neue-medium">
                  Add your items
                </p>
                <div className="right-0 absolute">
                  <CircleRightArrowIcon />
                </div>
              </div>
            </AppButton>
          </div>
          <p
            onClick={onSkip}
            className="cursor-pointer text-black text-sm font-maison-neue-medium mt-6 md:mb-0 mb-6 flex items-center justify-center gap-3"
          >
            Skip and explore the app <ChevronRightIcon />
          </p>
        </div>
      </div>
    </Transition>
  );
};

export const Walkthrough: React.FC<WalkthroughProps> = ({ step, setStep }) => {
  const [updateUserSettingsMutation] = useUpdateSettingsMutation();

  if (!step || step === 'done') {
    return null;
  }

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
      {step === WALKTHROUGH_STEPS.SHOW_WALLET_ITEM && (
        <ProductStep
          onClick={() => setStep(WALKTHROUGH_STEPS.SHOW_ADD_BUTTON)}
        />
      )}
      {step === WALKTHROUGH_STEPS.SHOW_ADD_BUTTON && (
        <AddNewItemStep
          onClick={() => {
            updateUserSettingsMutation({
              variables: {
                settings: {
                  welcomeExperienceShown: true,
                },
              },
            }).then(({ data }) => {
              if (
                data?.updateUserSettings.__typename ===
                'UpdateUserSettingsMutationSuccess'
              ) {
                setStep('done');
              }
            });
          }}
        />
      )}
    </div>
  );
};
