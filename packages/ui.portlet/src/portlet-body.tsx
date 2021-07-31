import clsx from 'clsx';
import { forwardRef } from 'react';

export const PortletBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div className={clsx(className, 'bg-white rounded')} {...rest} ref={ref}>
      {children}
    </div>
  );
});
