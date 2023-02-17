"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";

const SkillsSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="flex flex-col space-y-5 md:p-5">
      <Skeleton width={100} height={10} />
      <div className="space-x-2 flex flex-wrap w-full gap-y-2 rounded-lg">
        {Array.from({ length }, (_, i) => (
          <Skeleton key={i} width={80} height={30} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSkeleton;
