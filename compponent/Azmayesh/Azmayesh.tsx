import React from "react";
import Image from "next/image";
import azmayeshpic from "@/svg/azmayeshpic.svg";

export default function Azmayesh() {
  return (
    <>
      <div className="w-[1264px] h-[448px] bg-[#FFFFFF] shadow-md rounded-[20px] flex items-center p-10 -mt-10">
        <div className="flex justify-center gap-5   ">
          <Image
            className="w-[280px] h-[370px]"
            src={azmayeshpic}
            alt="honey"
          />
          <Image
            className="w-[280px] h-[370px]"
            src={azmayeshpic}
            alt="honey"
          />
          <Image
            className="w-[280px] h-[370px]"
            src={azmayeshpic}
            alt="honey"
          />
          <Image
            className="w-[280px] h-[370px]"
            src={azmayeshpic}
            alt="honey"
          />
        </div>
      </div>
    </>
  );
}
