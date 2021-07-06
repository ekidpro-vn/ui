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
DefaultComponent.storyName = 'Datepicker without input selection';

const DatePickerWithInput: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return (
    <DatePicker {...args}>
      {({ selected }) => <input value={selected.join(' ')} className="border" readOnly />}
    </DatePicker>
  );
};

export const DatePickerWithInputComponent = DatePickerWithInput.bind({});
DatePickerWithInputComponent.storyName = 'Date picker with readOnly input';

const DatePickerWithTypedInput: Story<ComponentProps<typeof DatePicker>> = (args: any) => {
  return (
    <DatePicker {...args}>
      {({ selected }) => <input defaultValue={selected.join(' ')} className="border" key={JSON.stringify(selected)} />}
    </DatePicker>
  );
};
export const DatePickerWithTypedInputComponent = DatePickerWithTypedInput.bind({});
DatePickerWithTypedInputComponent.storyName = 'Date picker with normal input';

export const DatePickerWithPanelComponent = DatePickerWithTypedInput.bind({});
DatePickerWithPanelComponent.storyName = 'Date picker with helper';
DatePickerWithPanelComponent.args = {
  helper: ({ select }) => (
    <div className="flex flex-col space-y-2">
      {['Today', 'Yesterday', 'This week', 'This month'].map((day) => {
        return (
          <button
            type="button"
            className="py-1 px-2 bg-white text-gray-600 transition ease-in duration-200 text-center text-base border border-gray-300 rounded hover:opacity-75"
            key={day}
            onClick={() => select('')}
          >
            {day}
          </button>
        );
      })}
    </div>
  ),
};
