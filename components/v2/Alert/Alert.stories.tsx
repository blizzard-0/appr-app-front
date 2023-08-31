import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from '.';

export default {
  title: 'v2/Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      defaultValue: <>Alert</>,
      description: 'Content for Alert',
    },
    $variant: {
      defaultValue: 'success',
      control: { type: 'radio' },
      options: ['success', 'error'],
    },
  },
  parameters: {
    controls: {
      include: ['$variant'],
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  $variant: 'success',
  children: <>This is success Alert</>,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  $variant: 'error',
  children: <>This is error Alert</>,
};
