
import { Meta, Story } from '@storybook/react';
import { ComponentProps } from "react";
import { TextDescription, TextFieldGroup, TextInput, TextLabel } from './index';

export default {
  title: "TextField",
  component: TextInput
} as Meta;

const TextInputComponent: Story<ComponentProps<typeof TextFieldGroup>> = (props) => (
  <div className="flex items-center justify-center">
    <div className="w-1/4 mx-4">
      <TextInput {...props} />
    </div>
  </div>
);

const TextFieldGroupComponent: Story<ComponentProps<typeof TextFieldGroup>> = (props) => (
  <div className="flex items-center justify-center">
    <div className="w-1/4 mx-4">
      <TextFieldGroup checkRequired>
        <TextLabel required content="Email" />
        <TextInput />
        <TextDescription>
          <span>Ex: example@gmail.com</span>
        </TextDescription>
      </TextFieldGroup>
    </div>
  </div>
);

export const DefaultTextInput = TextInputComponent.bind({})
TextInputComponent.storyName = "Default TextInput"

export const TextFieldWithLeftIcon = TextInputComponent.bind({})
TextFieldWithLeftIcon.storyName = "TextInput with left icon"
TextFieldWithLeftIcon.args = {
  icons: [
    {
      position: 'left',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    }
  ]
}

export const TextFieldWithRightIcon = TextInputComponent.bind({})
TextFieldWithRightIcon.storyName = "TextInput with right icon"
TextFieldWithRightIcon.args = {
  icons: [
    {
      position: 'right',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    },
  ]
}

export const TextFieldWithLeftAndRightIcon = TextInputComponent.bind({})
TextFieldWithLeftAndRightIcon.storyName = "TextInput with left and right icon"
TextFieldWithLeftAndRightIcon.args = {
  icons: [
    {
      position: 'left',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    },
    {
      position: 'right',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    },
  ]
}

export const TextFieldGroupDefault = TextFieldGroupComponent.bind({})
TextFieldGroupComponent.storyName = "TextFieldGroup default"