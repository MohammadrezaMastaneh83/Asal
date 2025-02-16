import Image from "next/image";


export default function SinUp() {
    return (
        <div className="w-[558px] h-[1040px] bg-[#FCFCFC]">

            <div className="w-[474px] flex justify-between">
                <Image src="/headerLogo.svg" alt="" width={118} height={63} />
                <button>
                    <Image src="/clossvg.svg" alt="" width={40} height={40} />
                </button>
            </div>
            <hr className="w-[474px] h-[1px] bg-[#8A8A8A] mt-[32px]" />
            <div className="flex flex-col gap-[32px] mt-[40px]">
                <div className="gap-[18px] flex flex-col">
                    <p className="text-[20px] text-[#2C2C2C] familyfont font-semibold ">نام و نام خانوادگی</p>
                    <input type="text" className="w-[446px] border-[2px] border-[#8A8A8A99] rounded-[15px] h-[72px] outline-[#FFA51F]" />
                </div>
                <div className="gap-[18px] flex flex-col">
                    <p className="text-[20px] text-[#2C2C2C] familyfont font-semibold ">آدرس پستی</p>
                    <input type="text" className="w-[446px] border-[2px] border-[#8A8A8A99] rounded-[15px] h-[100px] outline-[#FFA51F]"/>
                </div>
                <div className="gap-[18px] flex flex-col">
                    <p className="text-[20px] text-[#2C2C2C] familyfont font-semibold ">کد پستی</p>
                    <input type="text" className="w-[446px] border-[2px] border-[#8A8A8A99] rounded-[15px] h-[72px] outline-[#FFA51F]"  />
                </div>
                <div className="flex justify-between w-[446px]">
                    <div className="gap-[18px] flex flex-col">
                        <p className="text-[20px] text-[#2C2C2C] familyfont font-semibold ">پلاک</p>
                        <input type="text" className="border-[2px] border-[#8A8A8A99] rounded-[15px] w-[212] h-[70px] outline-[#FFA51F]"  />
                    </div>
                    <div className="gap-[18px] flex flex-col">
                        <p className="text-[20px] text-[#2C2C2C] familyfont font-semibold ">واحد</p>
                        <input type="text" className="border-[2px] border-[#8A8A8A99] rounded-[15px] w-[212] h-[70px] outline-[#FFA51F] " />
                    </div>
                </div>
                <div className="gap-[18px] flex flex-col">
                    <p className="text-[20px] text-[#2C2C2C] familyfont font-semibold ">شماره موبایل</p>
                    <input type="text" className="w-[446px] border-[2px] border-[#8A8A8A99] rounded-[15px] h-[70px] outline-[#FFA51F]" />
                </div>
                <button className="w-[446px] h-[70px] rounded-[15px] bg-[#FFA51F] text-[20px] text-[#2C2C2C] familyfont font-semibold ">ثبت نام </button>
            </div>

        </div>
    )
}