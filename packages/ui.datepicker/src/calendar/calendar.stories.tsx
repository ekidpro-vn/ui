import { Meta, Story } from '@storybook/react';
import dayjs from 'dayjs';
import React, { ComponentProps } from 'react';
import { CalendarControlled } from './calendar';

export default {
  title: 'Calendar',
  component: CalendarControlled,
} as Meta;

const DatePickerComponent: Story<ComponentProps<typeof CalendarControlled>> = (args: any) => {
  return <CalendarControlled {...args} />;
};

export const DefaultComponent = DatePickerComponent.bind({});
DefaultComponent.storyName = 'Default date picker without props';
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

