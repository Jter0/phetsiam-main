import { ForwardedRef, forwardRef } from "react";
import {
  facebookSvg,
  lineSvg,
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  mailSvg,
  phoneSvg,
} from "./icons/Svgs";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import SponsersSlider from "./SponsersSlider";

const Footer = forwardRef(
  (
    {
      customStyle,
      showSponsersSlider,
    }: { customStyle?: string; showSponsersSlider?: boolean },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { t } = useTranslation();

    const router = useRouter();

    const PRODUCTS = [
      {
        name: "PE Pipes",
        link: "https://nextjs32.pspipe.co.th/th/sub-products/hdpe-pipes%20and%20fittings",
      },
      {
        name: "PE Accessories",
        link: "https://nextjs32.pspipe.co.th/th/sub-products/pb-pipes%20and%20fittings",
      },
    ];
    const SITE_MAP = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Quality",
        link: "/quality",
      },
      {
        name: "Blog",
        link: `https://blog.pspipe.co.th/${
          router.locale === "en" ? "" : router.locale
        }`,
      },
      {
        name: "Resources",
        link: "/resources",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ];
    const HeadingAndDetails = ({
      name,
      heading,
      className,
      children,
    }: {
      name?: {
        name: string;
        link: string;
      }[];
      heading: string;
      className?: string;
      children?: any;
    }) => {
      return (
        <div
          className={clsx(
            "flex gap-5 w-fit mx-auto flex-col order-3 sc-1100:pr-0 max-sm:ml-0",
            className
          )}
        >
          <div className="text-lg font-semibold text-white">{heading}</div>
          {name &&
            name?.map((item, index: number) => {
              return (
                <div
                  key={index + item.name}
                  className="whitespace-nowrap hover:text-secondary transition-all duration-300 text-grey1 font-light text-sm cursor-pointer"
                >
                  <Link
                    href={item.link}
                    className="text-white hover:text-secondary transition-colors cursor-pointer"
                  >
                    {SITE_MAP.includes(item)
                      ? t(`common:${item.name}`)
                      : t(`${item.name}`)}
                  </Link>
                </div>
              );
            })}
          {children}
        </div>
      );
    };
    return (
      <div
        className={clsx(
          "fixed bg-primary w-[100%] px-5 lg:px-0 items-center flex-col bottom-0 -z-10",
          customStyle
        )}
        ref={ref}
      >
        <div className="xl:mx-44">
          {showSponsersSlider && <SponsersSlider />}
          <div className="sm:py-20 sm:px-20 justify-around max-sm:justify-items-center py-10 sm:p-20 grid grid-cols-1 sm:grid-cols-2 sc-1100:grid-cols-4 gap-10 sc-1100:justify-items-center">
            <div className="flex flex-col max-sm:items-center max-sm:text-center">
              <Link href="/" aria-label="Logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="113"
                  height="65"
                  viewBox="0 0 113 65"
                  fill="none"
                >
                  <path
                    d="M11.6311 65L11.6311 23.8986C11.6311 23.8986 11.4062 11.4617 21.5621 11.4617H45.1768C45.1768 11.4617 55.2287 11.3895 55.2287 22.9775C55.2287 34.6241 45.1343 34.6293 45.1343 34.6293H18.776V46.3343H47.4786C47.4786 46.3343 66.1283 46.0379 66.1283 24.0202C66.1283 0.126731 46.3079 0 46.3079 0H21.3601C21.3601 0 0.00448808 0.0342419 0.00448808 24.3862L0 65"
                    fill="#F0F0F0"
                  />
                  <path
                    d="M112.999 29.9743L73.9194 29.9742C73.9194 29.9742 70.0291 29.9292 69.9626 33.0635C69.891 36.4741 73.828 36.5586 73.828 36.5586H100.886C100.886 36.5586 112.996 36.8022 112.996 51.2118C112.996 64.9498 101.693 64.9275 101.693 64.9275L18.7754 64.9998V54.6047H98.5707C98.5707 54.6047 102.742 54.6633 102.742 51.1903C102.742 47.6407 98.2311 47.5326 98.2311 47.5326H71.4968C71.4968 47.5326 59.5483 47.4343 59.5483 32.859C59.5483 19.3483 70.6896 19.2445 72.304 19.3252C73.9194 19.407 112.999 19.3219 112.999 19.3219V29.9743Z"
                    fill="#F0F0F0"
                  />
                </svg>
              </Link>
              <div className="pt-[15px] text-white font-medium text-sm">
                {t("common:companyName")}
              </div>
              <div className="pt-6 text-white text-sm">
                {t("common:companyAddress")}
              </div>
            </div>

            <div className="max-sm:hidden flex gap-5 mx-auto flex-col sc-1100:pr-0 sc-1100:order-3">
              <HeadingAndDetails
                heading={t("common:sitemap")}
                name={SITE_MAP}
                className="!w-[100px]"
              />
            </div>
            <div className="sc-1100:order-4 sm:w-fit">
              <HeadingAndDetails
                className="mx-0 max-sm:text-center"
                heading={t("common:Contact")}
              >
                <div className="flex flex-col justify-between gap-8 w-fit">
                  <div className="flex gap-8 justify-between">
                    <Link
                      href="tel:022345686"
                      className="text-white hover:text-secondary hover:sm:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {phoneSvg}
                    </Link>
                    <Link
                      href="https://www.facebook.com/Pspipe.co.th"
                      className="text-white hover:text-secondary hover:sm:scale-110 transition-all duration-300 cursor-pointer mx-auto"
                    >
                      {facebookSvg}
                    </Link>
                  </div>
                  <div className="flex gap-8 justify-between">
                    <Link
                      href="mailto:info@pspipe.com"
                      className="text-white hover:text-secondary hover:sm:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {mailSvg}
                    </Link>
                    <Link
                      href="https://lin.ee/QRDwTRF"
                      className="text-white hover:text-secondary hover:sm:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {lineSvg}
                    </Link>
                  </div>
                </div>
              </HeadingAndDetails>
            </div>
            <div className="max-sm:hidden flex gap-5 mx-auto flex-col">
              <HeadingAndDetails
                heading={t("common:Products")}
                name={PRODUCTS}
                className="!w-[100px]"
              />
            </div>
            <div className="flex justify-between sm:hidden max-sm:gap-10">
              <HeadingAndDetails
                heading={t("common:Products")}
                name={PRODUCTS}
              />
              <HeadingAndDetails
                heading={t("common:sitemap")}
                name={SITE_MAP}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-10 pb-10 justify-center">
            <div className="text-white hover:text-secondary hover:sm:scale-150 transition-all duration-300 max-sm:flex max-sm:justify-center">
              {logo_1}
            </div>
            <div className="text-white hover:text-secondary hover:sm:scale-150 transition-all duration-300">
              {logo_2}
            </div>
            <div className="text-white hover:text-secondary hover:sm:scale-150 transition-all duration-300">
              {logo_3}
            </div>
            <div className="text-white hover:text-secondary hover:sm:scale-150 transition-all duration-300">
              {logo_4}
            </div>
            <div className="text-white hover:text-secondary hover:sm:scale-150 transition-all duration-300">
              {logo_5}
            </div>
          </div>

          <hr />

          <div className="p-5 text-white flex max-sm:flex-col max-sm:gap-12 justify-between text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-secondary transition-colors duration-300"
            >
              {t("common:privacyPolicy")}
            </Link>
            <p>
              {t("common:allRightsReserved", {
                year: new Date().getFullYear(),
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
Footer.displayName = "Footer";
export default Footer;
