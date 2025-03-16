'use client'
import Image from "next/image";
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
export default function Otp() {
    const [otp, setOtp] = useState('');
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
                <p className="font-bold text-[#2C2C2C] leading-[30px] text-[20px] mt-[40px]">ورود</p>
                <div className="gap-[40px] flex flex-col">
                    <div className="font-normal text-[16px] text-[#2C2C2C] mt-[18px] flex">کد ارسال شده به شماره <p className="text-[#FFA51F] text-[18px] font-medium leading-[30px]">09371857111</p> را وارد کنید</div>
                    
                    <OtpInput 
                    
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderSeparator={<span className="w-[24px]"></span>}
                        renderInput={(props) => <input {...props}  className="w-[70px] px-[35px] outline-[#FFA51F]  border-[2px] border-[#8A8A8A] h-[70px] rounded-[15px]"/>}
                    />
                    <div className="flex">کدی دریافت نکردید؟<p className="text-[#FFA51F] text-[18px] font-medium leading-[30px]">دریافت مجدد</p></div>
                    

                    <button className="bg-[#FFA51F] w-[447px] h-[70px] rounded-[15px] text-[#2C2C2C] font-semibold text-[20px]  " >ورود به حساب کاربری من</button>
                    <div>
                        <div className="text-[#2C2C2C] text-[18px] font-light leading-[30px] flex w-[447px] justify-center ">
                            ورود و عضویت شما به منزله پذیرفتن
                            <p className="text-[#FFA51F] text-[18px] font-medium leading-[30px]">قوانین و مقررات</p>

                        </div>
                        <p className=" flex w-[447px] justify-center text-[#2C2C2C] text-[18px] font-light leading-[30px]">اسنپ‌ شاپ می‌باشد.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}