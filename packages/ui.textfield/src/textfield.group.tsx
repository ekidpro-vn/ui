import { memo, useContext, useEffect } from 'react';
import { setGroupProps } from './context/actions';
import { TextFieldContext, TextFieldProvider } from './context/context';
import { TextFieldGroupProps } from './textfield.types';

const TextFieldGroupLayout: React.FC<TextFieldGroupProps> = memo((props) => {
  const { dispatch } = useContext(TextFieldContext);

  useEffect(() => {
    if (props) {
      dispatch(setGroupProps(props));
    }
  }, [props, dispatch]);

  return <div>{props.children}</div>;
});

export const TextFieldGroup: React.FC<TextFieldGroupProps> = memo((props) => {
  return (
    <TextFieldProvider>
      <TextFieldGroupLayout {...props} />
    </TextFieldProvider>
  );
});
