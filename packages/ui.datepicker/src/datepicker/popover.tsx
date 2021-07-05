import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { Calendar } from '../calendar/calendar';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';

type PopoverProps = {
  numberOfItems?: number;
  month?: number;
  year?: number;
};

export function Popover(props: PopoverProps) {
  const { numberOfItems = 2, month, year } = props;
  const [state, setState] = useState<DateContextProps>(() => {
    const currentDay = dayjs();
    return { selected: [], month: month ?? currentDay.month(), year: year ?? currentDay.year() };
  });

  const items = useMemo(() => {
    const year = state.year ?? 0;
    const month = state.month ?? 0;
    return Array.from(Array(numberOfItems).keys()).map((index) => dayjs(new Date(year, month + index - 1)));
  }, [state, numberOfItems]);

  return (
    <UpdatePickerContext.Provider value={setState}>
      <DatePickerContext.Provider value={state}>
        <div className="flex flex-row p-5 shadow-lg rounded-md space-x-5">
          {items.map((val) => (
            <Calendar key={val.toString()} day={val} mode="range" />
          ))}
        </div>
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
