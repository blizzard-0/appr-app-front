import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressIndicator } from '.';

export default {
  title: 'v2/Components/ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    active: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      include: ['active'],
    },
  },
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
  <ProgressIndicator {...args} />
);

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.args = {};
