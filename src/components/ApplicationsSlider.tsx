import { Swiper, SwiperSlide } from "swiper/react";
import SliderLeftArrowIcon from "@/icon/SliderLeftArrowIcon";
import SliderRightArrowIcon from "@/icon/SliderRightArrowIcon";
import Button from "@/components/Button";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { ProjectCardType } from "./types";

SwiperCore.use([Navigation]);

const ApplicationsSlider = ({
  projectCards,
}: {
  projectCards: ProjectCardType[];
}) => {
  return (
    <div className="flex justify-between items-center relative w-full">
      <SliderLeftArrowIcon className="projects-slider-prev-btn text-primary absolute sc-1100:-left-20 sc-1100:top-1/2 -top-4 sc-1100:hover:-left-[90px] -translate-y-1/2 sm:right-20 right-14 hover:-translate-x-3 transition-all duration-300 projects-slider-prev-btn z-10 sm:w-[68px] sm:h-[35px] w-[48px] !block" />
      <Swiper
        id="projects"
        className="projects-slider"
        wrapperTag="ul"
        centeredSlides={false}
        navigation={{
          nextEl: ".projects-slider-next-btn",
          prevEl: ".projects-slider-prev-btn",
        }}
        loop={true}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: "30px",
          },
          680: {
            slidesPerView: 2,
            spaceBetween: "20px",
          },
          500: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
        }}
      >
        {projectCards.map((card, index) => (
          <SwiperSlide
            key={`slide-${index}`}
            tag="li"
            style={{ listStyle: "none" }}
          >
            <Card card={card} key={card.title + index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderRightArrowIcon className="projects-slider-next-btn text-primary absolute sc-1100:-right-20 sc-1100:top-1/2 -top-4 right-0 -translate-y-1/2 sc-1100:hover:-right-[90px] transition-all duration-300 ease-in-out sm:w-[68px] sm:h-[35px] hover:translate-x-3 w-[48px] !block" />
    </div>
  );
};

const Card = ({ card }: { card: ProjectCardType }) => {
  const { t } = useTranslation("sub-products");

  const [animate] = useAutoAnimate();

  const [showDetails, setShowDetails] = useState(false);

  return (
    <Link
      href={card.link}
      className="project-card block cursor-pointer relative md:max-w-max max-w-full h-[500px] md:h-[580px] xl:h-[580px] shadow-[0px_3px_39px_0px_#0000001A] hover:shadow-[0px_4px_24px_0px_#00000040] transition-all overflow-hidden group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <Image
        src={card.image}
        alt={t(card.title)}
        width={500}
        height={500}
        className="h-full transition-all w-full opacity-100 delay[20ms] object-cover duration-500 ease-in-out group-hover:scale-110 object-center"
        loading="lazy"
      />
      <div className="absolute bottom-9 text-white flex flex-col transition-all duration-300 ease-in-out mb-3 bg-black/40 h-full w-full left-0 top-0 items-start justify-end pl-7 pb-10">
        <div ref={animate} className="project-card-text flex flex-col gap-2">
          <h3 className="text-xl mb-2 xl:mb-0 xl:text-2xl font-semibold">
            {t(card.title)}
          </h3>
          {showDetails && (
            <p className="font-light leading-5">{t(card.content)}</p>
          )}
          {/* <Button name="discover more" className="text-lg">
            {t("discover_more")}
          </Button> */}
        </div>
      </div>
    </Link>
  );
};

export default ApplicationsSlider;
