import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilledButton } from '.';

export default {
  title: 'v2/Components/FilledButton',
  component: FilledButton,
  argTypes: {
    $size: {
      defaultValue: 'small',
      description: 'Button size',
      control: { type: 'radio' },
      options: ['small', 'large'],
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
    $color: {
      defaultValue: '',
      description: 'Button color',
      control: { type: 'radio' },
      options: ['primary', 'accent1', 'accent2', 'accent3', 'danger'],
    },
    children: {
      defaultValue: <>Button</>,
      description: 'Content for Button',
    },
  },
  parameters: {
    controls: {
      include: ['$size', 'disabled', '$block', '$loading', '$color'],
    },
  },
} as ComponentMeta<typeof FilledButton>;

const Template: ComponentStory<typeof FilledButton> = (args) => (
  <FilledButton {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  $size: 'small',
  children: <>Button</>,
};
