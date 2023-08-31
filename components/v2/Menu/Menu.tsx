import React, { FC, Fragment, ReactNode } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

import { StyledDivider, StyledMenuItems } from './Menu.styled';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <HeadlessMenu>{children}</HeadlessMenu>;
};

const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return <HeadlessMenu.Button as={Fragment}>{children}</HeadlessMenu.Button>;
};

const Items: React.FC<{ children: ReactNode; position?: 'left' | 'right' }> = ({
  children,
  position = 'left',
}) => {
  return (
    <HeadlessMenu.Items as={Fragment}>
      <StyledMenuItems position={position}>{children}</StyledMenuItems>
    </HeadlessMenu.Items>
  );
};

const Item = HeadlessMenu.Item;

export const Menu = {
  Wrapper,
  Button,
  Items,
  Item,
  Divider: StyledDivider,
};
