import { TextFieldGroupProps } from '../textfield.types';
export const SET_ERROR_VALIDATE = 'SET_ERROR_VALIDATE';
export const SET_GROUP_PROPS = 'SET_GROUP_PROPS';

export const setErrorValidate = (errorValidate: boolean) => {
  return {
    type: SET_ERROR_VALIDATE,
    payload: { data: errorValidate },
  };
};

export const setGroupProps = (groupProps: TextFieldGroupProps) => {
  return {
    type: SET_GROUP_PROPS,
    payload: { data: groupProps },
  };
};

export const getErrorValidate = () => {
  return <const>{
    type: 'GET_ERROR_VALIDATE',
    payload: {},
  };
};

export type Action =
  | ReturnType<typeof setErrorValidate>
  | ReturnType<typeof getErrorValidate>
  | ReturnType<typeof setGroupProps>;
