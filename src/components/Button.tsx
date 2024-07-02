import RightArrowIcon from "@/icon/RightArrowIcon";
import { ReactNode } from "react";

export default function Button({
  children,
  className = "",
  name,
}: {
  children: ReactNode;
  className?: any;
  name?: string;
}) {
  return (
    <button
      aria-label={name}
      className={`flex leading-5 items-center gap-3 text-base xl:text-lg ${className} group hover:text-secondary group-hover:text-secondary transition-all duration-300 ease-in-out`}
    >
      <span>{children}</span>
      <RightArrowIcon
        className={`group-hover:translate-x-1.5 ${className} group-hover:text-secondary duration-300`}
      />
    </button>
  );
}
