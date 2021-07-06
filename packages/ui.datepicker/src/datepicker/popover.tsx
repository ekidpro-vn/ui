import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useContext, useMemo } from 'react';
import { Calendar } from '../calendar/calendar';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';

type PopoverProps = {
  numberOfItems?: number;
  helper?: (props: { select: Dispatch<SetStateAction<DateContextProps>> | null }) => JSX.Element;
};

export function Popover(props: PopoverProps) {
  const { numberOfItems = 2, helper } = props;
  const state = useContext(DatePickerContext);
  const action = useContext(UpdatePickerContext);

  const items = useMemo(() => {
    const year = state.year ?? 0;
    const month = state.month ?? 0;
    return Array.from(Array(numberOfItems).keys()).map((index) => dayjs(new Date(year, month + index - 1)));
  }, [state, numberOfItems]);

  if (typeof helper === 'undefined') {
    return (
      <div className="flex flex-row p-5 shadow-lg rounded-md space-x-5 border">
        {items.map((val) => (
          <Calendar key={val.toString()} day={val} mode="range" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row space-x-3 p-5 shadow-lg rounded-md border">
      <div>{helper({ select: action })}</div>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row space-x-5">
          {items.map((val) => (
            <Calendar key={val.toString()} day={val} mode="range" />
          ))}
        </div>
        <hr />
        <div className="flex flex-row space-x-2">
          <button
            type="button"
            className="ml-auto py-1 px-4 bg-white text-gray-600 transition ease-in duration-200 text-center text-base font-semibold shadow-md opacity-70 border border-gray-400 rounded-lg "
          >
            Cancel
          </button>

          <button
            type="button"
            className="py-1 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-70 rounded-lg "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
