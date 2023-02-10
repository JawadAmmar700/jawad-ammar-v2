import React from "react";
import Cards from "./cards";
import { projectsQuery } from "../../lib/queries";

const Showcase = async () => {
  const projects = await projectsQuery();
  return (
    <div className="flex justify-start w-full h-full sm:px-12 px-5 mt-5">
      <Cards data={projects} />
    </div>
  );
};

export default Showcase;
