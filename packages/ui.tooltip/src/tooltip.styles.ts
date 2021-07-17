import styled from 'styled-components';

export const TooltipStyle = styled.div`
  .wrapper-tooltip-right {
    top: 50%;
    right: 0;
  }
  .tooltip-right {
    top: 50%;
    transform: translate(15px, -50%);
  }
  .arrow-right {
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
  }

  .wrapper-tooltip-left {
    top: 50%;
    left: -15px;
  }
  .tooltip-left {
    top: 50%;
    transform: translate(-100%, -50%);
  }
  .arrow-left {
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(100%) rotate(180deg);
  }

  .wrapper-tooltip-bottom {
    top: 100%;
    left: 50%;
  }
  .tooltip-bottom {
    transform: translate(-50%, 15px);
  }
  .arrow-bottom {
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-53%) rotate(90deg);
  }
  .wrapper-tooltip-top {
    top: -15px;
    left: 50%;
  }
  .tooltip-top {
    transform: translate(-50%, -100%);
  }
  .arrow-top {
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(53%) rotate(-90deg);
  }
  .text-dark-mode {
    color: #eee !important;
  }
`;
