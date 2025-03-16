import Sabtsefareshpardakht from '@/compponent/Sabtsefareshpardakht/Sabtsefareshpardakht'
import React from 'react'

export default function pardakhtmovafagh() {
  return (

    <>
    
    <div className="flex  w-full flex-row-reverse    ">
           <div className="w-[49.5rem] h-[22.37rem] bg-[#FFFFFF] shadow-md rounded-[20px] mt-10 ">
             <div className="flex justify-center mt-5">
               <h3 className="text-[1.5rem] font-xbold text-[#FF261F]">
                 پرداخت ناموفق
               </h3>
             </div>
             <div className="flex justify-between p-10">
               <p className="text-[1.12rem] font-xregular">120025469011254</p>
               <p className="text-[1.25rem] font-xregular">کد رهگیری</p>
             </div>
             <div className="flex justify-center items-center mt-10">
               <p className="text-[1.25rem] font-xregular">
                 هر روز از ۹ صبح تا ۱۲ بامداد پاسخگو شما هستیم <br />
                 <span className="flex justify-center">
                   شماره تماس با پشتیبانی: 021-96612612
                 </span>
               </p>
             </div>
           </div>
           <div className=" w-1/2 mt-10">
             <Sabtsefareshpardakht/>


           </div>
         </div>
    </>
  )
}
