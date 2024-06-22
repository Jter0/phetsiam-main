import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import { useHits, useRefinementList } from "react-instantsearch";

const Sidebar = () => {
  const { items, refine } = useRefinementList({
    attribute: "PageSection",
  });

  const { results } = useHits();

  const { t } = useTranslation("common");

  const SideLink = ({
    name,
    count,
  }: {
    name: string;
    count?: string | number;
  }) => {
    return (
      <div className="flex justify-between text-sm group cursor-pointer">
        <div
          className={clsx(
            "text-gray-500 font-medium my-1 group-hover:text-secondary transition-colors duration-300",
            !!results
              ?.getRefinements()
              .find((refinement) => refinement.name === name) &&
              "font-bold text-secondary"
          )}
          onClick={() => refine(name)}
        >
          {t(name)}
        </div>
        {count && (
          <div
            className={clsx(
              "text-[#A5B4C4] font-medium transition-colors duration-300 group-hover:text-secondary",
              !!results
                ?.getRefinements()
                .find((refinement) => refinement.name === name) &&
                "text-secondary font-bold"
            )}
          >
            {count}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="text-black w-[300px] hidden lg:block ">
      <div className="text-xs uppercase text-[#000000b3] font-semibold pb-2 border-b mb-5">
        {t("Filters")}
      </div>
      {items.map((item) => (
        <div key={item.value}>
          <SideLink name={item.label} count={item.count} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
