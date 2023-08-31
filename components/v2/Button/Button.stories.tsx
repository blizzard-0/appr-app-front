import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppButton } from '.';

export default {
  title: 'v2/Components/Button',
  component: AppButton,
  argTypes: {
    $variant: {
      defaultValue: 'primary',
      description: 'Button variants',
      control: { type: 'radio' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'pagination',
        'transparent',
      ],
    },
    $size: {
      defaultValue: 'large',
      description: 'Button size',
      control: { type: 'radio' },
      options: ['large', 'small'],
    },
    disabled: {
      defaultValue: false,
      description: 'Button disabled status',
      control: { type: 'boolean' },
    },
    $block: {
      defaultValue: false,
      description: 'Button width',
      control: { type: 'boolean' },
    },
    $loading: {
      defaultValue: false,
      description: 'Loading state',
      control: { type: 'boolean' },
    },
    children: {
      defaultValue: <>Button</>,
      description: 'Content for Button',
    },
  },
  parameters: {
    controls: {
      include: ['$variant', '$size', 'disabled', '$block', '$loading'],
    },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: <>Default</>,
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  children: <>Full</>,
  $block: true,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: <>Primary</>,
  $variant: 'primary',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: <>Secondary</>,
  $variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: <>Tertiary</>,
  $variant: 'tertiary',
};

export const PaginationButton = Template.bind({});
PaginationButton.args = {
  children: <>Paginate</>,
  $variant: 'pagination',
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: <>Transparent</>,
  $variant: 'transparent',
};
