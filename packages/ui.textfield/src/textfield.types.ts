import { InputHTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';

export type Icon = {
  position: 'left' | 'right';
  icon: JSX.Element;
};

export type IconProps = {
  icon?: Icon;
};

export interface TextFieldGroupProps {
  className?: string;
  style?: CSSProperties;
  checkRequired?: boolean;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icons?: Icon[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface TextDescriptionProps {
  className?: string;
  style?: CSSProperties;
  content?: string;
}

export interface TextLabelProps {
  className?: string;
  style?: CSSProperties;
  content?: string;
  required?: boolean;
}
