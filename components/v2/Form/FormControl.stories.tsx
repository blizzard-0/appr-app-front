import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormLabel, FormInput, FormErrorMessage } from '.';

export default {
  title: 'v2/Components/FormControl',
  component: FormControl,
  argTypes: {
    $align: {
      defaultValue: 'left',
      description: 'Form Alignment',
    },
  },
  parameters: {
    controls: {
      include: ['$align'],
    },
  },
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args} />
);

export const DefaultFormControl = Template.bind({});
DefaultFormControl.args = {
  children: (
    <>
      <FormInput placeholder="placeholder" id="formInput" />
    </>
  ),
};

export const FormControlWithLabel = Template.bind({});
FormControlWithLabel.args = {
  children: (
    <>
      <FormLabel htmlFor="formInput">Label</FormLabel>
      <FormInput placeholder="placeholder" id="formInput" />
    </>
  ),
};

export const FormControlWithError = Template.bind({});
FormControlWithError.args = {
  children: (
    <>
      <FormLabel htmlFor="formInput1">Label</FormLabel>
      <FormInput $hasError placeholder="placeholder" id="formInput1" />
      <FormErrorMessage>Error</FormErrorMessage>
    </>
  ),
};

export const FormControlAlignedLeft = Template.bind({});
FormControlAlignedLeft.args = {
  $align: 'left',
  children: (
    <>
      <FormLabel htmlFor="formInput2">Label</FormLabel>
      <FormInput $hasError placeholder="placeholder" id="formInput2" />
      <FormErrorMessage>Error</FormErrorMessage>
    </>
  ),
};

export const FormControlAlignedCenter = Template.bind({});
FormControlAlignedCenter.args = {
  $align: 'center',
  children: (
    <>
      <FormLabel htmlFor="formInput3">Label</FormLabel>
      <FormInput $hasError placeholder="placeholder" id="formInput3" />
      <FormErrorMessage>Error</FormErrorMessage>
    </>
  ),
};
