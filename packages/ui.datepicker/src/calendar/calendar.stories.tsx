import { Meta, Story } from '@storybook/react';
import dayjs from 'dayjs';
import React, { ComponentProps } from 'react';
import { CalendarControlled } from './calendar';

export default {
  title: 'Calendar',
  component: CalendarControlled,
} as Meta;

const DatePickerComponent: Story<ComponentProps<typeof CalendarControlled>> = (args: any) => {
  return (
    <div className="w-full h-full bg-blue-100 flex">
      <div className="m-auto py-24" style={{ width: 300, backgroundColor: 'red' }}><CalendarControlled {...args} />
      </div>
    </div>
  )
};

export const DefaultComponent = DatePickerComponent.bind({});
DefaultComponent.storyName = 'Default';
DefaultComponent.args = {
  mode: 'single',
  day: dayjs()
};

// DefaultComponent.args = { title: 'Just an example for date picker' };

export const MultipleDate = DatePickerComponent.bind({});
MultipleDate.storyName = 'Multiple date selection';
MultipleDate.args = {
  mode: 'multi',
  day: dayjs()
};

export const DateRangePicker = DatePickerComponent.bind({});
DateRangePicker.storyName = 'Date range picker';
DateRangePicker.args = {
  mode: 'range',
  day: dayjs()
};

export const TransparentBackground = DatePickerComponent.bind({})
TransparentBackground.storyName = "Transparent background"
TransparentBackground.args = {
  mode: 'single',
  day: dayjs(),
  transparent: true
}