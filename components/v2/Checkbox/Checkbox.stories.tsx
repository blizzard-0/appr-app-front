import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '.';

export default {
  title: 'v2/Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      defaultValue: <>Checkbox</>,
      description: 'Content for Checkbox',
    },
    $size: {
      defaultValue: 'large',
      control: { type: 'radio' },
      options: ['large', 'small'],
    },
    checked: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      include: ['$size', 'checked'],
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox id="checkbox" {...args} />
);

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  children: <>This is success Checkbox</>,
};

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
  $size: 'small',
  children: <>This is success Checkbox</>,
};
