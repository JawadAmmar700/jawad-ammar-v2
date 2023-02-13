"use client";
import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Socials = () => {
  const [onTap, setOnTap] = React.useState(false);
  console.log(onTap);
  return (
    <div className="z-50 absolute bottom-10 right-0 ">
      <motion.div
        initial={{ width: 40, height: 40 }}
        animate={{ width: onTap ? 40 : 40, height: onTap ? 150 : 40 }}
        className={`flex flex-col items-center justify-between outline-none ring ring-gray-800 p-2 rounded-tl rounded-bl`}
      >
        <div
          className={`${
            onTap ? "flex opacity-100" : "hidden opacity-0"
          }  flex-col items-center justify-center space-y-2`}
        >
          <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK!}>
            <FaGithub className="h-6 w-6 text-slate-500 hover:text-slate-100 " />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK!}>
            <FaLinkedin className="h-6 w-6 text-slate-500 hover:text-slate-100 " />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK!}>
            <FaFacebook className="h-6 w-6 text-slate-500 hover:text-slate-100 " />
          </Link>
        </div>
        {onTap ? (
          <ChevronDownIcon
            onClick={() => setOnTap(!onTap)}
            className="h-6 w-6 text-slate-400 hover:text-slate-100 cursor-pointer"
          />
        ) : (
          <ChevronUpIcon
            onClick={() => setOnTap(!onTap)}
            className="h-6 w-6 text-slate-400 hover:text-slate-100 cursor-pointer"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Socials;
