"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

const Links = ({
  links,
  home,
}: {
  links: {
    name: string;
    href: string;
  }[];
  home: string;
}) => {
  const active = useSelectedLayoutSegments()[0] || home;
  return (
    <>
      {links.map((link, i) => (
        <Link
          href={`/${home === "" ? "" : `${home}/`}${link.href
            .toLowerCase()
            .trim()}`}
          key={i}
        >
          <div
            className={`text-slate-400 relative ${
              active === link.href.toLowerCase()
                ? "bg-[#161B22]"
                : "bg-transparent"
            } hover:bg-[#161B22] transition-all duration-150 hover:scale-110 rounded-md font-medium text-xs flex items-center ${
              home !== "" ? "justify-center" : "justify-start md:w-[100px]"
            }  py-0.5 px-2`}
          >
            {link.name}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Links;
