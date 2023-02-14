"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";

const ProjectDetailLoading = () => {
  return (
    <div className="px-12 overflow-y-scroll w-full h-full flex flex-col lg:flex-row space-x-4 hide-scroll-bar">
      <div className="p-5 flex items-center space-x-2">
        <Skeleton height={10} width={50} />
        <Skeleton height={10} width={50} />
        <Skeleton height={10} width={50} />
      </div>

      <div className="w-full md:max-w-lg">
        <h2 className="text-lg font-bold">
          <Skeleton height={10} />
        </h2>
        <p className="text-xs md:text-sm mt-5">
          <Skeleton count={9} height={10} />
        </p>
        <div className="flex flex-row space-x-4 mt-5">
          <Skeleton height={20} width={50} />
          <Skeleton height={20} width={50} />
          <Skeleton height={20} width={50} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailLoading;
