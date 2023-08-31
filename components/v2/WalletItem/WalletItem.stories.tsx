import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WalletItem } from '.';
import {
  ProductBadgeEnumType,
  WalletItemProtectionStateEnumType,
  WalletItemVisibilityEnumType,
} from '../../../generated/graphql';

export default {
  title: 'v2/Components/WalletItem',
  component: WalletItem,
  argTypes: {
    brandName: {
      control: { type: 'text' },
      description: 'Brand name for wallet item',
    },
    productName: {
      control: { type: 'text' },
      description: 'Product name for wallet item',
    },
    image: {
      control: { type: 'text' },
      description: 'Image url for wallet item',
    },
    priceLabel: {
      control: { type: 'text' },
      description: 'Price for wallet item',
    },
    visibility: {
      control: { type: 'radio' },
      description: 'Visibility for wallet item',
      options: [
        WalletItemVisibilityEnumType.Private,
        WalletItemVisibilityEnumType.Public,
      ],
    },
    identified: {
      control: { type: 'boolean' },
      description: 'Identified state of wallet item',
    },
    badges: {
      control: { type: 'object' },
      description: 'Badges for wallet item',
    },
    protection: {
      control: { type: 'radio' },
      description: 'Protection state of wallet item',
      options: [
        WalletItemProtectionStateEnumType.NotProtected,
        WalletItemProtectionStateEnumType.Protected,
        WalletItemProtectionStateEnumType.Requested,
      ],
    },
    hasReceipt: {
      control: { type: 'boolean' },
      description: 'Wallet item receipt upload state',
    },
  },
} as ComponentMeta<typeof WalletItem>;

const Template: ComponentStory<typeof WalletItem> = (args) => (
  <WalletItem {...args} />
);

export const DefaultWalletItem = Template.bind({});
DefaultWalletItem.args = {
  brandName: 'Louis Vuitton',
  productName: 'Capucines',
  image: 'https://via.placeholder.com/246x215',
  priceLabel: '$1,250.00',
  badges: [
    ProductBadgeEnumType.Iconic,
    ProductBadgeEnumType.Seasonal,
    ProductBadgeEnumType.Vintage,
  ],
  identified: true,
  protection: WalletItemProtectionStateEnumType.Protected,
  visibility: WalletItemVisibilityEnumType.Public,
  hasReceipt: false,
};
