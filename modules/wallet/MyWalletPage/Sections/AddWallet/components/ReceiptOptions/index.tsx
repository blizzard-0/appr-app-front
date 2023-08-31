import { AppButton } from '@/components/v2';
import React, { useState } from 'react';
import { ToggleButton } from '..';
import { AddWalletStep } from '../..';
import { AddWalletFlow } from '../AddOptions';

interface ReceiptOptionsProps {
  onNext: (s: AddWalletStep) => void;
}

export const ReceiptOptions: React.FC<ReceiptOptionsProps> = ({ onNext }) => {
  const [flow, setFlow] = useState<AddWalletFlow>(AddWalletFlow.None);

  const handleClickNext = () => {
    if (flow === AddWalletFlow.ForwardReceipt) {
      onNext(AddWalletStep.ForwardReceipt);
    } else if (flow === AddWalletFlow.UploadReceipt) {
      onNext(AddWalletStep.Receipt);
    }
  };

  return (
    <div className="mt-10 lg:mt-12 max-w-340-px mx-auto grid grid-cols-1 gap-7 lg:gap-10 pb-5 md:pb-0">
      <h3 className="text-center font-maison-neue-demi text-2xl">
        You can provide your receipt in one of two ways.
      </h3>
      <div className="grid grid-cols-1 gap-6">
        <ToggleButton
          onClick={() => setFlow(AddWalletFlow.UploadReceipt)}
          selected={flow === AddWalletFlow.UploadReceipt}
        >
          Upload receipt
        </ToggleButton>
        <ToggleButton
          onClick={() => setFlow(AddWalletFlow.ForwardReceipt)}
          selected={flow === AddWalletFlow.ForwardReceipt}
        >
          Forward email receipt
        </ToggleButton>
      </div>
      <AppButton
        $block
        onClick={handleClickNext}
        disabled={flow === AddWalletFlow.None}
      >
        Continue
      </AppButton>
    </div>
  );
};
