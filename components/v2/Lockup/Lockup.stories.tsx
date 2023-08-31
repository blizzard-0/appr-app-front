import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lockup } from '.';

export default {
  title: 'v2/Components/Lockup',
  component: Lockup,
  argTypes: {
    children: {
      defaultValue: <>Lockup</>,
      description: 'Content for Lockup',
    },
    label: {
      defaultValue: 'Label',
      control: { type: 'text' },
    },
  },
  parameters: {
    controls: {
      include: ['label'],
    },
  },
} as ComponentMeta<typeof Lockup>;

const Template: ComponentStory<typeof Lockup> = (args) => <Lockup {...args} />;

export const DefaultLockup = Template.bind({});
DefaultLockup.args = {
  label: 'Label',
  children: <>This is Lockup</>,
};
