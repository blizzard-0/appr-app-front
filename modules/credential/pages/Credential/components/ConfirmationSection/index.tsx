import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUnboxingContext } from '@/modules/credential/context';
import { routes } from '@/modules/routes';

import { AppButton } from '@/components/v2';
import { UnboxingHeader, UnboxingCard } from '..';
import {
  StyledBackground,
  StyledContent,
  StyledTitle,
  StyledActiveIndicator,
  StyledDot,
  StyledSkip,
} from './ConfirmationSection.styled';
import { useCurrentUser } from '@/modules/auth/hooks';

export const UnboxingConfirmation: React.FC = () => {
  const { currentIndex, identifiedItems, setCurrentIndex, setStep } =
    useUnboxingContext();
  const { currentUser } = useCurrentUser();
  const router = useRouter();

  const onNext = () => {
    if (currentIndex === identifiedItems.length - 1) {
      router.push(routes.appFrontend.myWallet.fillPath(null));
      return;
    }
    setCurrentIndex(currentIndex + 1);
    setStep('Playing');
  };

  if (!currentUser) return null;

  return (
    <StyledBackground>
      <UnboxingHeader />
      <StyledContent>
        <StyledTitle>
          {currentUser.fullName},<br />
          your appreciate wallet is ready.
        </StyledTitle>
        <UnboxingCard walletItem={identifiedItems[currentIndex]} />
        {identifiedItems.length > 1 && (
          <StyledActiveIndicator>
            {identifiedItems.map((_, index) => (
              <StyledDot key={index} $active={index === currentIndex} />
            ))}
          </StyledActiveIndicator>
        )}
        <AppButton $block onClick={onNext}>
          {identifiedItems.length === currentIndex + 1
            ? 'Continue'
            : 'Continue unboxing'}
        </AppButton>
        {identifiedItems.length > 1 && (
          <Link passHref href={routes.appFrontend.myWallet.fillPath(null)}>
            <StyledSkip>View my appreciate wallet</StyledSkip>
          </Link>
        )}
      </StyledContent>
    </StyledBackground>
  );
};
