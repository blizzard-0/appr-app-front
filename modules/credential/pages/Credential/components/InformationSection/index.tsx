import React from 'react';
import { Logo, AppButton } from '@/components/v2';
import {
  InformationWrapper,
  LogoWrapper,
  Details,
  WelcomeMessage,
  Disclaimer,
  DisclaimerHeading,
  DisclaimerText,
} from './InformationSection.styled';
import { UnboxingItems } from './components';
import { useUnboxingContext } from '@/modules/credential/context';

export const UnboxingInformation: React.FC = () => {
  const { currentUser } = useUnboxingContext();
  const { setStep } = useUnboxingContext();

  const onNext = () => {
    setStep('Playing');
  };

  if (!currentUser) return null;

  return (
    <InformationWrapper>
      <LogoWrapper>
        <Logo $variant="small" />
      </LogoWrapper>
      <UnboxingItems onClick={onNext} />
      <Details>
        <WelcomeMessage>
          {currentUser.fullName},
          <br />
          unbox your newest addition.
        </WelcomeMessage>
        <AppButton $block onClick={onNext}>
          Unbox
        </AppButton>
      </Details>
      <Disclaimer>
        <DisclaimerHeading>
          There&apos;s more to your purchase
        </DisclaimerHeading>
        <DisclaimerText>
          A digital unboxing experience is just the beginning. Discover new ways
          to digitally interact with the items you own through the appreciate
          app — track the appreciation value of your items, insure against
          mishaps, and explore owners-only content.
        </DisclaimerText>
      </Disclaimer>
    </InformationWrapper>
  );
};
