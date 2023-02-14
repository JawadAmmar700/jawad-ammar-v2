"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Socials = () => {
  const [onTap, setOnTap] = useState(false);

  return (
    <div className=" absolute inset-0 overflow-hidden w-full h-full">
      <div className="z-50 absolute bottom-5 right-0">
        <motion.div
          initial={{ width: 40, height: 40 }}
          animate={{ width: onTap ? 150 : 40, height: onTap ? 40 : 40 }}
          className={`flex  items-center ${
            onTap ? "justify-between p-2" : "justify-center"
          } outline-none ring ring-gray-800 rounded-tl rounded-bl`}
        >
          <div
            className={`${
              onTap ? "flex opacity-100" : "hidden opacity-0"
            }  flex items-center justify-center space-x-2`}
          >
            <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK!}>
              <FaGithub className="h-5 w-5 text-slate-500 hover:text-slate-100 " />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK!}>
              <FaLinkedin className="h-5 w-5 text-slate-500 hover:text-slate-100 " />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK!}>
              <FaFacebook className="h-5 w-5 text-slate-500 hover:text-slate-100 " />
            </Link>
          </div>
          {onTap ? (
            <div
              onClick={() => setOnTap(!onTap)}
              className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
            >
              <ChevronRightIcon className="h-5 w-5 text-slate-400" />
            </div>
          ) : (
            <div
              onClick={() => setOnTap(!onTap)}
              className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
            >
              <ChevronLeftIcon className="h-5 w-5 text-slate-400" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
