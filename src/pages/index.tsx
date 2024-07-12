import dynamic from "next/dynamic";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Seo from "@/components/Seo";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

const ProductSlider = dynamic(() => import("@/components/ProductSlider"));
const ProductShowcaseSlider = dynamic(
  () => import("@/components/ProductShowcaseSlider")
);
const ProjectsSlider = dynamic(() => import("@/components/ProjectsSlider"));
const IndustriesSlider = dynamic(() => import("@/components/IndustriesSlider"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const Button = dynamic(() => import("@/components/Button"));

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <>
        <Seo title={t("pageTitle")} description={t("pageDescription")} />
        <div className="!scroll-smooth">
          <main
            className={`leading-none overflow-x-hidden scroll-content scroll-smooth`}
          >
            {/* Hero section */}
            <HeroSection />

            {/*  Welcome section */}
            <section
              className="bg-white relative md:py-32 py-24"
              id="welcome-section"
            >
              <div
                className="max-w-primary mx-auto sm:pl-8 xl:pr-0 sm:pr-8 px-5 flex items-center h-full"
                data-aos="fade-up"
              >
                <div className="flex items-center xl:flex-row flex-col">
                  <div className="relative z-[1]">
                    <div className="square welcome-image">
                      <Image
                        src="/img/welcome-section-im.webp"
                        alt="welcome section image"
                        className="2xl:w-[740px] shadow-[0_4px_24px_0px_rgba(0,0,0,0.25)] xl:w-[600px] w-[570px]"
                        width={700}
                        height={400}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div
                    className="bg-primary xl:absolute relative xl:w-full sc-1100:w-[85%] w-full xl:-mt-0
                -mt-20  xl:ml-[560px] text-white flex items-center flex-grow 2xl:py-32 sm:pb-16 xl:pt-16 pt-28 pb-10 px-8 2xl:pl-56 xl:pl-20"
                  >
                    <div className="flex flex-col md:gap-9 sm:gap-6 gap-4 min-[1600px]:max-w-[750px] sc-1400:max-w-[680px] xl:max-w-[630px]">
                      <h2 className="font-semibold md:text-4xl xl:text-5xl text-3xl">
                        {t("welcomeTitle")}
                      </h2>
                      <p className="md:text-lg xl:text-xl sm:text-lg text-base text-pretty ">
                        {t("welcomeMessage")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Product section */}
            <section className="bg-white">
              <div className="max-w-primary min-[1750px]:w-full 2xl:w-[90%] sc-1100:w-[85%] w-full mx-auto sm:px-8 pb-8 xl:pb-36 px-5">
                <ProductSlider />
              </div>
            </section>

            {/* Why Choose Us section */}
            <section className="why-us-section-bg-img bg-no-repeat bg-cover text-white md:pt-[100px] md:pb-32 sm:px-8 text-center flex flex-col items-center py-24 px-5">
              <h2 className="md:text-4xl xl:text-5xl text-3xl font-semibold">
                {t("whyChooseUsTitle")}
              </h2>

              <h3 className="xl:text-3xl md:text-xl sm:text-xl text-base font-semibold md:mt-8 mt-5 md:mb-[90px] mb-10">
                {t("whyChooseUsMessage")}
              </h3>

              <Button name="discover more">{t("discoverMore")}</Button>
            </section>

            {/* SHOWCASE */}
            <section className="bg-white md:py-32 py-24">
              <div className="">
                <h2 className="text-primary md:text-4xl xl:text-5xl text-4xl font-semibold capitalize mb-12 text-center">
                  {t("newProductsShowcase")}
                </h2>

                <ProductShowcaseSlider />
              </div>
            </section>

            {/* INDUSTRIES WE SERVE */}
            <section className="relative h-screen">
              <IndustriesSlider />
            </section>

            {/* Our Project section */}
            <div className="bg-white lg:pt-32 lg:pb-12 pt-24 pb-7">
              <section className="max-w-primary 2xl:w-[90%] sc-1100:w-[85%] w-full mx-auto sm:px-8 px-5">
                <ProjectsSlider />
              </section>
            </div>
          </main>

          <Footer
            customStyle="!pt-14 md:!pt-14 sm:!pt-14 !static"
            showSponsersSlider
          />
        </div>
      </>
    </Layout>
  );
}
