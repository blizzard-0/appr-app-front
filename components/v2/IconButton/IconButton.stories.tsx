import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '.';

export default {
  title: 'v2/Components/IconButton',
  component: IconButton,
  argTypes: {
    children: {
      defaultValue: <>Button</>,
      description: 'Content for Button',
    },
  },
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as ComponentMeta<typeof IconButton>;

const defaultIconOnlyArgs = {
  children: (
    <>
      <p>add</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9992 4.94995C11.6955 4.94995 11.4492 5.19619 11.4492 5.49995V11.45H5.49922C5.19546 11.45 4.94922 11.6962 4.94922 12C4.94922 12.3037 5.19546 12.55 5.49922 12.55H11.4492V18.5C11.4492 18.8037 11.6955 19.05 11.9992 19.05C12.303 19.05 12.5492 18.8037 12.5492 18.5V12.55H18.4992C18.803 12.55 19.0492 12.3037 19.0492 12C19.0492 11.6962 18.803 11.45 18.4992 11.45H12.5492V5.49995C12.5492 5.19619 12.303 4.94995 11.9992 4.94995Z"
          fill="#222222"
        />
      </svg>
    </>
  ),
};

const iconButtonIconOnlyArgs = {
  children: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9992 4.94995C11.6955 4.94995 11.4492 5.19619 11.4492 5.49995V11.45H5.49922C5.19546 11.45 4.94922 11.6962 4.94922 12C4.94922 12.3037 5.19546 12.55 5.49922 12.55H11.4492V18.5C11.4492 18.8037 11.6955 19.05 11.9992 19.05C12.303 19.05 12.5492 18.8037 12.5492 18.5V12.55H18.4992C18.803 12.55 19.0492 12.3037 19.0492 12C19.0492 11.6962 18.803 11.45 18.4992 11.45H12.5492V5.49995C12.5492 5.19619 12.303 4.94995 11.9992 4.94995Z"
        fill="#222222"
      />
    </svg>
  ),
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const DefaultIconButton = Template.bind({});
DefaultIconButton.args = {
  ...defaultIconOnlyArgs,
};

export const IconButtonIconOnly = Template.bind({});
IconButtonIconOnly.args = { ...iconButtonIconOnlyArgs };
