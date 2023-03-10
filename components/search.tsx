"use client";
import React from "react";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useSelectedLayoutSegments, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Search = () => {
  const segments = useSelectedLayoutSegments();
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/showcase/${search.toLowerCase()}`);
    setSearch("");
  };

  return (
    <div className="w-full flex items-center justify-center px-5 py-8 z-20">
      <div className="w-full md:max-w-lg sm:max-w-md h-10 overflow-hidden  rounded-lg ring ring-gray-800 flex items-center space-x-2  text-xs text-slate-400 font-medium px-3 bg-[#161B22]">
        <LockClosedIcon className="w-3 h-3" />
        <h1 className="xs:block hidden">{process.env.NEXT_PUBLIC_SITE_URL}</h1>
        <p>/</p>
        {segments.map((segment, i) => (
          <div key={i} className="flex items-center space-x-2">
            <motion.p
              key={segment}
              initial={{ backgroundColor: "#161B22" }}
              animate={{
                backgroundColor: ["#161B22", "#FF00FF", "#161B22"],
              }}
              transition={{
                duration: 0.8,
              }}
              exit={{ backgroundColor: "#161B22" }}
              className="rounded"
            >
              {segment}
            </motion.p>
            {i !== segments.length - 1 && <p>/</p>}
            {segments[0] === "showcase" && segments.length === 1 && (
              <div className="w-[90px] h-5 flex items-center space-x-2">
                <p>/</p>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-full rounded bg-[#161B22] text-slate-400   ring ring-gray-800 font-medium text-xs py-0.5 px-2 outline-none placeholder:text-slate-600"
                    placeholder="params"
                  />
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
