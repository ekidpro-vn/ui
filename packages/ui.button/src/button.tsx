import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        'py-2 px-4 bg-indigo-600 w-full transition ease-in duration-200 shadow-md rounded-lg',
        'hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'text-white text-center text-base font-semibold',
        props.className ?? ''
      )}
    >
      {props.children}
    </button>
  );
}
