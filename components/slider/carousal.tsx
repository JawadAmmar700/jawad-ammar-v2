"use client";
import Image from "next/image";
import Slider from "react-slick";
import NextArrow from "./next-arrow";
import PrevArrow from "./prev-arrow";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Carousal({ slides }: { slides: Slides }) {
  console.log("slides, ", slides);
  return (
    <div className="">
      <Slider {...settings}>
        {Array(parseInt(slides?.imagesLength))
          .fill("")
          .map((_, i) => (
            <Image
              key={i}
              src={`/assets/slides/${slides.folder}/slide-${i + 1}.png`}
              alt={`${slides.folder}-slide-${i + 1}`}
              width={1920}
              height={1080}
              className="rounded-lg w-full h-[300px] object-contain "
            />
          ))}
      </Slider>
    </div>
  );
}
