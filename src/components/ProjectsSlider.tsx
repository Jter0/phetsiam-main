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

SwiperCore.use([Navigation]);

const projectCards = [
  {
    image: "/img/projects/project-card-1-img.webp",
    title: "PTT Project",
  },
  {
    image: "/img/projects/project-card-2-img.webp",
    title: "MRT Blue Line Project",
  },
  {
    image: "/img/projects/project-card-3-img.webp",
    title: "Phuket Airport Project",
  },
  {
    image: "/img/projects/project-card-4-img.webp",
    title: "MRT Green Line Project",
  },
  {
    image: "/img/projects/project-card-5-img.webp",
    title: "MRT Red Line Project",
  },
  {
    image: "/img/projects/project-card-6-img.webp",
    title: "Koh Yao Project",
  },
];

const ProjectsSlider = () => {
  const { t } = useTranslation("projectsSlider");

  return (
    <div className="">
      <h2 className="text-primary sc-1100:max-w-full max-w-max xl:text-5xl text-3xl md:text-4xl font-semibold capitalize text-center">
        {t("our_projects")}
      </h2>

      <div className="flex justify-between items-center relative w-full">
        <SliderLeftArrowIcon className="text-primary absolute sc-1100:-left-20 sc-1100:top-1/2 -top-4 sc-1100:hover:-left-[90px] -translate-y-1/2 sm:right-20 right-14 hover:-translate-x-3 transition-all duration-300 projects-slider-prev-btn z-10 sm:w-[68px] sm:h-[35px] w-[48px]" />
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
              slidesPerView: 3,
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
          {projectCards.map((card, index) => {
            return (
              <SwiperSlide
                key={`slide-${index}`}
                tag="li"
                style={{ listStyle: "none" }}
              >
                <Link
                  href="#!"
                  className="project-card block cursor-pointer relative md:max-w-max max-w-full h-[500px] md:h-[580px] xl:h-[580px] shadow-[0px_3px_39px_0px_#0000001A] hover:shadow-[0px_4px_24px_0px_#00000040] transition-all overflow-hidden group"
                  key={index}
                >
                  <Image
                    src={card.image}
                    alt={t(card.title)}
                    width={300}
                    height={300}
                    className="h-full transition-all w-full opacity-100 delay[20ms] object-cover duration-500 ease-in-out group-hover:scale-110 object-center"
                    loading="lazy"
                  />

                  <div className="absolute bottom-9 text-white flex flex-col transition-all duration-300 ease-in-out mb-3 bg-black/40 h-full w-full left-0 top-0 items-start justify-end pl-7 pb-10">
                    <div className="project-card-text">
                      <h3 className="text-xl mb-2 xl:mb-0 xl:text-2xl font-semibold ">
                        {t(card.title)}
                      </h3>
                      <Button name="discover more">{t("discover_more")}</Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SliderRightArrowIcon className="text-primary absolute sc-1100:-right-20 sc-1100:top-1/2 -top-4 right-0 -translate-y-1/2 sc-1100:hover:-right-[90px] transition-all duration-300 ease-in-out projects-slider-next-btn sm:w-[68px] sm:h-[35px] hover:translate-x-3 w-[48px]" />
      </div>
    </div>
  );
};

export default ProjectsSlider;
