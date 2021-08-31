import { Meta, Story } from '@storybook/react';
import { ComponentProps } from "react";
import { Tooltip } from "./index";

export default {
  title: "Tooltip",
  component: Tooltip
} as Meta;

const TooltipComponent: Story<ComponentProps<typeof Tooltip>> = (args: any) => <div className="h-96 bg-gray-200 flex items-center justify-center">
  <Tooltip {...args}>
    {args.children}
  </Tooltip>
</div>;

export const TooltipDefault = TooltipComponent.bind({});
TooltipDefault.storyName = 'Tooltip default';
TooltipDefault.args = {
  tooltip: (
    <div className="p-4 w-80">
      <p className="text-sm font-bold text-gray-800 pb-1">Tooltip</p>
      <p className="text-xs leading-4 text-gray-800 pb-3">
        Tooltip in left position. Tooltip in left position.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold cursor-pointer text-gray-800">Learn More</span>
        <span className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">
          Got it
        </span>
      </div>
    </div>),
  children: <button className="bg-blue-500 text-white px-4 py-2">Hover me</button>
};

export const TooltipLeft = TooltipComponent.bind({});
TooltipLeft.storyName = 'Tooltip left';
TooltipLeft.args = {
  position: 'left',
  tooltip: (
    <div className="p-4 w-80">
      <p className="text-sm font-bold text-gray-800 pb-1">Tooltip</p>
      <p className="text-xs leading-4 text-gray-600 pb-3">
        Tooltip in left position. Tooltip in left position.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold cursor-pointer text-gray-800">Learn More</span>
        <span className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">
          Got it
        </span>
      </div>
    </div>),
  children: <span className="bg-blue-500 text-white px-4 py-2">Hover me</span>
};

export const TooltipRight = TooltipComponent.bind({});
TooltipRight.storyName = 'Tooltip right';
TooltipRight.args = {
  position: 'right',
  tooltip: (
    <div className="p-5 w-80">
      <p className="text-sm font-bold text-gray-800 pb-1">Tooltip</p>
      <p className="text-xs leading-4 text-gray-600 pb-3">
        Tooltip in right position. Tooltip in right position.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold cursor-pointer text-gray-800">Learn More</span>
        <span className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">
          Got it
        </span>
      </div>
    </div>),
  children: <button className="bg-blue-500 text-white px-4 py-2">Hover me</button>
};

export const TooltipTop = TooltipComponent.bind({});
TooltipTop.storyName = 'Tooltip top';
TooltipTop.args = {
  position: 'top',
  tooltip: (
    <div className="p-4 w-80">
      <p className="text-sm font-bold text-gray-800 pb-1">Tooltip</p>
      <p className="text-xs leading-4 text-gray-600 pb-3">
        Tooltip at the top position. Tooltip at the top position.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold cursor-pointer text-gray-800">Learn More</span>
        <span className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">
          Got it
        </span>
      </div>
    </div>),
  children: <button className="bg-blue-500 text-white px-4 py-2">Hover me</button>
};

export const TooltipBottom = TooltipComponent.bind({});
TooltipBottom.storyName = 'Tooltip bottom';
TooltipBottom.args = {
  position: 'bottom',
  tooltip: (
    <div className="p-4 w-80">
      <p className="text-sm font-bold text-gray-800 pb-1">Tooltip</p>
      <p className="text-xs leading-4 text-gray-600 pb-3">
        Tooltip at the bottom position. Tooltip at the bottom position.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold cursor-pointer text-gray-800">Learn More</span>
        <span className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">
          Got it
        </span>
      </div>
    </div>),
  children: <button className="bg-blue-500 text-white px-4 py-2">Hover me</button>
};

export const TooltipDarkMode = TooltipComponent.bind({});
TooltipDarkMode.storyName = 'Tooltip dark mode';
TooltipDarkMode.args = {
  darkMode: true,
  tooltip: (
    <div className="p-4 w-80">
      <p className="text-sm font-bold pb-1">Tooltip</p>
      <p className="text-xs leading-4 pb-3">
        Tooltip at the bottom position. Tooltip at the bottom position.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold cursor-pointer">Learn More</span>
        <span className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out rounded text-white px-5 py-1 text-xs">
          Got it
        </span>
      </div>
    </div>),
  children: <button className="bg-blue-500 text-white px-4 py-2">Hover me</button>
};