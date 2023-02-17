export const tabs = [
  {
    name: "React",
    href: "react",
  },
  {
    name: "Next",
    href: "next",
  },
  {
    name: "Node",
    href: "node",
  },
];

export const mainRoutes = [
  {
    name: "Profile",
    href: "",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Showcase",
    href: "showcase",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export const skillsRoutes = [
  {
    name: "Front",
    href: "front-end",
  },
  {
    name: "Back",
    href: "back-end",
  },
  {
    name: "Database",
    href: "database",
  },
  {
    name: "Control",
    href: "control-version",
  },
  {
    name: "Hosting",
    href: "hosting",
  },
];

export const ProjectDetailsTabs = [
  "Description",
  "Screenshots",
  "Technologies",
];

const test = {
  "front-end": 8,
  "back-end": 5,
  database: 5,
  "control-version": 2,
  hosting: 3,
};

export const SkillsCounts = new Map<string, number>(Object.entries(test));
