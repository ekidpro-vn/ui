import { DetailedHTMLProps, forwardRef, HTMLAttributes, useCallback, useState } from 'react';

type ToggleProps = {
  Label?: (props: { children: JSX.Element; checked: boolean }) => JSX.Element;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Toggle = forwardRef<
  HTMLDivElement,
  ToggleProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(({ Label, defaultChecked, onChange, className, style, ...rest }, ref) => {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  const onClicked = useCallback(() => {
    setChecked((val) => {
      if (onChange) {
        onChange(!val);
      }

      return !val;
    });
  }, [onChange, setChecked]);

  let indicatorClassName = 'toggle-indicator bg-white w-6 h-6 rounded-full shadow-md transform duration-300';
  if (checked) {
    indicatorClassName += ' translate-x-6';
  }

  let containerClassName = 'w-14 h-8 flex items-center rounded-full p-1 duration-300 cursor-pointe';
  if (checked) {
    containerClassName += ' bg-blue-500';
  } else {
    containerClassName += ' bg-gray-300';
  }

  const element = (
    <div className={`toggle ${containerClassName} ${className}`} onClick={onClicked} ref={ref} style={style} {...rest}>
      <div className={indicatorClassName} />
    </div>
  );

  if (typeof Label === 'undefined' || Label === null) {
    return element;
  }

  return <Label checked={checked}>{element}</Label>;
});
