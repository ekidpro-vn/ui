export type Icon = {
  position: 'left' | 'right';
  icon: JSX.Element;
};

export type TextFieldProps = {
  className?: string;
  icons?: Icon[];
  label?: string | any;
  required?: boolean;
};

export type IconProps = {
  icon?: Icon;
};

export type LabelProps = {
  required?: boolean;
  label?: string | any;
};
