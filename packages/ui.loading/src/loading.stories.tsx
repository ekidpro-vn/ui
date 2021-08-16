import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { LoadingComponent } from './loading';

export default {
  title: 'Loading',
  component: LoadingComponent,
} as Meta;

const Loading: Story<ComponentProps<typeof LoadingComponent>> = (args: any) => <LoadingComponent {...args} />;

export const DefaultStory = Loading.bind({});
DefaultStory.storyName = "Default loading"

export const LoadingWithNumberOfStack = Loading.bind({});
LoadingWithNumberOfStack.storyName = "Loading with number of stack"
LoadingWithNumberOfStack.args = {
  numberOfItems: 4
}