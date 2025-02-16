import Image from "next/image";


export default function Aboutus() {
    return (
        <div className="w-screen flex flex-col items-center gap-[40px] ">
            <div className="w-[85%] h-[180px]  flex items-end">
                <Image src="/headerLogo.svg" alt="" width={174} height={93} />
            </div>
            <div className="w-[85%] flex gap-[32px]">
                <div className="">
                    <div className="h-[20px] relative">
                        <p className="font-semibold text-2xl absolute top-[-13px] z-20 fontfamily "> درباره عسل کنامی </p>
                        <div className="w-[185px] h-[21px] bg-[#FFD9A1] clip-path-left mb-[30px]  ">
                        </div>
                    </div>
                    <div className="w-[791px] h-[321px] rounded-[20px] bg-[#FFFFFF]  flex items-center justify-center mt-[32px]">
                        <div className="w-[727px] h-[264px] flex flex-col  gap-[20px] ">
                            <p className="">ما در ایران عسل جمع شده ایم تا محصولات و فراورده های متنوع زنبورعسل را با بالاترین کیفیت و مناسب ترین قیمت در دسترس مردم عزیز ایران قرار دهیم. مجموعه ایران عسل با حذف واسطه ها توانسته بهترین قیمت از محصولات متنوع زنبورعسل را از سراسر ایران تهیه و به دست مشتریان خود برساند. </p>
                            <p className="">همچنین سابقه چندین ساله در زمینه تولید و عرضه محصولات و فراورده های زنبور عسل باعث شده تا کیفیت محصولات ایران عسل در سطح بسیار بالایی قرار داشته باشد.</p>
                            <p className="">ایران عسل، سایت فروشگاهی شرکت شهدینه گلها است. با این حال در این فروشگاه اینترنتی، تمامی محصولات باکیفیت از برندهای تولید کننده معتبر، خریداری و با بهترین قیمت عرضه می شود. هدف ما دسترسی آسان مصرف کنندگان به محصولات باکیفیت با کمترین قیمت ممکن است.</p>
                        </div>
                    </div>
                </div>
                    <div>
                    <div className="h-[20px] relative">
                        <p className="font-semibold text-2xl absolute top-[-13px] z-20 fontfamily "> تماس باما </p>
                        <div className="w-[185px] h-[21px] bg-[#FFD9A1] clip-path-left mb-[30px]  ">
                        </div>
                    </div>
                    <div className=" mt-[32px] w-[380px] h-[331px] rounded-[20px] bg-[#FFFFFF] shadow-[0px 0px 5px 0px rgba(0, 0, 0, 0.15)] flex justify-center items-center ">
                   <div className="w-[315px] h-[230] flex flex-col gap-[30px]">
                   <div className="flex gap-[18px] items-center ">
                            <Image src="/call_to_us.svg" alt="" width={56} height={56}/>
                            <p>09125406306</p>
                        </div>
                        <div className="flex gap-[18px] items-center">
                        <Image src="/location_us.svg" alt="" width={56} height={56}/>
                        <p>ایران ، خوانسار ،خیابان شهدا</p>
                        </div>
                        <div className="flex gap-[18px] items-center">
                        <Image src="/email.svg" alt="" width={56} height={56}/>
                        <p>konami-asaal@gmail.com</p>
                        </div>
                   </div>
                    </div>
                    </div>
            </div>
            <div className="w-[85%] flex flex-col gap-[32px]">
            <div className="h-[20px] relative">
                        <p className="font-semibold text-2xl absolute top-[-13px] z-20 fontfamily "> درباره عسل کنامی </p>
                        <div className="w-[185px] h-[21px] bg-[#FFD9A1] clip-path-left mb-[30px]  ">
                        </div>
                    </div>
                    <Image alt="" src="/asalbaner.png" width={1254} height={196}/>
            </div>
        </div>
    )
}