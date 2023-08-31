import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '.';

export default {
  title: 'v2/Components/Radio',
  component: Radio,
  argTypes: {
    selected: {
      defaultValue: 'value1',
      description: 'Selected value',
      control: { type: 'text' },
    },
    items: {
      defaultValue: [
        {
          value: 'value1',
          label: 'label1',
        },
        {
          value: 'value2',
          label: 'label2',
        },
      ],
      description: 'Options',
      control: { type: 'array' },
    },
  },
  parameters: {
    controls: {
      include: ['selected', 'value'],
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  items: [
    {
      value: 'value1',
      label: 'label1',
    },
    {
      value: 'value2',
      label: 'label2',
    },
  ],
};
