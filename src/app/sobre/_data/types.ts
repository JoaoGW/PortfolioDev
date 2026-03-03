export type SobreTooltips = {
  typescript: string;
  javascript: string;
  python: string;
  nodejs: string;
  react: string;
  mongodb: string;
  nextjs: string;
  docker: string;
  firebase: string;
  git: string;
  jest: string;
  vue: string;
  aws: string;
  googlecloud: string;
};

export type SobreAcademicCards = {
  pucCourse: string;
  pucLevel: string;
  fiapCourse: string;
  fiapLevel: string;
  harvardCourse: string;
  harvardLevel: string;
};

export type SobreAcademic = {
  puc: {
    courseType: string;
    courseName: string;
    description: string;
    skills: string[];
    certificates: { name: string; issuedDate: string; link: string }[];
    activities: { title: string; description: string; period: string }[];
  };
  fiap: {
    courseType: string;
    courseName: string;
    description: string;
    skills: string[];
    certificates: { name: string; issuedDate: string; link: string }[];
    activities: { title: string; description: string; period: string }[];
  };
  harvard: {
    courseType: string;
    courseName: string;
    description: string;
    skills: string[];
  };
};

export type SobreExperience = {
  fiverr: {
    description: string;
    responsibilities: {
      title: string;
      description: string;
      achievements: string[];
    }[];
  };
  culti: {
    role: string;
    description: string;
    responsibilities: {
      title: string;
      description: string;
      achievements: string[];
    }[];
    achievements: string[];
  };
};

export type SobreLocaleData = {
  tooltips: SobreTooltips;
  academicCards: SobreAcademicCards;
  academic: SobreAcademic;
  experience: SobreExperience;
};
