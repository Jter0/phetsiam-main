import Logo from "@/icon/Logo";
import SearchIcon from "@/icon/SearchIcon";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CrossIcon from "@/icon/CrossIcon";
import { useRouter } from "next/router";
import HeaderSearch from "./HeaderSearch";
import { Fade } from "react-awesome-reveal";
import SearchPopup from "./SearchPopup";
import clsx from "clsx";
import useClickAway from "@/lib/hooks/useClickAway";
import useTranslation from "next-translate/useTranslation";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, useSearchBox } from "react-instantsearch";

const searchClient = algoliasearch(
  "O9WI93WVSQ",
  "aff156b888f8ebf2f31f02b289736078"
);

const options = ["EN", "TH", "ID", "MS", "VI", "KH"];

const item = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const NavbarInner = ({
  scroll,
  bgHeader,
}: {
  scroll?: any;
  bgHeader?: any;
}) => {
  const { scrollY } = useScroll();
  const [lang, setLang] = useState(false);

  const [prevScrollY, setPrevScrollY] = useState<any>(0);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [isNavbarOnTop, setIsNavbarOnTop] = useState(true);
  const { query, refine } = useSearchBox();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const router = useRouter();
  const [language, setLanguage] = useState(
    router.locale?.toUpperCase() || "EN"
  );

  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Products", url: "/products" },
    { title: "Quality", url: "/quality" },
    {
      title: "Blog",
      url: `https://blog.pspipe.co.th/${
        router.locale === "en" ? "" : router.locale
      }`,
    },
    { title: "Resources", url: "/resources" },
    { title: "Contact", url: "/contact" },
  ];

  useEffect(() => {
    setLanguage(router.locale?.toUpperCase() || "EN");
  }, [router.locale]);

  useEffect(() => {
    if (windowWidth > 1099) {
      setIsTrue(true);
    } else {
      setLang(false);
    }
  }, [windowWidth]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200 && prevScrollY < latest) {
      setIsNavOpen(false);
    } else if (prevScrollY > latest) {
      setIsNavOpen(true);
    }

    setIsNavbarOnTop(latest < 150);

    setPrevScrollY(latest);

    setIsTrue(true);
  });

  useEffect(() => {
    if (!scroll) return;
    scroll.on("scroll", (args: any) => {
      if (args.scroll.y > 200 && prevScrollY.current < args.scroll.y) {
        setIsNavOpen(false);
      } else if (prevScrollY.current > args.scroll.y) {
        setIsNavOpen(true);
      }
      prevScrollY.current = args.scroll.y;
    });
  });

  const navigateSearchResult = () => {
    // router.push("/search-results?key=" + search);
  };
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSearchBarOpen) {
        setIsSearchBarOpen(false);
      }
    };

    const handleWheel = () => {
      setLang(false);
      setIsTrue(true);
    };

    window.addEventListener("wheel", handleWheel);

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const headerRef = useRef(null);

  useClickAway(headerRef, () => {
    if (!isTrue) {
      setIsTrue(true);
    }
    if (lang) {
      setLang(false);
    }
  });

  const handleLanguageChange = (language: string) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  const { t } = useTranslation("common");

  const searchInput = useRef<HTMLInputElement>(null);
  const mobileSearchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchBarOpen) {
      searchInput.current?.focus();
      mobileSearchInput.current?.focus();
    }
  }, [isSearchBarOpen]);

  useEffect(() => {
    function handleKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setIsSearchBarOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isNavOpen) {
      setIsTrue(true);
    }
  }, [isNavOpen]);

  return (
    <>
      {isSearchBarOpen && <SearchPopup search={query} />}
      <div
        ref={headerRef}
        className="bg-primary hover:shadow transition-all duration-300 ease-in-out"
      >
        <motion.nav
          className={clsx(
            "fixed left-0 w-screen top-0 z-50 top-navbar hover:bg-primary hover:shadow transition-all duration-300 ease-in-out",
            isNavbarOnTop && !isSearchBarOpen
              ? `bg-transparent ${bgHeader}`
              : "bg-primary"
          )}
          variants={{
            open: { y: 0, transition: { duration: 0.1 } },
            closed: { y: "-100%", transition: { duration: 0.1 } },
          }}
          initial="open"
          animate={isNavOpen ? "open" : "closed"}
        >
          <div className="max-w-primary py-3 sc-1100:px-8 px-5 mx-auto flex items-center justify-between">
            <Link rel="preload" href={"/"} aria-label="Logo">
              <Logo className="xl:h-[45px] h-10" />
            </Link>
            <div
              className={clsx(
                "z-20 max-sc-1100:!w-52 fixed top-0 sc-1100:flex pt-[90px] transition-all duration-300 ease-in-out bg-primary gap-2 sc-1100:gap-6 sc-1100:p-0 sc-1100:relative left-0 sc-1100:bg-transparent px-8 sc-1100:flex-row flex-col text-end justify-between sc-1100:justify-center py-8 max-sc-1100:h-svh",
                isSearchBarOpen && "w-full",
                isTrue
                  ? "sc-1100:mr-8 ml-auto sc-1100:ml-8 -right-[100rem] sc-1100:right-[0rem] flex"
                  : "ml-auto !right-[0%] flex"
              )}
            >
              <div className="flex sc-1100:flex-row flex-col sc-1100:justify-center gap-2 sc-1100:gap-6">
                {links.map((link, index) => (
                  <div key={link.title + index}>
                    <Fade
                      direction="right"
                      duration={
                        index === 0
                          ? 300
                          : index === 1
                          ? 500
                          : index === 2
                          ? 700
                          : index === 3
                          ? 900
                          : index === 4
                          ? 1100
                          : 1300
                      }
                    >
                      <motion.div
                        key={index}
                        variants={item}
                        initial="visible"
                        animate={!isSearchBarOpen ? "visible" : "hidden"}
                        transition={{
                          duration: 0.1,
                          delay: !isSearchBarOpen
                            ? (links.length - 1 - index) * 0.05 + 0.2
                            : index * 0.05,
                        }}
                        className="max-sc-1100:pb-2 max-sc-1100:border-b max-md:w-full"
                      >
                        {router.route === link.url ? (
                          <button
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            className="text-white hover:text-secondary transition-all duration-300 ease-in-out text-base text-nowrap"
                          >
                            {t(link.title)}
                          </button>
                        ) : (
                          <Link
                            href={link.url}
                            className="text-white hover:text-secondary transition-all duration-300 ease-in-out text-base text-nowrap"
                          >
                            {t(link.title)}
                          </Link>
                        )}
                      </motion.div>
                    </Fade>
                    {/* {index !== 5 && <hr className="border-gray-350" />} */}
                  </div>
                ))}
              </div>
              <div className="sc-1100:hidden flex items-center gap-3 justify-start flex-wrap">
                {options.map((link, index) => (
                  <Fade
                    key={link + index}
                    direction="right"
                    duration={
                      index === 0
                        ? 300
                        : index === 1
                        ? 500
                        : index === 2
                        ? 700
                        : index === 3
                        ? 900
                        : index === 4
                        ? 1100
                        : 1300
                    }
                  >
                    <motion.span
                      key={link + index}
                      variants={{
                        hidden: { x: -90, opacity: 0 },
                        visible: {
                          x: 0,
                          opacity: 1,
                        },
                      }}
                      onClick={() => {
                        setLanguage(link);
                        setLang(!lang);
                      }}
                      initial="visible"
                      className="cursor-pointer border-b border-b-white"
                      animate={!isSearchBarOpen ? "visible" : "hidden"}
                      transition={{
                        duration: 0.1,
                        delay: !isSearchBarOpen
                          ? (links.length - 1 - index) * 0.05 + 0.2
                          : index * 0.05,
                      }}
                    >
                      <div
                        onClick={() => handleLanguageChange(link.toLowerCase())}
                        // disabled={langRouter === link}
                        className="font-bold text-white hover:text-secondary transition-all duration-300 ease-in-out text-base"
                      >
                        {link}
                      </div>
                      <hr className="border-white" />
                    </motion.span>
                  </Fade>
                ))}
              </div>
              {/* Desktop view search bar */}
              <motion.div
                variants={{
                  initial: {
                    width: 0,
                    x: 300,
                    right: 0,
                    pointerEvents: "none",
                  },
                  visible: {
                    width: "100%",
                    x: 0,
                    right: 0,
                    pointerEvents: "auto",
                  },
                }}
                initial="initial"
                animate={isSearchBarOpen ? "visible" : "hidden"}
                transition={{
                  duration: 0.2,
                  delay: !isSearchBarOpen
                    ? 0.01
                    : 0.1 + (links.length - 1) * 0.05,
                }}
                className="hidden sc-1100:flex items-center  w-full absolute z-10 h-full pl-10"
              >
                <SearchIcon className="text-white h-5 w-5" />
                <input
                  ref={searchInput}
                  id="nav-input"
                  type="text"
                  className="bg-transparent st-default-search-input outline-none border-none w-full px-2 text-white py-2 placeholder:text-white"
                  placeholder={t("Search")}
                  value={query}
                  onChange={(e) => refine(e.target.value)}
                  onKeyDown={(e) => {
                    e.key === "Enter" && navigateSearchResult();
                  }}
                />
              </motion.div>
            </div>

            <div className="flex items-center md:gap-5 gap-4">
              <button
                className={clsx(
                  "cursor-pointer flex-inline items-center justify-center",
                  !isSearchBarOpen && "py-1 pr-4 border-r border-gray-400"
                )}
                onClick={() => {
                  setIsSearchBarOpen(!isSearchBarOpen);
                }}
                aria-label="serach"
              >
                {!isSearchBarOpen && (
                  <SearchIcon className="text-white hover:text-secondary transition-all duration-300 ease-in-out" />
                )}
                {isSearchBarOpen && (
                  <CrossIcon className="text-white hover:text-secondary transition-all duration-300 ease-in-out h-5 w-5" />
                )}
              </button>

              <motion.div
                className="sc-1100:hidden"
                variants={{
                  initial: {
                    opacity: 1,
                    y: 300,
                    left: 0,
                    pointerEvents: "none",
                  },
                  visible: {
                    opacity: 0,
                    y: 0,
                    left: 0,
                    pointerEvents: "auto",
                    width: 0,
                    zIndex: "-1",
                  },
                }}
                animate={isSearchBarOpen ? "visible" : "hidden"}
                transition={{
                  duration: 0.2,
                  delay: !isSearchBarOpen
                    ? 0.01
                    : 0.1 + (links.length - 1) * 0.05,
                }}
                onClick={() => setIsTrue(!isTrue)}
              >
                <button
                  className={clsx(
                    "h-6 w-6 sc-1100:hidden block relative focus:outline-none z-30",
                    isTrue
                      ? "bottom-2.5 transition-all duration-200"
                      : "bottom-1"
                  )}
                  aria-label="Open Navbar"
                >
                  <span
                    className={clsx(
                      "block absolute h-[3px] rounded-sm w-5 bg-current transform transition duration-500 ease-in-out text-white",
                      !isTrue && "rotate-45"
                    )}
                    style={{ top: "15px", left: "1px" }}
                  />
                  <span
                    className={clsx(
                      "block absolute h-[3px] rounded-sm w-5 bg-current transform transition duration-500 ease-in-out text-white",
                      !isTrue && "opacity-0"
                    )}
                    style={{ top: "20px", left: "1px" }}
                  />
                  <span
                    className={clsx(
                      "block absolute h-[3px] rounded-sm w-5 bg-current transform transition duration-500 ease-in-out text-white",
                      !isTrue && "-rotate-45"
                    )}
                    style={{ top: !isTrue ? "15px" : "25px", left: "1px" }}
                  />
                </button>
              </motion.div>

              {/* mobile view search bar */}
              <motion.div
                variants={{
                  initial: { width: 0, x: 0, left: 0, pointerEvents: "none" },
                  visible: {
                    width: "85%",
                    x: 0,
                    left: "0%",
                    pointerEvents: "auto",
                    paddingLeft: "30px",
                  },
                }}
                initial="initial"
                animate={isSearchBarOpen ? "visible" : "hidden"}
                transition={{
                  duration: 0.2,
                  delay: !isSearchBarOpen
                    ? 0.01
                    : 0.1 + (links.length - 1) * 0.05,
                }}
                className="sc-1100:hidden flex items-center absolute z-10 h-full bg-primary"
              >
                <SearchIcon className="text-white h-5 w-5" />
                <input
                  ref={mobileSearchInput}
                  type="text"
                  className="bg-transparent outline-none border-none w-full  px-2 text-white py-2 placeholder:text-white"
                  placeholder="Search "
                  value={query}
                  onChange={(e) => refine(e.target.value)}
                  onKeyDown={(e) => {
                    e.key === "Enter" && navigateSearchResult();
                  }}
                />
                {/* <HeaderSearch /> */}
              </motion.div>

              <motion.div
                className="flex items-center max-sm:hidden"
                variants={{
                  initial: {
                    opacity: 1,
                    y: 300,
                    left: 0,
                    pointerEvents: "none",
                  },
                  visible: {
                    opacity: 0,
                    y: 0,
                    left: 0,
                    pointerEvents: "auto",
                    width: 0,
                  },
                }}
                animate={isSearchBarOpen ? "visible" : "hidden"}
                transition={{
                  duration: 0.2,
                  delay: !isSearchBarOpen
                    ? 0.01
                    : 0.1 + (links.length - 1) * 0.05,
                }}
              >
                <div
                  className="border-gray-400 text-white hover:text-highlight cursor-pointer max-sc-1100:hidden flex items-center gap-2"
                  onClick={() => setLang(!lang)}
                >
                  {language}
                </div>
                <div
                  className={clsx(
                    "fixed h-[100vh] flex flex-col transition-all duration-300 text-end gap- bg-primary px-8 top-0 bottom-0 w-[320px] !z-50",
                    !lang ? "-right-[30rem]" : "right-0"
                  )}
                >
                  <CrossIcon
                    className="text-white hover:text-secondary transition-all duration-300 ease-in-out h-5 w-5 my-8 mr-3  ml-auto z-50 cursor-pointer"
                    onClick={() => setLang(!lang)}
                  />
                  {options.map((link, index) => (
                    <div key={link + index}>
                      <Fade
                        direction="right"
                        duration={
                          index === 0
                            ? 300
                            : index === 1
                            ? 500
                            : index === 2
                            ? 700
                            : index === 3
                            ? 900
                            : index === 4
                            ? 1100
                            : 1300
                        }
                      >
                        <motion.div
                          key={index}
                          variants={item}
                          initial="visible"
                          animate={!isSearchBarOpen ? "visible" : "hidden"}
                          transition={{
                            duration: 0.1,
                            delay: !isSearchBarOpen
                              ? (links.length - 1 - index) * 0.05 + 0.2
                              : index * 0.05,
                          }}
                          className="sc-1100:pb-2 sc-1100:border-b max-md:w-full"
                        >
                          <div
                            onClick={() =>
                              handleLanguageChange(link.toLowerCase())
                            }
                            className="text-white hover:text-secondary transition-all duration-300 mt-10 ease-in-out text-base cursor-pointer"
                          >
                            {link}
                          </div>
                        </motion.div>
                      </Fade>
                    </div>
                  ))}
                  {/* Desktop view search bar */}
                  <motion.div
                    variants={{
                      initial: {
                        width: 0,
                        x: 300,
                        right: 0,
                        pointerEvents: "none",
                      },
                      visible: {
                        width: "100%",
                        x: 0,
                        right: 0,
                        pointerEvents: "auto",
                      },
                    }}
                    initial="initial"
                    animate={isSearchBarOpen ? "visible" : "hidden"}
                    transition={{
                      duration: 0.2,
                      delay: !isSearchBarOpen
                        ? 0.01
                        : 0.1 + (links.length - 1) * 0.05,
                    }}
                    className="hidden sc-1100:flex items-center  w-full absolute z-10 h-full"
                  >
                    <SearchIcon className="text-white h-5 w-5" />
                    <HeaderSearch isSearchOpen={isSearchBarOpen} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
};

const Navbar = (props: { scroll?: any; bgHeader?: any }) => (
  <InstantSearch searchClient={searchClient} indexName="PSPIPE-WebContents">
    <NavbarInner {...props} />
  </InstantSearch>
);
export default Navbar;
