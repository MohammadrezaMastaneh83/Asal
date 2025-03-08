"use client";
import React, { useState } from "react"; // Import useState
import Image from "next/image";
import pichoneybig from "@/svg/pichoneynig.svg";
import hony1 from "@/svg/hony1.png";
import vectorfavorite from "@/svg/Vectorfavorite.svg";
import iconshare from "@/svg/Iconshare.svg";
import arow from "@/svg/Vectorarow.svg";
import Loremcard from "@/compponent/Loremcard/Loremcard";
import Didgah from "@/compponent/Didgah/Didgah";
import vectorzemanat from "@/svg/vectorzemanat.svg";
import Azmayesh from "@/compponent/Azmayesh/Azmayesh";

export default function Card() {
  const [activeTab, setActiveTab] = useState("about");
  const [showAzmayesh, setShowAzmayesh] = useState(false);
  const [showAboutProduct, setShowAboutProduct] = useState(false);

  const handleAzmayeshClick = () => {
    setShowAzmayesh(true);
    setShowAboutProduct(false);
    setActiveTab("azmayesh");
  };

  const handleAboutProductClick = () => {
    setShowAzmayesh(false);
    setShowAboutProduct(true);
    setActiveTab("about");
  };

  return (
    <>
      <div className="flex w-full justify-between gap-4 mt-20">
        <div className="w-fit h-fit rounded-[20px] bg-[#ffffff] shadow-lg p-5 ">
          <div className="flex justify-between">
            <div className="flex flex-col items-end gap-2 text-[1.25rem] font-medium">
              <div className="flex items-center gap-1">
                <p className="text-[#2c2c2c] text-[1.25rem] font-xregular">
                  علاقه‌مندی‌ها
                </p>
                <Image
                  className="w-[1.1rem] h-[1.1rem]"
                  src={vectorfavorite}
                  alt="favorite"
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[#2c2c2c] text-[1.25rem] font-xregular">
                  اشتراک گذاری
                </p>
                <Image
                  className="w-[1.1rem] h-[1.1rem]"
                  src={iconshare}
                  alt="share"
                />
              </div>
            </div>
            <h3 className="text-[1.75rem] text-[#2c2c2c] font-bold">
              عسل طبیعی گون
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-[4.5rem] h-[2.7rem] bg-[#FFA51F] rounded-[20px] flex items-center justify-center">
              <h3 className="text-[1.5rem] font-xblack text-[#2c2c2c]">29%</h3>
            </div>
            <p className="text-[#8F8F8F] text-[1.5rem] line-through font-xthin">
              315,000
            </p>
          </div>
          <div className="flex justify-between mt-10 p-5">
            <div>
              <h3 className="text-[2rem] text-[#FFA51F] font-xbold">
                235,000تومان
              </h3>
            </div>
            <p className="text-[1.25rem] font-xregular">
              وزن :{" "}
              <span className="border p-3 text-[1.5rem] font-xregular rounded-[10px] w-[7.5rem] h-[2.5rem]">
                500 گرمی
              </span>
              <Image
                className="w-[10px] h-[13px] -mt-5 gap-2"
                src={arow}
                alt="arow"
              />
            </p>
          </div>
          <div className="p-5">
            <button className="btn w-[32.1rem] h-[4.3rem] rounded-[15px] bg-[#FFA51F] text-[1.25rem] text-[#2c2c2c] font-xbold">
              افزودن به سبد خرید
            </button>
            <div className="flex flex-row-reverse mt-5">
              <Image
                className="w-[32px] h-[32px]"
                src={vectorzemanat}
                alt="favorite"
              />
              <p className="text-[1.25rem] font-xregular">
                گارانتی اصالت و سلامت فیزیکی کالا
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center ml-10">
          <Image className="w-fit h-fit" src={pichoneybig} alt="honey" />
        </div>
        <div className="w-1/3 flex flex-col items-center gap-3 mr-3">
          <div className="w-[8.12rem] h-[7.87rem] ">
            <Image
              className="w-[8.12rem] h-[7.87rem]"
              src={hony1}
              alt="honey"
            />
          </div>
          <div className="w-[8.12rem] h-[7.87rem]">
            <Image
              className="w-[8.12rem] h-[7.87rem]"
              src={hony1}
              alt="honey"
            />
          </div>
          <div className="w-[130px] h-[126px]">
            <Image
              className="w-[8.12rem] h-[7.87rem]"
              src={hony1}
              alt="honey"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end p-5">
        <div className="flex justify-end p-10 gap-10 mt-5">
          <button
            onClick={handleAzmayeshClick}
            className={`text-[1.1rem] font-xregular relative ${
              activeTab === "azmayesh" ? "text-orange-500 font-bold" : ""
            }`}
          >
            برگه آزمایشگاه
            {activeTab === "azmayesh" && (
              <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-orange-500"></span>
            )}
          </button>

          <button
            onClick={handleAboutProductClick}
            className={`text-[1.1rem] font-xregular relative ${
              activeTab === "about" ? "text-orange-500 font-bold" : ""
            }`}
          >
            درباره محصولات
            {activeTab === "about" && (
              <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-orange-500"></span>
            )}
          </button>
        </div>
      </div>
      {showAzmayesh ? (
        <Azmayesh />
      ) : showAboutProduct ? (
        <Loremcard />
      ) : (
        <Loremcard />
      )}{" "}
      <Didgah />
    </>
  );
}
