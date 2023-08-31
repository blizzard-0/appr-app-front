import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressToast } from '.';

export default {
  title: 'v2/Components/ProgressToast',
  component: ProgressToast,
  argTypes: {
    $progress: {
      defaultValue: 0,
      control: { type: 'number' },
    },
    $text: {
      defaultValue: 'Uploading.',
      control: { type: 'text' },
    },
  },
  parameters: {
    controls: {
      include: ['$progress', '$text'],
    },
  },
} as ComponentMeta<typeof ProgressToast>;

const Template: ComponentStory<typeof ProgressToast> = (args) => (
  <ProgressToast {...args} />
);

export const DefaultProgressToast = Template.bind({});
DefaultProgressToast.args = {};

export const ProgressToastWithValue = Template.bind({});
ProgressToastWithValue.args = {
  $progress: 20,
  $text: 'Progress is 20%',
};
