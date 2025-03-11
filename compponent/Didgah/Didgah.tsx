import React from "react";
import Image from "next/image";
import Nazarat from "../Nazarat/Nazarat";

export default function Didgah() {
  return (
    <>
      <div className="flex justify-start w-full mt-10 pr-20">
        <h3 className="text-[1.12rem] font-xregular text-orange-500 font-bold relative ">
          نظرات کاربران
          <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-orange-500"></span>
        </h3>
      </div>
      <div className="flex  w-full    ">
        <div className="flex flex-col justify-between  w-1/2 p-10 mr-[3.43rem]  ">
          <div className=" bg-[#FFFFFF] shadow-md  w-[27rem] h-[16.87rem]  rounded-[20px] ">
            <div className="bg-[#FEF1DD] rounded-[20px] rounded-bl-none  rounded-br-none w-[27rem] h-[9rem]  p-5">
              <div className="flex justify-center flex-col items-center ">
                <h3 className="text-[2rem] font-xbold  "> 88.5% کاربران</h3>
                <div className="flex gap-5 mt-5">
                  <Image src="/svgs/Vectorface.svg" alt="face" width={26} height={26}  />
                  <p className="text-[1.25rem] font-xmedium  ">
                    این محصول را پیشنهاد دادند
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center mt-3">
              <button className=" btn rounded-[15px] text-[#FFA51F] border border-[#FFA51F] font-xmedium text-[1.25rem] w-[16.25rem] h-[4.37rem] ">
                ارسال دیدگاه
              </button>
            </div>
            <p className=" flex justify-center mt-2">
              با ثبت نظر به خرید دیگران کمک کنید
            </p>
          </div>
        </div>
        <div className=" w-1/2 mt-10 flex m-5 ml-36">
          <Nazarat />
        </div>
      </div>
    </>
  );
}
