import React, { useState } from 'react';
import { useRequestSignInToken_Mutation } from '@/generated/graphql';
import { Alert, ProgressIndicator } from '@/components/v2';

import {
  StyledContainer,
  StyledEmailContent,
  StyledEmailHeader,
} from './RequestTokenSuccess.styled';

export type RequestTokenSuccessProps = {
  email: string;
};
export const RequestSignInTokenResult: React.FC<RequestTokenSuccessProps> = ({
  email,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState('');

  const [requestSignInMutation] = useRequestSignInToken_Mutation();

  async function handleResendEmail() {
    setLoading(true);
    const { data, errors } = await requestSignInMutation({
      variables: {
        email,
      },
    });
    setLoading(false);
    if (
      data?.requestSignInToken.__typename ===
      'RequestSignInTokenMutationSuccess'
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
      <StyledContainer className="mt-20 ">
        <StyledEmailHeader>
          Check your email
          <br />
          sign in to your accoun
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
