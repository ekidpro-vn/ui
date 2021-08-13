import dayjs from 'dayjs';
import get from 'lodash.get';
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { UpdatePickerContext } from '../context/date-context';
import { css } from '../utils/css';

export function MonthSelection(props: { day: dayjs.Dayjs }) {
  const { day } = props;
  const action = useContext(UpdatePickerContext);
  const pendingAction = useRef<boolean | null>(null);
  const [years, setYears] = useState(() => {
    const tmp: number[] = [];
    const currentYear = day.year();

    for (let index = -10; index < 10; index += 1) {
      tmp.push(currentYear + index);
    }

    return tmp;
  });

  // TODO: don't know the specific type for event
  const onScroll = useCallback(
    (e: unknown) => {
      const offset = get(e, 'target.scrollHeight') - get(e, 'target.scrollTop') - 60;
      const isBottom = offset <= get(e, 'target.clientHeight');
      const isTop = get(e, 'target.scrollTop') <= 60;

      if (pendingAction.current) {
        return;
      }

      // is bottom, add more items at the bottom
      if (isTop) {
        pendingAction.current = true;

        setYears((y) => {
          let tmp = [...y];
          const firstItem = tmp[0];
          for (let index = 1; index <= 10; index += 1) {
            tmp = [firstItem - index, ...tmp];
          }

          return tmp;
        });
      }

      if (isBottom) {
        pendingAction.current = true;
        setYears((y) => {
          let tmp = [...y];
          const lastItem = tmp[tmp.length - 1];
          for (let index = 1; index <= 10; index += 1) {
            tmp = [...tmp, lastItem + index];
          }

          return tmp;
        });
      }
    },
    [pendingAction]
  );

  // set pending = false after update
  useEffect(() => {
    // we don't using `years` but we need it to know that's updated
    if (pendingAction.current) {
      pendingAction.current = false;
    }
  }, [pendingAction, years]);

  useEffect(() => {
    const element = document.getElementsByClassName(`year_${day.year()}`);
    if (element && element.length > 0) {
      element[0].scrollIntoView();
    }
  }, [day]);

  return (
    <div
      className="absolute bg-white top-8 left-0 right-0 bottom-0 flex flex-col overflow-y-scroll w-full pr-4"
      onScroll={onScroll}
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
