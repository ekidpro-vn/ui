import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { Calendar } from '../calendar/calendar';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';

type PopoverProps = {
  numberOfItems?: number;
  month?: number;
  year?: number;
  onChange?: (selected: Date[]) => void;
};

export function Popover(props: PopoverProps) {
  const { numberOfItems = 2, month, year, onChange } = props;
  const [state, setState] = useState<DateContextProps>(() => {
    const currentDay = dayjs();
    return { selected: [], month: month ?? currentDay.month(), year: year ?? currentDay.year() };
  });

  const { selected } = state;

  const items = useMemo(() => {
    const year = state.year ?? 0;
    const month = state.month ?? 0;
    return Array.from(Array(numberOfItems).keys()).map((index) => dayjs(new Date(year, month + index - 1)));
  }, [state, numberOfItems]);

  useEffect(() => {
    if (onChange) {
      // YYYY-MM-DD
      // MM using dayjs index, so we need to add 1 to make it like a normal day

      const dates = selected
        .map((d) => {
          return d
            .split('-')
            .map((d, index) => {
              if (index === 1) {
                return `${parseInt(d, 10) + 1}`;
              } else {
                return d;
              }
            })
            .join('-');
        })
        .map((d) => dayjs(d).toDate());

      onChange(dates);
    }
  }, [selected, onChange]);

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
