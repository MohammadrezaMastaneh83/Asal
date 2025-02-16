import Image from "next/image";

export default function SpringHony() {
    return (
        <div className="w-screen h-[630px] flex items-center justify-center">
            <div className="w-[1262px] flex items-center justify-between">
                <div className="w-[590px] h-[500px]">
                    <div className="h-[20px] relative">
                        <p className="font-semibold text-2xl absolute top-[-13px] z-20 fontfamily "> ویژگی عسل بهار </p>
                        <div className="w-[185px] h-[21px] bg-[#FFD9A1] clip-path-left mb-[30px]  ">
                        </div>
                    </div>
                    <div className="flex items-start mt-[30px]  ">
                        <Image alt=" " src="/springnumber1.svg" width={68} height={68} />
                        <div className="w-[300px] h-[110px]  flex flex-col justify-end">
                            <p className="text-[#2C2C2C] font-extrabold text-2xl fontfamily">طبیعی بودن عسل</p>
                            <p className="text-[#2C2C2C] font-normal text-[16px] leading-[30px] fontfamily">.  شناخت زنبوردار و خرید عسل از آن</p>
                            <p className="text-[#2C2C2C] font-normal text-[16px] leading-[30px] fontfamily">.   آزمایش عسل در یک آزمایشگاه معتبر</p>
                        </div>

                    </div>
                    <div className="flex items-start mt-[30px]  ">
                        <Image alt=" " src="/springnumber2.svg" width={68} height={68} />
                        <div className="w-[300px] h-[140px]  flex flex-col justify-end">
                            <p className="text-[#2C2C2C] font-extrabold text-2xl fontfamily">طعم، عطر و بو</p>
                            <p className="text-[#2C2C2C] font-normal text-[16px] leading-[30px] fontfamily w-[500px]">در کنار طبیعی بودن عسل، فاکتورهایی مثل طعم و مزه و عطر و بو نیز از جمله ویژگی های عسل طبیعی به شمار می روند. ممکن است یک عسل کاملا طبیعی باشد.</p>
                        </div>

                    </div>
                    <div className="flex items-start mt-[30px]  ">
                        <Image alt=" " src="/springnumber3.svg" width={68} height={68} />
                        <div className="w-[300px] h-[110px]  flex flex-col justify-end">
                            <p className="text-[#2C2C2C] font-extrabold text-2xl fontfamily">رنگ عسل طبیعی</p>
                            <p className="text-[#2C2C2C] font-normal text-[16px] leading-[30px] fontfamily w-[490px]">در حالی که دیگر شهدها و عسل غیرطبیعی بر اثر گذر زمان به‌ دلیل تابش آفتاب، تبخیر و کاهش رطوبت و… رنگی تیره‌تر به خود خواهد گرفت.</p>
                        </div>

                    </div>
                </div>
                <Image alt="" src="/man_in_spring.png" width={577} height={489} />
            </div>
        </div>
    )
}