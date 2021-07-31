import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { Calendar } from '../calendar/calendar';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';

type PopoverProps = {
  numberOfItems?: number;
  month?: number;
  year?: number;
  mode?: 'single' | 'multi' | 'range';
  onChange?: (selected: Date[]) => void;
  defaultSelected?: Date[];
};

export function Popover(props: PopoverProps) {
  const { numberOfItems = 2, month, year, onChange, defaultSelected, mode = 'range' } = props;

  const defaultV = useMemo(() => {
    if (!defaultSelected) {
      return [];
    }
    return defaultSelected.map((e) => {
      return `${dayjs(e).year()}-${dayjs(e).month()}-${dayjs(e).date()}`;
    });
  }, [defaultSelected]);

  const [state, setState] = useState<DateContextProps>(() => {
    const currentDay = dayjs();
    return { selected: defaultV, month: month ?? currentDay.month(), year: year ?? currentDay.year() };
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
        {items.map((val) => (
          <Calendar key={val.toString()} day={val} mode={mode} />
        ))}
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
