import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AppListbox } from '.';

const OPTIONS = [
  { value: 'opt1', label: 'Lorem' },
  { value: 'opt2', label: 'Ipsum' },
  { value: 'opt3', label: 'Sit' },
  { value: 'opt4', label: 'Dolor' },
];

export default {
  title: 'v2/Components/AppListbox',
  component: AppListbox,
  argTypes: {
    value: {
      defaultValue: 'opt1',
      description: 'Selected value for autocomplete',
    },
    options: {
      defaultValue: OPTIONS,
      control: { type: 'object' },
      description: 'Selectable options for autocomplete',
    },
    $variant: {
      defaultValue: 'gray',
      control: { type: 'radio' },
      options: ['gray', 'white'],
    },
  },
  parameters: {
    controls: {
      include: ['value', 'options', '$variant'],
    },
  },
} as ComponentMeta<typeof AppListbox>;

const Template: ComponentStory<typeof AppListbox> = (args) => (
  <AppListbox {...args} />
);

export const DefaultAppListbox = Template.bind({});
DefaultAppListbox.args = {
  onChange: action('onChange'),
};

export const WhiteAppListbox = Template.bind({});
WhiteAppListbox.args = {
  onChange: action('onChange'),
  $variant: 'white',
};
