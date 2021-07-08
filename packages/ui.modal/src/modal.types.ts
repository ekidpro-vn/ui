import React from 'react';

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  title?: string;
  preventClickOutsideToClose?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  center?: boolean;
  zIndex?: number;
};
