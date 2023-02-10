"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ percent }: { percent: string }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percent}%`,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    } else {
      controls.start({
        width: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={{ width: `${percent}%`, height: "10px" }}
      className={` bg-red-400 h-4 rounded-lg`}
    ></motion.div>
  );
};

export default ProgressBar;
