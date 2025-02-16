'use client'
import Image from "next/image";
import { useState } from "react";

export default function LoginSinup() {
  const [chang , setChang] = useState(false)

  return (
    <div className="w-[558px] h-[1040px] bg-[#FCFCFC]">
      <div className="w-[474px] h-[94px] ">
        <div className="w-[474px] flex justify-between">
          <Image src="/headerLogo.svg" alt="" width={118} height={63} />
          <button>
            <Image src="/clossvg.svg" alt="" width={40} height={40} />
          </button>
        </div>
        <hr className="w-[474px] h-[1px] bg-[#8A8A8A] mt-[32px]" />
        <p className="font-bold text-[#2C2C2C] leading-[30px] text-[20px] mt-[40px]">ورود یا عضویت</p>
        <div className="gap-[40px] flex flex-col">
        <p className="font-normal text-[16px] text-[#2C2C2C] mt-[18px]">لطفا شماره موبایل خود را وارد نمایید</p>

          <input type="text" placeholder="مثلا  : 09125463052" className="w-[447px] h-[70px] rounded-[15px] border-[#FFA51F] border-[2px] outline-none pr-[16px] font-semibold text-[20px]"/>
          <button className="bg-[#FFA51F] w-[447px] h-[70px] rounded-[15px] text-[#2C2C2C] font-semibold text-[20px]  " onClick={()=> setChang}>تایید و ادامه</button>
          <div>
          <div className="text-[#2C2C2C] text-[18px] font-light leading-[30px] flex w-[447px] justify-center ">
          ورود و عضویت شما به منزله پذیرفتن
            <p className="text-[#FFA51F] text-[18px] font-medium leading-[30px]">قوانین و مقررات</p>
            
            </div>
            <p  className=" flex w-[447px] justify-center text-[#2C2C2C] text-[18px] font-light leading-[30px]">اسنپ‌ شاپ می‌باشد.</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}