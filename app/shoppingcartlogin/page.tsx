"use client";
import React, { useState } from "react";
import Image from "next/image";
import hony from "@/svg/hony.png";
import Counter from "@/compponent/Counter/Counter";
import Sabtsefaresh from "@/compponent/Sabtsefaresh/Sabtsefaresh";
import Sabtsefareshlogin from "@/compponent/Sabtsefareshlogin/Sabtsefareshlogin";

export default function shoppingcartlogin() {
  const [counts, setCounts] = useState({ 1: 1, 2: 1 });

  const card = [
    {
      id: 1,
      img: hony,
      name: "عسل طبیعی گون",
      p: "وزن",
      weight: "500 گرمی",
      discount: "29%",
      pricebefore: "315,000",
      price: 295000,
    },
    {
      id: 2,
      img: hony,
      name: "عسل طبیعی رازیانه",
      p: "وزن",
      weight: "500 گرمی",
      price: 295000,
    },
  ];

  const updateCount = (id, newCount) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };

  const removeCard = (id) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[id];
      return newCounts;
    });
  };

  return (
    <>
      <div className="flex  w-full flex-row-reverse ">
        <div className="flex flex-col items-end space-y-4">
          {card
            .filter((item) => counts[item.id] !== undefined)
            .map((item) => (
              <div
                key={item.id}
                className="w-[50.43rem] h-[10.87rem] bg-white rounded-[20px] flex items-center justify-between px-5 shadow-md border"
              >
                <Counter
                  count={counts[item.id]}
                  setCount={(newCount) => updateCount(item.id, newCount)}
                  removeCard={() => removeCard(item.id)} // تابع حذف
                />

                <div className="flex flex-col items-center">
                  {item.discount && item.pricebefore && (
                    <div className="flex items-center space-x-2">
                      <span className="bg-[#FFA51F] text-black text-[1.12rem] font-xregular px-2 py-1 rounded-[20px]">
                        {item.discount}
                      </span>
                      <p className="text-gray-400 line-through text-[1.12rem] font-xregular">
                        {item.pricebefore}
                      </p>
                    </div>
                  )}

                  <p
                    className={`font-xregular text-[1.5rem] ${
                      item.id === 2 ? "text-black" : "text-[#FFA51F]"
                    }`}
                  >
                    {counts[item.id] * item.price} تومان
                  </p>
                </div>

                <div className="flex flex-col ml-20 ">
                  <div className="flex items-center space-x-3 ">
                    <p className="text-right text-[1.5rem] font-xmedium ">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex items-center mt-5">
                    <select className="border px-2 py-1 rounded-md text-[16px] text-[#2c2c2c] font-xregular">
                      <option>{item.weight}</option>
                    </select>
                    <span className="text-[1.25rem] font-xregular ml-2 text-[#2c2c2c]">
                      :{item.p}{" "}
                    </span>
                  </div>
                </div>

                <Image
                  src={item.img}
                  alt={item.name}
                  width={126}
                  height={126}
                  className="rounded-[20px] flex justify-center items-center -mt-10"
                />
              </div>
            ))}
        </div>

        <div className=" w-1/2 ">
          <Sabtsefareshlogin />
        </div>
      </div>
    </>
  );
}
