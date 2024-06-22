import React, { memo, useState } from "react";
import { LineIcon } from "./icons/LineIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import MailIcon from "./icons/MailIcon";
import MobileIcon from "./icons/MobileIcon";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
const SocialIcons = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: <MobileIcon />, url: "022345686", prefix: "tel:" },
    { icon: <MailIcon />, url: "info@pspipe.com", prefix: "mailto:" },
    { icon: <LineIcon />, url: "https://lin.ee/QRDwTRF" },
    { icon: <FacebookIcon />, url: "https://www.facebook.com/Pspipe.co.th" },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div>
      <div className="flex items-center max-sm:bg-primary">
        {tabs.map((tab, index) => (
          <div
            key={tab.url}
            className={`group cursor-pointer tab flex text-center max-sm:w-full ${
              activeTab === index ? "active max-w-full overflow-x-hidden" : ""
            } `}
          >
            <motion.div
              className={`flex items-center justify-center gap-1 max-sm:w-full max-w-full overflow-x-hidden ${
                activeTab === index
                  ? "text-primary bg-white border border-[#b4c1d1]"
                  : "text-white bg-primary border border-primary"
              }`}
              onClick={() => handleTabClick(index)}
            >
              <motion.span
                className={clsx(
                  ` cursor-pointer p-3 flex justify-center`,
                  activeTab !== index && "pr-10 max-w-full overflow-x-hidden"
                )}
                animate={{ x: activeTab === index ? 0 : 20 }} // Adjust the x value as per your design
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {tab.icon}
              </motion.span>
              {activeTab === index && (
                <motion.div
                  className={`p-3 border-l border-primary max-sm:hidden hover:text-secondary transition-colors duration-300 max-w-full overflow-x-hidden`}
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Link
                    className="text-nowrap max-w-full truncate text-ellipsis block"
                    href={(tab.prefix ?? "") + tab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tab.url}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      {activeTab >= 0 && tabs[activeTab] && (
        <motion.div
          className={`p-3 bg-white text-center sm:hidden text-primary -z-50 hover:text-secondary transition-colors duration-300 border border-[#b4c1d1]`}
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Link
            className="text-nowrap"
            href={tabs[activeTab].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tabs[activeTab].url}
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default memo(SocialIcons);
