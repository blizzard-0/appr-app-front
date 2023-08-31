/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToastMessage from './Message';

export default {
  title: 'Components/Toast',
  component: ToastMessage,
} as ComponentMeta<typeof ToastMessage>;

const Template: ComponentStory<typeof ToastMessage> = (args) => (
  <ToastMessage {...args} />
);

/* eslint-disable @typescript-eslint/no-empty-function */
export const SuccessToast = Template.bind({});
SuccessToast.args = {
  id: 'test-id',
  message: 'Lorem Ipsum',
  onRemove: () => {},
  type: 'Success',
  variant: 'Success',
  options: {
    duration: 999999,
    autoClose: false,
  },
};

export const InfoToast = Template.bind({});
InfoToast.args = {
  id: 'test-id',
  message: 'Lorem Ipsum',
  onRemove: () => {},
  type: 'Info',
  variant: 'Info',
  options: {
    duration: 999999,
    autoClose: false,
  },
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  id: 'test-id',
  message: 'Lorem Ipsum',
  onRemove: () => {},
  type: 'Warning',
  variant: 'Warning',
  options: {
    duration: 999999,
    autoClose: false,
  },
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  id: 'test-id',
  message: 'Lorem Ipsum',
  onRemove: () => {},
  type: 'Error',
  variant: 'Error',
  options: {
    duration: 999999,
    autoClose: false,
  },
};
