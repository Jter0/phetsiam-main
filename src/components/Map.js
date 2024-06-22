import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import clsx from "clsx";

const Map = ({ className = "", googleMapClassName = "" }) => {
  const [googleMap, setGoogleMap] = useState("office");

  const handleMap = (mapType) => {
    setGoogleMap(mapType);
  };

  const { t } = useTranslation("contact");

  return (
    <div className={clsx("mt-5", className)}>
      <div className="flex items-center">
        <span className="bg-white rounded-t-md">
          <button
            className={`border-l border-t border-[#b4c1d1] transition-colors duration-300 px-3 after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:transition-colors after:duration-300 relative py-3 w-[100px] text-center rounded-tl-md ${
              googleMap !== "office"
                ? "bg-primary after:bg-primary hover:bg-secondary hover:after:bg-secondary text-white border-primary hover:border-secondary"
                : "bg-white after:bg-white text-primary hover:text-secondary"
            }`}
            onClick={() => handleMap("office")}
            aria-label="office"
          >
            {t("officeButton")}
          </button>
          <button
            className={`border-r border-t border-[#b4c1d1] transition-colors duration-300 px-3 after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:transition-colors after:duration-300 relative py-3 text-center w-[100px] rounded-tr-md ${
              googleMap !== "factory"
                ? "bg-primary after:bg-primary hover:bg-secondary hover:after:bg-secondary text-white border-primary hover:border-secondary"
                : "bg-white after:bg-white text-primary hover:text-secondary"
            }`}
            onClick={() => handleMap("factory")}
            aria-label="factory"
          >
            {t("factoryButton")}
          </button>
        </span>
      </div>
      {googleMap === "office" ? (
        <>
          <div
            className={clsx(
              "py-6 px-10 bg-white border border-[#b4c1d1]",
              googleMapClassName
            )}
          >
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7279235404126!2d100.51906801536877!3d13.734915301383731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2baa0d02a9%3A0x9401eb689b17664!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4nuC4iuC4o-C4quC4ouC4suC4oSDguJ7guLXguK3guLUg4LmE4Lie4LmJ4Lie4LmMIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sen!2sth!4v1551173629431"
                width="100%"
                height="305"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-base text-primary mt-3 w-[70%] text-center">
                {t("officeAddress")}
              </p>
            </div>
          </div>
        </>
      ) : googleMap === "factory" ? (
        <>
          <div
            className={clsx(
              "py-6 px-10 bg-white border border-[#b4c1d1]",
              googleMapClassName
            )}
          >
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15538.406220293136!2d99.8346496!3d13.1875039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f89ec9a19bb72!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4nuC4iuC4o-C4quC4ouC4suC4oSDguJ7guLXguK3guLXguYTguJ7guYnguJ7guYwg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v155117"
                width="100%"
                height="305"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-base text-primary mt-3 text-center">
                {t("factoryAddress")}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Map;
