import Sabtsefaresh from "@/compponent/Sabtsefaresh/Sabtsefaresh";
import React from "react";
import Image from "next/image";

export default function Tahvilsefaresh() {
  return (
    <>
      <div className="flex  w-full gap-40 mt-10 ">
        <div className="flex gap-10 flex-col    ">
          <div className="flex justify-between ">
            <h3 className="text-[1.5rem] font-xbold text-[#FFA51F]">
              آدرس تحویل سفارش
            </h3>
            <p className="text-[1rem] font-xregular text-[#FFA51F]">
              ثبت آدرس جدید
            </p>
          </div>
          <div className="w-[50.06rem] h-[8.06rem] shadow-md bg-[#FFF0D9] rounded-[20px]  border border-[#FFA51F]">
            <div className=" flex justify-end p-7 gap-5 flex-row-reverse ">
              <p className="text-[1.25rem] font-xregular">ارسال به </p>
              <Image
                src="/svgs/locationvector.svg"
                alt="location"
                width={25}
                height={28}
              />
            </div>

            <div className="flex justify-end -mt-2 mr-14 flex-row-reverse">
              <p className="text-[#8A8A8A] text-[18px] font-xregular">
                ميدان غياثي خيابان -ال اقا خيابان حسين رحمتي -كوچه محمد جعفر
                يعقوبي
              </p>
            </div>
            <div className="-mt-14 ml-10 text-left ">
              <button className="btn text-[1.12] font-xregular">
                تغییر یا ویرایش
              </button>
            </div>
          </div>
          <div className="w-[50.06rem] h-[8.06rem] shadow-md bg-[#FFFFFF] rounded-[20px]">
            <div className=" flex justify-end p-7 gap-5  flex-row-reverse ">
              <p className="text-[1.25rem] font-xregular ">ارسال به </p>
              <Image
                src="/svgs/locationvector.svg"
                alt="location"
                width={25}
                height={28}
              />
            </div>
            <div className="flex justify-end -mt-2 mr-14 flex-row-reverse">
              <p className="text-[#8A8A8A] text-[18px] font-xregular">
                ميدان غياثي خيابان -ال اقا خيابان حسين رحمتي -كوچه محمد جعفر
                يعقوبي
              </p>
            </div>
            <div className="-mt-14 ml-10 text-left">
              <button className="btn text-[1.12] font-xregular">
                تغییر یا ویرایش
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/2 ">
          <Sabtsefaresh />
        </div>
      </div>
    </>
  );
}
