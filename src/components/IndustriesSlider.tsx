import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/Button";
import { EffectFade } from "swiper/modules";
import { useRef, useState } from "react";
import SliderLeftArrowIcon from "@/icon/SliderLeftArrowIcon";
import SliderRightArrowIcon from "@/icon/SliderRightArrowIcon";
import { motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";
import useTranslation from "next-translate/useTranslation";

const industries = [
  {
    name: "Transportation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content...",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/1K1K9Q0rB9JzHLRlkVG1Wk/de2a12f0c4fdda871efca2712769b1b6/Transportation.mp4",
    link: "/",
  },
  {
    name: "Waste",
    description:
      "Geosynthetics are essential for creating safe barriers for containment and protection in waste management.",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/7xub6lK5vUyh9PglAbpiFZ/7bf6ed791d6d9d611fa60758ab0e8ee0/Waste_1.mp4",
    link: "/",
  },
  {
    name: "Water",
    description:
      "Our engineered solutions safeguard water resources, shorelines and waterways against disasters, water loss and contamination.",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/4li72RtVwXdULy7hcDKs00/08e660cd48a84146c47826597dc33601/Water.mp4",
    link: "/",
  },
  {
    name: "Mining",
    description:
      "Our geosynthetic solutions for mining boost efficiency, safely recover materials, and support infrastructure.",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/3j01K8hDXIXNgaIR5B2OT0/70522097d76086a21136094aaa77a870/Mining.mp4",
    link: "/",
  },
  {
    name: "Energy",
    description:
      "Geosynthetics provide valuable solutions in construction and operation of natural energy resources and energy facilities.",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/65Ts2IRyCBOxD6bmVVEv9u/97cfdbb084bdb6920ff71c35d9ec9a4e/Energy.mp4",
    link: "/",
  },
  {
    name: "Agriculture",
    description:
      "Geosynthetics enhance agricultural efficiency, protect crops, manage water, control erosion, and optimize growing conditions.",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/4dFGoB0G7KGrmy8xUU1nq7/b18c027febaf7f20df8ccabb34094f87/Agriculture.mp4",
    link: "/",
  },
  {
    name: "Site development",
    description:
      "Geosynthetics have become an essential component in efficient, cost effective and sustainable construction.",
    imageURL:
      "//videos.ctfassets.net/u2flb46xxe2f/760cTttkCN6DobON372jej/6acef4af8ccc72ef0aa81bc3dd6c214c/Site_Development_1.mp4",
    link: "/",
  },
];

export default function IndustriesSlider() {
  const [swiper, setSwiper] = useState<any>(null);
  const [swiper2, setSwiper2] = useState<any>(null);
  const [activeButton, setActiveButton] = useState(0);
  const navItemTrackerRef = useRef<HTMLDivElement>(null);
  const sliderButtonsContainer = useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const handleSwiperSlideChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    if (navItemTrackerRef.current) {
      // go to slide with index
      swiper.slideTo(index);
      swiper2.slideTo(index);
      setActiveButton(index);
    }
  };

  useEffect(() => {
    if (navItemTrackerRef.current && sliderButtonsContainer.current) {
      const buttonClicked =
        sliderButtonsContainer.current.children[activeButton];
      const buttonPosition = buttonClicked.getBoundingClientRect();
      const buttonLeftPosition = buttonPosition.left;
      const sliderButtonsContainerPosition =
        sliderButtonsContainer.current?.getBoundingClientRect();
      const sliderButtonsContainerLeftPosition =
        sliderButtonsContainerPosition?.left;
      const buttonWidth = buttonPosition.width;
      const newNavItemTrackerWidth = buttonWidth * 0.6;
      const navItemTrackerPosition =
        buttonLeftPosition - (sliderButtonsContainerLeftPosition ?? 0);
      navItemTrackerRef.current.style.left = `${navItemTrackerPosition}px`;
      navItemTrackerRef.current.style.width = `${newNavItemTrackerWidth}px`;
    }
  }, [activeButton, size.width]);

  const handleNextSlide = () => {
    if (swiper) {
      // check if the slider is at the last slide
      if (swiper.isEnd) {
        swiper.slideTo(0);
        swiper2.slideTo(0);
      } else {
        swiper.slideNext();
        swiper2.slideNext();
      }

      setActiveButton(swiper.activeIndex);
    }
  };

  const handlePrevSlide = () => {
    if (swiper) {
      if (swiper.isBeginning) {
        swiper.slideTo(industries.length - 1);
        swiper2.slideTo(industries.length - 1);
      } else {
        swiper.slidePrev();
        swiper2.slidePrev();
      }

      setActiveButton(swiper.activeIndex);
    }
  };

  const { t } = useTranslation("industriesSlider");

  return (
    <>
      <Swiper
        className="relative h-full"
        style={{ zIndex: -1 }}
        effect="slide"
        speed={10}
        onSwiper={(swiper) => {
          setSwiper2(swiper);
        }}
      >
        {industries.map((industry, index) => {
          return (
            <SwiperSlide key={`video-${index}`}>
              <video
                src={industry.imageURL}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
              <div className="bg-black/60 absolute top-0 left-0 w-full h-full"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute sm:px-8 lg:-translate-y-0 lg:top-0 w-full h-screen text-white text-center flex flex-col xl:flex-row lg:justify-center lg:items-center justify-center items-start top-1/2 -translate-y-1/2 lg:pt-0 px-5">
        <div className="flex items-center justify-end gap-2 ml-auto xl:hidden absolute top-14 right-0 px-5 lg:px-8">
          <div className="flex-inline items-center justify-center">
            <SliderLeftArrowIcon
              onClick={handlePrevSlide}
              className="flex-shrink-0 text-white industries-slider-next-btn hover:-translate-x-3 transition-all duration-300 sm:w-[69px] sm:h-[35px] w-[50px] order-5 xl:order-none"
            />
          </div>

          <div className="flex-inline items-center justify-center">
            <SliderRightArrowIcon
              onClick={handleNextSlide}
              className="flex-shrink-0 text-white industries-slider-prev-btn hover:translate-x-3 transition-all duration-300 xl:mb-0 sm:w-[69px] sm:h-[35px] w-[50px]"
            />
          </div>
        </div>

        <SliderLeftArrowIcon
          onClick={handlePrevSlide}
          className="flex-shrink-0 hidden xl:block text-white industries-slider-next-btn hover:-translate-x-3 transition-all duration-300 sm:w-[69px] sm:h-[35px] w-[50px] order-5 xl:order-none "
        />

        <div className="container text-center flex flex-col xl:justify-start xl:items-center">
          <h2 className="text-lg sm:text-2xl lg:text-4xl xl:5xl font-semibold lg:text-center text-left sc-1100:order-1 ">
            {t("industries_we_serve")}
          </h2>

          <div
            className="max-w-[1070px] flex justify-between sc-1100:gap-8 gap-4 md:mt-12 mt-9 sc-1100:mb-14 relative lg:flex-row flex-col sc-1100:order-2 order-4 mb-10  xl:mx-auto"
            ref={sliderButtonsContainer}
          >
            {industries.map((industry, index) => {
              return (
                <button
                  className={` font-normal flex relative lg:pl-0 pl-4 hover:-translate-y-1 hover:text-secondary/80 xl:hover:traslate-y-0 xl:hover:!font-bold xl:hover:text-secondary group transition-all duration-300 ease-in-out ${
                    index === activeButton
                      ? "!font-bold -translate-y-[2px] lg:text-[21px] lg:leading-[1.75rem] md:text-[19px] md:leading-[1.75rem] text-[17px] leading-[1.5rem]"
                      : "lg:text-xl md:text-lg text-base"
                  }`}
                  key={`industry-button-${index}`}
                  onClick={(event) => {
                    handleSwiperSlideChange(event, index);
                  }}
                  aria-label={industry.name}
                >
                  <span
                    className={`lg:hidden h-full w-1 ${
                      index === activeButton ? "bg-secondary " : "bg-white"
                    } group-hover:bg-secondary/80  transition-all duration-300 ease-in-out block absolute left-0`}
                  ></span>
                  {t(`${industry.name}Name`)}
                </button>
              );
            })}
            <div
              ref={navItemTrackerRef}
              className="h-[2px] rounded-full w-10 bg-white absolute bottom-0 translate-y-2 transition-all ease-in-out lg:block hidden"
            ></div>
          </div>

          <Swiper
            id="industry-serve-slider"
            slidesPerView={1}
            centeredSlides={true}
            speed={0}
            spaceBetween={30}
            className="flex items-center justify-center max-w-[1070px] w-full sc-1100:order-3 order-2 "
            allowTouchMove={false}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {industries.map((industry, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col lg:items-center items-start lg:text-center text-left">
                    <motion.h2
                      className="md:text-4xl xl:text-5xl sm:text-4xl text-3xl font-semibold z-50 relative mt-3"
                      variants={fadeInUpVariants}
                      initial="initial"
                      animate={index === activeButton ? "animate" : "hidden"}
                      transition={{ duration: 0.2, ease: "linear" }}
                    >
                      {t(`${industry.name}Name`)}
                    </motion.h2>
                    <motion.p
                      variants={fadeInUpVariants}
                      initial="initial"
                      animate={index === activeButton ? "animate" : "hidden"}
                      transition={{
                        duration: 0.2,
                        delay: 0.05,
                        ease: "linear",
                      }}
                      className="md:text-xl sm:text-lg text-base font-normal sc-1100:mt-8 sc-1100:mb-16 sm:mb-8 sm:mt-6 mt-4 mb-5 max-w-[700px] z-50 relative"
                    >
                      {t(`${industry.name}Description`)}
                    </motion.p>
                    <Button
                      name="discover more"
                      className="text-white z-50 relative"
                    >
                      {t("discover_more")}
                    </Button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <SliderRightArrowIcon
          onClick={handleNextSlide}
          className="flex-shrink-0 hidden xl:block text-white industries-slider-prev-btn hover:translate-x-3 transition-all duration-300 mb-4 xl:mb-0 sm:w-[69px] sm:h-[35px] w-[50px]"
        />
      </div>
    </>
  );
}
