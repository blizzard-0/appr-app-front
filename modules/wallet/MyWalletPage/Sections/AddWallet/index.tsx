import React, { useMemo, useState } from 'react';
import { useMyWalletPageContext } from '../../../context';
import { AddOptions, UploadPhoto, UploadReceipt, NoPhoto } from './components';
import { BackIcon, CloseIcon } from '../../../../../components/Icons';
import { ReceiptOptions } from './components/ReceiptOptions';
import { ForwardReceipt } from '../ForwardReceipt';

export enum AddWalletStep {
  Options,
  Receipt,
  Photo,
  WithOutPhoto,
  ReceiptOptions,
  ForwardReceipt,
}

export type AddWalletProps = {
  $variant?: 'wex' | 'default';
};

export const AddWallet: React.FC<AddWalletProps> = ({
  $variant = 'default',
}) => {
  const [step, setStep] = useState(AddWalletStep.Options);
  const { setAppState, appState } = useMyWalletPageContext();

  const handleBack = () => {
    if (step === AddWalletStep.Options) {
      setAppState('MyWalletPage');
    } else if (step === AddWalletStep.Receipt && appState === 'WEXAddWallet') {
      setStep(AddWalletStep.ReceiptOptions);
    } else if (step === AddWalletStep.ForwardReceipt) {
      setStep(AddWalletStep.ReceiptOptions);
    } else {
      setStep(AddWalletStep.Options);
    }
  };

  const innerChildren = useMemo(() => {
    if (step === AddWalletStep.Options)
      return <AddOptions onNext={setStep} $variant={$variant} />;
    if (step === AddWalletStep.ReceiptOptions)
      return <ReceiptOptions onNext={setStep} />;
    if (step === AddWalletStep.Photo) return <UploadPhoto />;
    if (step === AddWalletStep.Receipt) return <UploadReceipt />;
    if (step === AddWalletStep.WithOutPhoto) return <NoPhoto />;
    if (step === AddWalletStep.ForwardReceipt)
      return <ForwardReceipt $variant={$variant} />;
    return null;
  }, [$variant, step]);

  return (
    <div className="bg-white min-h-inner-screen pb-12 md:pb-2">
      <div className="pt-12 max-w-340-px mx-auto lg:max-w-xl">
        <a className="inline-flex cursor-pointer" onClick={handleBack}>
          {step === AddWalletStep.Options ? <CloseIcon /> : <BackIcon />}
        </a>
      </div>
      {innerChildren}
    </div>
  );
};
