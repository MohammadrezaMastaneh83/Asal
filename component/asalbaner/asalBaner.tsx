import Image from "next/image";

export default function AsalBaner() {
    return (
        <div className="w-screen  flex justify-center">
            <div className="w-[85%] h-[310px] flex justify-between items-center">
                <div className="bg-[url('/asalmakh.png')] w-[613px] h-[196px] flex items-end ">
                    <div className="w-[130px] h-[60px] flex justify-center">
                        <button className="w-[81px] h-[34px] bg-[#FFA51F] rounded-[10px] text-[#000] font-semibold text-[12px] ">کلیک کنید</button>

                    </div>
                </div>

                <div className="bg-[url('/mpjezehasal.png')] w-[613px] h-[196px] flex items-end"  >
                    <div className="w-[130px] h-[60px] flex justify-center">
                        <button className="w-[81px] h-[34px] bg-[#FFA51F] rounded-[10px] text-[#000] font-semibold text-[12px] ">کلیک کنید</button>

                    </div>
                </div>

            </div>

        </div>
    )
}