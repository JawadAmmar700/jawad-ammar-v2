import SkillsContent from "./skills-content";

const SKills = ({ skills }: { skills: Skills[] }) => {
  return (
    <div id="Skills" className="w-full relative  text-slate-400">
      <div className="p-5 flex flex-col w-full  ">
        <p className="text-2xl font-bold">Skills:</p>
        <SkillsContent skills={skills} />
      </div>
    </div>
  );
};

export default SKills;
