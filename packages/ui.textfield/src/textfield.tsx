import { memo, useContext, useState } from 'react';
import { setErrorValidate } from './context/actions';
import { TextFieldContext } from './context/context';
import { TextInputStyle } from './textfield.styles';
import { IconProps, TextDescriptionProps, TextInputProps, TextLabelProps } from './textfield.types';
import { css } from './utils/css';

const Icon: React.FC<IconProps> = memo((props) => {
  const { icon } = props;

  if (!icon) {
    return null;
  }

  return (
    <div
      className={css({
        'h-full w-10 border border-gray-300 rounded flex items-center justify-center': true,
        'rounded-r-none border-r-0': icon.position === 'left',
        'rounded-l-none border-l-0': icon.position === 'right',
      })}
    >
      {icon.icon}
    </div>
  );
});

export const TextLabel: React.FC<TextLabelProps> = memo((props) => {
  const { content, children, required } = props;

  if (children) {
    return <>{children}</>;
  }

  if (!content) {
    return null;
  }

  return (
    <div className="mb-1">
      <span className="font-medium">{content}</span>
      {required && <span className="text-red-500 ml-1.5">*</span>}
    </div>
  );
});

export const TextInput: React.FC<TextInputProps> = memo((props) => {
  const { icons, className, onBlur, onChange, ...inputProps } = props;
  const [valueInput, setValueInput] = useState<string>('');
  const { state, dispatch } = useContext(TextFieldContext);

  const leftIcon = icons?.find((item) => item.position === 'left');
  const rightIcon = icons?.find((item) => item.position === 'right');

  return (
    <TextInputStyle>
      <div
        className={css({
          'h-10': true,
          'flex items-center': !!(icons && icons.length > 0),
        })}
      >
        {leftIcon && <Icon icon={leftIcon} />}
        <input
          {...inputProps}
          onBlur={(e) => {
            onBlur && onBlur(e);
            if (state.groupProps?.error && !valueInput && !state?.errorValidate) {
              dispatch(setErrorValidate(true));
            }
          }}
          onChange={(e) => {
            onChange && onChange(e);
            state?.errorValidate && dispatch(setErrorValidate(!e.target.value));
            setValueInput(e.target.value);
          }}
          className={
            css({
              'flex-1 flex items-center rounded overflow-hidden border border-gray-300 px-3 w-full h-full pt-2 pb-2.5 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-blue-600 focus:outline-none min-w-12':
                true,
              'rounded-l-none': !!leftIcon,
              'rounded-r-none': !!rightIcon,
            }) + ` ${className || ''}`
          }
        />
        {rightIcon && <Icon icon={rightIcon} />}
      </div>
    </TextInputStyle>
  );
});

export const TextDescription: React.FC<TextDescriptionProps> = memo((props) => {
  const { children, content } = props;
  const { state } = useContext(TextFieldContext);

  if (children) {
    return <div className={state.errorValidate && state.groupProps?.error ? 'text-red-500' : ''}>{children}</div>;
  }
  return <div>{content}</div>;
});
