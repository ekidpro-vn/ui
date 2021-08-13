import { HTMLAttributes, InputHTMLAttributes } from 'react';

export type Icon = {
  position: 'left' | 'right';
  icon: JSX.Element;
};

export type IconProps = {
  icon?: Icon;
};

export interface TextFieldGroupProps extends HTMLAttributes<HTMLDivElement> {
  checkRequired?: boolean;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icons?: Icon[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface TextDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
}

export interface TextLabelProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
  required?: boolean;
}
