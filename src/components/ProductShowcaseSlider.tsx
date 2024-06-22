import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayBtnIcon from "@/icon/PlayBtnIcon";
import SliderLeftArrowIcon from "@/icon/SliderLeftArrowIcon";
import SliderRightArrowIcon from "@/icon/SliderRightArrowIcon";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const products: any = [
  {
    title: "PB Accessories",
    image: "/img/showcase/showcase-img-3.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "PE Accessories",
    image: "/img/showcase/showcase-img-1.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "PE Accessories",
    image: "/img/showcase/showcase-img-2.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "EFlex",
    image: "/img/showcase/showcase-img-3.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "PE Accessories",
    image: "/img/showcase/showcase-img-1.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "EFlex",
    image: "/img/showcase/showcase-img-2.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "PB Accessories",
    image: "/img/showcase/showcase-img-3.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
  {
    title: "PE Accessories",
    image: "/img/showcase/showcase-img-1.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "#!",
  },
];

function ProductShowcaseSlider() {
  const [imageSwiper, setImageSwiper] = React.useState<any>(null);
  const [textSwiper, setTextSwiper] = React.useState<any>(null);

  const handleSlideChange = () => {
    if (imageSwiper && textSwiper) {
      const isNextSlide = imageSwiper.activeIndex > textSwiper.activeIndex;
      const isPrevSlide = imageSwiper.activeIndex < textSwiper.activeIndex;

      if (isNextSlide && imageSwiper.activeIndex === products.length - 1) {
        textSwiper.slideTo(1);
      } else if (isPrevSlide && imageSwiper.activeIndex === 0) {
        textSwiper.slideTo(products.length - 2);
      }

      textSwiper.slideTo(imageSwiper.activeIndex);
    }
  };

  const handleTextSlideChange = () => {
    if (imageSwiper && textSwiper) {
      const isNextSlide = imageSwiper.activeIndex < textSwiper.activeIndex;
      const isPrevSlide = imageSwiper.activeIndex > textSwiper.activeIndex;

      if (isNextSlide && textSwiper.activeIndex === products.length - 1) {
        textSwiper.slideTo(1);
      } else if (isPrevSlide && textSwiper.activeIndex === 0) {
        textSwiper.slideTo(products.length - 2);
      }

      imageSwiper.slideTo(textSwiper.activeIndex);
    }
  };

  const { t } = useTranslation("newProductsShowcase");

  return (
    <>
      <div className="">
        <React.Fragment>
          <div className="swiper-container">
            <Swiper
              id="product-showcase"
              centeredSlides={true}
              autoHeight={true}
              className="product-showcase-slider"
              wrapperTag="ul"
              navigation={{
                nextEl: ".product-showcase-slider-next-btn",
                prevEl: ".product-showcase-slider-prev-btn",
              }}
              initialSlide={1}
              onSwiper={(swiper) => {
                setImageSwiper(swiper);
              }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                900: {
                  slidesPerView: 1,
                  spaceBetween: "30px",
                  centeredSlides: true,
                  loop: false,
                },
                1080: {
                  slidesPerView: 2.5,
                  spaceBetween: "30px",
                },
                1500: {
                  slidesPerView: 2.5,
                  spaceBetween: "30px",
                },
                1300: {
                  slidesPerView: 2.5,
                  spaceBetween: "20px",
                },
              }}
            >
              {products.map((product: any, index: any) => {
                return (
                  <SwiperSlide
                    key={`showcase-${index}`}
                    tag="li"
                    style={{ listStyle: "none" }}
                  >
                    <div className="relative product-showcase-slide">
                      <Image
                        className="object-cover h-full w-full"
                        src={product.image}
                        alt={product.title}
                        fill
                        priority
                      />
                      <div className="product-showcase-slide-overlay absolute top-0 left-0 w-full h-full"></div>
                      <PlayBtnIcon className="play-btn text-[#EDF1FE] hover:text-primary transition-all duration-300 ease-in-out absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </React.Fragment>
      </div>

      <div className="max-w-primary mx-auto sm:px-8 px-5 mt-10  ">
        <div className="flex justify-between items-start gap-5 sm:flex-row flex-col">
          <SliderLeftArrowIcon className="flex-shrink-0 text-primary product-showcase-slider-prev-btn hover:-translate-x-3 transition-all duration-300 sm:w-[68px] sm:h-[35px] w-[50px] sm:order-1 order-2 " />
          <div className="max-w-2xl sm:order-2 order-4">
            <Swiper
              id="product-showcase-text"
              onSwiper={(swiper) => {
                setTextSwiper(swiper);
              }}
              initialSlide={1}
              centeredSlides={true}
              className="product-showcase-text-slider"
              wrapperTag="ul"
              onSlideChange={handleTextSlideChange}
              spaceBetween={30}
            >
              {products.map((product: any, index: any) => {
                return (
                  <SwiperSlide key={`showcase-text-slide-${index}`} tag="li">
                    <div className="flex flex-col w-11/12 mx-auto 2xl:mx-0">
                      <h3 className="text-xl xl:text-3xl font-semibold text-[#1F1F1F]">
                        {t(`${product.title}Tit`)}
                      </h3>
                      <p className="text-sm xl:text-xl sm:text-lg text-[#545454] mt-3 sm:mb-8 mb-4 ">
                        {t(`${product.title}Des`)}
                      </p>
                      <Link href={product.href}>
                        <Button
                          name="discover more"
                          className="text-primary font-bold"
                        >
                          {t("discover_more")}
                        </Button>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <SliderRightArrowIcon className="flex-shrink-0 text-primary product-showcase-slider-next-btn hover:translate-x-3 transition-all duration-300 sm:w-[69px] sm:h-[35px] w-[50px] sm:order-3 order-2 sm:self-start self-end sm:-mt-0 -mt-11" />
        </div>
      </div>
    </>
  );
}

export default ProductShowcaseSlider;
