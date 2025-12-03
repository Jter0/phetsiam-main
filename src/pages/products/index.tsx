import { memo, useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import {
  CategoryType,
  ProductType,
  ProductsGroupType,
} from "@/components/types";
import { ArrowSvg } from "../../components/icons/Svgs";
import Link from "next/link";
import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderRightArrowIcon from "@/icon/SliderRightArrowIcon";
import SliderLeftArrowIcon from "@/icon/SliderLeftArrowIcon";
import RightArrowIcon from "@/icon/RightArrowIcon";
import { categories, products, productsGroups, slugs } from "@/mock/products";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo";

// Dynamic imports
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });

const Products = () => {
  const loaded = useRef(false);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      loaded.current = true;
    });

    return () =>
      document.removeEventListener("DOMContentLoaded", () => {
        loaded.current = true;
      });
  }, []);

  const { t } = useTranslation("products");

  return (
    <Layout>
      <Seo title={t("products")} />
      <main className="leading-none overflow-x-hidden !scroll-smooth relative">
        <Navbar bgHeader="!bg-primary" />
        {loaded && (
          <>
            {productsGroups.map((productsGroup, index) => (
              <ProductsGroup
                key={productsGroup.title + index}
                productsGroup={productsGroup}
                index={index}
              />
            ))}
          </>
        )}
        <Footer customStyle="!static" />
      </main>
    </Layout>
  );
};

const ProductsGroup = ({
  productsGroup,
  index,
}: {
  productsGroup: ProductsGroupType;
  index: number;
}) => {
  const [showContent, setShowContent] = useState(true);
  const [parent] = useAutoAnimate();
  const [accordinate] = useAutoAnimate();
  const { t } = useTranslation();

  return (
    <div>
      <div
        className={clsx(
          "text-white pt-7 pb-11 sm:pb-[72px] text-center flex items-end h-[374px] relative",
          true && "!pb-8"
        )}
      >
        {index < 1 ? (
          <Image
            src={productsGroup.img}
            alt={productsGroup.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 w-full h-full z-[-1] products-bg-img"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <Image
            src={productsGroup.img}
            alt={productsGroup.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 w-full h-full z-[-1] products-bg-img"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {index < 1 && (
          <div className="absolute w-full max-w-primary top-24 left-1/2 px-5 sm:px-20 -translate-x-1/2 z-10 text-white font-light sm:text-xl flex items-center gap-2">
            <Link
              className="hover:text-secondary transition-colors duration-300"
              href="/"
            >
              {t("common:Home")}
            </Link>
            <span>{String(">")}</span>
            <p className="hover:text-secondary transition-colors duration-300">
              {t("common:Products")}
            </p>
          </div>
        )}
        <div className="w-full max-w-primary flex flex-col justify-end h-52 mx-auto px-5 sm:px-20">
          <div className="flex justify-between items-end">
            <div
              ref={accordinate}
              className="flex flex-col gap-7 items-start w-full"
            >
              <div className="flex w-full justify-between">
                <h1 className="md:text-4xl xl:text-8xl text-3xl font-semibold">
                  {t(`products:${productsGroup.title}`)}
                </h1>
                <button
                  onClick={() => setShowContent(!showContent)}
                  aria-label="show content"
                >
                  <ArrowSvg
                    active={false}
                    className={clsx(
                      "!text-white w-16 sm:w-24 h-5 sm:h-10 transition-all duration-500",
                      showContent && "rotate-180"
                    )}
                  />
                </button>
              </div>
              <div
                className={clsx(
                  "flex items-center gap-5 flex-wrap transition-opacity duration-300",
                  showContent && "opacity-0"
                )}
              >
                {categories
                  .filter(
                    (category) => category.productsGroupId === productsGroup.id
                  )
                  .map((category, index) => (
                    <p
                      key={category.name + index}
                      className="text-start md:text-3xl xl:text-4xl text-xl font-light"
                    >
                      {t(`products:${category.name}`)}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "bg-white transition-all duration-500",
          showContent && "py-16"
        )}
        ref={parent}
      >
        {showContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 max-w-primary py-3 sm:px-20 px-5 mx-auto">
            {categories
              .filter(
                (category) => category.productsGroupId === productsGroup.id
              )
              .map((category, index) => (
                <MemoizedCategoryGroup
                  key={category.name + index}
                  category={category}
                  index={index}
                  productsGroup={productsGroup}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

const ProductCard = ({ product }: { product: ProductType }) => {
  const { t } = useTranslation("products");

  const [animate] = useAutoAnimate();

  const [showDetails, setShowDetails] = useState(false);

  const slug = slugs.find((slug) => slug.productId === product.id);

  return (
    <Link
      href={`sub-products/${slug?.text}`}
      className="mt-5 project-card w-full block cursor-pointer relative shadow-[0px_3px_39px_0px_#0000001A] hover:sm:shadow-[0px_4px_24px_0px_#00000040] transition-shadow overflow-hidden group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <Image
        src={product.images[0].src}
        alt="pb fitting image"
        width={200}
        height={200}
        sizes="100vw"
        className="h-full sm:transition-transform w-full object-cover sm:duration-500 sm:ease-in-out group-hover:sm:scale-110 object-center"
        loading="lazy"
      />
      <div className="absolute bottom-9 text-white flex flex-col sm:transition-all mb-3 bg-black/40 h-full w-full left-0 top-0 items-start justify-end px-5 pb-10">
        <div ref={animate} className="project-card-text flex flex-col gap-2">
          <p className="text-2xl font-bold">{t(product.name)}</p>
          <p className="font-light leading-5 sm:hidden">
            {t(product.description)}
          </p>
          {showDetails && (
            <p className="font-light leading-5 max-sm:hidden">
              {t(product.description)}
            </p>
          )}
          <button
            aria-label="discover more"
            className={`flex leading-5 items-center gap-3 sm:group hover:sm:text-secondary group-hover:sm:text-secondary sm:transition-all sm:duration-300 sm:ease-in-out text-lg`}
          >
            <span className="text-left">{t("discover_more")}</span>
            <RightArrowIcon
              className={`group-hover:sm:translate-x-1.5 group-hover:sm:text-secondary sm:duration-300`}
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

const MemoizedProductCard = memo(ProductCard);

const CategoryGroup = ({
  category,
  productsGroup,
  index,
}: {
  category: CategoryType;
  productsGroup: ProductsGroupType;
  index: number;
}) => {
  const [animate] = useAutoAnimate();

  const { t } = useTranslation("products");

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const categoryProducts = products.filter(
    (product) => product.categoryId === category.id
  );

  return (
    <div className="max-w-full bg-red w-full flex flex-col">
      <div
        className={clsx(
          "text-[30px] md:text-[60px] font-semibold flex items-end gap-5 mb-4",
          productsGroup.title === "Electricity"
            ? "text-[#FF6626]"
            : productsGroup.title === "Geosynthetics"
            ? "text-[#99DD77]"
            : "text-primary"
        )}
      >
        {t(category.name)}
      </div>
      <div className="flex flex-col">
        <div
          ref={animate}
          className={clsx(
            "sm:transition-colors sm:duration-300 sm:ease-in-out",
            showMore ? "bg-gray-200" : "bg-white"
          )}
        >
          <button
            className={clsx(
              "flex justify-between w-full py-3 px-4 hover:sm:bg-gray-200 focus:outline-none sm:transition-colors sm:duration-300 sm:ease-in-out",
              showMore ? "bg-gray-200" : "bg-white"
            )}
            onClick={() => handleShowMore()}
            aria-label="HDPE_description"
          >
            <span
              className={clsx(
                "text-[#545454] text-sm text-left font-medium",
                !showMore && "max-sc-1100:truncate"
              )}
            >
              {t(category.description[0])}
            </span>
            <ArrowSvg active={showMore} className="shrink-0" />
          </button>
          {showMore && (
            <>
              {category.description.map(
                (description, index) =>
                  index > 0 && (
                    <p
                      className={clsx(
                        "py-2 px-4 sm:transition-colors sm:duration-300 sm:ease-in-out text-[#545454] text-sm text-left font-medium",
                        showMore ? "bg-gray-200" : "bg-white"
                      )}
                    >
                      {t(description)}
                    </p>
                  )
              )}
            </>
          )}
        </div>

        <div className="flex justify-between items-center relative w-full max-[1100px]:mt-10">
          {/* <SliderLeftArrowIcon
            className={clsx(
              `product${index}-slider-prev-btn text-primary absolute sm:-left-16 sm:top-1/2 -top-4 -translate-y-1/2 sm:right-20 right-14 hover:sm:-translate-x-3 sm:transition-all sm:duration-300 projects-slider-prev-btn z-10 sm:w-[58px] sm:h-[35px] w-[48px]`,
              categoryProducts.length < 2 && "max-sc-768:!hidden"
            )}
          /> */}

          <Swiper
            id={`product${index}`}
            className={`product${index}-slider`}
            wrapperTag="ul"
            loop={categoryProducts.length > 1}
            centeredSlides={false}
            navigation={{
              nextEl: `.product${index}-slider-next-btn`,
              prevEl: `.product${index}-slider-prev-btn`,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 2,
                spaceBetween: "10px",
              },

              768: {
                slidesPerView: 1,
                spaceBetween: "20px",
              },

              500: {
                slidesPerView: 2,
                spaceBetween: "20px",
              },

              300: {
                slidesPerView: 1.25,
                spaceBetween: "20px",
              },
            }}
          >
            {categoryProducts.map((product, index) => (
              <SwiperSlide
                key={product.name + index}
                className={clsx(
                  categoryProducts.length === 1 &&
                    "!w-full max:!min-w-[256px] max-md:!max-w-[256px]",
                  categoryProducts.length >= 2 &&
                    "!flex !items-center !justify-center"
                )}
                tag="li"
                style={{
                  listStyle: "none",
                }}
              >
                <MemoizedProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <SliderRightArrowIcon
            className={clsx(
              `product${index}-slider-next-btn text-primary absolute sm:-right-16 sm:top-1/2 -top-4 right-0 -translate-y-1/2 sm:transition-all sm:duration-300 sm:ease-in-out projects-slider-next-btn sm:w-[58px] sm:h-[35px] hover:sm:translate-x-3 w-[48px]`,
              categoryProducts.length < 2 && "max-sc-768:!hidden"
            )}
          /> */}
        </div>
      </div>
    </div>
  );
};

const MemoizedCategoryGroup = memo(CategoryGroup);
