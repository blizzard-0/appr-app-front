import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast } from '.';

export default {
  title: 'v2/Components/Toast',
  component: Toast,
  argTypes: {
    children: {
      defaultValue: <>Toast</>,
      description: 'Content for Toast',
    },
    $variant: {
      defaultValue: 'success',
      control: { type: 'radio' },
      options: ['default', 'success', 'error', 'info', 'alert'],
    },
    $showClose: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    $showIcon: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      include: ['$variant', '$showClose', '$showIcon'],
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const DefaultToast = Template.bind({});
DefaultToast.args = {
  children: (
    <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</>
  ),
};

export const LongToast = Template.bind({});
LongToast.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </>
  ),
};
