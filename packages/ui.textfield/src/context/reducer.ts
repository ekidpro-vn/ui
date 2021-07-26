import { produce } from 'immer';
import React from 'react';
import { Action, SET_ERROR_VALIDATE } from './actions';

interface IState {
  errorValidate?: boolean;
}

export const initState = {
  errorValidate: false,
};

export const Context = React.createContext(initState);

export const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case SET_ERROR_VALIDATE:
      return produce(state, (draftState) => {
        draftState.errorValidate = action.payload.errorValidate;
      });
    default:
      return state;
  }
};
