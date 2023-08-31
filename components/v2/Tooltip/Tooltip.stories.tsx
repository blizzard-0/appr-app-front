/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '.';

export default {
  title: 'v2/Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const TooltipWithoutLabel = Template.bind({});
TooltipWithoutLabel.args = {
  children:
    'This is the current selling price of your item. Brands may choose to increase the price of an item or put an item on sale, so you may see the retail value of your item change over time. ',
  trigger: (
    <button className="border border-gray-900 h-48 p-4">Tooltip Trigger</button>
  ),
};

export const TooltipWithLabel = Template.bind({});
TooltipWithLabel.args = {
  children:
    'This is the current selling price of your item. Brands may choose to increase the price of an item or put an item on sale, so you may see the retail value of your item change over time. ',
  title: 'Retail Price:',
  trigger: (
    <button className="border border-gray-900 h-48 p-4">Tooltip Trigger</button>
  ),
};

export const LeftPositionedTooltip = Template.bind({});
LeftPositionedTooltip.args = {
  children:
    'This is the current selling price of your item. Brands may choose to increase the price of an item or put an item on sale, so you may see the retail value of your item change over time. ',
  trigger: (
    <button className="border border-gray-900 h-48 p-4">Tooltip Trigger</button>
  ),
  position: 'left',
};
