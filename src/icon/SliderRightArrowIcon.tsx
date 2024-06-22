import React from "react";

const SliderRightArrowIcon = ({
  className,
  onClick,
}: {
  className?: any;
  onClick?: any;
}) => {
  return (
    <button aria-label="slider right arrow" className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 69 35"
        fill="none"
      >
        <circle
          opacity="0.2"
          cx="51.2889"
          cy="17.5001"
          r="17.4999"
          transform="rotate(-90 51.2889 17.5001)"
          fill="currentcolor"
        />
        <path
          d="M1.48047 16.301C1.06626 16.301 0.730469 16.6368 0.730469 17.051C0.730469 17.4652 1.06626 17.801 1.48047 17.801L1.48047 16.301ZM55.8566 17.5814C56.1495 17.2885 56.1495 16.8136 55.8566 16.5207L51.0836 11.7477C50.7907 11.4548 50.3159 11.4548 50.023 11.7477C49.7301 12.0406 49.7301 12.5155 50.023 12.8084L54.2656 17.051L50.023 21.2937C49.7301 21.5866 49.7301 22.0614 50.023 22.3543C50.3159 22.6472 50.7907 22.6472 51.0836 22.3543L55.8566 17.5814ZM1.48047 17.801L55.3263 17.801L55.3263 16.301L1.48047 16.301L1.48047 17.801Z"
          fill="currentcolor"
        />
      </svg>
    </button>
  );
};

export default SliderRightArrowIcon;
