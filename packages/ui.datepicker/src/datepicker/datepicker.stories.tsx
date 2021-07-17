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
DefaultComponent.storyName = 'Datepicker with input selection';
// DefaultComponent.args = { title: 'Just an example for date picker' };

const CalendarPicker: Story<ComponentProps<typeof Popover>> = (args: any) => {
  return <Popover {...args} />;
};

export const OnlyPopover = CalendarPicker.bind({});
OnlyPopover.storyName = 'Datepicker without input. Only popover';
OnlyPopover.args = {
  onChange: (data) => {
    console.log(`Data change = `, data);
  },
};
