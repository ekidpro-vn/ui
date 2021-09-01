import { Children, cloneElement, isValidElement, useState } from 'react';
import { TooltipStyle } from './tooltip.styles';
import { TooltipProps } from './tooltip.types';
import { css } from './utils/render-css';

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { position, tooltip, children, darkMode, className } = props;
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const tmpTooltip = (
    <div
      className={css({
        'fixed cursor-auto': true,
        'wrapper-tooltip-left': position === 'left',
        'wrapper-tooltip-right': position === 'right',
        'wrapper-tooltip-bottom': position === 'bottom',
        'wrapper-tooltip-top': !position || position === 'top',
      })}
    >
      <div
        role="tooltip"
        className={css({
          'z-50 absolute transition duration-300 ease-in-out shadow-lg rounded left-0': true,
          'tooltip-left': position === 'left',
          'tooltip-right': position === 'right',
          'tooltip-bottom': position === 'bottom',
          'tooltip-top': !position || position === 'top',
          'text-dark-mode bg-gray-700': !!darkMode,
          'bg-white': !darkMode,
        })}
      >
        <svg
          className={css({
            'absolute h-full': true,
            'arrow-left': position === 'left',
            'arrow-right': position === 'right',
            'arrow-top': !position || position === 'top',
            'arrow-bottom': position === 'bottom',
          })}
          width="9px"
          height="16px"
          viewBox="0 0 9 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill={darkMode ? '#374151' : '#fff'}>
              <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                  <polygon
                    id="Triangle"
                    transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                    points="4.5 57.5 12.5 66.5 -3.5 66.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        {tooltip}
      </div>
    </div>
  );

  const getChildrenElement = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    // đặt tooltip vào trong children để tính vị trí khi children thay đổi vị trí
    let childrenOfChild = child.props.children;
    if (showTooltip) {
      childrenOfChild = (
        <>
          {tmpTooltip}
          {child.props.children}
        </>
      );
    }

    return cloneElement(child, { children: childrenOfChild, className: `${child.props.className} transform` });
  });

  return (
    <TooltipStyle
      className={`flex-col md:flex-row flex items-center md:justify-center flex-wrap transform ${className}`}
    >
      <div
        className="relative mt-20 md:mt-0"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {getChildrenElement}
      </div>
    </TooltipStyle>
  );
};
