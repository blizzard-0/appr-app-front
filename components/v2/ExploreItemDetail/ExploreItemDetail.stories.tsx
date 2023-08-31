import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExploreItemDetail } from '.';

export default {
  title: 'v2/Components/ExploreItemDetail',
  component: ExploreItemDetail,
} as ComponentMeta<typeof ExploreItemDetail>;

const Template: ComponentStory<typeof ExploreItemDetail> = (args) => (
  <ExploreItemDetail {...args} />
);

export const DefaultExploreItemDetail = Template.bind({});
DefaultExploreItemDetail.args = {
  brandName: 'Yves Saint Laurent',
  productName: 'Envelope',
  image:
    'https://res.cloudinary.com/appreciate-stuff-inc/iu/h_215,w_246/c_fill,f_auto,q_auto:best/v1/assets/wallet-placeholders/bag-1',
  resalePrice: '$4,350.00',
  added: true,
  adding: false,
  onAddItem: () => null,
};
