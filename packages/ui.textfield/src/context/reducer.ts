import { produce } from 'immer';
import React from 'react';
import { TextFieldGroupProps } from '../textfield.types';
import { Action, SET_GROUP_PROPS } from './actions';

export interface IState {
  groupProps?: TextFieldGroupProps;
}

export const initState = {
  errorValidate: false,
  groupProps: undefined,
};

export const Context = React.createContext(initState);

export const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case SET_GROUP_PROPS:
      return produce(state, (draftState) => {
        draftState.groupProps = action.payload.data;
      });

    default:
      return state;
  }
};
