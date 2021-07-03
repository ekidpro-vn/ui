import { useCallback, useContext, useMemo, useState } from 'react';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';
import dayjs from '../context/parser';
import { DatePickerProps } from './calendar.type';

function arrayWith(numberOfItems: number) {
  return [...Array(numberOfItems).keys()];
}

export function Calendar({ month, year, mode = 'single' }: DatePickerProps) {
  const state = useContext(DatePickerContext);
  const action = useContext(UpdatePickerContext);
  const {
    weekDays,
    daysOfMonth,
    month: currentMonth,
    year: currentYear,
  } = useMemo(() => {
    let currentDay: dayjs.Dayjs = dayjs().startOf('month');

    if (typeof month !== 'undefined' || typeof year !== 'undefined') {
      const dayPattern = [year ?? currentDay.year(), month ?? currentDay.month() + 1, 1]
        .map((n, index) => {
          if (index === 0) {
            return String(n).padStart(4, '0');
          }

          return String(n).padStart(2, '0');
        })
        .join('-');

      console.log(333, dayPattern);

      currentDay = dayjs(dayPattern, `YYYY-MM-DD`).startOf('month');
    }

    const blankValue = arrayWith(currentDay.day()).map(() => null);
    const days = arrayWith(currentDay.daysInMonth()).map((_, index) => index + 1);
    const weekDays = arrayWith(7).map((_, index) => currentDay.isoWeekday(index).format('ddd'));

    return { weekDays, daysOfMonth: [...blankValue, ...days], month: currentDay.month(), year: currentDay.year() };
  }, [month, year]);

  const onClick = useCallback(
    (day: number | null) => {
      if (typeof action === 'undefined' || action === null) {
        return;
      }

      const key = `${currentYear}-${currentMonth}-${day}`;

      if (mode === 'single') {
        action({ ...state, selected: [key] });
        return;
      }

      const selected = state.selected.includes(key);
      if (mode === 'multi') {
        action({ ...state, selected: selected ? state.selected.filter((o) => o !== key) : [...state.selected, key] });
        return;
      }

      // mode range
      if (selected) {
        // clear selected
        action({ ...state, selected: state.selected.filter((o) => o !== key) });
        return;
      }

      if (state.selected.length >= 2) {
        // reset all then add new
        action({ ...state, selected: [key] });
        return;
      }

      action({ ...state, selected: [...state.selected, key] });
    },
    [state, action, currentMonth, currentYear, mode]
  );

  return (
    <div className="grid grid-cols-7 bg-white w-56">
      {weekDays.map((val, index) => {
        return (
          <div key={`date_picker_${val}_${index}`} className="flex bg-white w-8 h-8 rounded-full">
            <span className="m-auto text-xs text-gray-400">{val}</span>
          </div>
        );
      })}
      {daysOfMonth.map((val, index) => {
        const key = `${currentYear}-${currentMonth}-${val ?? `blank_${index}`}`;
        const selected = state.selected.includes(key);

        let isBetween = false;
        if (mode === 'range' && state.selected.length === 2) {
          isBetween = dayjs(key).isBetween(state.selected[0], state.selected[1]);
        }

        return (
          <div
            key={`date_picker_${key}_${isBetween}`}
            className={Object.entries({
              'transition-all duration-100 flex w-8 h-8 cursor-pointer': true,
              'rounded-md': selected,
              'bg-blue-600 text-white': selected,
              'bg-white text-gray-800': !selected && !isBetween,
              'bg-clip-content pt-1 pb-1 text-white bg-blue-300': isBetween,
            })
              .map((o) => (o[1] ? o[0] : null))
              .filter((o) => o !== null)
              .join(' ')}
            onClick={() => onClick(val)}
          >
            <span className={`m-auto text-sm select-none ${selected ? 'font-bold' : ''}`}>{val}</span>
          </div>
        );
      })}
    </div>
  );
}

export function CalendarControlled(props: DatePickerProps) {
  const [state, setState] = useState<DateContextProps>({ selected: [] });

  return (
    <UpdatePickerContext.Provider value={setState}>
      <DatePickerContext.Provider value={state}>
        <Calendar {...props} />
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
