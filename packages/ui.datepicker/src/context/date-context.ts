import React, { Dispatch, SetStateAction } from 'react';

export type DateContextProps = {
  current?: number;
  month?: number;
  year?: number;
  selected: string[];
};

export const DatePickerContext = React.createContext<DateContextProps>({ selected: [] });
export const UpdatePickerContext = React.createContext<Dispatch<SetStateAction<DateContextProps>> | null>(null);
