import Image from "next/image";
import React from "react";
import Technologies from "./technologies";
import { skillsQuery } from "../lib/queries";

const SkillsContent = async ({ skill }: { skill: string }) => {
  const { title, skills } = await skillsQuery(skill);
  return (
    <div className="flex flex-col space-y-5 md:p-5">
      <h1 className="text-lg md:text-xl">{title}</h1>
      <Technologies data={skills} />
    </div>
  );
};

export default SkillsContent;
