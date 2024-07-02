import WhiteArrowIcon from "@/icon/WhiteArrowIcon";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/Navbar"));

const HeroSection = ({ scroll }: { scroll?: any }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="relative h-screen bg-black">
        <div
          className="absolute z-10 top-0 left-0 w-screen h-screen"
          style={{
            background:
              "linear-gradient(180deg, rgba(65, 65, 65, 0.62) 0%, rgba(255, 255, 255, 0) 29.88%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
        <video
          src="/videos/Home Video Top.mp4"
          autoPlay
          loop
          muted
          className="absolute block top-0 w-full h-full object-cover select-none hide-media-controls"
          controls={false}
          controlsList="nofullscreen"
          playsInline
        ></video>
        <Navbar scroll={scroll} />
        <div className="text-center text-white flex flex-col justify-center items-center pt-24 sm:px-8 px-5 h-full  relative">
          <div className="font-semibold text-3xl xl:text-[70px] lg:text-6xl md:text-5xl">
            <span>{t("title")}</span>
          </div>
          <div className="font-normal lg:text-[28px] xl:text-[40px] md:text-3xl sm:text-2xl text-lg uppercase xl:mt-12 2xl:mb-52 mb-24 mt-12">
            <span>{t("subtitle")}</span>
          </div>

          <Link
            href="#welcome-section"
            aria-label="welcome section"
            className="z-10"
          >
            <WhiteArrowIcon className="!animate-bounce"></WhiteArrowIcon>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
