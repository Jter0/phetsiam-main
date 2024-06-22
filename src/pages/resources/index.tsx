import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import Seo from "@/components/Seo";
import Layout from "@/components/Layout";
import Accordion from "../../components/Accordion";

// Dynamic imports
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

const items: {
  title: string;
  content: {
    title: string;
    language: string;
    size: string;
    fileUrl: string;
  }[];
}[] = [
  {
    title: "Catalogue",
    content: [
      {
        title: "PE Pipes",
        language: "English, Thai",
        size: "900.01 KB",
        fileUrl: "/image/white-logo.webp",
      },
      {
        title: "Item PE Accessories",
        language: "English, Thai",
        size: "700.01 KB",
        fileUrl: "/image/white-logo.webp",
      },
      {
        title: "PB Pipes and Accessories",
        language: "English",
        size: "1 MB",
        fileUrl: "/image/white-logo.webp",
      },
    ],
  },
  {
    title: "Certificates",
    content: [
      {
        title: "PE Pipes",
        language: "English, Thai",
        size: "900.01 KB",
        fileUrl: "/image/white-logo.webp",
      },
      {
        title: "Item PE Accessories",
        language: "English, Thai",
        size: "700.01 KB",
        fileUrl: "/image/white-logo.webp",
      },
      {
        title: "PB Pipes and Accessories",
        language: "English",
        size: "1 MB",
        fileUrl: "/image/white-logo.webp",
      },
    ],
  },
];

const Resources = () => {
  const rootRef = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<any>(null);

  const { t } = useTranslation("resources");

  return (
    <Layout>
      <>
        <Seo title={t("title")} description={t("description")} />
        <div id="scroll-container" ref={rootRef}>
          <main className={`leading-none overflow-x-hidden scroll-smooth`}>
            <Navbar bgHeader="!bg-primary" scroll={scroll} />
            <section className="bg-white mt-16 min-h-screen">
              <section className="container-size pt-[3rem] pb-[6rem]">
                <div className="flex flex-col gap-4">
                  <h1 className="text-primary font-semibold text-[2rem] border-b border-gray-300">
                    {t("heading")}
                  </h1>
                  <p className="text-base leading-[20px] text-gray-500 font-light">
                    {t("content")}
                  </p>
                </div>
                <div className="mt-5 bg-[#F0F0F0]">
                  {items.map((item, index) => (
                    <Accordion
                      key={index}
                      item={item}
                      isFirstItem={index === 0}
                    />
                  ))}
                </div>
              </section>
            </section>
            <Footer customStyle="!static" ref={footerRef} />
          </main>
        </div>
      </>
    </Layout>
  );
};

export default Resources;
