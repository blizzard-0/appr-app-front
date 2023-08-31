import { HTMLAttributes } from 'react';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  $variant: ToastVariantType;
  $showIcon: boolean;
  $showClose: boolean;
  onClose?: () => void;
}

export type ToastVariantType =
  | 'default'
  | 'success'
  | 'info'
  | 'alert'
  | 'error';
