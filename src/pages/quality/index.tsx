import { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import DetailPage from "../../components/DetailPage";
import Footer from "@/components/Footer";
import ViewMoreRight from "@/icon/ViewMoreRight";
import useTranslation from "next-translate/useTranslation";
import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Seo from "@/components/Seo";

// Dynamic imports
const Navbar = dynamic(() => import("@/components/Navbar"));
const Layout = dynamic(() => import("@/components/Layout"));

const quality: {
  heading: string;
  IsoNumber: string;
  description: string;
  image: string;
}[] = [
  {
    heading: "Melt Flow",
    IsoNumber: "ISO 1133",
    description: "MeltFlowDescription",
    image: "/img/quality-1.svg",
  },
  {
    heading: "Pressure Test",
    IsoNumber: "ISO 1133",
    description: "MeltFlowDescription",
    image: "/img/quality-2.svg",
  },
  {
    heading: "Tension Test",
    IsoNumber: "ISO 1133",
    description: "MeltFlowDescription",
    image: "/img/quality-3.svg",
  },
  {
    heading: "Melt Flow",
    IsoNumber: "ISO 1133",
    description: "MeltFlowDescription",
    image: "/img/quality-4.svg",
  },
  {
    heading: "Pressure Test",
    IsoNumber: "ISO 1133",
    description: "MeltFlowDescription",
    image: "/img/quality-5.svg",
  },
  {
    heading: "Tension Test",
    IsoNumber: "ISO 1133",
    description: "MeltFlowDescription",
    image: "/img/quality-6.svg",
  },
];

const Quality = () => {
  const [selectedItem, setSeletedItem] = useState(null);
  const rootRef = useRef(null);

  const handleBack = () => {
    setSeletedItem(null);
  };

  const [showElement, setShowElement] = useState(false);

  const [selectedElement, setSelectedElement] = useState(quality[0]);

  const { t } = useTranslation("quality");

  return (
    <Layout>
      <Seo title={t("quality")} />
      <div className="!scroll-smooth" ref={rootRef}>
        <main
          className={clsx(
            "leading-none overflow-x-hidden scroll-smooth",
            showElement && "max-h-screen overflow-y-hidden"
          )}
        >
          <Navbar bgHeader="!bg-primary" />
          <div className={clsx("bg-white mt-14 sm:mt-16")}>
            <div className="container-size pt-[3rem] pb-[6rem] relative">
              <div
                className={clsx("flex flex-col gap-4", showElement && "hidden")}
              >
                <h1 className="text-primary font-semibold text-[2rem] border-b border-gray-300">
                  {t("qualityAssurance")}
                </h1>
                <p className="text-base leading-[20px] text-gray-500 font-light">
                  {t("elevateProducts")}
                </p>
              </div>
              {/* More text with translations */}
              <div className={clsx("mt-14", showElement && "hidden")}>
                {selectedItem ? (
                  <DetailPage item={selectedItem} back={handleBack} />
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 max-lg:gap-y-9 lg:gap-16">
                    {quality.map((item, i) => (
                      <div
                        className={clsx(
                          "flex group flex-col items-center gap-3 cursor-pointer"
                        )}
                        key={i}
                        onClick={(event) => {
                          setSelectedElement(item);
                          setShowElement(true);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <h2 className="text-primary text-xl font-medium">
                          {t(item.heading.split(" ").join(""))}
                        </h2>
                        <div className="relative w-[80%] pb-[80%] sm:pb-[80%] rounded-2xl bg-grey1 flex items-center justify-center shadow-lg group-hover:shadow-none transition-all duration-500">
                          <div className="absolute inset-0 flex items-center justify-center">
                            {i <= 1 ? (
                              <Image
                                src={item.image}
                                alt={t(item.heading.split(" ").join(""))}
                                className="max-h-[90%] p-4"
                                width={200}
                                height={100}
                                priority
                              />
                            ) : (
                              <Image
                                src={item.image}
                                alt={t(item.heading.split(" ").join(""))}
                                className="max-h-[90%] p-4"
                                width={200}
                                height={100}
                                loading="lazy"
                              />
                            )}
                          </div>
                        </div>
                        <button
                          aria-label="discove more"
                          className="mt-4 flex items-center text-nowrap gap-1 md:gap-4 text-primary mx-auto group-hover:text-secondary transition-all duration-300 ease-in-out"
                        >
                          <span className="text-sm md:text-lg">
                            {t("discoverMore")}
                          </span>
                          <div className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out">
                            <ViewMoreRight />
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Element
                show={showElement}
                handleClose={() => setShowElement(false)}
                selectedElement={selectedElement}
              />
            </div>
          </div>
        </main>
        <Footer customStyle={clsx("!static", showElement && "hidden")} />
      </div>
    </Layout>
  );
};

const Element = ({
  selectedElement,
  show,
  handleClose,
}: {
  selectedElement: {
    heading: string;
    IsoNumber: string;
    description: string;
    image: string;
  };
  show: boolean;
  handleClose: () => void;
}) => {
  const { t } = useTranslation("quality");

  const [animate] = useAutoAnimate();

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 pt-8 md:pt-16 w-full h-full max-h-fit overflow-y-scroll bg-white z-10 transition-all duration-500",
        show ? "translate-y-0" : "-translate-y-full"
      )}
      ref={animate}
    >
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-md:justify-items-center container-size pt-[3rem] pb-[6rem]"
        )}
      >
        <div className="cursor-pointer relative group-hover:shadow-none transition-all duration-500 shadow-lg bg-[#D9D9D9] rounded-[30px] flex items-center justify-center py-2 md:py-10 max-md:w-[300px] max-md:h-[300px] aspect-square">
          <Image
            src={selectedElement.image}
            alt={t(selectedElement.heading.split(" ").join(""))}
            fill
            className="p-20"
            priority
          />
        </div>
        <div className="flex flex-col md:pt-6 justify-between">
          <div className="flex flex-col gap-2 md:gap-6">
            <div className="flex flex-col md:gap-1">
              <h2 className="text-2xl md:text-3xl text-primary font-medium">
                {t(selectedElement.heading.split(" ").join(""))}
              </h2>
              <p className="text-xl md:text-2xl text-black/50">
                {t(selectedElement.IsoNumber)}
              </p>
            </div>
            <p className="md:text-xl text-black/50 leading-loose md:leading-10">
              {t(selectedElement.description)}
            </p>
          </div>
          <button
            aria-label={t("backButton")}
            className="mt-4 flex items-center gap-4 text-primary group hover:text-secondary transition-all duration-300 ease-in-out self-end"
            onClick={() => {
              handleClose();
            }}
          >
            <span className="sm:text-lg">{t("backButton")}</span>
            <div className="group-hover:translate-x-1.5 transition-all duration-300 ease-in-out">
              <ViewMoreRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality;
