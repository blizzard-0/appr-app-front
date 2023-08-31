import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkButton } from '.';

export default {
  title: 'v2/Components/LinkButton',
  component: LinkButton,
  argTypes: {
    children: {
      defaultValue: <>LinkButton</>,
      description: 'Content for LinkButton',
    },
    $color: {
      defaultValue: 'default',
      opions: ['success', 'warning', 'default', 'warning', 'info'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: {
      include: ['$color'],
    },
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const DefaultLinkButton = Template.bind({});
DefaultLinkButton.args = {
  children: <>Remove item</>,
};
