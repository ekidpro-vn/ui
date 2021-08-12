import { TextFieldGroupProps } from '../textfield.types';
export const SET_GROUP_PROPS = 'SET_GROUP_PROPS';

export const setGroupProps = (groupProps: TextFieldGroupProps) => {
  return {
    type: SET_GROUP_PROPS,
    payload: { data: groupProps },
  };
};

export type Action = ReturnType<typeof setGroupProps>;
