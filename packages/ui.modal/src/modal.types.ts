import React from 'react';

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  title?: string;
  preventClickOutsideToClose?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  zIndex?: number;
};
