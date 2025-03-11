"use client";
import React, { useState } from "react"; // Import useState
import Image from "next/image";
import Loremcard from "@/compponent/Loremcard/Loremcard";
import Didgah from "@/compponent/Didgah/Didgah";
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
      <div className="flex w-full justify-between flex-row-reverse gap-4 mt-20">
        <div className="w-fit h-fit rounded-[20px] bg-[#ffffff] shadow-lg p-5 ">
          <div className="flex justify-between flex-row-reverse">
            <div className="flex flex-col items-end gap-2 text-[1.25rem] font-medium">
              <div className="flex items-center gap-1">
                <p className="text-[#2c2c2c] text-[1.25rem] font-xregular">
                  علاقه‌مندی‌ها
                </p>
                <Image
                  className="w-[1.1rem] h-[1.1rem]"
                  src="svgs/Vectorfavorite.svg"
                  alt="favorite"
                  width={17}
                  height={17}
                />
              </div>
              <div className="flex items-center gap-1 flex-">
                <p className="text-[#2c2c2c] text-[1.25rem] font-xregular">
                  اشتراک گذاری
                </p>
                <Image
                  className="w-[1.1rem] h-[1.1rem]"
                  src="/svgs/Iconshare.svg"
                  alt="share"
                  width={17}
                  height={17}
                />
              </div>
            </div>
            <h3 className="text-[1.75rem] text-[#2c2c2c] font-bold">
              عسل طبیعی گون
            </h3>
          </div>
          <div className="flex items-center flex-row-reverse space-x-2">
            <div className="w-[4.5rem] h-[2.7rem] bg-[#FFA51F] rounded-[20px] flex items-center justify-center">
              <h3 className="text-[1.5rem] font-xblack text-[#2c2c2c]">29%</h3>
            </div>
            <p className="text-[#8F8F8F] text-[1.5rem] line-through font-xthin">
              315,000
            </p>
          </div>
          <div className="flex justify-between flex-row-reverse mt-10 p-5">
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
                src="/svgs/Vectorarow.svg"
                alt="arow"
                width={10}
                height={13}
              />
            </p>
          </div>
          <div className="p-5">
            <button className="btn w-[32.1rem] h-[4.3rem] rounded-[15px] bg-[#FFA51F] text-[1.25rem] text-[#2c2c2c] font-xbold">
              افزودن به سبد خرید
            </button>
            <div className="flex  mt-5">
              <Image
                className="w-[32px] h-[32px]"
                src="/svgs/vectorzemanat.svg"
                alt="favorite"
                width={32}
                height={32}
              />
              <p className="text-[1.25rem] font-xregular">
                گارانتی اصالت و سلامت فیزیکی کالا
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center ml-10">
          <Image
            className="w-[26.75rem] h-[29.62rem]"
            src="/svgs/pichoneynig.svg"
            alt="honey"
            width={428}
            height={474}
          />
        </div>
        <div className="w-1/3 flex flex-col items-center gap-3 mr-3 ">
          <div className="w-[8.12rem] h-[7.87rem] ">
            <Image
              className="w-[8.12rem] h-[7.87rem]"
              src="/svgs/hony1.png"
              alt="honey"
              width={129}
              height={124}
            />
          </div>
          <div className="w-[8.12rem] h-[7.87rem]">
            <Image
              className="w-[8.12rem] h-[7.87rem]"
              src="/svgs/hony1.png"
              alt="honey"
              width={129}
              height={124}
            />
          </div>
          <div className="w-[130px] h-[126px]">
            <Image
              className="w-[8.12rem] h-[7.87rem]"
              src="/svgs/hony1.png"
              alt="honey"
              width={129}
              height={124}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start p-5 w-full ">
        <div className="flex justify-end p-10 gap-10 mt-5 flex-row-reverse">
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
