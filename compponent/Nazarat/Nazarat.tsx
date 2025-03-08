import React from "react";
import Image from "next/image";
import vectorface from "@/svg/Vectorface.svg";
import vectorperson from "@/svg/vectorperson.svg";

export default function Nazarat() {
  const nazarat = [
    {
      id: 1,
      imageface: vectorface,
      name: "سعید",
      date: "18 مهر 1403",
      image: vectorperson,
      text: "این محصول را پیشنهاد داد ",
      matn: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی",
    },
    {
      id: 2,
      name: "سعید",
      date: "18 مهر 1403",
      image: vectorperson,
      matn: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی",
    },
    {
      id: 3,
      name: "سعید",
      date: "18 مهر 1403 ",
      image: vectorperson,
      matn: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5  ">
        {nazarat.map((nazar) => (
          <div
            key={nazar.id}
            className=" bg-[#FFFFFF] rounded-[20px]  shadow-md h-[14.56rem] w-[39.12rem]  p-6  "
          >
            <div className="flex items-center flex-row-reverse">
              <div className="ml-3 ">
                <Image src={nazar.image} alt="User" width={73} height={73} />
              </div>

              <div className="flex items-center gap-2">
                <span dir="rtl" className="text-[#2C2C2C] text-[0.87rem] font-xregular mr-6">{nazar.date}</span>
                <span className="font-bold text-[1.25rem]">{nazar.name}</span>
              </div>
              <div className="mr-32 flex gap-2 ">
                {nazar.text && (
                  <p className="text-[#187600] text-[1rem] font-xregular mt-1 ">
                    {nazar.text}
                  </p>
                )}
                {nazar.imageface && (
                  <Image
                    src={nazar.imageface}
                    alt="Face Icon"
                    width={26}
                    height={26}
                  />
                )}
              </div>
            </div>
            <p className="text-[#2C2C2C] mt-2 text-[1.25rem] font-xmedium text-right">{nazar.matn}</p>
          </div>
        ))}
      </div>
    </>
  );
}
