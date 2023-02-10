"use client";
import Skeleton from "react-loading-skeleton";

const ContactLoading = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-start sm:items-center py-3 md:py-5 sm:py-0  text-slate-400 w-full h-full px-12 md:px-32 md:justify-start">
        <form className="flex flex-col space-y-2 w-full sm:max-w-lg">
          <div className="flex flex-col">
            <Skeleton width={50} />
            <Skeleton height={40} />
          </div>
          <div className="flex flex-col">
            <Skeleton width={50} />
            <Skeleton height={40} />
          </div>
          <div className="flex flex-col">
            <Skeleton width={50} />
            <Skeleton height={40} />
          </div>
          <div className="flex flex-col">
            <Skeleton width={50} />
            <Skeleton height={150} />
          </div>
          <Skeleton
            width={40}
            height={40}
            className="btn btn-square ring ring-gray-800 btn-md relative top-1 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactLoading;
