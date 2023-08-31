import { CloseIcon } from '@/components/Icons';
import { useRequestProtection_Mutation } from '@/generated/graphql';
import { useMyWalletPageContext } from '@/modules/wallet/context';
import { useWalletModalContext } from '@/modules/wallet/context/modal';
import React, { useCallback, useMemo, useState } from 'react';
import { updateWalletItemProtectionCacheUpdate } from '../../utils/cache';
import { AboutYou } from './components/AboutYou';
import { AboutYourItem } from './components/AboutYourItem';
import { Address } from './components/Address';

export enum RequestCoverageStep {
  AboutYou,
  Address,
  AboutYourItem,
}

export type RequestCoverageArgs = {
  legalName: string;
  dateOfBirth: string;
  isConsent: boolean;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  coverageValue: string;
};

export const RequestCoverage = () => {
  const [step, setStep] = useState(RequestCoverageStep.AboutYou);
  const { currentUser, setAppState } = useMyWalletPageContext();
  const { walletItem, setRequestProtection, setShowRequestDoneModal } =
    useWalletModalContext();
  const [formData, setFormData] = useState<RequestCoverageArgs>({
    legalName: '',
    coverageValue: '',
    dateOfBirth: '',
    isConsent: false,
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [requestProtectionMutation] = useRequestProtection_Mutation({
    update(cache, { data }) {
      updateWalletItemProtectionCacheUpdate(cache, data);
    },
  });

  const requestCoverage = useCallback(async () => {
    if (!walletItem) return;

    try {
      const result = await requestProtectionMutation({
        variables: {
          input: {
            walletItemId: walletItem.id,
            legalName: formData.legalName,
            dateOfBirth: new Date(formData.dateOfBirth).toUTCString(),
            isConsent: formData.isConsent,
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            coverageValue: formData.coverageValue,
          },
        },
      });
      if (
        result.data?.requestProtectionForWalletItem.__typename ===
        'RequestProtectionForWalletItemMutationSuccess'
      ) {
        setRequestProtection(false);
        setAppState('MyWalletPage');
        setShowRequestDoneModal(true);
      }
    } catch (err) {
      throw err;
    }
  }, [
    formData,
    requestProtectionMutation,
    setAppState,
    setRequestProtection,
    setShowRequestDoneModal,
    walletItem,
  ]);

  const emailAddress = useMemo(() => {
    if (!currentUser) return '';
    return currentUser.primaryEmailAddress;
  }, [currentUser]);

  const innerChildren = useMemo(() => {
    if (step === RequestCoverageStep.AboutYou) {
      return (
        <AboutYou
          emailAddress={emailAddress}
          onNext={() => setStep(RequestCoverageStep.Address)}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    if (step === RequestCoverageStep.Address) {
      return (
        <Address
          onNext={() => setStep(RequestCoverageStep.AboutYourItem)}
          onBack={() => setStep(RequestCoverageStep.AboutYou)}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    return (
      <AboutYourItem
        onSubmit={() => {
          requestCoverage();
        }}
        onBack={() => setStep(RequestCoverageStep.Address)}
        walletItem={walletItem}
        formData={formData}
        setFormData={setFormData}
      />
    );
  }, [emailAddress, formData, requestCoverage, step, walletItem]);

  const progressBar = useMemo(() => {
    if (step === RequestCoverageStep.AboutYou) {
      return (
        <div
          className="bg-theme-purple-3 rounded text-xs h-1 leading-none text-center text-white"
          style={{ width: '33%' }}
        ></div>
      );
    }
    if (step === RequestCoverageStep.Address) {
      return (
        <div
          className="bg-theme-purple-3 rounded text-xs h-1 leading-none text-center text-white"
          style={{ width: '66%' }}
        ></div>
      );
    }
    return (
      <div
        className="bg-theme-purple-3 rounded text-xs h-1 leading-none text-center text-white"
        style={{ width: '100%' }}
      ></div>
    );
  }, [step]);

  const pageTitle = useMemo(() => {
    switch (step) {
      case RequestCoverageStep.AboutYou:
        return 'About you';
      case RequestCoverageStep.Address:
        return 'Address';
      case RequestCoverageStep.AboutYourItem:
        return 'About your item';
    }
  }, [step]);

  return (
    <div className="bg-white min-h-inner-screen font-maison-neue-book pb-12 md:pb-0">
      <div className="pt-12 px-5 lg:px-0 lg:max-w-480-px mx-auto mb-8">
        <a
          className="inline-flex cursor-pointer"
          onClick={() => {
            setRequestProtection(false);
            setAppState('MyWalletPage');
          }}
        >
          <CloseIcon />
        </a>
        <h2 className="my-7 text-gray-900 font-maison-neue-extended text-26-px leading-36-px lg:whitespace-nowrap">
          Coverage request form
        </h2>
        <div className="w-full bg-skeleton h-1 rounded">{progressBar}</div>
      </div>
      <div className="px-5 lg:px-0 lg:max-w-480-px mx-auto pb-5">
        <h2 className="mb-5 text-gray-950 font-maison-neue-medium text-20-px leading-6">
          {pageTitle}
        </h2>
        {innerChildren}
      </div>
    </div>
  );
};
