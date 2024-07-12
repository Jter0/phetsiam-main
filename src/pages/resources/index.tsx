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
        title: "PB Pipes and Fittings",
        language: "English, Thai",
        size: "667 KB",
        fileUrl: "https://pspipe.co.th/resource/PB-Catalog.pdf",
      },
      {
        title: "PE Pipes and Fittings",
        language: "English, Thai",
        size: "12.16 MB",
        fileUrl: "https://pspipe.co.th/resource/PE-Catalog.pdf",
      },
      {
        title: "PE Compression Fittings",
        language: "Thai",
        size: "1.31 MB",
        fileUrl: "https://pspipe.co.th/resource/PE-Compression-Catalog.pdf",
      },
      {
        title: "Eflex Conduit and Fittings",
        language: "English, Thai",
        size: "848 KB",
        fileUrl: "https://pspipe.co.th/resource/Eflex-Catalog.pdf",
      },{
        title: "HDPE Liner",
        language: "English, Thai",
        size: "1.63 MB",
        fileUrl: "https://pspipe.co.th/resource/HDPELiner-Catalog.pdf",
      },{
        title: "Geosynthetics",
        language: "English",
        size: "2.34 MB",
        fileUrl: "https://pspipe.co.th/resource/Geosynthetics-Catalog.pdf",
      },
    ],
  },
  {
    title: "Certificates",
    content: [
      {
        title: "ISO 9001",
        language: "English",
        size: "372 KB",
        fileUrl: "https://pspipe.co.th/resource/ISO_9001_PipeManufacturing.pdf",
      },
      {
        title: "ISO 14001",
        language: "English",
        size: "370 KB",
        fileUrl: "https://pspipe.co.th/resource/ISO_14001_PipeManufacturing.pdf",
      },{
        title: "ISO 45001",
        language: "English",
        size: "286 KB",
        fileUrl: "https://pspipe.co.th/resource/ISO_45001_PipeManufacturing.pdf",
      },{
        title: "Thai Industrial Standards Institute 932-2556 HDPE",
        language: "Thai",
        size: "586 KB",
        fileUrl: "https://pspipe.co.th/resource/TISI-982-2556-PE.pdf",
      },{
        title: "Thai Industrial Standards Institute 910-2532 PB",
        language: "Thai",
        size: "152 KB",
        fileUrl: "https://pspipe.co.th/resource/TISI-910-2532-PB.pdf",
      },{
        title: "Green Industry Level 3",
        language: "Thai",
        size: "522 KB",
        fileUrl: "https://pspipe.co.th/resource/GreenIndustry_Level-3.pdf",
      },{
        title: "Made in Thailand PE PB",
        language: "Thai",
        size: "196 KB",
        fileUrl: "https://pspipe.co.th/resource/MiT-PE_PB.pdf",
      },{
        title: "Provincial Waterworks Authority PB",
        language: "Thai",
        size: "72 KB",
        fileUrl: "https://pspipe.co.th/resource/PWA-PB.pdf",
      },{
        title: "Provincial Waterworks Authority PE",
        language: "Thai",
        size: "73 KB",
        fileUrl: "https://pspipe.co.th/resource/PWA-PE.pdf",
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
        <div className="!scroll-smooth" ref={rootRef}>
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
