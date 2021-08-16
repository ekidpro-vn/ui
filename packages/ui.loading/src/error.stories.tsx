import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { ErrorComponent } from './error';

export default {
  title: 'Error Page',
  component: ErrorComponent,
  args: {
    support: "support@anyone.else"
  }
} as Meta;

const DefaultErrorComponent: Story<ComponentProps<typeof ErrorComponent>> = (args: any) => <ErrorComponent {...args} />;

export const DefaultStory = DefaultErrorComponent.bind({});
DefaultErrorComponent.storyName = "Default error"

export const CustomMessage = DefaultErrorComponent.bind({});
CustomMessage.storyName = "Loading with number of stack"
CustomMessage.args = {
  message: "Hi"
}