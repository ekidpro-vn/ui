import { useState } from 'react';
import { Calendar } from '../calendar/calendar';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';

type PopoverProps = {
  numberOfItems?: number;
};

function CalendarWithHeader() {
  return (
    <div>
      <div className="header">
        <button className="w-4 h-4 bg-blue-300">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="w-2 h-2 transform rotate-180"
          >
            <g>
              <g>
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128" />
              </g>
            </g>
          </svg>
        </button>
        <select>Month</select>
        <select>Year</select>
        <button>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="w-2 h-2"
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
      <Calendar />
    </div>
  );
}

export function Popover(props: PopoverProps) {
  const { numberOfItems = 2 } = props;
  const [state, setState] = useState<DateContextProps>({ selected: [] });

  return (
    <UpdatePickerContext.Provider value={setState}>
      <DatePickerContext.Provider value={state}>
        <div className="flex flex-row p-5 shadow-lg rounded-md space-x-5">
          {Array.from(Array(numberOfItems).keys()).map((val) => {
            const key = `${val}`;
            return <CalendarWithHeader key={key} />;
          })}
        </div>
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
