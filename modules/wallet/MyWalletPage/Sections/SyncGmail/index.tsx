import React, { useMemo, useState } from 'react';
import { useMyWalletPageContext } from '../../../context';
import { BackIcon, CloseIcon } from '../../../../../components/Icons';
import { Basic, AdditionalHelp } from './components';

export enum SyncGmailStep {
  Basic,
  AdditionalHelp,
}

export const SyncGmail: React.FC = () => {
  const [step, setStep] = useState(SyncGmailStep.Basic);
  const { setAppState } = useMyWalletPageContext();

  const innerChildren = useMemo(() => {
    if (step === SyncGmailStep.Basic) {
      return <Basic onNext={() => setStep(SyncGmailStep.AdditionalHelp)} />;
    }
    return <AdditionalHelp onBack={() => setStep(SyncGmailStep.Basic)} />;
  }, [step]);

  const actionCta = useMemo(() => {
    if (step === SyncGmailStep.Basic) {
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
        onClick={() => setStep(SyncGmailStep.Basic)}
      >
        <BackIcon />
      </a>
    );
  }, [step, setAppState]);

  return (
    <div className="bg-white min-h-inner-screen font-maison-neue-book pb-12 md:pb-0">
      <div className="pt-12 px-5 lg:px-0 lg:max-w-480-px mx-auto mb-8 lg:mb-9">
        {actionCta}
      </div>
      <div className="px-5 lg:px-0 lg:max-w-480-px mx-auto pb-5">
        {innerChildren}
      </div>
    </div>
  );
};
