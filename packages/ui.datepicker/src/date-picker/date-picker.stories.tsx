import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DatePickerControlled as DatePicker } from './date-picker';

export default {
  title: 'Date picker',
  component: DatePicker,
} as Meta;

const DatePickerComponent: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return <DatePicker {...args} />;
};

export const DefaultComponent = DatePickerComponent.bind({});
DefaultComponent.storyName = 'Default date picker without props';
// DefaultComponent.args = { title: 'Just an example for date picker' };

export const MultipleDate = DatePickerComponent.bind({});
MultipleDate.storyName = 'Multiple date selection';
MultipleDate.args = {
  mode: 'multi',
};

export const DateRangePicker = DatePickerComponent.bind({});
DateRangePicker.storyName = 'Date range picker';
DateRangePicker.args = {
  mode: 'range',
};
