import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DockedButton } from '.';
import { AppButton } from '..';

export default {
  title: 'v2/Components/DockedButton',
  component: DockedButton,
  argTypes: {
    children: {
      defaultValue: () => (
        <>
          <AppButton>Secondary</AppButton>
          <AppButton>Primary</AppButton>
        </>
      ),
      description: 'Content for Button',
    },
  },
  parameters: {
    controls: {
      include: [],
    },
  },
} as ComponentMeta<typeof DockedButton>;

const Template: ComponentStory<typeof DockedButton> = (args) => (
  <DockedButton {...args} />
);

export const DefaultDockedButton = Template.bind({});
DefaultDockedButton.args = {
  children: (
    <>
      <AppButton $block>Primary</AppButton>
      <AppButton $block $variant="secondary">
        Secondary
      </AppButton>
    </>
  ),
};

export const SingleDockedButton = Template.bind({});
SingleDockedButton.args = {
  children: (
    <>
      <AppButton $block>Primary</AppButton>
    </>
  ),
};
