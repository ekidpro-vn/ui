import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Radio, RadioGroup } from './radio';

export default {
  title: 'Radio',
  component: Radio,
} as Meta;

const RadioComponent: Story<ComponentProps<typeof Radio>> = (args: any) => (
  <RadioGroup>{args.children}</RadioGroup>
);

export const DefaultComponent = RadioComponent.bind({});
DefaultComponent.storyName = 'Default radio';
DefaultComponent.args = {
  children: <Radio id="name" />
};

export const WithTitle = RadioComponent.bind({});
WithTitle.storyName = 'With title';
WithTitle.args = {
  children: <Radio id="name" title="First Item" />
};

export const MultipleItems = RadioComponent.bind({});
MultipleItems.storyName = 'Multiple items';
MultipleItems.args = {
  children: (
    <div className="flex flex-col space-y-2 text-sm text-gray-400">
      <Radio id="first" title="First Item" />
      <Radio id="second" title="Second Item" />
      <Radio id="third" title="Third Item" />
      <Radio id="forth" title="Forth Item" />
    </div>
  )
};