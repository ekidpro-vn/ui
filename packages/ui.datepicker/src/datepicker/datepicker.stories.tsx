import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DatePicker } from './datepicker';

export default {
  title: 'Date picker',
  component: DatePicker,
} as Meta;

const Datepicker: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return <DatePicker {...args} />;
};

export const DefaultComponent = Datepicker.bind({});
Datepicker.storyName = 'Datepicker with input selection';
// DefaultComponent.args = { title: 'Just an example for date picker' };
