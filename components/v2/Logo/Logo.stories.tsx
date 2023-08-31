import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'v2/Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {};

export const LargeLogo = Template.bind({});
LargeLogo.args = {
  $variant: 'large',
};

export const MediumLogo = Template.bind({});
MediumLogo.args = {
  $variant: 'medium',
};

export const SmallLogo = Template.bind({});
SmallLogo.args = {
  $variant: 'small',
};

export const TinyLogo = Template.bind({});
TinyLogo.args = {
  $variant: 'tiny',
};

export const OnboardingLogo = Template.bind({});
OnboardingLogo.args = {
  $variant: 'onboarding',
};
