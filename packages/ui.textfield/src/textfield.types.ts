export type Icon = {
  position: 'left' | 'right';
  icon: JSX.Element;
};

export type IconProps = {
  icon?: Icon;
};

export type TextFieldGroupProps = {
  error?: boolean;
};

export interface TextInputProps extends TextFieldGroupProps {
  className?: string;
  icons?: Icon[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface TextDescriptionProps extends TextFieldGroupProps {
  content?: string;
}

export interface TextLabelProps extends TextFieldGroupProps {
  content: string;
  required?: boolean;
}
