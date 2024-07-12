import Layout from "@/components/Layout";
import { ProductType } from "@/components/types";
import { products, productsGroups, categories, slugs } from "@/mock/products";
import { useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ArrowSvg } from "@/components/icons/Svgs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

// Dynamic imports for components
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const ResourcesDownloadIcon = dynamic(
  () => import("@/components/icons/ResourcesDownloadIcon"),
  { ssr: false }
);
const ApplicationsSlider = dynamic(
  () => import("@/components/ApplicationsSlider"),
  { ssr: false }
);

export default function SubProduct() {
  const router = useRouter();

  const slug = router.query.slug;

  const product =
    products.find(
      (product) =>
        product.id === slugs.find((item) => item.text === slug)?.productId
    ) || products[0];

  const { t } = useTranslation();

  const productsGroup =
    productsGroups.find(
      (productsGroup) =>
        productsGroup.id ===
        categories.find((category) => product.categoryId === category.id)
          ?.productsGroupId
    ) || productsGroups[0];

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

  return (
    <Layout>
      <Seo title={t(product.name)} description={t(product.description)} />
      <div className="!scroll-smooth bg-[#F0F0F0]">
        <main className="leading-none overflow-x-hidden scroll-smooth relative">
          <Navbar bgHeader="!bg-primary" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-primary mx-auto sm:px-20 px-5 z-10  text-white font-light sm:text-xl flex items-center gap-2">
            <Link
              className="hover:text-secondary transition-colors duration-300"
              href="/"
            >
              {t("common:Home")}
            </Link>
            <span>{String(">")}</span>
            <Link
              href="/products"
              className="hover:text-secondary transition-colors duration-300"
            >
              {t("common:Products")}
            </Link>
            <span>{String(">")}</span>
            <p className="hover:text-secondary transition-colors duration-300">
              {`${t(
                `products:${
                  categories.find(
                    (category) => product.categoryId === category.id
                  )?.name
                }`
              ).toLowerCase()}-${t(`products:${product.name}`).toLowerCase()}`}
            </p>
          </div>
          <div>
            <div className="relative text-white pt-7 pb-11 sm:pb-[72px] flex justify-between items-end h-[416px] md:h-[616px]">
              {loaded && (
                <div className="absolute top-0 left-0 h-full w-full">
                  <Image
                    src={productsGroup.img}
                    alt="Products Background"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="relative w-full max-w-primary mx-auto sm:px-20 px-5 flex max-lg:flex-col max-lg:gap-14 lg:justify-between">
                <div className="flex flex-col font-semibold gap-5 sm:gap-7 z-10">
                  <p
                    className={`md:text-3xl lg:text-5xl text-2xl`}
                    style={{ color: productsGroup.color }}
                  >
                    {t(`products:${productsGroup.title}`)}
                  </p>
                  <div className="flex items-end gap-7 flex-wrap">
                    <p className="md:text-4xl lg:text-6xl xl:text-[80px] xl:!leading-none text-3xl">
                      {t(
                        `products:${
                          categories.find(
                            (category) => product.categoryId === category.id
                          )?.name
                        }`
                      )}
                    </p>
                    <p className="md:text-3xl lg:text-5xl text-2xl">
                      {t(`products:${product.name}`)}
                    </p>
                  </div>
                </div>
                <div className="flex items-end gap-4 max-lg:hidden -mb-11 sm:-mb-[72px]">
                  <Link
                    href={product.catalogLink}
                    className="bg-background hover:bg-white flex flex-col items-center gap-5 px-8 pt-5 pb-4 text-primary hover:text-secondary transition-colors duration-300 h-[152px] aspect-square"
                  >
                    <ResourcesDownloadIcon />
                    <p className="text-lg font-light">
                      {t("sub-products:catalog")}
                    </p>
                  </Link>
                  <Link
                    href={product.contactLink}
                    className="bg-background hover:bg-white flex flex-col justify-between items-center gap-5 px-8 pt-5 pb-4 text-primary hover:text-secondary transition-colors duration-300 h-[152px] aspect-square"
                  >
                    <div className="flex items-center justify-center grow">
                      <p className="text-5xl">?</p>
                    </div>
                    <p className="text-lg font-light">
                      {t("sub-products:contact")}
                    </p>
                  </Link>
                </div>
                <div className="text-xl md:text-3xl font-light flex items-end justify-center gap-7 -mb-11 sm:-mb-[72px] lg:hidden">
                  <Link
                    href="#"
                    className="bg-background hover:bg-white text-primary hover:text-secondary transition-colors duration-300 pt-2 md:pt-9 pb-2 md:pb-3 px-7 md:px-8"
                  >
                    {t("sub-products:catalog")}
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-background hover:bg-white text-primary hover:text-secondary transition-colors duration-300 pt-2 md:pt-9 pb-2 md:pb-3 px-7 md:px-8"
                  >
                    {t("sub-products:contact")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-[69px] pb-11 sm:pb-[72px] text-[#545454] text-base sm:text-xl grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-primary mx-auto sm:px-20 px-5">
              <div className="flex flex-col gap-7">
                <p>{t(`sub-products:${product.subDescription}`)}</p>
                <div>
                  <p className="font-bold text-xl sm:text-2xl text-black">
                    {t("sub-products:size")}
                  </p>
                  <div className="flex flex-col gap-1">
                    {product.sizeValues.map((sizeValue, index) => (
                      <p key={sizeValue + index}>
                        {t(`sub-products:${sizeValue}`)}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xl sm:text-2xl text-black">
                    {t(`sub-products:${product.content.title}`)}
                  </p>
                  <p>{t(`sub-products:${product.content.descreption}`)}</p>
                </div>
              </div>
              <div className="px-6 sm:px-16 py-12 flex justify-between bg-white h-fit">
                <div className="flex flex-col gap-7">
                  <p className="font-bold text-2xl sm:text-3xl">
                    {t("sub-products:standards")}
                  </p>
                  {product.standards.map((standard, index) => (
                    <div key={standard + index} className="flex flex-col gap-7">
                      <p className="hover:text-secondary transition-colors duration-300">
                        {t(`sub-products:${standard}`)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {product.standardsIcons.map((standardsIcon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center relative"
                    >
                      <Image
                        src={standardsIcon}
                        alt="statndard"
                        width={50}
                        height={50}
                        className="w-fit h-fit object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[69px] bg-[#F0F0F0] pb-11 sm:pb-[72px] flex flex-col gap-9 max-w-primary mx-auto sm:px-20 px-5">
              <p className="text-2xl sm:text-4xl font-semibold text-primary">
                {t("sub-products:properties")}
              </p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {product.properties.map((property, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 bg-white border-b-2 border-primary px-5 pt-4 md:pt-5 h-40 sm:h-[211px]"
                  >
                    <div className="size-16 md:size-20 rounded-full flex items-center justify-center relative">
                      <Image
                        key={property + index}
                        src={`/img/products/properties/${property}.svg`}
                        alt=""
                        fill
                        loading="lazy"
                      />
                    </div>
                    <p className="md:text-lg text-[#464648] text-center leading-5">
                      {t(`sub-products:${property}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-[69px] bg-[#F0F0F0] pb-11 sm:pb-[72px] flex flex-col gap-9 max-w-primary mx-auto sm:px-20 px-5">
              <p className="text-2xl sm:text-4xl font-semibold text-primary relative">
                {t("sub-products:applications")}
              </p>
              <section className="w-full mx-auto">
                {loaded && (
                  <ApplicationsSlider projectCards={product.projectCards} />
                )}
              </section>
            </div>
            {loaded && <Accordion questions={product.questions} />}
            <section className="why-us-section-bg-img bg-no-repeat bg-cover text-white md:pt-[100px] md:pb-32 text-center items-center py-24 bg-[#F0F0F0] pb-11 sm:pb-[72px] flex flex-col">
              {loaded && (
                <div className="max-w-primary mx-auto sm:px-20 px-5">
                  <h2 className="md:text-4xl xl:text-5xl text-3xl font-semibold">
                    {t(`sub-products:${product.whyUsTitle}`)}
                  </h2>
                  <div className="flex flex-col gap-1 xl:text-3xl md:text-xl sm:text-xl text-base font-semibold md:mt-8 mt-5 md:mb-[90px] mb-10">
                    {product.whyUsDescription.map((paragraph, index) => (
                      <h3 key={index}>{t(`sub-products:${paragraph}`)}</h3>
                    ))}
                  </div>
                  <Link
                    href={product.contactLink}
                    className="py-6 sm:py-7 px-12 sm:px-14 font-bold sm:text-xl bg-white hover:bg-secondary text-primary hover:text-white transition-colors duration-500"
                  >
                    {t("sub-products:contact_us")}
                  </Link>
                </div>
              )}
            </section>
          </div>
          <Footer customStyle="!static" />
        </main>
      </div>
    </Layout>
  );
}

const Accordion = ({
  questions,
}: {
  questions: {
    question: string;
    answer: string;
  }[];
}) => {
  const [open, setOpen] = useState(true);

  const { t } = useTranslation();

  const [animate] = useAutoAnimate();

  return (
    <div className="">
      <div
        ref={animate}
        className="bg-[#F0F0F0] pb-11 sm:pb-[72px] max-w-primary mx-auto sm:px-20 px-5 flex flex-col gap-9"
      >
        <button
          className="flex justify-between items-center w-full py-3 px-4 hover:bg-gray-200 focus:outline-none transition-colors duration-300 ease-in-out"
          onClick={() => setOpen(!open)}
          aria-label={t("sub-products:faq")}
        >
          <p className="text-2xl sm:text-4xl font-semibold text-primary relative">
            {t("sub-products:faq")}
          </p>
          <ArrowSvg active={open} className="" />
        </button>
        {open && (
          <>
            {questions.map((question, index) => (
              <div
                className="flex flex-col gap-2 text-black"
                key={question.question + index}
              >
                <p className="text-xl sm:text-2xl text-black">
                  {t(`sub-products:${question.question}`)}
                </p>
                <ul className="list-inside list-disc sm:text-xl pl-2">
                  <li>{t(`sub-products:${question.answer}`)}</li>
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
