import { AppButton } from '@/components/v2';
import { routes } from '@/modules/routes';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ToggleButton } from '..';
import { AddWalletStep } from '../..';

export enum AddWalletFlow {
  None,
  UploadReceipt,
  ShareReceipt,
  PhotoOfItem,
  ListMyItems,
  ForwardReceipt,
  SearchItem,
}

interface AddOptionsProps {
  onNext: (s: AddWalletStep) => void;
  $variant?: 'wex' | 'default';
}

export const AddOptions: React.FC<AddOptionsProps> = ({
  onNext,
  $variant = 'default',
}) => {
  const [flow, setFlow] = useState<AddWalletFlow>(AddWalletFlow.None);
  const router = useRouter();

  const handleClickNext = () => {
    if (flow === AddWalletFlow.ListMyItems) {
      onNext(AddWalletStep.WithOutPhoto);
    } else if (flow === AddWalletFlow.PhotoOfItem) {
      onNext(AddWalletStep.Photo);
    } else if (flow === AddWalletFlow.UploadReceipt) {
      onNext(AddWalletStep.Receipt);
    } else if (flow === AddWalletFlow.ShareReceipt) {
      onNext(AddWalletStep.ReceiptOptions);
    } else if (flow === AddWalletFlow.SearchItem) {
      router.push(routes.appFrontend.explore.fillPath(null));
    } else if (flow === AddWalletFlow.ForwardReceipt) {
      onNext(AddWalletStep.ForwardReceipt);
    }
  };

  return (
    <div className="mt-10 lg:mt-12 max-w-340-px mx-auto grid grid-cols-1 gap-7 lg:gap-10 pb-5 md:pb-0">
      <h3 className="text-center font-maison-neue-demi text-2xl">
        {$variant === 'wex'
          ? 'Start adding your collection to your appreciate wallet.'
          : 'How would you like to add items to your wallet?'}
      </h3>
      <div className="grid grid-cols-1 gap-6">
        <ToggleButton
          onClick={() => setFlow(AddWalletFlow.SearchItem)}
          selected={flow === AddWalletFlow.SearchItem}
        >
          Search for an item
        </ToggleButton>
        <ToggleButton
          onClick={() => setFlow(AddWalletFlow.PhotoOfItem)}
          selected={flow === AddWalletFlow.PhotoOfItem}
        >
          Photo of the item
        </ToggleButton>
        <ToggleButton
          onClick={() => setFlow(AddWalletFlow.ForwardReceipt)}
          selected={flow === AddWalletFlow.ForwardReceipt}
        >
          Forward a receipt
        </ToggleButton>
        {/* {$variant === 'wex' ? (
          <ToggleButton
            onClick={() => setFlow(AddWalletFlow.ShareReceipt)}
            selected={flow === AddWalletFlow.ShareReceipt}
          >
            Provide receipt
          </ToggleButton>
        ) : (
          <ToggleButton
            onClick={() => setFlow(AddWalletFlow.UploadReceipt)}
            selected={flow === AddWalletFlow.UploadReceipt}
          >
            Upload receipt
          </ToggleButton>
        )} */}
        {/* <ToggleButton
          onClick={() => setFlow(AddWalletFlow.ListMyItems)}
          selected={flow === AddWalletFlow.ListMyItems}
        >
          List item
        </ToggleButton> */}
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
