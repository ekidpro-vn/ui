import { ButtonColorScheme, ButtonType } from './button.types';

const colorSchemes: { [key: string]: ButtonColorScheme } = {
  primary: {
    bgColor: 'bg-indigo-600',
    hover: 'hover:bg-indigo-700',
    focus: 'focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
    text: 'text-white text-center text-base font-semibold',
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
