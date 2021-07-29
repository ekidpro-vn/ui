import { forwardRef } from 'react';

export const Portlet = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, className, ...rest } = props;
  return <div className={`bg-white rounded-lg shadow-lg ${className}`} {...rest} ref={ref}>{children}</div>;
})
