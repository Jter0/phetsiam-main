import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import { CategoryType, ReduxStateType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { _getAllCategories } from "@/store/middleware";

const CategorySidebarMenu = ({}) => {
  const [data, setData] = useState<CategoryType[]>([]);
  const dispatch = useDispatch();
  const categories = useSelector((s: ReduxStateType) => s.categories);

  useEffect(() => {
    dispatch(_getAllCategories() as any);
  }, []);

  useEffect(() => {
    setData(categories);
  }, [categories]);

  return (
    <div className="bg-grey1">
      <div className="p-5 bg-background group duration-300 hover:scale-[0.90]">
        <div className="text-primary font-semibold mb-1">Categories</div>
        {data.map((category: CategoryType) => (
          <div
            className="flex justify-between mt-3 ml-3 "
            key={String(category.id)}
          >
            <Link
              href={"/category/" + category.id}
              className="text-gray-500 font-light text-sm hover:cursor-pointer hover:underline"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CategorySidebarMenu);
