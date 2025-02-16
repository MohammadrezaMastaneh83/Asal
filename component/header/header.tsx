export default function Header() {
    return (
        <div className="w-screen  flex flex-col items-center ">
            <div className="w-[86%] h-[72px] flex justify-between items-center">
                <img src="/headerLogo.svg" alt="" />
                <div className="w-[357px] h-[45px] flex gap-[16px]">
                    <div className="w-[245px] h-[40px]  border-[#FFA51F] border-[1px] rounded-[10px] flex  gap-[10px]  bg-[#ffffff] px-[15px] ">
                        <img src="/search_svg.svg" alt="" className="w-[20px] " />
                        <input type="text" placeholder="جستجو کنید" className="w-[200px] h-[38px] text-[#FFA51F] rounded-[10px]  font-[Light] bg-[#ffffff] outline-none placeholder-[#FFA51F] " />
                    </div>
                    <button className="w-[40px] h-[40px] bg-[#FFA51F] rounded-[10px] flex justify-center items-center">
                        <img src="/user_header.svg" alt="" />
                    </button>
                    <button className="w-[40px] h-[40px] bg-[#FFA51F] rounded-[10px] flex justify-center items-center">
                        <img src="/shopping_cart_header.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="h-[54px] w-screen bg-[#FFF0D9] flex justify-between">
                <div className="flex">
                <div style={{boxShadow:"(-4px 0px 10px rgba(0, 0, 0, 0.15))"}} className="w-[340px] h-[54px] bg-[#FFA51F]  clip-path-left flex justify-center items-center gap-[10px] shadow-[-4px_0px_10px_0px_rgba(0,0,0,0.15)]">

                    <img src="/category.svg" alt="" className="w-[28px]" />
                    <p className="text-[#FFFFFF] font-semibold fontfamily">دسته بندی محصولات</p>
                    <img src="/arrow-down.svg" alt="" className="w-[28px]" />
                </div>
                <div className="w-[211px] flex items-center bg-[red] justify-around">
                    <p className="fontfamily text-base font-medium text-[#2C2C2C]">خانه</p>
                    <p className="">درباره ما</p>
                    <p className="">وبلاگ</p>
                </div>
                </div>
                <div className="flex">
                <div className="flex items-center h-[54px] gap-[8px] ">
                    <p className="font-medium fontfamily text-[#8F8F8F] text-sm">پشتـیبانی فـروش</p>
                    <p className="fontfamily font-semibold text-base text-[#343434]">09125406306</p>
                </div>
                <div className="w-[200px]">
                    <div className="bg-[#FFD9A1] w-[150px] h-[53px] clip-path-under"></div>
                    <div className="w-[135px] h-[54px] bg-[#FFA51F] clip-path-right mt-[-52px] flex justify-center items-center">
                        <img src="/call-calling.svg" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}