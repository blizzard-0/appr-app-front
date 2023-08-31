import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '.';

export default {
  title: 'v2/Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      defaultValue: <>Tag</>,
      description: 'Content for Tag',
    },
    $variant: {
      defaultValue: 'default',
      opions: ['success', 'warning', 'default'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: {
      include: ['$variant'],
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  children: <>Tag</>,
};
