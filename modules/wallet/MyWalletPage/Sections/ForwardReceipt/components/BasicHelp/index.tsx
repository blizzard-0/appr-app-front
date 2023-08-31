import React from 'react';
import { ExampleEmail } from './Example';
import { CopyEmailButton } from '..';

export const BasicHelp: React.FC<{
  onNext: () => void;
  emailAddress: string;
  $variant?: 'wex' | 'default';
  onWallet: () => void;
}> = ({ onNext, emailAddress, $variant = 'default', onWallet }) => {
  return (
    <>
      <div
        className={`flex ${
          $variant === 'wex' ? 'justify-center' : 'justify-start'
        } mb-10 lg:mb-9`}
      >
        <ExampleEmail />
      </div>
      <h2 className="mb-4 lg:mb-3.5 text-gray-950 font-maison-neue-bold text-32-px leading-42-px lg:whitespace-nowrap">
        Forward the original email receipt
      </h2>
      <p className="mb-4 lg:mb-6 text-base leading-snug text-gray-800">
        From your inbox, forward the order receipt to
      </p>
      <div className="flex items-center mb-9">
        <svg
          width="20"
          height="13"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.448239 0C0.200585 0 0 0.200749 0 0.448238V12.5518C0 12.7993 0.200593 13 0.448239 13H19.2759C19.5236 13 19.7242 12.7993 19.7242 12.5518V0.448238C19.7242 0.200741 19.5236 0 19.2759 0H0.448239ZM1.47996 0.896477H18.1803L14.3056 4.19273L14.3054 4.19288C14.3043 4.19382 14.3031 4.19476 14.302 4.19585L9.88883 8.02667L5.47569 4.19569C5.47288 4.19335 5.47006 4.19085 5.46725 4.1885L1.47961 0.896455L1.47996 0.896477ZM18.8275 1.52279V12.1034H0.896397V1.57762L4.89452 4.87843L9.59504 8.95897H9.5952C9.76374 9.10531 10.0142 9.10531 10.1829 8.95897L14.8866 4.87563L14.8888 4.87391L14.8901 4.87282L18.8275 1.52279Z"
            fill="#222222"
          />
        </svg>
        <span className="font-maison-neue-demi text-base leading-snug ml-1 mr-2 lg:mr-4 text-gray-900">
          send@appreciate.it
        </span>
        <CopyEmailButton />
      </div>
      <p className="mb-8 text-base leading-snug text-gray-800">
        Please make sure to use the email{' '}
        <strong className="font-maison-neue-demi">{emailAddress}</strong>, which
        is the email associated to your account. Your item will be automatically
        verified once we receive it.
      </p>
      <a
        className="cursor-pointer text-base leading-snug text-indigo"
        onClick={onNext}
      >
        Need <span className="hidden lg:inline-block">additional</span> help on
        how to forward a receipt?
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 inline-block"
        >
          <path
            d="M1.48964 1.01015L8.97949 8.5L1.48964 15.9899"
            stroke="#5921F5"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </a>
      {$variant === 'wex' && (
        <div className="text-center mt-11">
          <hr className="mb-6" />
          <a
            className="cursor-pointer text-base leading-snug text-gray-950"
            onClick={onWallet}
          >
            Go to my wallet
            <svg
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 inline-block"
            >
              <path
                d="M1.48964 1.01015L8.97949 8.5L1.48964 15.9899"
                stroke="#222222"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </a>
        </div>
      )}
    </>
  );
};
