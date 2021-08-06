import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Toggle } from './toggle';

export default {
  title: 'Toggle',
  component: Toggle,
} as Meta;

const ToggleComponent: Story<ComponentProps<typeof Toggle>> = (args: any) => <Toggle {...args} />;

export const DefaultComponent = ToggleComponent.bind({});
DefaultComponent.storyName = 'Default toggle';
DefaultComponent.args = {
};

export const LabelComponent = ToggleComponent.bind({});
LabelComponent.storyName = 'Toggle with label';
LabelComponent.args = {
  Label: ({ children }) => {
    return (
      <div className="flex flex-row items-center space-x-2">
        <label htmlFor="toggle">Active</label>
        {children}
      </div>
    )
  }
};