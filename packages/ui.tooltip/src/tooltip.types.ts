export interface TooltipProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  tooltip: JSX.Element;
  darkMode?: boolean;
  children: React.ReactNode;
}
