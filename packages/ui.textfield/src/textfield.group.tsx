import { memo, useContext, useEffect } from 'react';
import { setGroupProps } from './context/actions';
import { TextFieldContext, TextFieldProvider } from './context/context';
import { TextFieldGroupProps } from './textfield.types';

const TextFieldGroupLayout: React.FC<TextFieldGroupProps> = memo((props) => {
  const { children, ...groupProps } = props;
  const { dispatch } = useContext(TextFieldContext);

  useEffect(() => {
    if (groupProps) {
      dispatch(setGroupProps(groupProps));
    }
  }, [groupProps, dispatch]);

  return <div {...groupProps}>{children}</div>;
});

export const TextFieldGroup: React.FC<TextFieldGroupProps> = memo((props) => {
  return (
    <TextFieldProvider>
      <TextFieldGroupLayout {...props} />
    </TextFieldProvider>
  );
});
