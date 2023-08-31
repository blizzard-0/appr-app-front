import React, { useState } from 'react';
import { Alert, ProgressIndicator } from '@/components/v2';
import { useRequestDeleteUserTokenMutation } from '../../../../generated/graphql';
import { EmailBoxContainer } from '../../../auth/components/RequestTokenSuccess/EmailBoxContainer';
import {
  StyledEmailHeader,
  StyledEmailContent,
} from '../../../auth/components/RequestTokenSuccess/RequestTokenSuccess.styled';
import { useRouter } from 'next/router';

export const RequestDeleteAccountToken: React.FC = () => {
  const [alert, setAlert] = useState(false);
  const router = useRouter();
  const { email } = router.query;

  const [requestDeleteUserTokenMutation, { data, loading }] =
    useRequestDeleteUserTokenMutation();

  return (
    <div className="lg:mt-20">
      <ProgressIndicator active={loading} />
      {data && alert && (
        <Alert
          $variant={
            data?.requestDeleteAccountToken.__typename ===
            'RequestDeleteAccountTokenMutationSuccess'
              ? 'success'
              : 'error'
          }
        >
          {data?.requestDeleteAccountToken.__typename ===
          'RequestDeleteAccountTokenMutationSuccess'
            ? `We sent a magic link to: ${email}`
            : 'Something went wrong, please try again later!'}
        </Alert>
      )}
      <div className="mx-auto bg-white mt-10 w-small-container-mobile md:w-modal leading-12">
        <StyledEmailHeader>Check your email</StyledEmailHeader>
        <hr />
        <StyledEmailContent>
          <p>We just sent a magic link to:</p>
          <div className="my-6">
            <EmailBoxContainer>{email}</EmailBoxContainer>
          </div>
          <p>
            {"Didn't come through? "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                requestDeleteUserTokenMutation();
                setAlert(true);
              }}
            >
              Click here to resend
            </span>
            .
          </p>
        </StyledEmailContent>
      </div>
    </div>
  );
};
