"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type PageProps = {
  name: string;
  src: string;
  color?: string;
}[];

const Technologies = ({ data }: { data: PageProps }) => {
  return (
    <div className="space-x-2 flex flex-wrap w-full gap-y-2">
      {data.map((tech, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2 * i,
            duration: 0.2 * i,
          }}
          key={i}
          className="flex space-x-2 items-center p-2 rounded-lg bg-[#161B22]"
        >
          <Image
            src={`/technology/${tech.src}.svg`}
            alt={tech.name}
            width={20}
            height={20}
          />
          <p className="text-xs">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
