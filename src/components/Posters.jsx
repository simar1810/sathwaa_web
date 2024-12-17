"use client";
import { posters } from "@/utils/data";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Posters() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    const container = carouselRef.current;
    const itemWidth = container.querySelector("img").offsetWidth;
    container.scrollBy({
      left: -itemWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = carouselRef.current;
    const itemWidth = container.querySelector("img").offsetWidth;
    container.scrollBy({
      left: itemWidth,
      behavior: "smooth",
    });
  };
  return <div className="max-w-[1400px] mx-auto mt-[40px] md:mt-[80px] mb-[100px] px-4">
    <h3 className="font-bold text-[30px]">Programs from Saathwa Nutrition</h3>
    <div className="selct-none mb-12">
      <div className="max-w-[1400px] mx-auto relative w-full flex justify-center">
        <div
          ref={carouselRef}
          className="mt-10 flex gap-8 overflow-x-auto scroll-smooth no-scrollbar w-[100vw] snap-x scroll-snap-mandatory no-scrollbar">
          {posters.map((imagePath, idx) => (<Image
            src={imagePath}
            height={540}
            width={740}
            unoptimized
            alt={`Client Result ${idx}`}
            className="w-full h-full max-h-[350px] max-w-[600px] object-contain snap-start"
          />))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2">
        <FaChevronCircleLeft
          onClick={scrollLeft}
          className="w-[28px] h-[28px] cursor-pointer"
        />
        <FaChevronCircleRight
          onClick={scrollRight}
          className="w-[28px] h-[28px] cursor-pointer"
        />
      </div>
    </div>
  </div>
}