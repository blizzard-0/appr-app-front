import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExploreItem } from '.';

export default {
  title: 'v2/Components/ExploreItem',
  component: ExploreItem,
  argTypes: {
    brandName: {
      control: { type: 'text' },
      description: 'Brand name of the explore searched item',
    },
    productName: {
      control: { type: 'text' },
      description: 'Product name of the explore searched item',
    },
    resalePrice: {
      control: { type: 'text' },
      description: 'Resale price of the explore searched item',
    },
    image: {
      control: { type: 'text' },
      description: 'Image url of the explore searched item',
    },
  },
} as ComponentMeta<typeof ExploreItem>;

const Template: ComponentStory<typeof ExploreItem> = (args) => (
  <ExploreItem {...args} />
);

export const DefaultExploreItem = Template.bind({});
DefaultExploreItem.args = {
  brandName: 'Louis Vuitton',
  productName: 'Capucines',
  image: 'https://via.placeholder.com/246x215',
  resalePrice: '$1,250.00',
};
