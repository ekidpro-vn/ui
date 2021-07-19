import { PortletHeaderProps } from './portlet.type';

export const PortletHeader: React.FC<PortletHeaderProps> = (props) => {
  const { title, toolbar } = props;

  return (
    <div className="flex items-center justify-between rounded bg-white px-7 py-4 border-b	">
      <div>
        <span className="uppercase font-bold">{title}</span>
      </div>
      <div>{toolbar}</div>
    </div>
  );
};
