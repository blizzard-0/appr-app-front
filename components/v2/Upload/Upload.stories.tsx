import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Upload } from '.';

export default {
  title: 'v2/Components/Upload',
  component: Upload,
  argTypes: {
    children: {
      defaultValue: <>Upload</>,
      description: 'Content for Upload',
    },
  },
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const DefaultUpload = Template.bind({});
DefaultUpload.args = {
  children: <>Lorem Ipsum dolor sit</>,
};
