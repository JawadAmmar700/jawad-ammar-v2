"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";

const ProjectDetailLoading = () => {
  return (
    <div className="flex flex-col items-start py-10 justify-center md:justify-start md:px-12 w-full h-full">
      <h1 className="text-slate-400 text-xs md:text-sm  w-full sm:max-w-lg font-bold">
        <Skeleton count={14} height={10} />
      </h1>
      <h3 className="text-slate-400 text-xs w-full sm:max-w-lg font-bold mt-5">
        <Skeleton height={10} />
      </h3>
    </div>
  );
};

export default ProjectDetailLoading;
