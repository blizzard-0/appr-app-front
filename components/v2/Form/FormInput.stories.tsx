import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormInput } from '.';

export default {
  title: 'v2/Components/FormInput',
  component: FormInput,
  argTypes: {
    $size: {
      defaultValue: 'medium',
      description: 'Size for input element',
      options: ['medium', 'large'],
      control: { type: 'radio' },
    },
    placeholder: {
      defaultValue: 'Placeholder',
      description: 'Placeholder for input',
      control: { type: 'text' },
    },
  },
  parameters: {
    controls: {
      include: ['$size', 'placeholder'],
    },
  },
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const DefaultFormInput = Template.bind({});
DefaultFormInput.args = {};

export const LargeFormInput = Template.bind({});
LargeFormInput.args = {
  $size: 'large',
};
