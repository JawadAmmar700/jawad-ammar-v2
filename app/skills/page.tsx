import { skillsQuery } from "../../lib/queries";

const Skills = async () => {
  const skills = await skillsQuery();

  return (
    <div className="flex flex-col items-start sm:py-10 justify-center md:justify-start md:px-12 w-full h-full">
      <h1 className="text-slate-400 text-xs md:text-sm  w-full sm:max-w-lg font-bold">
        A full stack developer is a highly versatile individual who has
        expertise in both front-end and back-end technologies. Key skills for a
        full stack developer include a deep understanding of HTML, CSS, and
        JavaScript for front-end development, and proficiency in at least one
        back-end programming language such as Python, Ruby on Rails, or Node.js.
        Additionally, experience with databases such as MySQL, MongoDB, or
        PostgreSQL and their integration with the back-end is crucial. A full
        stack developer should also have a good understanding of server-side
        frameworks and web application architecture, as well as the ability to
        write efficient and scalable code. Furthermore, strong knowledge of
        modern front-end frameworks such as React, Angular, or Vue.js are
        valuable skills. Good communication, problem-solving, and time
        management skills are also essential, as full stack developers work on a
        wide range of tasks and must be able to effectively coordinate with
        cross-functional teams.
      </h1>
      <h3 className="text-slate-400 text-xs w-full sm:max-w-lg font-bold mt-5">
        Check out my skills using the links below
      </h3>
    </div>
  );
};

export default Skills;
