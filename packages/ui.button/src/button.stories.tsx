import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const ButtonComponent: Story<ComponentProps<typeof Button>> = (args: any) => <Button {...args} />;

export const FirstStory = ButtonComponent.bind({});
FirstStory.storyName = 'This is the first button ';
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  className: '',
  children: 'hahaha',
};
