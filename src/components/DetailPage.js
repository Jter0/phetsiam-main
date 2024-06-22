import Image from "next/image";
import React from "react";

const DetailPage = ({ item, back }) => {
  const { heading, image, description, IsoNumber } = item;

  return (
    <div className="flex flex-col lg:flex-row gap-[2rem]">
      <div className="flex-[1]">
        <div className="flex items-center justify-center bg-grey1 py-2 w-full rounded-2xl">
          <Image alt={heading} src={image} width={100} height={100}></Image>
        </div>
      </div>
      <div className="flex-[1]">
        <h2 className="text-primary text-4xl font-medium">{heading}</h2>
        <h4 className="text-gray-400 text-2xl">{IsoNumber}</h4>
        <p className="text-base text-gray-400 leading-loose mt-5">
          {description}
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={back}
            className="text-primary text-lg flex items-center gap-3"
            aria-label="back"
          >
            Back
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="30"
              viewBox="0 0 43 30"
              fill="none"
            >
              <ellipse
                opacity="0.2"
                cx="28.1368"
                cy="14.6367"
                rx="14.5"
                ry="14.8634"
                transform="rotate(-90 28.1368 14.6367)"
                fill="#2D4A84"
              />
              <path
                d="M1.38281 14.1367C1.10667 14.1367 0.882812 14.3606 0.882812 14.6367C0.882812 14.9129 1.10667 15.1367 1.38281 15.1367V14.1367ZM31.4631 14.9903C31.6584 14.795 31.6584 14.4784 31.4631 14.2832L28.2812 11.1012C28.0859 10.9059 27.7693 10.9059 27.5741 11.1012C27.3788 11.2964 27.3788 11.613 27.5741 11.8083L30.4025 14.6367L27.5741 17.4651C27.3788 17.6604 27.3788 17.977 27.5741 18.1723C27.7693 18.3675 28.0859 18.3675 28.2812 18.1723L31.4631 14.9903ZM1.38281 15.1367H31.1096V14.1367H1.38281V15.1367Z"
                fill="#2D4A84"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
