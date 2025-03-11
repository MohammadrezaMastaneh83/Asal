import React from "react";
import Image from "next/image";


export default function Azmayesh() {
  return (
    <>
      <div className="w-[1264px] h-[448px] bg-[#FFFFFF] shadow-md rounded-[20px] flex items-center p-10 -mt-10">
        <div className="flex justify-center gap-5   ">
          <Image
            className="w-[280px] h-[370px]"
            src="svgs/azmayeshpic.svg"
            alt="honey"
            width={280}
            height={370}
          />
          <Image
            className="w-[280px] h-[370px]"
            src="svgs/azmayeshpic.svg"
            alt="honey"
            width={280}
            height={370}
          />
          <Image
            className="w-[280px] h-[370px]"
            src="svgs/azmayeshpic.svg"
            alt="honey"
            width={280}
            height={370}
          />
          <Image
            className="w-[280px] h-[370px]"
            src="svgs/azmayeshpic.svg"
            alt="honey"
            width={280}
            height={370}
          />
        </div>
      </div>
    </>
  );
}
