"use client";
import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react";
import "./styless.css"
import Image from "next/image";
export default function BestSell() {
    const Asal = [
        {
            img: "/asal_shivid.png",
            title: "عسل طبیعی  شوید",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "/diabis_asal.png",
            title: "عسل طبیعی دیابتی",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "/yonjeh_asal.png",
            title: "عسل طبیعی یونجه",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "/rasiyanehasale.png",
            title: "عسل طبیعی رازیانه",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "",
            title: "",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "",
            title: "",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "",
            title: "",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
        {
            img: "",
            title: "",
            star: "/star.svg",
            vot: "(5.6)",
            weight: "وزن : 500 گرمی",
            lastprice: "315,۰۰۰تومان",
            newpric: "295,۰۰۰ تومان",
            btn: "/shopping-cart.svg"
        },
    ]
    // const [ref] = useKeenSlider<HTMLDivElement>({
    //     slides: {
    //         perView: 6,
    //         spacing: 15,
    //     },
    // })
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 4,
            spacing: 35,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <div className="w-screen flex justify-center items-center ">
            <div className="w-[85%] h-[539px] flex flex-col justify-between">
                <div className="w-[100%] h-[86px]  flex justify-between items-center ">
                    <div className="h-[20px] relative">
                        <p className="font-semibold text-2xl absolute top-[-13px] z-20 fontfamily "> پرفروش‌ترین ها</p>
                        <div className="w-[185px] h-[21px] bg-[#FFD9A1] clip-path-left mb-[30px]  ">
                        </div>
                    </div>
                    <div className="w-[107px] h-[86px]  flex flex-col items-center justify-between ">
                        <p className="fontfamily font-normal text-[20px] ">مشاهده همه</p>
                        <div className=" flex justify-between w-[107px] h-[40px] ">
                            {loaded && instanceRef.current && (
                                <>
                                    <Arrow
                                        left
                                        onClick={(e: any) =>
                                            e.stopPropagation() || instanceRef.current?.prev()
                                        }
                                        disabled={currentSlide === 0}
                                    />

                                    <Arrow
                                        onClick={(e: any) =>
                                            e.stopPropagation() || instanceRef.current?.next()
                                        }
                                        disabled={
                                            currentSlide ===
                                            instanceRef.current.track.details.slides.length - 1
                                        }
                                    />
                                </>

                            )}
                        </div>

                    </div>
                </div>

                <div className="w-[100%] h-[435px]  flex items-center ">
                    <div ref={sliderRef} className="keen-slider  ">
                        {Asal.map((item, index) => {
                            return (
                                <div className="keen-slider__slide number-slide1">
                                    <Image width={232} height={173} src={item.img} alt="" />
                                    <div className="flex justify-between w-[248px] ">
                                        <p className="fontfamily text-lg font-semibold text-[#2C2C2C]">{item.title}</p>
                                        <div className="flex items-center gap-[4px]">
                                            <Image alt="" src={item.star} width={24} height={24} />
                                            <p className="fontfamily font-medium text-[16px] text-[#2C2C2C] ">{item.vot}</p>
                                        </div>
                                    </div>
                                    <div className="fontfamily font-normal text-[16px] text-[#2C2C2C] w-[250px] mt-[74px]">{item.weight}</div>
                                    <div className="w-[250px] flex items-start text-[#8A8A8A] font-normal text-[16px] fontfamily ">{item.lastprice}</div>
                                    <div className="bg-[#8A8A8A] w-[89px] h-[2px] mt-[-13px] ml-[170px] " />

                                    <div className="flex items-center justify-between w-[250px] ">
                                        <div className="fontfamily font-bold text-[#FFA51F] text-[22px] ">
                                            {item.newpric}</div>
                                        <div className="w-[48px] h-[48px] bg-[#FFA51F] flex items-center rounded-[10px] justify-center">
                                            <Image alt="" src={item.btn} width={24} height={24} />
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>

            </div>


        </div>

    )
}
function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
}) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`  arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="40" height="40"
        >
            {props.left && (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="white" />
                    <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#D0D0D0" />
                    <path d="M21.6805 26.07C21.6805 25.88 21.7505 25.69 21.9005 25.54L27.4405 20L21.9005 14.46C21.6105 14.17 21.6105 13.69 21.9005 13.4C22.1905 13.11 22.6705 13.11 22.9605 13.4L29.0305 19.47C29.3205 19.76 29.3205 20.24 29.0305 20.53L22.9605 26.6C22.6705 26.89 22.1905 26.89 21.9005 26.6C21.7505 26.46 21.6805 26.26 21.6805 26.07Z" fill="#BEBEBE" />
                    <path d="M10.7501 20C10.7501 19.59 11.0901 19.25 11.5001 19.25L28.3301 19.25C28.7401 19.25 29.0801 19.59 29.0801 20C29.0801 20.41 28.7401 20.75 28.3301 20.75L11.5001 20.75C11.0901 20.75 10.7501 20.41 10.7501 20Z" fill="#BEBEBE" />
                </svg>

            )}
            {!props.left && (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="38" height="38" rx="9" fill="white" />
                    <rect x="1" y="1" width="38" height="38" rx="9" stroke="#FFA51F" stroke-width="2" />
                    <path d="M18.3195 13.93C18.3195 14.12 18.2495 14.31 18.0995 14.46L12.5595 20L18.0995 25.54C18.3895 25.83 18.3895 26.31 18.0995 26.6C17.8095 26.89 17.3295 26.89 17.0395 26.6L10.9695 20.53C10.6795 20.24 10.6795 19.76 10.9695 19.47L17.0395 13.4C17.3295 13.11 17.8095 13.11 18.0995 13.4C18.2495 13.54 18.3195 13.74 18.3195 13.93Z" fill="#FFA51F" />
                    <path d="M29.2499 20C29.2499 20.41 28.9099 20.75 28.4999 20.75L11.6699 20.75C11.2599 20.75 10.9199 20.41 10.9199 20C10.9199 19.59 11.2599 19.25 11.6699 19.25L28.4999 19.25C28.9099 19.25 29.2499 19.59 29.2499 20Z" fill="#FFA51F" />
                </svg>
            )}
        </svg>
    );
}