
import { Story } from '@storybook/react';
import { ComponentProps } from "react";
import { TextField } from "./index";

export default {
  title: "Text Field",
};

const TextFieldComponent: Story<ComponentProps<typeof TextField>> = (props) => (
  <div className="grid grid-cols-4">
    <div className="col-span-4 md:col-span-1">
      <TextField {...props} />
    </div>
  </div>
);



export const DefaultTextField = TextFieldComponent.bind({})
DefaultTextField.storyName = "Default text field"

export const TextFieldWithLabel = TextFieldComponent.bind({})
TextFieldWithLabel.storyName = "Text field with label"
TextFieldWithLabel.args = {
  label: "Họ và tên",
  required: true,
  className: 'focus:border-red-600',
  placeholder: 'Đức'
}

export const TextFieldWithLeftIcon = TextFieldComponent.bind({})
TextFieldWithLeftIcon.storyName = "Text field with left icon"
TextFieldWithLeftIcon.args = {
  icons: [
    {
      position: 'left',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    },
  ]
}

export const TextFieldWithRightIcon = TextFieldComponent.bind({})
TextFieldWithRightIcon.storyName = "Text field with right icon"
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

export const TextFieldWithLeftAndRightIcon = TextFieldComponent.bind({})
TextFieldWithLeftAndRightIcon.storyName = "Text field with left and right icon"
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

export const TextFieldWithAll = TextFieldComponent.bind({})
TextFieldWithAll.storyName = "Text field with all"
TextFieldWithAll.args = {
  icons: [
    {
      position: 'left',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    },
  ],
  label: "Họ và tên",
  required: true,
  className: 'focus:border-red-600',
  placeholder: 'Đức'
}