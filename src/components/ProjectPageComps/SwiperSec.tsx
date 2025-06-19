"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProjectType } from "@/lib/types";
import Image from "next/image";

import HeadingComps from "../HeadingComps";
import Underline from "../Underline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperSec = ({ info }: { info: ProjectType }) => {
  return (
    <div className="space-y-6 lg:space-y-10">
      <div className="flex items-center gap-4 text-lg font-bold lg:text-xl">
        {info.pCategory} <Underline className="w-16" />
      </div>

      <div className="space-y-4">
        <HeadingComps className="text-2xl lg:text-4xl">
          {info.pTitle}
        </HeadingComps>

        <div className="font-noto-sans">{info.pDescription}</div>
      </div>

      <Swiper
        className="mySwiper"
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}>
        {info.pImage.map((image) => {
          return (
            <SwiperSlide key={image.pImgId}>
              <Image
                src={image.pImgSrc}
                alt={image.pImgId}
                width={500}
                height={540}
                className="aspect-auto rounded-lg"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperSec;
