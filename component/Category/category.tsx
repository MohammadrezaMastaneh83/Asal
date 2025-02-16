

export default function Category() {
    return (
        <div className="w-screen flex justify-center items-center  h-[484px]">
            <div className="w-[85%] flex flex-col relative  ">
                <div className="">

                    <p className="font-semibold text-2xl absolute top-[-13px] z-20 ">دسته بندی محصولات</p>
                    <div className="w-[234px] h-[21px] bg-[#FFD9A1] clip-path-left mb-[30px]  ">
                    </div>
                </div>
                <div className="w-[100%] flex justify-between">
                    <div>
                        <img src="/natrul_asal.png" alt="" />
                        <div className="w-[392px] h-[80px] flex items-center justify-between">
                            <div className="w-[116px] h-[21px] clip-path-left bg-[#FFD9A1]"></div>
                            <p className="text-[#5C3108] fontfamily font-semibold text-[20px] ">عسل های طبیعی</p>
                            <div className="w-[116px] h-[21px] clip-path-left bg-[#FFD9A1] rotate-180"></div>
                        </div>
                    </div>
                    <div>
                        <img src="/faravardeh.png" alt="" />
                        <div className="w-[392px] h-[80px] flex items-center justify-between">
                            <div className="w-[116px] h-[21px] clip-path-left bg-[#FFD9A1]"></div>
                            <p className="text-[#5C3108] fontfamily font-semibold text-[20px] ">سایز فراورده ها</p>
                            <div className="w-[116px] h-[21px] clip-path-left bg-[#FFD9A1] rotate-180"></div>
                        </div>

                    </div>
                    <div>
                        <img src="/welcompack.png" alt="" />
                        <div className="w-[392px] h-[80px] flex items-center justify-between">
                            <div className="w-[103px] h-[21px] clip-path-left bg-[#FFD9A1]"></div>
                            <p className="text-[#5C3108] fontfamily font-semibold text-[20px] ">پک هدایای سازمانی</p>
                            <div className="w-[103px] h-[21px] clip-path-left bg-[#FFD9A1] rotate-180"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}