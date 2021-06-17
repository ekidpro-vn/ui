import React from 'react';

export const Portlet: React.FC = (props) => {
  const { children } = props;
  return <div className="bg-white rounded-lg shadow-lg">{children}</div>;
};
