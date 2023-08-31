import React from 'react';
import Link from 'next/link';
import { StyledLogo } from './Logo.styled';
import {
  LogoLarge,
  LogoMedium,
  LogoOnboarding,
  LogoSmall,
  LogoTiny,
} from './icons';

type LogoVariant = 'large' | 'medium' | 'small' | 'tiny' | 'onboarding';

const APP_LOGOS: Record<LogoVariant, React.ReactNode> = {
  large: <LogoLarge />,
  medium: <LogoMedium />,
  small: <LogoSmall />,
  tiny: <LogoTiny />,
  onboarding: <LogoOnboarding />,
};

interface LogoProps {
  $variant?: LogoVariant;
}

export const Logo: React.FC<LogoProps> = ({ $variant = 'tiny' }: LogoProps) => {
  return (
    <Link passHref href="/">
      <StyledLogo>{APP_LOGOS[$variant]}</StyledLogo>
    </Link>
  );
};
