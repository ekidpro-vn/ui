import clsx from 'clsx';

export const PortletBody: React.FC<HTMLDivElement> = (props) => {
  const { children, className } = props;
  return <div className={clsx(className, 'bg-white rounded')}>{children}</div>;
};
