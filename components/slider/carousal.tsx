"use client";
import Image from "next/image";
import Slider from "react-slick";
import NextArrow from "./next-arrow";
import PrevArrow from "./prev-arrow";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
              blurDataURL="/blur.png"
              placeholder="blur"
              className="rounded-lg w-full h-[300px] object-contain "
            />
          ))}
      </Slider>
    </motion.div>
  );
}
