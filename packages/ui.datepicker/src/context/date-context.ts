import React from 'react';

export type DateContextProps = {
  current?: number;
  selected: string[];
};

export const DatePickerContext = React.createContext<DateContextProps>({ selected: [] });
export const UpdatePickerContext = React.createContext<((props: DateContextProps) => void) | null>(null);
