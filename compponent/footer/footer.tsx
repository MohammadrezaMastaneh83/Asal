import Image from "next/image";

export default function Footer(){
    return(
  
      

        <div className="w-screen h-[381px] bg-[url('/footer_back.png')] mt-[80px] flex justify-around items-center ">
          <div className=" w-[300px] h-[245px] flex flex-col gap-[24px]">
           <Image alt="" src="/footersvg.svg" width={160} height={85} />
           <div className="bg-[#FECE03] w-[292px] h-[1px]">1</div>
           <p className="w-[296px] font-medium text-[#FFFFFF] familyfont leading-[28px] text-[14px]">فروشگاه اینترنتی هانی بر از سال 1402 فعالیت خود را در زمینه فروش عسل طبیعی محلی آغاز کرده است. 
           مهم ترین هدف مجموعه عسلو رضایت مشتریان از کیفیت و اصالت محصولات می باشد. </p>
          </div>
          <div className="w-[114px] h-[245px]">
            <p className="text-[#FECE03] leading-[30px] fontfamily text-[20px] font-semibold ">لینک مفید</p>
          <div className="w-[114px] h-[230px] flex flex-col gap-[14px] mt-[24px]">
            <p className="text-[#FFFFFF] fontfamily text-[16px] font-medium leading-[]24px ">صفحه نخست </p>
            <p className="text-[#FFFFFF] fontfamily text-[16px] font-medium leading-[]24px ">قوانین و شرایط</p>
            <p className="text-[#FFFFFF] fontfamily text-[16px] font-medium leading-[]24px ">لیست محصولات</p>
            <p className="text-[#FFFFFF] fontfamily text-[16px] font-medium leading-[]24px ">تماس باما</p>
            <p className="text-[#FFFFFF] fontfamily text-[16px] font-medium leading-[]24px ">درباره ما</p>
          </div>
          </div>
          <div className="h-[245px]">
            <p className="text-[#FECE03] text-[20px] font-semibold fontfamily ">راه ارتباطی</p>
            <div className="flex flex-col gap-[11px] mt-[24px]">
                <div className="flex gap-[17px]">
                    <Image alt=" " src="/phone_footer.svg" width={18} height={18}/>
                    <p className="text-[#FFFFFF] text-[16px] font-normal fontfamily">تلفن : 09100823994</p>
                </div>
                <div className="flex gap-[17px]">
                    <Image src="/Location_foote.svg" alt="" height={20} width={20} />
                    <p className="text-[#FFFFFF] text-[16px] font-normal fontfamily">تهران، بازار گل محلاتی</p>
                 </div>
            </div>
          </div>
          <div className="h-[245px] gap-[24px] flex flex-col" >
            <p className="text-[#FECE03] text-[20px] font-semibold fontfamily">شبکه های اجتماعی</p>
            <div className="w-[155px ] flex justify-between" >
                <Image alt="" src="/instagram_footer.svg" width={33} height={33}/>
                <Image alt="" src="/telegram.svg" width={33} height={33}/>
                <Image alt="" src="/whatsapp_footer.svg" width={33} height={33}/>
            </div>
          </div>
          <div className="h-[245px] gap-[24px] flex flex-col" >
            <p className="text-[#FECE03] text-[20px] font-semibold fontfamily">نمادهای ما</p>
            <div className="w-[221px] flex justify-between" >
                <Image alt="" src="/namdE.svg" width={99} height={119}/>
                <Image alt="" src="/namadSmand.svg" width={99} height={119}/>
                
            </div>
          </div>
        </div>
      

    )
}