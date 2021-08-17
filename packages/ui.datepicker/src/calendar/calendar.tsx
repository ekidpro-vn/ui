import { useCallback, useContext, useMemo, useState } from 'react';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';
import dayjs from '../context/parser';
import { css } from '../utils/css';
import { CalendarProps } from './calendar.type';
import { MonthSelection } from './month-selection';

function arrayWith(numberOfItems: number) {
  return [...Array(numberOfItems).keys()];
}

export function Calendar(props: CalendarProps) {
  const { day, mode, transparent = false } = props;

  const [showMonthSelection, setShowMonthSelection] = useState(false);

  const state = useContext(DatePickerContext);

  const action = useContext(UpdatePickerContext);
  const { weekDays, daysOfMonth } = useMemo(() => {
    const blankValue = arrayWith(day.day()).map(() => null);
    const days = arrayWith(day.daysInMonth()).map((_, index) => index + 1);
    const weekDays = arrayWith(7).map((_, index) => day.isoWeekday(index).format('ddd'));

    return { weekDays, daysOfMonth: [...blankValue, ...days] };
  }, [day]);

  const onClick = useCallback(
    (date: number | null) => {
      if (typeof action === 'undefined' || action === null) {
        return;
      }

      const key = `${day.year()}-${day.month()}-${date}`;

      if (mode === 'single') {
        action((state) => ({ ...state, selected: [key] }));
        return;
      }

      action((state) => {
        const selected = state.selected.includes(key);
        if (mode === 'multi') {
          return {
            ...state,
            selected: selected ? state.selected.filter((o) => o !== key) : [...state.selected, key],
          };
        }

        if (selected) {
          return { ...state, selected: state.selected.filter((o) => o !== key) };
        }

        if (state.selected.length >= 2) {
          return { ...state, selected: [key] };
        }

        return { ...state, selected: [...state.selected, key] };
      });
    },
    [action, day, mode]
  );

  const increase = useCallback(() => {
    if (action) {
      action((state) => {
        return {
          ...state,
          month: (state.month ?? 0) + 1,
        };
      });
    }
  }, [action]);

  const decrease = useCallback(() => {
    if (action) {
      action((state) => {
        return {
          ...state,
          month: (state.month ?? 0) - 1,
        };
      });
    }
  }, [action]);

  return (
    <div
      className={css({
        'flex flex-col relative': true,
        'bg-white': !transparent,
      })}
      style={{ minWidth: '14rem' }}
    >
      <div className="header flex">
        <button className="w-8 h-8 flex-none group" onClick={decrease}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className={css({
              'w-3 h-3 transform rotate-180 m-auto text-gray-300 ': true,
              'fill-current text-gray-300': true,
              'transition duration-200 group-hover:text-gray-500': true,
            })}
          >
            <g>
              <g>
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128" />
              </g>
            </g>
          </svg>
        </button>
        <div
          className="m-auto cursor-pointer hover:text-blue-600 select-none"
          onClick={() => setShowMonthSelection((val) => !val)}
        >
          {day.format('MMMM')} {day.format('YYYY')}
        </div>
        <button className="w-8 h-8 flex-none group" onClick={increase}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className={css({
              'w-3 h-3 m-auto text-gray-300 ': true,
              'fill-current text-gray-300': true,
              'transition duration-200 group-hover:text-gray-500': true,
            })}
          >
            <g>
              <g>
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128" />
              </g>
            </g>
          </svg>
        </button>
      </div>

      <hr></hr>

      <div className="grid grid-cols-7">
        {weekDays.map((val, index) => {
          return (
            <div key={`date_picker_${val}_${index}`} className="flex h-8 rounded-full">
              <span className="m-auto text-xs text-gray-400">{val}</span>
            </div>
          );
        })}
        {daysOfMonth.map((val, index) => {
          const key = `${day.year()}-${day.month()}-${val ?? `blank_${index}`}`;
          const selected = state.selected.includes(key);

          let isBetween = false;
          if (mode === 'range' && state.selected.length === 2 && val !== null) {
            isBetween = dayjs(key).isBetween(state.selected[0], state.selected[1]);
          }

          return (
            <div
              key={`date_picker_${key}_${isBetween}`}
              className={css({
                'transition-all duration-100 flex h-8 cursor-pointer': true,
                'rounded-md': selected,
                'bg-blue-600 text-white': selected,
                'text-gray-600 hover:text-gray-300': !selected && !isBetween,
                'bg-clip-content pt-1 pb-1 text-white bg-blue-300': isBetween,
              })}
              onClick={() => onClick(val)}
            >
              <span className={css({ 'm-auto text-sm select-none': true, 'font-bold': selected })}>{val}</span>
            </div>
          );
        })}
      </div>

      {showMonthSelection && <MonthSelection day={day} />}
    </div>
  );
}

export function CalendarControlled(props: CalendarProps) {
  const [state, setState] = useState<DateContextProps>({ selected: [] });

  return (
    <UpdatePickerContext.Provider value={setState}>
      <DatePickerContext.Provider value={state}>
        <Calendar {...props} mode={props.mode} />
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
