import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { DateContextProps, DatePickerContext, UpdatePickerContext } from '../context/date-context';
import { Popover } from './popover';

type FunctionAsChildComponentProps = {
  selected: string[];
};

type ChildComponent = (props: FunctionAsChildComponentProps) => JSX.Element;

export type DatePickerProps = {
  children?: JSX.Element | ChildComponent;
  numberOfMonth?: number;
  month?: number;
  year?: number;
  onChange?: (selected: string[]) => void;
  helper?: (props: { select: Dispatch<SetStateAction<DateContextProps>> | null }) => JSX.Element;
};

export function DatePicker(props: DatePickerProps) {
  const { children, month, year, numberOfMonth, helper, onChange } = props;

  // popover - react popper
  const inputRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { styles, attributes } = usePopper(inputRef.current, popoverRef.current, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [4, 8],
        },
      },
      {
        name: 'flip',
        enabled: true,
        options: {
          fallbackPlacements: ['top', 'bottom'],
        },
      },
    ],
  });

  // get visible
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
  const [state, setState] = useState<DateContextProps>(() => {
    const currentDay = dayjs();
    return { selected: [], month: month ?? currentDay.month(), year: year ?? currentDay.year() };
  });
  const { selected } = state;

  // Click outside to close popup
  useEffect(() => {
    // handle click to close
    function handleClickToClose(event: MouseEvent) {
      if (popoverRef.current?.contains(event.target as Node)) {
        return;
      }

      setCalendarVisible(false);
    }

    document.addEventListener('mousedown', handleClickToClose);
    return () => {
      document.removeEventListener('mousedown', handleClickToClose);
    };
  }, []);

  // callback to update value
  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);

  return (
    <UpdatePickerContext.Provider value={setState}>
      <DatePickerContext.Provider value={state}>
        {children && (
          <div ref={inputRef} onClick={() => setCalendarVisible(true)} className="inline-block">
            {typeof children === 'function' ? children({ selected: state.selected }) : children}
          </div>
        )}

        <div className="inline-block" style={styles.popper} {...attributes.popper} ref={popoverRef}>
          {calendarVisible && <Popover numberOfItems={numberOfMonth} helper={helper} />}
        </div>
      </DatePickerContext.Provider>
    </UpdatePickerContext.Provider>
  );
}
