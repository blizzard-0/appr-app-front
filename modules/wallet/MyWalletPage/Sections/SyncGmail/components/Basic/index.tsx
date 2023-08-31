import React, { useState } from 'react';
import Link from 'next/link';
import { Placeholder } from './Placeholder';
import { routes } from '../../../../../../routes';
import { useRouter } from 'next/router';
import { useCreateAuthUrl_Mutation } from '../../../../../../../generated/graphql';
import { gql } from '@apollo/client';
import { useCurrentUser } from '@/modules/auth/hooks';
import { AppButton, FormControl, FormInput, FormLabel } from '@/components/v2';
import { rest } from 'lodash';

export const CREATE_GMAIL_AUTH_MUTATION = gql`
  mutation createAuthUrl_($email: String!) {
    createAuthUrl(email: $email) {
      __typename
      ... on CreateAuthUrlMutationSuccess {
        url
      }
    }
  }
`;
const privacy = routes.appFrontend.privacy.fillPath(null);
const about = routes.appFrontend.about.fillPath(null);

export const Basic: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [gmail, setGmail] = useState('');
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  const [createAuthUrlMutation] = useCreateAuthUrl_Mutation();

  const handleClick = () => {
    if (currentUser?.primaryEmailAddress)
      createAuthUrlMutation({
        variables: {
          email: gmail,
        },
        onCompleted: (data) => {
          if (
            data.createAuthUrl.__typename === 'CreateAuthUrlMutationSuccess'
          ) {
            router.push(data.createAuthUrl.url);
          }
        },
      });
  };
  //const disabled = !gmail.endsWith('@gmail.com');

  return (
    <>
      <div className="flex justify-center lg:justify-start mb-6">
        <Placeholder />
      </div>
      <h2 className="font-maison-neue-demi text-32-px leading-42-px mb-3">
        Sync your Gmail account
      </h2>
      <p className="text-gray-800 text-base leading-snug mb-4">
        Connect your Gmail account and any receipts we recongize will be
        automatically added to your Wallet.
      </p>
      <a
        className="cursor-pointer text-base leading-snug text-indigo"
        onClick={onNext}
      >
        How it works
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
      <div className="mt-9 lg:mt-11 w-full lg:max-w-350-px mb-6">
        <FormControl $align="left">
          <FormLabel>Enter your Gmail email address</FormLabel>
          <FormInput
            placeholder=""
            type="email"
            name="gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            {...rest}
          />
        </FormControl>
      </div>
      <p className="text-gray-800 text-14-px leading-snug mb-8">
        By connecting your Gmail account, you consent to appreciate scanning
        your inbox to identify receipts that you received from companies in
        order for us to add and verify those items to be disclosed in your
        wallet. Read our{' '}
        <Link href={privacy} passHref>
          <a className="text-indigo">Privacy Policy</a>
        </Link>{' '}
        and our{' '}
        <Link href={about} passHref>
          <a className="text-indigo">Help</a>
        </Link>{' '}
        to learn more about syncing your account.
      </p>
      <div className="w-full lg:max-w-350-px">
        <AppButton onClick={handleClick} $block disabled={false}>
          Next
        </AppButton>
      </div>
    </>
  );
};
