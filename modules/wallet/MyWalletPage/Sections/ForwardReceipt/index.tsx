import React, { useMemo, useState } from 'react';
import { useMyWalletPageContext } from '../../../context';
import { BackIcon, CloseIcon } from '../../../../../components/Icons';
import { BasicHelp, AdditionalHelp } from './components';
import { AddWalletProps } from '../AddWallet';

export enum ForwardReceiptStep {
  BasicHelp,
  AdditionalHelp,
}

export const ForwardReceipt: React.FC<AddWalletProps> = ({
  $variant = 'default',
}) => {
  const [step, setStep] = useState(ForwardReceiptStep.BasicHelp);
  const { currentUser, setAppState } = useMyWalletPageContext();

  const emailAddress = useMemo(() => {
    if (!currentUser) return '';
    return currentUser.primaryEmailAddress;
  }, [currentUser]);

  const innerChildren = useMemo(() => {
    if (step === ForwardReceiptStep.BasicHelp) {
      return (
        <BasicHelp
          $variant={$variant}
          emailAddress={emailAddress}
          onNext={() => setStep(ForwardReceiptStep.AdditionalHelp)}
          onWallet={() => setAppState('MyWalletPage')}
        />
      );
    }
    return <AdditionalHelp emailAddress={emailAddress} />;
  }, [step, emailAddress, $variant, setAppState]);

  const actionCta = useMemo(() => {
    if (step === ForwardReceiptStep.BasicHelp) {
      return (
        <a
          className="inline-flex cursor-pointer"
          onClick={() => setAppState('MyWalletPage')}
        >
          <CloseIcon />
        </a>
      );
    }
    return (
      <a
        className="inline-flex cursor-pointer"
        onClick={() => setStep(ForwardReceiptStep.BasicHelp)}
      >
        <BackIcon />
      </a>
    );
  }, [step, setAppState]);

  return (
    <div className="bg-white min-h-inner-screen font-maison-neue-book pb-12 md:pb-0">
      <div
        className={`${
          $variant === 'wex' ? 'pt-0' : 'pt-12'
        } px-5 lg:px-0 lg:max-w-480-px mx-auto mb-8 lg:mb-9`}
      >
        {$variant === 'wex' ? null : actionCta}
      </div>
      <div className="px-5 lg:px-0 lg:max-w-480-px mx-auto pb-5">
        {innerChildren}
      </div>
    </div>
  );
};
