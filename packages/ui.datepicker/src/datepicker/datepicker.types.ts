export type Helper = {
  position: 'left' | 'right';
  element?: JSX.Element;
  clearButton?: boolean;
};

export type DatePickerProps = {
  InputComponent?: JSX.Element;
  mode?: 'single' | 'multi' | 'range';
  zIndex?: number;
  helper?: Helper;
  onChange?: (selected: Date[]) => void;
};

export type PopoverProps = {
  numberOfItems?: number;
  month?: number;
  year?: number;
  mode?: 'single' | 'multi' | 'range';
  helper?: Helper;
  defaultSelected?: Date[];
  onChange?: (selected: Date[]) => void;
};
