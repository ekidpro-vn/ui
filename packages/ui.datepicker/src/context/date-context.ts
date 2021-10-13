import React, { Dispatch, SetStateAction } from 'react';

export type DateContextProps = {
  month?: number;
  year?: number;
  selected: string[] | undefined;
};

export const DatePickerContext = React.createContext<DateContextProps>({ selected: [] });
export const UpdatePickerContext = React.createContext<Dispatch<SetStateAction<DateContextProps>> | null>(null);
