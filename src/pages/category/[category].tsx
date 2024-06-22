import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/router";
import { CategoryType, ProductType } from "@/components/types";
import { getAllProductsMethod } from "@/utils/api/apiMethods";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Button = dynamic(() => import("@/components/Button"));
const CategorySidebar = dynamic(
  () => import("@/components/common/CategorySidebarMenu")
);
const DefaultLoading = dynamic(() => import("@/components/common/Loading"));
const Layout = dynamic(() => import("@/components/Layout"));

const ProductByCategoryPage = ({}) => {
  const router = useRouter();
  const controls = useAnimation();
  const rootRef = useRef(null);
  const blueBoxRef = useRef(null);
  const ref = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState("845px");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [loading, setLoading] = useState(false);
  const size = useWindowSize();

  const isInView = useInView(ref, { amount: "all" });
  const isBlueBoxInView = useInView(blueBoxRef, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }

    if (isBlueBoxInView) {
      controls.start("visible");
    }
  }, [isInView, isBlueBoxInView, controls]);

  useEffect(() => {
    // compute the height of the footer
    if (
      footerRef.current &&
      size.height &&
      size.height > footerRef.current.clientHeight
    ) {
      setFooterHeight(`${footerRef.current.clientHeight}px`);
    }

    // check if footer height is greater than screen height then remove the fixed class from footer component
    if (
      footerRef.current &&
      size.height &&
      size.height < footerRef.current.clientHeight
    ) {
      footerRef.current?.classList.remove("fixed");
      setFooterHeight("0px");
    } else {
      footerRef.current?.classList.add("fixed");
    }
  }, [size, footerRef.current]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (!router.query.category) return;

    setLoading(true);
    const data = await getAllProductsMethod();
    setLoading(false);
    if (data?.length) {
      const res = data.reduce((acc: ProductType[], item: any) => {
        if (
          router.query.category &&
          item.categories[0].id === +router.query.category
        ) {
          acc.push(item);
        }
        return acc;
      }, []);
      if (!res.length) return;
      setProducts(res);
      console.log("res: ", res);
      setCategory(res[0].categories[0]);
    }
  };

  const Card = ({ product }: { product: ProductType }) => {
    console.log("product: ", product);
    return (
      <div className="relative group z-40">
        <div className="group cursor-pointer absolute z-40 top-5 left-3 text-xl group-hover:bg-white group-hover:px-1.5 font-semibold group-hover:text-primary group-hover:scale-105 duration-300 lg:text-[16px] text-white">
          45 Tee
        </div>
        <div className="absolute z-40 bottom-5 left-3 text-xl lg:text-[26px] text-white">
          <div className="group-hover:bg-gray-400 transition-all duration-300 p-1 whitespace-nowrap">
            {product.name}
          </div>
          <Button
            className="mx-auto text-white z-40 font-light !text-[14px] lg:!text-[10px] xl:!text-[12px]"
            name="Specifications"
          >
            Specifications
          </Button>
        </div>
        <div className="relative w-full h-64 group-hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image
            onClick={() => router.push(product?.permalink)}
            src={product.images[0].src}
            layout="fill"
            objectFit="contain"
            alt={product.name}
          />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div id="scroll-container" ref={rootRef}>
        <DefaultLoading loading={loading} />
        <main
          className={`leading-none overflow-x-hidden scroll-smooth`}
          style={{ marginBottom: footerHeight }}
        >
          <Navbar bgHeader="!bg-primary" />
          <div className="bg-white py-[6rem] lg:py-[10rem] min-h-screen px-5 md:px-[4rem] lg:px-[8rem]">
            <div className="flex gap-10">
              <div className="text-black w-[300px] hidden xl:block ">
                <CategorySidebar />
                <div className="bg-grey1">
                  <div className="p-5 mt-3 bg-background group duration-300 hover:scale-[0.90]">
                    <div className="text-primary font-semibold">Features</div>
                    <div className="flex justify-between mt-4 ml-3">
                      <div className="text-gray-500 font-light text-sm ">
                        HDPE Water Pipes
                      </div>
                      <div className="text-gray-500 font-light text-sm ">
                        122
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 ml-3">
                      <div className="text-gray-500 font-light text-sm ">
                        HDPE Water Fittings{" "}
                      </div>
                      <div className="text-gray-500 font-light text-sm ">
                        12
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 ml-3">
                      <div className="text-gray-500 font-light text-sm ">
                        PE Elec Fittings
                      </div>
                      <div className="text-gray-500 font-light text-sm ">
                        52
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-black w-full">
                <div
                  className={`text-[30px] md:text-[70px] flex items-end gap-3 mb-2 text-[#545454] `}
                >
                  {category?.name + " "}
                  <span
                    className={`text-[#545454] text-[15px] md:text-[30px] leading-5 md:leading-10`}
                  >
                    Fittings
                  </span>
                  <span
                    className={`text-[#FF6626] text-[15px] md:text-[30px] leading-5 md:leading-10`}
                  >
                    Electricity
                  </span>
                </div>
                <div className="text-[#545454] text-sm text-left my-5 font-medium">
                  {category?.description || "Lorem ipsum is dummy text"}
                </div>
                <div className="flex justify-between">
                  <div className="text-xs flex items-center gap-3 text-gray-500 font-light pb-2 mb-3">
                    Sort by position{" "}
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="currentcolor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.175343L0.376682 0L6 5.93973L11.6233 0L12 0.175343L6.21525 8H5.78475L0 0.175343Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-xs text-gray-500 font-light pb-2 mb-3 border-b">
                      items 1-12 of {products.length}
                    </div>
                    <div className="text-xs flex items-center gap-2 text-gray-500 font-light pb-2 mb-3">
                      Showing 12 per page{" "}
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.175343L0.376682 0L6 5.93973L11.6233 0L12 0.175343L6.21525 8H5.78475L0 0.175343Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  {products.map((product: ProductType) => {
                    return <Card key={String(product.id)} product={product} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <Footer ref={footerRef} />
        </main>
      </div>
    </Layout>
  );
};

export default ProductByCategoryPage;
