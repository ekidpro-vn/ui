import dayjs from 'dayjs';
import { Fragment, useContext, useEffect, useMemo } from 'react';
import { UpdatePickerContext } from '../context/date-context';
import { css } from '../utils/css';

export function MonthSelection(props: { day: dayjs.Dayjs; visible: boolean }) {
  const { day, visible } = props;
  const action = useContext(UpdatePickerContext);

  const years = useMemo(() => {
    const tmp: number[] = [];
    const currentYear = day.year();

    for (let index = -100; index < 100; index += 1) {
      tmp.push(currentYear + index);
    }

    return tmp;
  }, [day]);

  useEffect(() => {
    const element = document.getElementsByClassName(`year_${day.year()}`);
    if (element && element.length > 0) {
      element[0].scrollIntoView();
    }
  }, [day]);

  return (
    <div
      className={css({
        'absolute bg-white top-8 left-0 right-0 bottom-0 flex flex-col overflow-y-scroll w-full pr-4': true,
        hidden: !visible,
      })}
    >
      {years.map((y) => {
        return (
          <Fragment key={y}>
            <hr />
            <div className={`flex flex-row py-2 year_${y}`}>
              <div className="px-1 align-middle m-auto text-sm">{y}</div>
              <div className="grid grid-cols-6 gap-1">
                {Array.from(new Array(12).keys()).map((month) => {
                  const isCurrentMonth = day.year() === y && day.month() === month;

                  return (
                    <button
                      className={css({
                        'w-6 h-6 text-sm rounded': true,
                        'hover:bg-blue-300 text-gray-400 hover:text-white': !isCurrentMonth,
                        'bg-blue-600 text-white': isCurrentMonth,
                      })}
                      onClick={() => {
                        if (action) {
                          action((state) => ({ ...state, month: month + 1, year: y }));
                        }
                      }}
                      key={month}
                    >
                      {month + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
