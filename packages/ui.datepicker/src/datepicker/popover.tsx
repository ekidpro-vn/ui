import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { Calendar } from '../calendar/calendar';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';
import { PopoverProps } from './datepicker.types';
import { DefaultHelper } from './default-helper';

export function Popover(props: PopoverProps) {
  const { numberOfItems = 2, month, year, onChange, defaultSelected, mode = 'range', helper } = props;

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
    if (
      typeof onChange === 'undefined' ||
      onChange === null ||
      (JSON.stringify(defaultV) === JSON.stringify(selected) && selected.length > 0)
    ) {
      return () => {
        // nothing
      };
    }

    if (selected.length === 0) {
      onChange([]);
      return;
    }

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
  }, [selected, defaultV, onChange]);

  return (
    <UpdatePickerContext.Provider value={setState}>
      <DatePickerContext.Provider value={state}>
        {helper && helper.position === 'left' && (helper.element ?? <DefaultHelper />)}
        {items.map((val) => (
          <Calendar key={val.toString()} day={val} mode={mode} />
        ))}
        {helper && helper.position === 'right' && (helper.element ?? <DefaultHelper />)}
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
