import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '.';
import { DockedButton, AppButton } from '..';

export default {
  title: 'v2/Components/Modal',
  component: Modal.Base,
  argTypes: {
    $size: {
      defaultValue: 'medium',
      description: 'Size for modal',
    },
    $show: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    $fullscreen: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      include: ['$size', '$show', '$fullscreen'],
    },
  },
} as ComponentMeta<typeof Modal.Base>;

const Template: ComponentStory<typeof Modal.Base> = (args) => (
  <Modal.Base {...args} />
);

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  $size: 'small',
  children: (
    <>
      <Modal.Header>Header</Modal.Header>
      <Modal.Content className="text-center p-5">Modal Here</Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block>Confirm</AppButton>
          <AppButton $block $variant="secondary">
            Cancel
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </>
  ),
};
