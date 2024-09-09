import { SalesProducts } from "@/data/Links";
import React from "react";
import Card from "../Card/Card";
import Link from "next/link";

const Sales = () => {
  return (
    <section>
      <div className="flex justify-center items-center relative">
        <h1 className="text-[30px] font-fira font-[600] relative after:absolute after:w-0 after:h-[3px] after:bg-[#333] after:left-0 pb-2 after:bottom-0 after:transition-all after:duration-300 after:ease-in-out after:hover:w-full my-5">
          Sales
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {SalesProducts &&
          SalesProducts.map((product, index) => (
            <div className="relative group" key={index}>
              <Card
                crossPrice={product.crossPrice}
                image={product.image}
                originalPrice={product.originalPrice}
                save={product.save}
                title={product.title}
              />
              <h1 className="absolute top-[20px] right-0 bg-[#333] font-fira text-[14px] z-10 overflow-hidden text-white py-2 px-3">
                Sales
              </h1>
              <Link
                href={`${product.link}/${product._id}`}
                className="absolute bottom-28 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white bg-[#000] px-4 py-2 font-fira text-[14px] h-[40px] w-[200px] text-center"
              >
                Quick View
              </Link>
            </div>
          ))}
      </div>
     <div className="flex justify-center my-5">
     <Link href={"/khussas/all"} className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-500">
        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
        <span className="relative text-[12px]">View All</span>
      </Link>
     </div>
    </section>
  );
};

export default Sales;
