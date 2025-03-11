"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-screen">
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className='w-screen h-[484px] bg-[url("/slide-pic2.png")] bg-no-repeat bg-cover'>
            <div className="w-[635px] h-[500px] flex flex-col items-end justify-center">
              <p className="fontjavan text-8xl font-normal text-[#FFFFFF] leading-[120px] w-[410px] ">
                تجربه
              </p>
              <p className="fontjavan text-8xl font-normal text-[#FFFFFF]">
                عسل طبیعی
              </p>
              <div className="w-[417px]  h-[163px] flex items-center">
                <button className="w-[212px] h-[68px] bg-[#FFA51F] rounded-[20px] fontfamily text-[#2C2C2C] text-base font-semibold ">
                  خرید{" "}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-screen h-[484px] bg-[url("/slider-pic1.png")] bg-no-repeat bg-cover '></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
