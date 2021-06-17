import React from 'react';

export const PortletBody: React.FC = (props) => {
  const { children } = props;
  return <div className="bg-white rounded p-7">{children}</div>;
};
