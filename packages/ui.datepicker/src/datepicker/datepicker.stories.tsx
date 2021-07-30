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
DefaultComponent.storyName = 'DatePicker with input selection';

export const DatePickerWithCustomInput = Datepicker.bind({})
DatePickerWithCustomInput.storyName = "DatePicker with custom Input"
DatePickerWithCustomInput.args = {
  InputComponent: <input className="w-72 h-8 bg-yellow-200 rounded shadow border py-2 px-2" placeholder="Click to open date picker" />
}

const CalendarPicker: Story<ComponentProps<typeof Popover>> = (args: any) => {
  return <Popover {...args} />;
};

export const OnlyPopover = CalendarPicker.bind({});
OnlyPopover.storyName = 'DatePicker without input. Only popover';
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
CalendarWithWrapper.storyName = "Calendar with wrapper"
CalendarWithWrapper.args = {
  numberOfItems: 1
}