import clsx from 'clsx';
import { forwardRef, memo } from 'react';
// This package has only 1 file. So we can folk or do something with them instead of add module here
import isEqual from 'react-fast-compare';
import { ButtonProps } from './button.types';
import { getColorFrom, getColorSchemeOf } from './color-scheme';

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const { variant = 'primary', colorScheme, ...rest } = props;
    const className = getColorFrom(colorScheme) || getColorSchemeOf(variant) || '';

    return (
      <button
        {...rest}
        ref={ref}
        type="button"
        className={clsx(
          'py-2 px-4  w-full transition ease-in duration-200 shadow-md rounded-lg',
          className,
          props.className
        )}
      >
        {props.children}
      </button>
    );
  }),
  isEqual
);
