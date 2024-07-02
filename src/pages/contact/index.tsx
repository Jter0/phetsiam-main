import CustomInput from "../../components/CustomInput";
import Link from "next/link";
import SocialIcons from "../../components/SocialIcons";
import Map from "../../components/Map";
import { useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Seo from "@/components/Seo";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";

const DEFAULT_FIELDS = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const rootRef = useRef(null);
  const recaptcha = useRef<ReCAPTCHA>(null);

  const [fields, setFields] = useState(DEFAULT_FIELDS);

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const { reset, handleSubmit } = useForm();

  const accessKey = "3ebb9634-c87a-4b41-8f74-6f700fc4e2b1";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Phetsiam form submission",
      Message: fields.message,
      "Sender information": fields.phone
        ? `name: ${fields.name}
        surname: ${fields.surname}
        email: ${fields.email}
        phone: ${fields.phone}
      `
        : `name: ${fields.name}
      surname: ${fields.surname}
      email: ${fields.email}
    `,
    },
    onSuccess: (msg: any, data) => {
      reset();
      alert(msg);
    },
    onError: (msg: any, data) => {
      alert(msg);
    },
  });

  const handleFormSubmit = (data: any) => {
    const recaptchaValue = recaptcha.current?.getValue();
    if (!recaptchaValue) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    onSubmit(data);
  };

  const { t } = useTranslation("contact");

  return (
    <Layout>
      <>
        <Seo title={t("contactTitle")} description={t("contactDescription")} />
        <div className="!scroll-smooth" ref={rootRef}>
          <main className={`leading-none overflow-x-hidden scroll-smooth`}>
            <Navbar bgHeader="!bg-primary" />
            <section className="bg-grey1 mt-16 min-h-screen">
              <section className="container-size pt-[3rem] pb-[6rem]">
                <h1 className="text-primary font-semibold text-[2rem]">
                  {t("contactHeading")}
                </h1>
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[3rem] mt-[1rem]">
                  <div className="flex-[1]">
                    <form
                      className="bg-white px-12 py-6 min-h-full border border-[#b4c1d1]"
                      onSubmit={handleSubmit(handleFormSubmit)}
                    >
                      <div className="flex flex-col md:flex-row gap-[2rem]">
                        <CustomInput
                          labelText={t("nameLabel")}
                          inputType={"text"}
                          tagType={"input"}
                          value={fields.name}
                          onChange={handleChange("name")}
                        />
                        <CustomInput
                          labelText={t("surnameLabel")}
                          inputType={"text"}
                          tagType={"input"}
                          value={fields.surname}
                          onChange={handleChange("surname")}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row gap-[2rem] mt-[2rem]">
                        <CustomInput
                          labelText={t("emailLabel")}
                          inputType={"email"}
                          tagType={"input"}
                          value={fields.email}
                          onChange={handleChange("email")}
                        />
                        <CustomInput
                          labelText={t("phoneLabel")}
                          inputType={"tel"}
                          tagType={"input"}
                          value={fields.phone}
                          onChange={handleChange("phone")}
                          required={false}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row gap-[2rem] mt-[2rem]">
                        <CustomInput
                          labelText={t("messageLabel")}
                          inputType={"text"}
                          tagType={"textarea"}
                          value={fields.message}
                          onChange={handleChange("message")}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row items-start sm:items-center justify-between mt-[2rem]">
                        <div className="flex items-center gap-[1rem]">
                          <input
                            type="checkbox"
                            required
                            className="w-4 h-4 cursor-pointer"
                          />
                          <div className="flex max-sm:flex-col sm:items-center text-black text-xs sm:gap-1">
                            {t("privacyPolicyText")}{" "}
                            <Link
                              className="text-primary hover:text-secondary transition-colors duration-300"
                              href="/privacy-policy"
                            >
                              {t("privacyPolicyLink")}
                            </Link>
                          </div>
                        </div>
                        <input
                          type="submit"
                          value={t("submitButton")}
                          className="bg-[#b4c1d1] hover:bg-primary transition-colors duration-300 px-6 py-3 sm:mt-0 mt-4 text-md text-white rounded-md cursor-pointer self-end"
                        />
                      </div>
                      <div className="flex items-center justify-center pt-5">
                        <ReCAPTCHA
                          ref={recaptcha}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        />
                      </div>
                    </form>
                    <div className="block lg:hidden mt-[3rem]">
                      <Map />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <SocialIcons />
                    <div className="hidden lg:flex lg:flex-col grow shrink-0">
                      <Map
                        className="shrink-0 grow flex flex-col"
                        googleMapClassName="grow max-h-[426px]"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <Footer customStyle="!static" />
          </main>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
