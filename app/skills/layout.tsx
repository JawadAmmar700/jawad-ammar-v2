import Links from "../../components/links";
import { skillsRoutes } from "../../lib/constants";

const SkillsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-5 w-full h-full flex flex-col">
      <h1 className="text-slate-400 font-bold flex-1 px-12">{children}</h1>
      <div className="flex-none w-full sm:p-5 py-5 px-5  flex space-x-2 ">
        <Links links={skillsRoutes} home="skills" />
      </div>
    </div>
  );
};

export default SkillsLayout;
