import React from "react";

const SliderLeftArrowIcon = ({
  className,
  onClick,
}: {
  className?: any;
  onClick?: any;
}) => {
  return (
    <button aria-label="slider left" className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 68 35"
        fill="none"
      >
        <ellipse
          opacity="0.2"
          cx="17.4999"
          cy="17.4196"
          rx="17.4999"
          ry="17.4196"
          transform="matrix(0 -1 -1 0 34.8398 35)"
          fill="currentcolor"
        />
        <path
          d="M67 16.3011C67.4142 16.3011 67.75 16.6369 67.75 17.0511C67.75 17.4653 67.4142 17.8011 67 17.8011L67 16.3011ZM12.8707 17.5814C12.5779 17.2885 12.5779 16.8136 12.8707 16.5208L17.6437 11.7478C17.9366 11.4549 18.4115 11.4549 18.7044 11.7478C18.9973 12.0407 18.9973 12.5156 18.7044 12.8084L14.4617 17.0511L18.7044 21.2937C18.9973 21.5866 18.9973 22.0615 18.7044 22.3544C18.4115 22.6473 17.9366 22.6473 17.6437 22.3544L12.8707 17.5814ZM67 17.8011L13.4011 17.8011L13.4011 16.3011L67 16.3011L67 17.8011Z"
          fill="currentcolor"
        />
      </svg>
    </button>
  );
};

export default SliderLeftArrowIcon;
