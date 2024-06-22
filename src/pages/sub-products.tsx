import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ArrowSvg } from "@/components/icons/Svgs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { products, productsGroups, categories } from "@/mock/products";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Image from "next/image";

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

const SubProducts = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { productId, productsGroupId } = router.query;

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedProductGroup, setSelectedProductGroup] = useState(
    productsGroups[0]
  );

  useEffect(() => {
    if (router.isReady && productId) {
      const foundProduct = products.find((product) => product.id === productId);
      if (foundProduct) setSelectedProduct(foundProduct);

      const foundProductsGroup = productsGroups.find(
        (group) => group.id === productsGroupId
      );
      if (foundProductsGroup) setSelectedProductGroup(foundProductsGroup);
    }
  }, [router.isReady, productId, productsGroupId]);

  return (
    <Layout>
      <div id="scroll-container">
        <main className="leading-none overflow-x-hidden scroll-smooth relative">
          <Navbar bgHeader="!bg-primary" />
          <div className="absolute top-24 left-12 sm:left-28 z-10 text-white font-light sm:text-xl flex items-center gap-2">
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
                    (category) => selectedProduct.categoryId === category.id
                  )?.name
                }`
              ).toLowerCase()}-${t(
                `products:${selectedProduct.name}`
              ).toLowerCase()}`}
            </p>
          </div>
          <div>
            <div className="relative text-white pt-7 pb-11 sm:pb-[72px] sm:px-28 flex justify-between items-end px-12 h-[416px] md:h-[616px]">
              {router.isReady && (
                <div className="absolute top-0 left-0 h-full w-full">
                  <Image
                    src={selectedProductGroup.img}
                    alt="Products Background"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    placeholder="blur"
                    blurDataURL="/path/to/low-res-image.jpg"
                  />
                </div>
              )}
              <div className="flex flex-col font-semibold gap-5 sm:gap-7 mb-[56px] md:mb-[84px] lg:mb-0 z-10">
                <p
                  className={`md:text-3xl xl:text-5xl text-2xl`}
                  style={{ color: selectedProductGroup.color }}
                >
                  {t(`products:${selectedProductGroup.title}`)}
                </p>
                <div className="flex items-end gap-7 flex-wrap">
                  <p className="md:text-4xl xl:text-[80px] xl:!leading-none text-3xl">
                    {t(
                      `products:${
                        categories.find(
                          (category) =>
                            selectedProduct.categoryId === category.id
                        )?.name
                      }`
                    )}
                  </p>
                  <p className="md:text-3xl xl:text-5xl text-2xl">
                    {t(`products:${selectedProduct.name}`)}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 absolute bottom-0 right-0 sm:pr-8 pr-5 max-lg:hidden">
                <Link
                  href={selectedProduct.catalogLink}
                  className="bg-background hover:bg-white flex flex-col items-center gap-5 px-8 pt-5 pb-4 text-primary hover:text-secondary transition-colors duration-300 h-[152px] aspect-square"
                >
                  <ResourcesDownloadIcon />
                  <p className="text-lg font-light">
                    {t("sub-products:catalog")}
                  </p>
                </Link>
                <Link
                  href={selectedProduct.contactLink}
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
              <div className="text-xl md:text-3xl font-light flex gap-7 absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden">
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
            <div className="pt-[69px] bg-[#F0F0F0] pb-11 sm:pb-[72px] px-12 sm:px-28 text-[#545454] text-base sm:text-xl grid grid-cols-1 lg:grid-cols-2 gap-14">
              <div className="flex flex-col gap-7">
                <p>{t(`sub-products:${selectedProduct.subDescription}`)}</p>
                <div>
                  <p className="font-bold text-xl sm:text-2xl text-black">
                    {t("sub-products:size")}
                  </p>
                  <div className="flex flex-col gap-1">
                    {selectedProduct.sizeValues.map((sizeValue, index) => (
                      <p key={sizeValue + index}>
                        {t(`sub-products:${sizeValue}`)}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xl sm:text-2xl text-black">
                    {t(`sub-products:${selectedProduct.content.title}`)}
                  </p>
                  <p>
                    {t(`sub-products:${selectedProduct.content.descreption}`)}
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-16 py-12 flex justify-between bg-white h-fit">
                <div className="flex flex-col gap-7">
                  <p className="font-bold text-2xl sm:text-3xl">
                    {t("sub-products:standards")}
                  </p>
                  {selectedProduct.standards.map((standard, index) => (
                    <div key={standard + index} className="flex flex-col gap-7">
                      <p className="hover:text-secondary transition-colors duration-300">
                        {t(`sub-products:${standard}`)}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  {selectedProduct.standardsIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4 items-center"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-[69px] bg-[#F0F0F0] pb-11 sm:pb-[72px] px-12 sm:px-28 flex flex-col gap-9">
              <p className="text-2xl sm:text-4xl font-semibold text-primary">
                {t("sub-products:properties")}
              </p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-7">
                {selectedProduct.properties.map((property, index) => (
                  <Image
                    key={property + index}
                    src={`/img/products/properties/${property}.png`}
                    alt=""
                    width={194}
                    height={211}
                    placeholder="blur"
                    blurDataURL="/path/to/low-res-image.jpg"
                  />
                ))}
              </div>
            </div>
            <div className="pt-[69px] bg-[#F0F0F0] pb-11 sm:pb-[72px] px-12 sm:px-28 flex flex-col gap-9">
              <p className="text-2xl sm:text-4xl font-semibold text-primary relative">
                {t("sub-products:applications")}
              </p>
              <section className="w-full mx-auto">
                <ApplicationsSlider
                  projectCards={selectedProduct.projectCards}
                />
              </section>
            </div>
            <Accordion questions={selectedProduct.questions} />
            <section className="why-us-section-bg-img bg-no-repeat bg-cover text-white md:pt-[100px] md:pb-32 text-center items-center py-24 bg-[#F0F0F0] pb-11 sm:pb-[72px] px-12 sm:px-28 flex flex-col">
              <h2 className="md:text-4xl xl:text-5xl text-3xl font-semibold">
                {t(`sub-products:${selectedProduct.whyUsTitle}`)}
              </h2>
              <div className="flex flex-col gap-1 xl:text-3xl md:text-xl sm:text-xl text-base font-semibold md:mt-8 mt-5 md:mb-[90px] mb-10">
                {selectedProduct.whyUsDescription.map((paragraph, index) => (
                  <h3 key={index}>{t(`sub-products:${paragraph}`)}</h3>
                ))}
              </div>
              <Link
                href={selectedProduct.contactLink}
                className="py-6 sm:py-7 px-12 sm:px-14 font-bold sm:text-xl bg-white hover:bg-secondary text-primary hover:text-white transition-colors duration-500"
              >
                {t("sub-products:contact_us")}
              </Link>
            </section>
          </div>
          <Footer customStyle="!static" />
        </main>
      </div>
    </Layout>
  );
};

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
        className="bg-[#F0F0F0] pb-11 sm:pb-[72px] px-12 sm:px-28 flex flex-col gap-9"
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

export default SubProducts;
