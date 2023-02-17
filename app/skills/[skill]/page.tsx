import React from "react";
import { Suspense } from "react";
import { SkillsCounts } from "../../../lib/constants";
import SkillsContent from "../../../components/skills-content";
import SkillsSkeleton from "../../../components/skills-skeleton";

export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    skill: string;
  };
};

const Page = ({ params: { skill } }: PageProps) => {
  return (
    <Suspense fallback={<SkillsSkeleton length={SkillsCounts.get(skill)!} />}>
      {/* @ts-expect-error Server Component */}
      <SkillsContent skill={skill} />
    </Suspense>
  );
};

export default Page;
