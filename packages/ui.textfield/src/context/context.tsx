import { createContext, Dispatch, useReducer } from 'react';
import { Action } from './actions';
import { initState, IState, reducer } from './reducer';

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
