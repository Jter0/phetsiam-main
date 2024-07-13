import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Seo = dynamic(() => import("@/components/Seo"));
const Layout = dynamic(() => import("@/components/Layout"));

const PrivacyPolicy = () => {
  const { t } = useTranslation("privacy-policy");

  return (
    <Layout>
      <>
        <Seo title={t("title")} description={t("description")} />
        <div className="!scroll-smooth">
          <main className={`leading-none overflow-x-hidden scroll-smooth`}>
            <Navbar bgHeader="!bg-primary" />
            <section className="bg-white mt-16 min-h-screen">
              <section className="container-size pt-[3rem] pb-[6rem]">
                <p className="text-primary font-semibold text-[2rem] border-b border-gray-300 pb-1">
                  {t("privacyPolicy")}
                </p>
              </section>
            </section>
            <Footer customStyle="!static" />
          </main>
        </div>
      </>
    </Layout>
  );
};

export default PrivacyPolicy;
