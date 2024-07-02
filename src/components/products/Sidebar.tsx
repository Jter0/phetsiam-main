import React, { memo, useState } from "react";
import Button from "../Button";
import Image from "next/image";
import CategorySidebarMenu from "../common/CategorySidebarMenu";

const Sidebar = () => {
  return (
    <div className="text-black w-[300px] hidden xl:block ">
      <div className="text-base text-gray-500 font-light px-5 pb-4">
        Products
      </div>
      <CategorySidebarMenu />
      <div className="bg-grey1">
        <div className="p-5 py-7 mt-3 z-40 bg-background group duration-300 hover:scale-[0.90]">
          <div className="text-center text-xl text-[#545454] font-semibold leading-8">
            PB Fitting
          </div>
          <div className="text-[#545454] font-light text-sm text-center">
            Innovation to supply houses from the Mains
          </div>
          <Image
            src="/img/product_side.webp"
            className="my-3 "
            alt="pb-fitting-img"
            width={100}
            height={100}
            loading="lazy"
          ></Image>
          <Button
            name="discover more"
            className={"mx-auto !text-sm text-primary"}
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
