"use client";
import Skeleton from "react-loading-skeleton";

const NameLoading = () => {
  return (
    <div className="flex justify-start w-full h-full sm:px-12 px-5 mt-5">
      <div className="w-full h-full flex flex-col space-y-5 justify-start">
        <div className="flex flex-col items-end w-full sm:max-w-lg">
          <div className="flex items-center space-x-5 ">
            <Skeleton
              height={30}
              width={30}
              className="btn btn-square ring ring-gray-800 btn-sm"
            />
            <Skeleton
              height={30}
              width={30}
              className="btn btn-square ring ring-gray-800 btn-sm"
            />
          </div>
        </div>
        <div className="w-full flex flex-col space-y-4">
          <Skeleton
            count={4}
            className="w-full mt-4 sm:max-w-lg h-10 justify-between  rounded-lg ring ring-gray-800 flex items-center space-x-2  text-xs text-slate-400 font-medium px-3 bg-[#161B22]"
          />
        </div>
      </div>
    </div>
  );
};

export default NameLoading;
