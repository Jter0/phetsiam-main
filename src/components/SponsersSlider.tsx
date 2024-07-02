import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

SwiperCore.use([Navigation, Autoplay]);

const imageUrls = [
  "/img/sponsors/TTCL.webp",
  "/img/sponsors/ENSYS.webp",
  "/img/sponsors/TOT.webp",
  "/img/sponsors/SINO-THAI.webp",
  "/img/sponsors/SIEMENS.webp",
  "/img/sponsors/TRUE.webp",
  "/img/sponsors/R.webp",
  "/img/sponsors/IBCI.webp",
  "/img/sponsors/SCG.webp",
];

export default function SponsersSlider() {
  return (
    <div className="flex items-center mx-auto px-5 !pb-14 md:!pb-14 sm:!pb-14">
      <Swiper
        id="sponsers-slider"
        direction="horizontal"
        centeredSlides={false}
        speed={2000}
        navigation={{
          nextEl: ".sponsers-slider-slider-next-btn",
          prevEl: ".sponsers-slider-slider-prev-btn",
        }}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false,
        }}
        className="sponsers-slider-slider flex items-center"
        modules={[Autoplay, Navigation]}
        breakpoints={{
          1400: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 5,
          },
          770: {
            slidesPerView: 4,
          },
          550: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 2,
          },
        }}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index} className="px-5">
            <div
              className="relative w-full h-14 flex justify-center items-center"
              key={index}
            >
              <Image
                src={url}
                alt={`Sponsor ${index}`}
                fill
                sizes="(max-width: 1400px) 20vw, (max-width: 1000px) 20vw, (max-width: 770px) 25vw, (max-width: 550px) 33vw, (max-width: 300px) 50vw, 100vw"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
