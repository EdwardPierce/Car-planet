"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Hero from "./Hero";
import Image from "next/image";

export const SwiperImage = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Hero />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative mt-80">
          <div className="relative w-full h-screen">
            <Image
              src="/masserati.jpg"
              alt="hero-bg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative mt-80">
          <div className="relative w-full h-screen">
            <Image
              src="/porsche.webp"
              alt="hero-bg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
