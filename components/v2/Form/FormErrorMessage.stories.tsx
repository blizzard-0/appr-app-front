import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormErrorMessage } from '.';

export default {
  title: 'v2/Components/FormErrorMessage',
  component: FormErrorMessage,
  argTypes: {
    children: {
      defaultValue: <>Error Message</>,
      description: 'Content for Label',
    },
  },
  parameters: {
    controls: {
      include: [],
    },
  },
} as ComponentMeta<typeof FormErrorMessage>;

const Template: ComponentStory<typeof FormErrorMessage> = (args) => (
  <FormErrorMessage {...args} />
);

export const DefaultFormErrorMessage = Template.bind({});
DefaultFormErrorMessage.args = {
  children: <>Error Message</>,
};
