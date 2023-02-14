"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardVariants } from "../../../lib/motion";
import { CgWebsite } from "react-icons/cg";
import { BackwardIcon, ForwardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Cards = ({ data }: CardsProps) => {
  const [paginationLeft, setPaginationLeft] = useState<number>(0);
  const [paginationRight, setPaginationRight] = useState<number>(4);

  const load = (next: boolean, prev: boolean) => {
    if (next) {
      setPaginationLeft(paginationLeft + 4);
      setPaginationRight(paginationRight + 4);
    }
    if (prev) {
      setPaginationLeft(paginationLeft - 4);
      setPaginationRight(paginationRight - 4);
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-5 justify-start">
      <div className="flex flex-col items-end w-full sm:max-w-lg ">
        <div className="flex items-center space-x-5 ">
          <button
            disabled={paginationLeft === 0}
            onClick={() => load(false, true)}
            className="btn btn-square ring ring-gray-800 btn-sm"
          >
            <BackwardIcon className="h-4 w-4 text-white " />
          </button>
          <button
            disabled={paginationRight >= data.length}
            onClick={() => load(true, false)}
            className="btn btn-square ring ring-gray-800 btn-sm"
          >
            <ForwardIcon className="h-4 w-4 text-white " />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4">
        {data.slice(paginationLeft, paginationRight).map((item, i) => (
          <motion.div
            variants={cardVariants(i)}
            initial="hide"
            animate="show"
            key={item.id}
            className="w-full sm:max-w-lg h-10 justify-between rounded-lg ring ring-gray-800 flex items-center space-x-2  text-xs text-slate-400 font-medium px-3 bg-[#161B22]"
          >
            <CgWebsite className="h-6 w-6 text-white" />
            <h1 className="text-xs md:text-sm font-bold ">{item.name}</h1>
            <Link
              // href={`/showcase/${item.ref}/${item.id}`}
              href="/showcase/react/63e641b2e6d49e81b355643b"
              rel="noopener noreferrer"
              className="py-0.5 px-2 hover:bg-gray-800 rounded-md uppercase"
            >
              details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
