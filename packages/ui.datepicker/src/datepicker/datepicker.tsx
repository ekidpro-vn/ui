import Tippy from '@tippyjs/react/headless';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Placement } from 'tippy.js';
import { DatePickerProps } from './datepicker.types';
import { Popover } from './popover';

export function DatePicker({
  InputComponent: InputElement,
  onChange,
  mode,
  zIndex,
  helper,
  defaultDate,
}: DatePickerProps) {
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // handle click to close
  useEffect(() => {
    function handleClickToClose(event: MouseEvent) {
      if (popoverRef.current?.contains(event.target as Node)) {
        return;
      }

      if (inputRef.current?.contains(event.target as Node)) {
        return;
      }

      setCalendarVisible(false);
    }

    document.addEventListener('mousedown', handleClickToClose);
    return () => {
      document.removeEventListener('mousedown', handleClickToClose);
    };
  }, []);

  // fuck react
  const showPopover = useCallback(() => {
    setCalendarVisible(true);
  }, []);

  // create popover
  const renderPopover = useCallback(
    (attrs: { 'data-placement': Placement; 'data-reference-hidden'?: string; 'data-escaped'?: string }) => {
      return (
        <div
          className="w-full h-auto border border-red bg-white flex flex-row space-x-4 p-4 rounded border border-gray-200 shadow"
          tabIndex={-1}
          style={{ zIndex }}
          ref={popoverRef}
          key={`${mode}_${JSON.stringify(attrs)}`}
          {...attrs}
        >
          <Popover mode={mode} onChange={onChange} helper={helper} defaultSelected={defaultDate} />
        </div>
      );
    },
    [mode, onChange, zIndex, helper, defaultDate]
  );

  return (
    <div className="block">
      <Tippy interactive visible={calendarVisible} render={renderPopover} reference={inputRef}>
        <div className="inline-block" ref={inputRef} onFocus={showPopover}>
          {InputElement ?? <input className="bg-red-800" />}
        </div>
      </Tippy>
    </div>
  );
}
