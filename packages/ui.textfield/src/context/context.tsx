import { createContext, Dispatch, useReducer } from 'react';
import { Action } from './actions';
import { initState, reducer } from './reducer';

type IState = {
  errorValidate?: boolean;
};

interface IContextProps {
  state: IState;
  dispatch: Dispatch<Action>;
}

export const TextFieldContext = createContext<IContextProps>({} as IContextProps);

export const TextFieldProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = { state, dispatch };

  return <TextFieldContext.Provider value={value}>{props.children}</TextFieldContext.Provider>;
};
