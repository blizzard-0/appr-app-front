import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'v2/Components/Avatar',
  component: Avatar,
  argTypes: {
    $size: {
      defaultValue: 'large',
      control: { type: 'radio' },
      options: ['large', 'small'],
    },
    userName: {
      defaultValue: 'John Doe',
      control: { type: 'text' },
    },
    avatarUrl: {
      defaultValue: '',
      control: { type: '' },
    },
  },
  parameters: {
    controls: {
      include: ['$size', 'userName', 'avatarUrl'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  $size: 'small',
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  avatarUrl: 'https://i.pravatar.cc/80',
};
