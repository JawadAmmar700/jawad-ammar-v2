import React from "react";
import Carousal from "../../../../components/slider/carousal";
import { projectQuery, projectsQuery } from "../../../../lib/queries";
import Content from "./content";

type Props = {
  params: {
    id: string;
    name: string;
  };
};

export const dynamic = "force-dynamic";

const ProjectDetails = async ({ params }: Props) => {
  const data = await projectQuery(params.id);
  return (
    <div className="px-12 overflow-y-scroll w-full h-full flex flex-col lg:flex-row space-x-4 hide-scroll-bar">
      <Content data={data} />
    </div>
  );
};

export default ProjectDetails;
