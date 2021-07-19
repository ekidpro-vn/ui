import clsx from 'clsx';

export const PortletBody: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (
  props
) => {
  const { children, className } = props;
  return <div className={clsx(className, 'bg-white rounded')}>{children}</div>;
};
