import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'warn' | 'error' | 'disabled';

export type ButtonColorScheme = {
  bgColor?: string;
  hover?: string;
  focus?: string;
  border?: string;
  text?: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  rounded?: 'sm' | 'md' | 'lg' | 'normal' | 'full' | 'none';
  colorScheme?: ButtonColorScheme;
}
