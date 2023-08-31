import { FormControl, FormInput, AppButton, AppListbox } from '@/components/v2';
import React, { useState } from 'react';
import { RequestCoverageArgs } from '../..';
import { STATES } from './data/states';

export const Address: React.FC<{
  onNext: () => void;
  onBack: () => void;
  formData: RequestCoverageArgs;
  setFormData: (formData: RequestCoverageArgs) => void;
}> = ({ onNext, onBack, formData, setFormData }) => {
  const [state, setState] = useState(formData.state);

  const zipCodeMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  return (
    <>
      <div className="mb-8">
        <FormControl>
          <FormInput
            placeholder="Address line 1"
            type="text"
            name="addressLine1"
            onChange={(e) => {
              setFormData({
                ...formData,
                addressLine1: e.target.value,
              });
            }}
            value={formData.addressLine1}
          />
        </FormControl>
        <FormControl className="mt-4">
          <FormInput
            placeholder="Address line 2 (optional)"
            type="text"
            name="addressLine2"
            onChange={(e) => {
              setFormData({
                ...formData,
                addressLine2: e.target.value,
              });
            }}
            value={formData.addressLine2}
          />
        </FormControl>
        <div className="flex justify-between gap-4">
          <FormControl className="mt-4 w-1/2">
            <FormInput
              placeholder="City"
              type="text"
              name="city"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  city: e.target.value,
                });
              }}
              value={formData.city}
            />
          </FormControl>
          <FormControl className="mt-4 w-1/2">
            <AppListbox
              $variant="white"
              placeholder="State"
              options={STATES}
              value={state}
              onChange={(value) => {
                setState(() => {
                  setFormData({
                    ...formData,
                    state: value,
                  });
                  return value;
                });
              }}
            />
          </FormControl>
        </div>
        <FormControl className="mt-4 w-coverage-input">
          <FormInput
            placeholder="Zip code"
            type="number"
            name="name"
            maxLength={5}
            onChange={(e) => {
              zipCodeMask(e);
              setFormData({
                ...formData,
                zipCode: e.target.value,
              });
            }}
            value={formData.zipCode}
          />
        </FormControl>
      </div>
      <div className="flex justify-end">
        <AppButton $variant="secondary" onClick={onBack} className="mr-4">
          Back
        </AppButton>
        <AppButton
          onClick={onNext}
          disabled={
            !formData.addressLine1 ||
            !formData.city ||
            !formData.state ||
            !formData.zipCode
          }
        >
          Continue
        </AppButton>
      </div>
    </>
  );
};
