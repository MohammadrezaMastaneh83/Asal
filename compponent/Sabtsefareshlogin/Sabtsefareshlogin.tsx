import React from "react";

export default function Sabtsefareshlogin() {
  return (
    <>
      <div className="w-[23.25rem] h-[26.37rem] bg-[#FFFFFF] shadow-md rounded-[20px]">
        <h3 className="text-[1.5rem] font-xregular text-[#FFA51F] p-5 flex justify-end">
          اطلاعات پرداخت
        </h3>
        <div className="-mt-5">
          <div className="flex justify-between  p-5">
            <h3 className="text-[1.25rem] font-xregular">قیمت کالا ها</h3>

            <span className="text-[1.12rem] font-xregular">315,000</span>
          </div>
          <div className="flex justify-between  p-5">
            <h3 className="text-[1.25rem] font-xregular">تخفیف</h3>

            <span className="text-[1.12rem] font-xregular text-[#FFA51F]">
              20,000
            </span>
          </div>
          <div className="flex justify-between  p-5">
            <h3 className="text-[1.25rem] font-xregular">هزینه ارسال </h3>

            <span className="text-[1.12rem] font-xregular ">15,000</span>
          </div>
          <div className="flex justify-between  p-5">
            <h3 className="text-[1.25rem] font-xregular">قابل پرداخت</h3>

            <span className="text-[1.75rem] font-xbold ">310,000</span>
          </div>
        </div>
        <div className=" flex justify-center -mt-3 p-2">
          <button className="btn w-[19.62rem] h-[4.37rem] bg-[#FFA51F] rounded-[15px] text-[1.25rem] font-xbold ">
            ورود با عضویت
          </button>
        </div>
      </div>
    </>
  );
}
