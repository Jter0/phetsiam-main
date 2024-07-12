import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import clsx from "clsx";
import styles from "../styles/about.module.css";
import { Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import img1 from "../assets/about/about-img-1.webp";
import img2 from "../assets/about/about-img-2.webp";
import img3 from "../assets/about/about-img-3.webp";
import img4 from "../assets/about/about-img-4.webp";
import img5 from "../assets/about/about-img-5.webp";
import img6 from "../assets/about/about-img-6.webp";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = dynamic(() => import("../components/Navbar"));

function About() {
  const { t } = useTranslation("about");

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

  if (loaded) {
    useGSAP(() => {
      gsap.set(`.${styles.bg}`, {
        zIndex: (i, _, targets) => targets.length - i,
      });

      const imageChange = gsap.timeline({ paused: true });

      gsap.set(`.${styles.bg}.bg1`, { autoAlpha: 1 });

      imageChange.to("body", { duration: 3.0 }, 0);

      const backgrounds = document.querySelectorAll(`.${styles.bg}`);

      backgrounds.forEach((bg, index, array) => {
        gsap.set(bg, { y: "-50%" });

        if (index === 0) {
          imageChange.to(bg, { duration: 0.25, autoAlpha: 0 }, 1.0);
          return;
        } else if (index === array.length - 1) {
          imageChange.to(bg, { duration: 0.25, autoAlpha: 1 }, index);
          return;
        }

        imageChange
          .to(bg, { duration: 0.25, autoAlpha: 1 }, index)
          .to(bg, { duration: 0.25, autoAlpha: 0 }, index + 1);
      });

      ScrollTrigger.create({
        trigger: `.${styles.container}`,
        start: "top 50%",
        end: `+=${slides.length - 1}50%`,
        pin: `.${styles["bg-wrap"]}`,
        animation: imageChange,
        scrub: true,
        // markers: true,
      });

      // Select all elements with class 'text' and create individual ScrollTrigger instances
      const texts = document.querySelectorAll(".text");

      texts.forEach((text) => {
        const textAnimation = gsap.timeline();

        gsap.set(text, { autoAlpha: 0 });

        textAnimation
          .to(text, { autoAlpha: 1, duration: 0.25 })
          .to(text, { autoAlpha: 0, duration: 0.25 }, "+=0.75");

        ScrollTrigger.create({
          trigger: text,
          start: "top 90%",
          end: "top 10%",
          animation: textAnimation,
          scrub: true,
          // markers: true,
        });
      });
    }, []);
  }

  const slides = [
    [
      <section className="container-size relative h-screen">
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold text-center absolute top-[17%] left-[50%] translate-x-[-50%] translate-y-[17%] w-full">
          {t("pipeSolutionLeader")}
        </h1>
        <div className="flex w-full justify-center absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[40%]">
          <div className="text-md text-center w-full text-white">
            {t("trustedText")}
          </div>
        </div>
        <div className="text-white text-md absolute top-[60%] left-[0%] translate-x-[-0%] translate-y-[60%] right-0 mx-auto md:w-[30rem]">
          <div className="text-center asds">{t("valueDescription")}</div>
        </div>
      </section>,
    ],
    [
      <div
        data-aos="zoom-in"
        className="relative h-screen flex justify-center items-center w-full md:w-[35rem] lg:w-[25rem] text-md text-center text-white"
      >
        <div className="text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[17rem]">
          {t("for20Years")}
        </div>
      </div>,
      <div
        className={
          "text text-white text-md w-full max-md:text-center absolute top-[70%] right-[0%] translate-x-[-0%] translate-y-[-70%] md:w-[17rem]"
        }
      >
        {t("deliverVirtue")}
      </div>,
    ],
    [
      <div
        className={
          "text absolute top-[40%] right-[0%] translate-x-[0%] translate-y-[-50%] max-md:text-center"
        }
      >
        <h4 className="text-white text-[2rem] md:text-[3rem] font-semibold leading-10">
          <span className="text-[3rem] md:text-[5rem]">{t("V")}</span>{" "}
          {t("value")}
        </h4>
        <div className="text-white text-md md:w-[15rem]">
          {t("valueDescription")}
        </div>
      </div>,
      <div className="text absolute top-[70%] left-[0%] translate-x-[0%] translate-y-[-70%] max-md:text-center">
        <h4 className="text-white text-[2rem] md:text-[3rem] font-semibold leading-none">
          <span className="text-[3rem] md:text-[5rem]">{t("I")}</span>
          {t("innovative")}
        </h4>
        <div className="text-white text-md md:w-[15rem]">
          {t("innovativeDescription")}
        </div>
      </div>,
    ],
    [
      <div className="text absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-md:text-center">
        <h4
          className="text-white text-[2rem] md:text-[3rem] font-semibold"
          style={{ lineHeight: "42px" }}
        >
          <span className="text-[3rem] md:text-[5rem]">{t("R")}</span>{" "}
          {t("reliable")}
        </h4>
        <div className="text-white text-md md:w-[15rem]">
          {t("reliableDescription")}
        </div>
      </div>,
      <div className="text absolute top-[70%] right-[0%] translate-x-[0%] translate-y-[-70%] max-md:text-center">
        <h4 className="text-white text-[2rem] md:text-[3rem] font-semibold leading-10">
          <span className="text-[3rem] md:text-[5rem]">{t("T")}</span>{" "}
          {t("tailored")}
        </h4>
        <p className="text-white text-md md:w-[15rem]">
          {t("tailoredDescription")}
        </p>
      </div>,
    ],
    [
      <div className="text absolute top-[40%] right-[0%] translate-x-[-0%] translate-y-[-50%] max-md:text-center">
        <h4
          className="text-white text-[2rem] md:text-[3rem] font-semibold"
          style={{ lineHeight: "42px" }}
        >
          <span className="text-[3rem] md:text-[5rem]">{t("U")}</span>{" "}
          {t("unrivaled")}
        </h4>
        <div className="text-white text-md md:w-[15rem]">
          {t("unrivaledDescription")}
        </div>
      </div>,
      <div className="text absolute top-[70%] left-[0%] translate-x-[0%] translate-y-[-70%] max-md:text-center">
        <h4 className="text-white text-[2rem] md:text-[3rem] font-semibold leading-none">
          <span className="text-[3rem] md:text-[5rem]">{t("E")}</span>{" "}
          {t("excellence")}
        </h4>
        <div className="text-white text-md md:w-[15rem]">
          {t("excellenceDescription")}
        </div>
      </div>,
    ],
    [
      <div className="flex items-center flex-col gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <Zoom duration={1500}>
          <Image
            src="/img/white-logo.webp"
            alt="white logo"
            width={70}
            height={70}
            loading="lazy"
          />
        </Zoom>
        <Fade direction="up" duration={1500}>
          <div className="text-white text-md text-center md:w-[25rem]">
            {t("trustedProvider")}
          </div>
        </Fade>
        <div className="flex justify-end md:w-[15rem] group text-white hover:text-secondary transition-colors duration-300">
          <Link
            href="/contact"
            className="flex items-center gap-3 text-sm font-semibold"
          >
            {t("contact")}
            <svg
              className="animate-bounce-x-axis group-hover:translate-x-4 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="30"
              viewBox="0 0 43 30"
              fill="none"
            >
              <ellipse
                opacity="0.2"
                cx="28.1368"
                cy="14.6367"
                rx="14.5"
                ry="14.8634"
                transform="rotate(-90 28.1368 14.6367)"
                fill="currentColor"
              />
              <path
                d="M1.38281 14.1367C1.10667 14.1367 0.882812 14.3606 0.882812 14.6367C0.882812 14.9129 1.10667 15.1367 1.38281 15.1367V14.1367ZM31.4631 14.9903C31.6584 14.795 31.6584 14.4784 31.4631 14.2832L28.2812 11.1012C28.0859 10.9059 27.7693 10.9059 27.5741 11.1012C27.3788 11.2964 27.3788 11.613 27.5741 11.8083L30.4025 14.6367L27.5741 17.4651C27.3788 17.6604 27.3788 17.977 27.5741 18.1723C27.7693 18.3675 28.0859 18.3675 28.2812 18.1723L31.4631 14.9903ZM1.38281 15.1367H31.1096V14.1367H1.38281V15.1367Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>,
    ],
  ];

  return (
    <Layout>
      <Seo
        title="About - Phetsiam PE Pipe Co. Ltd."
        description="We don't just deliver pipes; we deliver VIRTUE in every aspect of our service."
      />
      <Navbar />
      {loaded && (
        <div id={styles.container} className="!scroll-smooth">
          <div className={styles["bg-wrap"]}>
            {[img1, img2, img3, img4, img5, img6].map((image, index) => (
              <div
                className={clsx(styles.bg, `bg-${index}`)}
                style={{
                  zIndex: index === 0 ? 90 : "auto",
                }}
                key={index}
              >
                <Image
                  src={image}
                  alt="background"
                  // placeholder="blur"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            ))}
          </div>
          <div>
            {slides.map((slide, index) => (
              <section className="container-size relative h-screen" key={index}>
                {slide}
              </section>
            ))}
          </div>
        </div>
      )}
      <Footer customStyle="relative z-50" />
    </Layout>
  );
}

export default About;
