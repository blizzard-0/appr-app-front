import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FloatingDots } from '.';

export default {
  title: 'v2/Components/FloatingDots',
  component: FloatingDots,
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
} as ComponentMeta<typeof FloatingDots>;

const Template: ComponentStory<typeof FloatingDots> = (args) => (
  <FloatingDots {...args} />
);

export const DefaultFloatingDots = Template.bind({});
DefaultFloatingDots.args = {};
