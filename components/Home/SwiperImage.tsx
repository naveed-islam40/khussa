"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { heroImages } from "@/data/Links";
import Link from "next/link";

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="hero-section mb-4 pt-[190px]">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        centeredSlides={true}
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index}>
            <Link href={"/khussa/collections"} className="relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] object-cover"
              />
              <Link
                href={"/khussa/collections"}
                className="group/button absolute inset-0 flex items-end justify-center mb-6"
              >
                <div className="relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-[#000] backdrop-blur-lg px-6 py-2 text-base text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#776D5A] border border-white/20 font-fira">
                  <span className="text-[15px]">Buy Now</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </div>
              </Link>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
