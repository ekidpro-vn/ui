import React from 'react';

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  title?: string;
  preventClickOutsideToClose?: boolean;
  children?: React.ReactNode;
};
