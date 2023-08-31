import { ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';

export type FilledButtonVariant = 'primary' | 'pagination' | 'danger';
export type FilledButtonSize = 'large' | 'small';

export interface FilledButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $block?: boolean;
  $loading?: boolean;
  $size?: FilledButtonSize;
  $color?: string;
}

export type ButtonAsLink = FilledButtonProps &
  LinkHTMLAttributes<HTMLLinkElement>;
