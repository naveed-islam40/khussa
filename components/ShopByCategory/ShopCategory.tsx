import React from "react";
import { ShopCategoryData } from "../../data/Links";
import Image from "next/image";
import Link from "next/link";

const ShopCategory = () => {
  return (
    <section >
      <div className="px-6 py-10">
      <div className="flex justify-center items-center ">
        <h1 className="text-[30px] font-fira font-[600] relative after:absolute after:w-0 after:h-[3px] after:bg-[#333] after:left-0 pb-2 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out after:hover:w-full">
          Shop By Category
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap my-5">
        {ShopCategoryData &&
          ShopCategoryData.map((category) => {
            return (
              <div className="relative flex justify-center items-center shadow-sm overflow-hidden">
                <Image
                  src={category.image}
                  alt="Category"
                  width={200}
                  height={200}
                  className="h-[400px] w-[400px] bg-cover object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <Link
                  href={category.path}
                  className="text-[14px] font-fira font-[600] mt-4 absolute bg-white border py-3 px-5 "
                >
                  {category.name}
                </Link>
              </div>
            );
          })}
      </div>
      </div>
      <div className="w-full border-b my-5"></div>
    </section>
  );
};

export default ShopCategory;
