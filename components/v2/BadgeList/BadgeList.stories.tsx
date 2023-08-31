import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BadgeList } from '.';

import { ProductBadgeEnumType } from '../../../generated/graphql';

export default {
  title: 'v2/Components/BadgeList',
  component: BadgeList,
  argTypes: {
    badges: {
      defaultValue: [
        ProductBadgeEnumType.Iconic,
        ProductBadgeEnumType.Investment,
        ProductBadgeEnumType.Limited,
        ProductBadgeEnumType.Seasonal,
        ProductBadgeEnumType.Sustainable,
        ProductBadgeEnumType.Trending,
        ProductBadgeEnumType.Vintage,
      ],
      description: 'List of badges',
      control: { type: 'object' },
    },
  },
  parameters: {
    controls: {
      include: ['badges'],
    },
  },
} as ComponentMeta<typeof BadgeList>;

const Template: ComponentStory<typeof BadgeList> = (args) => (
  <BadgeList {...args} />
);

export const DefaultBadgeList = Template.bind({});
DefaultBadgeList.args = {};
