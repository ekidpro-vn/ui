import { memo, useState } from 'react';
import { IconProps, LabelProps, TextFieldProps } from './textfield.types';
import { css } from './utils/css';

const RenderIcon: React.FC<IconProps> = (props) => {
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
};

const RenderLabel: React.FC<LabelProps> = (props) => {
  const { label, required } = props;

  if (!label) {
    return null;
  }

  return (
    <div className="mb-1">
      <span className="font-medium">{label}</span>
      {required && <span className="text-red-500 ml-1.5">*</span>}
    </div>
  );
};

const MemoIcon = memo(RenderIcon);
const MemoLabel = memo(RenderLabel);

export function TextField(props: HTMLInputElement & TextFieldProps) {
  const { icons, label, required, className, onBlur, onChange, ...inputProps } = props;
  const [checkInputValue, setCheckInputValue] = useState<boolean>(true);
  const [valueInput, setValueInput] = useState<string>("")

  const leftIcon = icons && icons.length > 0 ? icons.find((item) => item.position === 'left') : undefined;
  const rightIcon = icons && icons.length > 0 ? icons.find((item) => item.position === 'right') : undefined;

  return (
    <div>
      <MemoLabel label={label} required={required} />
      <div
        className={css({
          'h-10': true,
          'flex items-center': !!(icons && icons.length > 0),
        })}
      >
        {leftIcon && <MemoIcon icon={leftIcon} />}
        <input
          {...inputProps}
          onBlur={(e) => {
            onBlur && onBlur(e)
            if (required && !valueInput) {
              setCheckInputValue(false)
            }
          }}
          onChange={e => {
            onChange && onChange(e)
            setCheckInputValue(!!e.target.value)
            setValueInput(e.target.value)
          }}
          className={
            css({
              'flex-1 flex items-center rounded overflow-hidden border border-gray-300 px-4 w-full h-full pt-2 pb-2.5 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:border-blue-600 focus:outline-none focus:border-2':
                true,
              'rounded-l-none': !!leftIcon,
              'rounded-r-none': !!rightIcon,
            }) + ` ${className || ''}`
          }
        />
        {rightIcon && <MemoIcon icon={rightIcon} />}
      </div>
      {!checkInputValue && required && <span className="block text-red-500">Required</span>}
    </div>
  );
}
