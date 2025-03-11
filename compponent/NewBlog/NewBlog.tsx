import React from "react";
import Image from "next/image";


export default function NewBlog() {
  const contentData = [
    {
      id: 1,
      title: "کپسول تل روبال",
      image: "/svgs/hony card1.svg",
      description: [
        "یک قاشق چایخوری عسل طبیعی",
        "زنبور عسل حاوی حدود 5-6 گرم قند است؛",
        "اما این مقدار چه سهمی در نیاز روزانه بدن انسان ...",
      ],
    },
    {
      id: 2,
      title: "کپسول تل روبال",
      image:"/svgs/honycard2.svg",
      description: [
        "یک قاشق چایخوری عسل طبیعی",
        "زنبور عسل حاوی حدود 5-6 گرم قند است؛",
        "اما این مقدار چه سهمی در نیاز روزانه بدن انسان ...",
      ],
    },
  ];

  return (
    <>
      <div className="text-right mt-20 relative">
        <div className="relative inline-block">
          <h3 className="text-[1.5rem] text-[#2C2C2C] font-xbold relative z-10">
            جدید ترین مقالات
          </h3>
          <div className="w-[14.62rem] h-[1.31rem] bg-[#FFD9A1] clip-path-left absolute bottom-2 z-0 "></div>
        </div>
      </div>

      <div className="flex gap-20 mt-10">
        {contentData.map((item, index) => (
          <div
            key={index}
            className="text-right space-y-8 w-[37.71rem] h-[20rem] bg-[#FFFFFF] shadow-lg rounded-[20px] p-4 mt-10"
          >
            <h1 className="text-[1.5rem]  text-[#2C2C2C] font-xbold">
              {item.title}
            </h1>

            <div className="flex  items-start gap-4 flex-row-reverse">
              <div className=" -mt-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={299}
                  height={272}
                  className="rounded-lg  "
                />
              </div>

              <div className="w-2/3 space-y-2">
                {item.description.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-[1rem] text-[#797777] font-xregular"
                  >
                    {line}
                  </p>
                ))}
                <div className=" ">
                  <button className=" btn w-[8.37rem] h-[2.87rem] border border-[#FFA51F] text-[#FFA51F]  rounded-[10px] text-[1.25rem] font-xbold mt-10">
                    ادامه مطالب
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
