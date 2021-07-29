import { forwardRef } from 'react';
import { PortletHeaderProps } from './portlet.type';

export const PortletHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & PortletHeaderProps>((props, ref) => {
  const { title, toolbar, subTitle, className, children, ...rest } = props;

  return (
    <div className={`flex items-center justify-between rounded bg-white px-7 py-4 border-b ${className}`} ref={ref} {...rest}>
      <div>
        <span className="uppercase font-bold">{title}</span>
        <span className="uppercase">{subTitle}</span>
      </div>
      <div>{toolbar}</div>
    </div>
  );
});
