import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black  w-full h-full z-10 bg-opacity-30 filter backdrop-blur-2xl"></div>
      <Image src="/sticky_image.jpg" alt="landing image" fill />
    </div>
  );
};

export default Background;
