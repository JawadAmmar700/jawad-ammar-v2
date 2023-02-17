import React from "react";
import { projectSlug } from "../lib/queries";
import Cards from "./cards";

const DataWrapper = async ({ name }: { name: string }) => {
  const data = await projectSlug(name);

  return (
    <div className="flex justify-start w-full h-full sm:px-12 px-5 mt-5">
      <Cards data={data} />
    </div>
  );
};

export default DataWrapper;
