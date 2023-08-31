import { useMemo } from 'react';
import { useUnboxingContext } from '@/modules/credential/context';

import {
  UnboxingInformation,
  UnboxingPlaying,
  UnboxingConfirmation,
} from './components';
import { StyledCredentialPageWrapper } from './Credential.styled';

export const CredentialPage: React.FC = () => {
  const { step } = useUnboxingContext();

  const innerContent = useMemo(() => {
    if (step === 'Information') {
      return <UnboxingInformation />;
    }
    if (step === 'Playing') {
      return <UnboxingPlaying />;
    }
    return <UnboxingConfirmation />;
  }, [step]);

  return (
    <StyledCredentialPageWrapper>{innerContent}</StyledCredentialPageWrapper>
  );
};
