import { FormControl, FormInput, AppButton, Checkbox } from '@/components/v2';
import { WalletModalItem } from '@/modules/wallet/context/modal';
import Link from 'next/link';
import React, { useState } from 'react';
import { RequestCoverageArgs } from '../..';

export const AboutYourItem: React.FC<{
  onSubmit: () => void;
  onBack: () => void;
  walletItem: WalletModalItem;
  formData: RequestCoverageArgs;
  setFormData: (formData: RequestCoverageArgs) => void;
}> = ({ walletItem, onBack, onSubmit, formData, setFormData }) => {
  const [checked, setChecked] = useState(false);
  if (!walletItem) return null;

  return (
    <>
      <div className="mb-8">
        <FormControl $align="left">
          <FormInput
            placeholder="Brand name"
            type="text"
            name="name"
            value={
              walletItem.__typename === 'IdentifiedWalletItem'
                ? walletItem.product.brand.name
                : ''
            }
          />
        </FormControl>
        <FormControl $align="left" className="mt-4">
          <FormInput
            placeholder="Item name"
            type="text"
            name="name"
            value={
              walletItem.__typename === 'IdentifiedWalletItem'
                ? walletItem.product.name
                : ''
            }
          />
        </FormControl>
        <div className="flex justify-between gap-4 items-center mt-4">
          <FormControl $align="left" className="w-2/3">
            <FormInput
              placeholder="$ Dollar value of your item"
              type="number"
              name="name"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  coverageValue: e.target.value,
                });
              }}
              value={formData.coverageValue}
            />
          </FormControl>
          <p className="font-normal text-14-px text-gray-500 leading-5">
            Enter your preferred coverage amount for this item.
          </p>
        </div>
        <div className="mt-6">
          <p className="mb-3">
            To be eligible for coverage, you must consent to share the data
            contained in this form with us, as governed by our 
            <Link href="https://appreciate.it/privacy" passHref>
              <a className="cursor-pointer text-base leading-snug text-indigo">
                privacy policy
              </a>
            </Link>{' '}
            .
          </p>
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked((preChecked) => {
                setFormData({
                  ...formData,
                  isConsent: !preChecked,
                });
                return !preChecked;
              });
            }}
          >
            I consent
          </Checkbox>
        </div>
      </div>
      <div className="flex justify-end">
        <AppButton $variant="secondary" onClick={onBack} className="mr-4">
          Back
        </AppButton>
        <AppButton
          onClick={onSubmit}
          disabled={!formData.coverageValue || !formData.isConsent}
        >
          Continue
        </AppButton>
      </div>
    </>
  );
};
