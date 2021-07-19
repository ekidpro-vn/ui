import { Meta, Story } from '@storybook/react';
import { Portlet, PortletHeader, PortletBody, PortletFooter } from './index';
import React, { ComponentProps } from 'react';
export default {
  title: 'Portlet',
  children: <div style={{ height: '200px' }}>abc</div>,
} as Meta;
const PortletComponent: Story<ComponentProps<typeof Portlet | typeof PortletHeader>> = (args: any) => {
  return (
    <div>
      <Portlet {...args}>
        <PortletHeader {...args}></PortletHeader>
        <PortletBody {...args} className="p-7"></PortletBody>
      </Portlet>
    </div>
  );
};

export const DefaultPortlet = PortletComponent.bind({});
DefaultPortlet.storyName = 'Default Portlet';
DefaultPortlet.args = {
  children: <div style={{ height: '200px' }}>abc</div>,
  title: 'PortletHeader',
  toolbar: <div>+</div>,
};

export const PreventPortletHeader = DefaultPortlet.bind({});
PreventPortletHeader.storyName = 'PortletHeader';
PreventPortletHeader.args = {
  title: 'PortletHeader',
  toolbar: <div>+</div>,
  subTitle: <div style={{ fontWeight: 'bold', fontSize: '12px' }}>SubTitle</div>,
};

export const PreventPortletBody = DefaultPortlet.bind({});
PreventPortletBody.storyName = 'PortletBody';
PreventPortletBody.args = { title: 'test', toolbar: <div>+</div>, children: 'test' };
