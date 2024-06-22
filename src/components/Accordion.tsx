import { ArrowSvg } from "@/components/icons/Svgs";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";

const Accordion = ({
  item,
  isFirstItem,
}: {
  item: {
    title: string;
    content: {
      title: string;
      language: string;
      size: string;
      fileUrl: string;
    }[];
  };
  isFirstItem?: boolean;
}) => {
  const [open, setOpen] = useState(isFirstItem);

  const { t } = useTranslation("resources");

  return (
    <div className="">
      <div
        className={`bg-${
          open ? "gray-200" : "white"
        } transition-colors duration-300 ease-in-out`}
      >
        <button
          className={`flex justify-between items-center w-full py-3 px-4 bg-${
            open ? "gray-200" : "white"
          } hover:bg-gray-200 focus:outline-none transition-colors duration-300 ease-in-out`}
          onClick={() => setOpen(!open)}
          aria-label={item.title}
        >
          <span className="text-primary text-xl font-medium">
            {t(item.title)}
          </span>
          <ArrowSvg active={open} className="" />
        </button>
        {open && (
          <div
            className={clsx(
              "py-2 px-4 transition-colors duration-300 ease-in-out flex justify-between",
              open ? "bg-gray-200" : "bg-white"
            )}
          >
            <div className="flex flex-col justify-between">
              {item.content.map((subItem: any, subIndex: any) => (
                <div key={subIndex} className="py-2 group">
                  <p className="text-md text-primary font-light h-[47px] flex items-center">
                    {t(subItem.title)}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {item.content.map((subItem: any, subIndex: any) => (
                <div key={subIndex} className="py-2 group">
                  <Link href={subItem.fileUrl} download={subItem.fileUrl}>
                    <div className="flex items-center justify-between gap-[3.5rem] cursor-pointer">
                      <p className="text-md text-[#000000] min-w-24 group-hover:text-green-600 opacity-50 hidden sm:block">
                        {t(subItem.language)}
                      </p>
                      <p className="text-md text-[#000000] opacity-50 group-hover:text-green-600 text-right min-w-[75px]">
                        {subItem.size}
                      </p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={47}
                        viewBox="0 0 45 59"
                        fill="#808080"
                      >
                        <path
                          d="M0.9375 0.75V58.25H44.0624V16.2649L28.5474 0.75H0.9375ZM28.9809 3.21601L41.5963 15.8315C41.5991 15.8343 41.599 15.8389 41.5962 15.8417C41.5948 15.843 41.5932 15.8437 41.5913 15.8437H28.9686V3.22108C28.9687 3.2171 28.972 3.21396 28.9759 3.21396C28.9777 3.21402 28.9796 3.21474 28.9809 3.21601ZM2.37502 56.8127V2.18747H27.5312V17.2813H42.6248V56.8127H2.37502Z"
                          fill="#808080"
                          className="group-hover:fill-green-600"
                        />
                        <path
                          d="M34.014 28.7639C33.7302 27.0153 32.7684 25.4493 31.3376 24.4064C29.8543 23.3662 28.0103 22.979 26.2345 23.3348C24.8337 21.1841 22.445 19.8838 19.8798 19.8756C19.2917 19.8746 18.7056 19.9434 18.1337 20.0806C15.0936 20.8718 12.8187 23.4024 12.3526 26.5115C10.3416 26.5821 8.46836 27.5523 7.24942 29.1547C5.82623 31.1592 5.56833 33.7675 6.57138 36.0124C7.5945 38.2207 9.74638 39.6886 12.1741 39.8342H14.1797L13.466 39.1198H12.1934C10.0405 38.9832 8.13377 37.6813 7.22123 35.7249C6.32836 33.7137 6.55654 31.381 7.82218 29.5815C8.91511 28.1587 10.5839 27.2965 12.3757 27.2288L12.9685 27.2073L13.0563 26.6201C13.4724 23.7949 15.5374 21.4933 18.2993 20.7764C18.8164 20.6514 19.3465 20.5883 19.8784 20.5882C22.2043 20.5894 24.3712 21.7697 25.6353 23.7238L25.8994 24.1285L26.373 24.0335C27.9537 23.717 29.5951 24.06 30.9172 24.9832C32.1929 25.9186 33.0513 27.3172 33.3082 28.8789L33.392 29.3929L33.9066 29.47C36.5676 29.8473 38.4192 32.3121 38.0423 34.9754C37.7101 37.3221 35.7384 39.0888 33.3713 39.1605H31.2591L30.5453 39.8748H33.3717C36.4521 39.7944 38.8842 37.2298 38.8037 34.1466C38.7328 31.4233 36.7087 29.1486 34.014 28.7639Z"
                          fill="#808080"
                          className="group-hover:fill-green-600"
                        />
                        <path
                          d="M22.0237 29.5101V43.6406C22.0237 43.6425 22.0221 43.6441 22.0201 43.6441C22.0192 43.6441 22.0183 43.6437 22.0177 43.6431L17.28 38.9012L16.7754 39.4063L22.3806 45.0164L27.9858 39.4063L27.4812 38.9012L22.7435 43.6431C22.7421 43.6444 22.7398 43.6444 22.7385 43.6431C22.7379 43.6423 22.7375 43.6415 22.7375 43.6406V29.5101H22.0237Z"
                          fill="#808080"
                          className="group-hover:fill-green-600"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
