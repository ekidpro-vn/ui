import styled from 'styled-components';

const LoadingDiv = styled.div`
  .skeleton-box {
    position: relative;
    overflow: hidden;
    background-color: #e2e8f0;
  }
  .skeleton-box::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, rgba(255, 255, 255, 0)),
      color-stop(20%, rgba(255, 255, 255, 0.2)),
      color-stop(60%, rgba(255, 255, 255, 0.5)),
      to(rgba(255, 255, 255, 0))
    );
    background-image: -o-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    -webkit-animation: shimmer 3s infinite;
    animation: shimmer 3s infinite;
    content: '';
  }
  @-webkit-keyframes shimmer {
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
  @keyframes shimmer {
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
`;

type LoadingProps = {
  numberOfItems?: number
}

export function LoadingComponent(props: LoadingProps) {
  const { numberOfItems = 3 } = props
  const placeholders = Array.from(Array(numberOfItems).keys()).map(o => `loading_${o}`)

  return (
    <LoadingDiv>
      <div className="w-full flex flex-wrap">
        {placeholders.map((key) => {
          return (
            <div className="w-full md:w-1/3 lg:w-1/5 p-2" key={key}>
              <div className="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after card translate-3d-none-after rounded border border-white">
                <div className="relative group text-primary-500" style={{ paddingTop: '70%' }}>
                  <div className="absolute top-0 left-0 h-full w-full">
                    <span className="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full" />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow">
                    <h3 className="text-lg font-bold text-gray-darkest mr-10">
                      <span className="skeleton-box h-5 w-1/6 inline-block" />
                      <span className="skeleton-box h-5 w-1/2 inline-block" />
                      <span className="skeleton-box h-5 w-2/4 inline-block" />
                      <span className="skeleton-box h-5 w-2/5 inline-block" />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </LoadingDiv>
  );
}
