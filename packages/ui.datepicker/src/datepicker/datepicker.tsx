import { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { css } from '../utils/css';
import { Popover } from './popover';

type DatePickerProps = {
  InputComponent?: JSX.Element;
  mode?: 'single' | 'multi' | 'range';
  zIndex?: number;
  onChange?: (selected: Date[]) => void;
};

export function DatePicker({ InputComponent: InputElement, onChange, mode, zIndex }: DatePickerProps) {
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { styles, attributes } = usePopper(inputRef.current, popoverRef.current, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [4, 0],
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

  return (
    <>
      <div
        className="inline-block"
        ref={inputRef}
        onFocus={() => {
          setCalendarVisible(true);
        }}
      >
        {InputElement ?? <input className="bg-red-800" />}
      </div>
      <div style={{ ...styles.popper, zIndex, backgroundColor: 'white' }} {...attributes.popper} ref={popoverRef}>
        <div
          className={css({
            'flex flex-row space-x-4 p-4 rounded border border-gray-200 shadow': true,
            hidden: !calendarVisible,
          })}
        >
          <Popover mode={mode} onChange={onChange} />
        </div>
      </div>
    </>
  );
}
