import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/search-result/Sidebar";
import { useRouter } from "next/router";
import { getAllProductsMethod } from "@/utils/api/apiMethods";
import clsx from "clsx";
import {
  Highlight,
  Hits,
  HitsPerPage,
  Pagination,
  useHits,
  usePagination,
} from "react-instantsearch";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Hit } from "instantsearch.js";

type Resource = {
  DescEN: string;
  DescTH: string;
  HeaderEN: string;
  HeaderTH: string;
  Id: string;
  Keyword: string;
  PageRefEN: string;
  PageRefTH: string;
  PageSection: string;
  PageUrl: string;
  ShortDescEN: string;
  ShortDescTH: string;
  objectID: string;
  _highlightResult: {
    DescEN: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    HeaderEN: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    Keyword: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    ShortDescEN: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  };
  __position: number;
};

const SearchPopup = ({ search: searchTerm }: { search: string }) => {
  const { hits, results } = useHits();

  const { isFirstPage, isLastPage, refine, currentRefinement } =
    usePagination();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [currentRefinement]);

  const { lang, t } = useTranslation("common");

  return (
    <div className="fixed !h-screen w-screen z-50 bg-[#f9fafb] py-[6rem]  !overflow-y-scroll px-5 md:px-[4rem] lg:px-[8rem]">
      <div className="flex gap-10 pt-4">
        <Sidebar />
        <div className="w-full st-search-container text-[#3B454F]">
          {results && (
            <div className="text-xs pb-2 mb-3 border-b">
              {t("Showing")}{" "}
              <span className="font-semibold">
                {hits.length ? hits.length * results.page + 1 : 0} -{" "}
                {hits.length + results.hitsPerPage * results.page}
              </span>{" "}
              {t("out of")}
              <span className="font-semibold"> {results.nbHits} </span>
              {t("for")}:<span className="italic">{" " + searchTerm}</span>
            </div>
          )}

          <Hits
            hitComponent={({ hit }: { hit: Hit<Resource> }) => {
              return (
                <Link
                  key={hit.Id}
                  href={hit.PageUrl}
                  className="hover:shadow-sm rounded-md p-5"
                >
                  <div className="relative">
                    <Highlight
                      className="text-[1.1rem] text-white/0 cursor-pointer pointer-events-none font-normal absolute top-0 left-0"
                      hit={hit}
                      attribute={lang === "th" ? "HeaderTH" : "HeaderEN"}
                    />
                    <div className="text-[1.1rem] text-[#3257ec]  hover:text-secondary transition-colors duration-300 cursor-pointer font-normal">
                      {lang === "th" ? hit.HeaderTH : hit.HeaderEN}
                    </div>
                  </div>
                  {hit.PageUrl && (
                    <div className="text-[#A5B4C4] text-[0.775rem] mt-1 line-clamp-1 whitespace-nowrap max-w-[600px]">
                      {hit.PageUrl}
                    </div>
                  )}
                  <div className="relative border-l pl-2 mt-3">
                    <Highlight
                      className="text-white/0 line-clamp-2 text-[13.6px] font-light pointer-events-none absolute top-0 left-2"
                      hit={hit}
                      attribute={lang === "th" ? "ShortDescTH" : "ShortDescEN"}
                    />
                    <div className="text-[#6c7987] line-clamp-2 text-[13.6px] font-light ">
                      {lang === "th" ? hit.ShortDescTH : hit.ShortDescEN}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="uppercase text-white font-semibold text-[10px] rounded-[3px] bg-[#3257ec] flex justify-center items-center px-1.5 py-1.5">
                      {t(hit.PageSection)}
                    </div>
                  </div>
                </Link>
              );
            }}
          />
        </div>
      </div>
      {/* Pagination */}
      {results && (
        <div className="flex justify-center mt-4 font-semibold text-sm">
          <button
            onClick={() => refine(results.page - 1)}
            className={clsx(
              "px-2.5 py-1 uppercase",
              !isFirstPage ? "text-[#3257ec]" : "text-[#808E9C]"
            )}
            disabled={isFirstPage}
            aria-label="previous"
          >
            {t("Previous")}
          </button>
          <button
            onClick={() => refine(results.page + 1)}
            className={clsx(
              " px-2.5 py-1 uppercase",
              !isLastPage ? "text-[#3257ec]" : "text-[#808E9C]"
            )}
            disabled={isLastPage}
            aria-label="next"
          >
            {t("Next")}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPopup;
