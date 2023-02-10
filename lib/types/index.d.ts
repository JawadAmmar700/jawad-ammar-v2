type subSkillType = {
  lng: string;
  percent: string;
};

type Slide = {
  folder: string;
  imagesLength: string;
};

type Technology = {
  name: string;
  color: string;
};

type ProjectType = {
  id: string;
  name: string;
  src: string;
  repo: string;
  ref: string;
  youtube: string;
  slide: Slide;
  technology: Technology[];
  description: string;
  site?: string;
  span: string;
};

type Skills = {
  lng: string;
  percent: string;
  subSkill: Array<subSkillType>;
};

type Slides = {
  folder: string;
  imagesLength: string;
};

type ProjectSocialProps = {
  repo: string;
  site: string;
  youtube: string;
};

type OverflowImageProps = {
  src: string;
  name: string;
  description: string;
};

type ProjectDetailProps = {
  name: string;
  description: string;
  technology: Technology[];
};

type CardsProps = {
  data: ProjectType[];
};
