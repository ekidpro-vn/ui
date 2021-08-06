import { ButtonColorScheme, ButtonType } from './button.types';

const colorSchemes: { [key: string]: ButtonColorScheme } = {
  primary: {
    bgColor: 'bg-indigo-600',
    hover: 'hover:bg-indigo-700',
    focus: 'focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
    text: 'text-white text-center text-base font-semibold',
    border: undefined,
  },
  secondary: {
    bgColor: 'bg-white',
    hover: 'hover:bg-gray-100',
    focus: undefined,
    text: 'text-gray-900 text-center text-base font-medium',
    border: 'border',
  },
  warn: {
    bgColor: 'bg-yellow-400',
    hover: 'hover:bg-yellow-500',
    focus: undefined,
    text: 'text-white text-center text-base font-medium',
    border: undefined,
  },
  error: {
    bgColor: 'bg-red-500',
    hover: 'hover:bg-red-600',
    focus: undefined,
    text: 'text-white text-center text-base font-medium',
    border: undefined,
  },
  disabled: {
    bgColor: 'bg-gray-400',
    hover: undefined,
    focus: undefined,
    text: 'text-white text-center text-base font-medium',
    border: undefined,
  },
};

export function getColorFrom(scheme?: ButtonColorScheme): string | undefined {
  if (typeof scheme === 'undefined' || scheme === null) {
    return undefined;
  }

  return Object.values(scheme)
    .filter((o) => typeof o === 'string' && o !== '')
    .join(' ');
}

export function getColorSchemeOf(type: ButtonType): string | undefined {
  const tmp = colorSchemes[type.toString()];
  if (typeof tmp === 'undefined' || tmp === null) {
    throw new Error(`Invalid color scheme`);
  }

  return getColorFrom(tmp);
}
