import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'warning' | 'error';

export type ButtonColorScheme = {
  bgColor?: string;
  hover?: string;
  focus?: string;
  border?: string;
  text?: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  colorScheme?: ButtonColorScheme;
}
