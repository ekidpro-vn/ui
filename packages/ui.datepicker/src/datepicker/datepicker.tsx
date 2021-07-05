import { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Popover } from './popover';

export function DatePicker() {
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
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
    <div>
      <input
        className="bg-red-800"
        ref={inputRef}
        onFocus={() => {
          setCalendarVisible(true);
        }}
      />
      <div style={styles.popper} {...attributes.popper} ref={popoverRef}>
        {calendarVisible && <Popover />}
      </div>
    </div>
  );
}
