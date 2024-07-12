import { Swiper, SwiperSlide } from "swiper/react";
import PlayBtnIcon from "@/icon/PlayBtnIcon";
import SliderLeftArrowIcon from "@/icon/SliderLeftArrowIcon";
import SliderRightArrowIcon from "@/icon/SliderRightArrowIcon";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

const products: any = [
  {
    title: "",
    image: "/img/blog/FrontprofileHDPE.webp",
    desc: "",
    href: "#",
  },
  {
    title: "Common HDPE Pipe Types",
    image: "/img/blog/GreyHDPE.webp",
    desc: "Common HDPE Pipe Types Desc",
    href: "https://blog.pspipe.co.th/common-hdpe-pipe-types-how-to-choose-the-optimal-type/",
  },
  {
    title: "What are ID OD for pipes",
    image: "/img/blog/HDPEpiperoll.webp",
    desc: "What are ID OD for pipes",
    href: "https://blog.pspipe.co.th/what-are-id-od-for-pipes-ultimate-guide/",
  },
  {
    title: "What are HDPE Sheet",
    image: "/img/blog/HDPEPelletsMaxcloseup2.webp",
    desc: "What are HDPE Sheet",
    href: "https://blog.pspipe.co.th/what-%cd%8fis-hdpe-sheet-or-geomembrane/",
  },
  {
    title: "What is PB Pipe",
    image: "/img/blog/HDPEsections.webp",
    desc: "What is PB Pipe",
    href: "https://blog.pspipe.co.th/what-is-pb-pipe/",
  },
  {
    title: "What is HDPE Pipe",
    image: "/img/blog/HDPEPellets.webp",
    desc: "What is HDPE Pipe",
    href: "https://blog.pspipe.co.th/what-is-hdpe-pipe/",
  },
  {
    title: "Pressure Nominal of Pipes",
    image: "/img/blog/FrontprofileHDPE.webp",
    desc: "It is a long established fact that a reader will be distracted by the readable content...",
    href: "https://blog.pspipe.co.th/pressure-nominal-of-pb-pipes-what-you-need-to-know/",
  },
  {
    title: "",
    image: "/img/blog/GreyHDPE.webp",
    desc: "",
    href: "#!",
  }
];

function ProductShowcaseSlider() {
  const [imageSwiper, setImageSwiper] = useState<any>(null);
  const [textSwiper, setTextSwiper] = useState<any>(null);

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
        <>
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
                        className="absolute top-0 left-0 object-cover"
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 900px) 100vw, (max-width: 1080px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="product-showcase-slide-overlay absolute top-0 left-0 w-full h-full"></div>
                      <PlayBtnIcon className="play-btn text-[#EDF1FE] hover:text-primary transition-all duration-300 ease-in-out absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
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
