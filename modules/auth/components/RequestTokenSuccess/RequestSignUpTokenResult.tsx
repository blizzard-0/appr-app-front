import React, { useState } from 'react';
import { Alert, ProgressIndicator } from '@/components/v2';
import {
  StyledEmailContent,
  StyledEmailHeader,
  StyledContainer,
} from './RequestTokenSuccess.styled';

import { useRequestSignUpToken_Mutation } from '@/generated/graphql';

export type RequestSignUpTokenProps = {
  email: string;
  fullName: string;
};
export const RequestSignUpTokenResult: React.FC<RequestSignUpTokenProps> = ({
  email,
  fullName,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState('');

  const [requestSignUpMutation] = useRequestSignUpToken_Mutation();

  async function handleResendEmail() {
    setLoading(true);
    const { data, errors } = await requestSignUpMutation({
      variables: {
        email: {
          emailAddress: email,
          fullName,
        },
      },
    });
    setLoading(false);
    if (
      data?.requestSignUpToken.__typename ===
      'RequestSignUpTokenMutationSuccess'
    ) {
      setSuccess(true);
      setAlert(`We sent a magic link to: ${email}`);
    } else if (errors) {
      setAlert(errors[0].message);
      setSuccess(false);
    }
  }
  return (
    <div className="mt-20">
      <ProgressIndicator active={loading} />
      {alert && (
        <Alert
          className="w-300-px lg:w-modal mx-auto"
          $variant={success ? 'success' : 'error'}
        >
          {alert}
        </Alert>
      )}
      <StyledContainer className="">
        <StyledEmailHeader>
          Check your email to <br /> to create your account
        </StyledEmailHeader>
        <StyledEmailContent>
          <h2>
            We’ve sent a magic link to <b>{email}</b>.<br />
            The link expires shortly, so open it soon.
          </h2>
          <div className="pt-10 text-krestrel-action-pressed">
            {"Didn't come through? Check your spam folder."}
            <br />
            <span
              className="text-link hover:underline focus:underline visited:bg-krestrel-action-hyperlinkVisited cursor-pointer "
              onClick={handleResendEmail}
            >
              Re-send a new link
            </span>
          </div>
        </StyledEmailContent>
      </StyledContainer>
    </div>
  );
};
