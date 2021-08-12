import { InputHTMLAttributes } from 'react';

export type Icon = {
  position: 'left' | 'right';
  icon: JSX.Element;
};

export type IconProps = {
  icon?: Icon;
};

export type TextFieldGroupProps = {
  checkRequired?: boolean;
};

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icons?: Icon[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface TextDescriptionProps {
  content?: string;
}

export interface TextLabelProps {
  content?: string;
  required?: boolean;
}
