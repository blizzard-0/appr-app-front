import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from '.';

export default {
  title: 'v2/Components/Navbar',
  component: Navbar,
  argTypes: {
    currentUser: {
      defaultValue: {
        userName: 'John Doe',
        primaryEmail: 'john@gmail.com',
      },
    },
  },
  parameters: {
    controls: {
      include: ['currentUser'],
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {};

export const AvatarNavbar = Template.bind({});
AvatarNavbar.args = {
  currentUser: {
    primaryEmail: 'john@gmail.com',
    userName: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/80',
  },
};
