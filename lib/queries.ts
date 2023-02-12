import { notFound } from "next/navigation";
import prisma from "./prisma";
import { ObjectId } from "mongodb";

const projectsQuery = async () => {
  const projects = await prisma.data.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return projects;
};

const skillsQuery = async () => {
  const skills = await prisma.skills.findMany();
  return skills;
};

const projectQuery = async (id: string) => {
  const isValid = ObjectId.isValid(id);
  const project =
    isValid &&
    (await prisma.data.findFirst({
      where: {
        id: id,
      },
    }));
  if (!project) {
    notFound();
  }
  return project;
};

const projectSlug = async (slug: string) => {
  const project = await prisma.data.findMany({
    where: {
      ref: slug,
    },
  });
  if (project.length === 0 || !project) {
    notFound();
  }
  return project;
};

export { projectsQuery, skillsQuery, projectQuery, projectSlug };
