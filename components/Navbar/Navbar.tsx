"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { khusaOpt, Links as Path } from "@/data/Links";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = (state: string) => {
    if (state === "open") {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  return (
    <section className="fixed z-50 bg-white">
      <div className="flex justify-between items-center h-[80px] px-16">
        <div>
          <CiSearch className="text-[25px] cursor-pointer" />
        </div>
        <div>
          <h1 className="font-fira text-[25px] font-[600]">Khusaas</h1>
        </div>
        <div className="flex justify-center items-center gap-5 text-[25px]">
          <IoIosPerson className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center items-center h-full flex-wrap px-20">
        {Path &&
          Path.length > 0 &&
          Path.map((p, index) => {
            return (
              <div key={index} className="mx-20 my-2 relative">
                {p.name === "Khusaas" ? (
                  <div className="relative" onMouseLeave={() => toggleDropdown("close")}>
                    <button
                      className="flex items-center gap-3 pb-1 relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[3px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:bg-black hover:after:w-full"
                      onMouseEnter={() => toggleDropdown("open")}
                    >
                      {p.name} <RiArrowDropDownLine className="text-[25px]" />
                    </button>
                    {dropDown && (
                      <ul className="absolute left-0 top-[21px] mt-2 bg-white shadow-lg rounded-md py-2 z-20 w-[200px]">
                        {khusaOpt &&
                          khusaOpt.map((k, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              <Link href={`${k.link}`} className="font-fira text-[14px]">{k.name}</Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={p.link}
                    className="pb-1 relative after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[3px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:bg-black hover:after:w-full"
                  >
                    {p.name}
                  </Link>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Navbar;
