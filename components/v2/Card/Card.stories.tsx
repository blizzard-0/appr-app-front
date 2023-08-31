import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'v2/Components/Card',
  component: Card,
  argTypes: {
    children: {
      defaultValue: <>Card</>,
      description: 'Content for Card',
    },
    $full: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      include: ['$full'],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  children: (
    <>
      <div className="w-full h-40 bg-gray-250"></div>
    </>
  ),
};
