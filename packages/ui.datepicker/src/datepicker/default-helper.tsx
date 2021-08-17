import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import get from 'lodash.get';
import { MouseEvent, useCallback, useContext, useMemo } from 'react';
import { DatePickerContext, UpdatePickerContext } from '../context/date-context';
import { css } from '../utils/css';

dayjs.extend(quarterOfYear);

export function DefaultHelper() {
  const { selected } = useContext(DatePickerContext);
  const action = useContext(UpdatePickerContext);
  const className = 'w-full border p-1 rounded hover:text-black';

  const current = useMemo(() => {
    if (selected.length !== 2) {
      return '';
    }

    const day = dayjs();

    if (
      selected[0] === `${day.year()}-${day.month()}-${day.date()}` &&
      selected[1] === `${day.year()}-${day.month()}-${day.date()}`
    ) {
      return 'today';
    }

    const getSelected = (type: 'week' | 'month' | 'year') => {
      const startDay = dayjs().startOf(type);
      const endDay = dayjs().endOf(type);
      const start = `${startDay.year()}-${startDay.month()}-${startDay.date()}`;
      const end = `${endDay.year()}-${endDay.month()}-${endDay.date()}`;
      return [start, end];
    };

    const keys = ['week', 'month', 'year'];

    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const tmp = getSelected(key as 'week' | 'month' | 'year');
      if (selected[0] === tmp[0] && selected[1] === tmp[1]) {
        return key;
      }
    }

    const startDay = dayjs().startOf('quarter');
    const endDay = dayjs().endOf('quarter');
    const start = `${startDay.year()}-${startDay.month()}-${startDay.date()}`;
    const end = `${endDay.year()}-${endDay.month()}-${endDay.date()}`;

    if (selected[0] === start && selected[1] === end) {
      return 'quarter';
    }

    return '';
  }, [selected]);

  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      if (typeof action === 'undefined' || action === null) {
        return;
      }

      const type = get(e, 'target.dataset.name');

      switch (type) {
        case 'today': {
          action((state) => {
            const day = dayjs();
            const start = `${day.year()}-${day.month()}-${day.date()}`;
            return { ...state, selected: [start, start] };
          });
          break;
        }

        case 'week':
        case 'month':
        case 'year':
        case 'quarter': {
          action((state) => {
            const startDay = dayjs().startOf(type);
            const endDay = dayjs().endOf(type);
            const start = `${startDay.year()}-${startDay.month()}-${startDay.date()}`;
            const end = `${endDay.year()}-${endDay.month()}-${endDay.date()}`;
            return { ...state, selected: [start, end] };
          });
        }

        default:
          break;
      }
    },
    [action]
  );

  return (
    <div className="flex flex-col space-y-1">
      <button
        data-name="today"
        className={css({
          [className]: true,
          'border-black text-gray-900': current === 'today',
          'border-gray-200 text-gray-400': current !== 'today',
        })}
        onClick={onClick}
      >
        Today
      </button>
      <button
        data-name="week"
        className={css({
          [className]: true,
          'border-black text-gray-900': current === 'week',
          'border-gray-200 text-gray-400': current !== 'week',
        })}
        onClick={onClick}
      >
        This week
      </button>
      <button
        data-name="month"
        className={css({
          [className]: true,
          'border-black text-gray-900': current === 'month',
          'border-gray-200 text-gray-400': current !== 'month',
        })}
        onClick={onClick}
      >
        This month
      </button>
      <button
        data-name="quarter"
        className={css({
          [className]: true,
          'border-black text-gray-900': current === 'quarter',
          'border-gray-200 text-gray-400': current !== 'quarter',
        })}
        onClick={onClick}
      >
        This quarter
      </button>
      <button
        data-name="year"
        className={css({
          [className]: true,
          'border-black text-gray-900': current === 'year',
          'border-gray-200 text-gray-400': current !== 'year',
        })}
        onClick={onClick}
      >
        This year
      </button>
    </div>
  );
}
