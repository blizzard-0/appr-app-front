import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormLabel } from '.';

export default {
  title: 'v2/Components/FormLabel',
  component: FormLabel,
  argTypes: {
    children: {
      defaultValue: <>Label</>,
      description: 'Content for Label',
    },
  },
  parameters: {
    controls: {
      include: [],
    },
  },
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
  <FormLabel {...args} />
);

export const DefaultFormLabel = Template.bind({});
DefaultFormLabel.args = {
  children: <>Label</>,
};
