import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DatePicker } from './datepicker';
import { Popover } from './popover';

export default {
  title: 'Date picker',
  component: DatePicker,
} as Meta;

const Datepicker: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return <DatePicker {...args} />;
};

export const DefaultComponent = Datepicker.bind({});
DefaultComponent.storyName = 'Default input';

export const DatePickerWithCustomInput = Datepicker.bind({})
DatePickerWithCustomInput.storyName = "Custom Input"
DatePickerWithCustomInput.args = {
  InputComponent: <input className="w-72 h-8 bg-yellow-200 rounded shadow border py-2 px-2" placeholder="Click to open date picker" />,
  // onChange: v => console.log(22, v),
  mode: 'single'
}

const CalendarPicker: Story<ComponentProps<typeof Popover>> = (args: any) => {
  return <Popover {...args} />;
};

export const DatePickerWithHelper: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return <DatePicker {...args} />;
};
DatePickerWithHelper.storyName = "With helper"
DatePickerWithHelper.args = {
  helper: {
    position: 'left'
  }
}

export const DatePickerWithRightHelper: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return <DatePicker {...args} />;
};
DatePickerWithRightHelper.storyName = "With helper - position right"
DatePickerWithRightHelper.args = {
  helper: {
    position: 'right',
    clearButton: true
  }
}

export const OnlyPopover = CalendarPicker.bind({});
OnlyPopover.storyName = 'Without input. Only popover';
OnlyPopover.args = {
  onChange: (data) => {
    console.log(`Data change = `, data);
  },
};

export const PopoverSingleCalendar = CalendarPicker.bind({});
PopoverSingleCalendar.storyName = 'Single Calendar';
PopoverSingleCalendar.args = {
  onChange: (data) => {
    console.log(`Data change = `, data);
  },
  numberOfItems: 1,
  mode: 'single'
};

export const PopoverWithDefaultSelections = CalendarPicker.bind({})
PopoverWithDefaultSelections.storyName = "Default selection"
PopoverWithDefaultSelections.args = {
  defaultSelected: [new Date(), (function () {
    const date = new Date()
    date.setDate(date.getDate() - 3)
    return date
  })()]
}

const CalendarWrapper: Story<ComponentProps<typeof Popover>> = (args: any) => {
  return (
    <div className="w-full flex py-12 bg-gray-100">
      <div className="m-auto bg-red-500" style={{ width: 500 }}>
        <Popover {...args} />
      </div>
    </div>
  )
};

export const CalendarWithWrapper = CalendarWrapper.bind({})
CalendarWithWrapper.storyName = "Wrapper"
CalendarWithWrapper.args = {
  numberOfItems: 1
}

const CalendarWithScrollContent: Story<ComponentProps<typeof Popover>> = (args: any) => {
  const randomBg = ['bg-gray-100', 'bg-blue-300', 'bg-red-300', 'bg-yellow-400']

  return (
    <div className="flex flex-col overflow-scroll h-96">

      {Array.from(Array(100).keys()).map(index => {
        if (index === 2) {
          return (
            <div className="w-full flex py-12 bg-gray-100">
              <div className="m-auto bg-red-500" style={{ width: 500 }}>
                <Popover {...args} numberOfItems={1} />
              </div>
            </div>
          )
        }
        return (
          <div key={index} className={randomBg[index % randomBg.length]} >
            <label className="block h-24">{index}</label>
          </div>
        )
      })}
    </div>
  )
};

export const CalendarInScroll = CalendarWithScrollContent.bind({})
CalendarInScroll.storyName = "Scroll content"
