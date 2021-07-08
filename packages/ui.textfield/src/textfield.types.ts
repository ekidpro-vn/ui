export type Icon = {
  position: 'left' | 'right';
  icon: JSX.Element;
};

export type TextFieldProps = {
  className?: string;
  icons?: Icon[];
  label?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export type IconProps = {
  icon?: Icon;
};

export type LabelProps = {
  required?: boolean;
  label?: string;
};
