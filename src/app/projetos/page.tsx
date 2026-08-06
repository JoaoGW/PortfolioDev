"use client";

import { useState } from "react";
import { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projectCard";
import { TechFilterButton } from "@/components/techFilterButton";
import { useLanguage } from "@/contexts/language-context";

import ReactLogo from "../../assets/Logos/logo-react-512.webp";
import ReactNativeLogo from "../../assets/Logos/react-native_logo.webp";
import PythonLogo from "../../assets/Logos/python_logo.webp";
import TypeScriptLogo from "../../assets/Logos/typescript-512.webp";
import JavaScriptLogo from "../../assets/Logos/logo-javascript-512.webp";
import NextJSLogo from "../../assets/Logos/next-js-logo.webp";
import VueJSLogo from "../../assets/Logos/vue-js-512.webp";
import ExpoLogo from "../../assets/Logos/expo_logo.webp";
import NodeJSLogo from "../../assets/Logos/logo-node-js-512.webp";
import GCPLogo from "../../assets/Logos/googlecloud_logo.webp";
import MongoDBLogo from "../../assets/Logos/mongodb-512.webp";
import EZTripBG from "../../assets/Projetos/plane-6511878_1920.webp";
import SrGeeBG from "../../assets/Projetos/WB_description.webp";
import ZapZap2 from "../../assets/Projetos/whatsapp-2.webp";
import CarSalesman from "../../assets/Projetos/carseller.webp";

type TechFilter = {
  logo: StaticImageData;
  name: string;
};

type Project = {
  cardTitlte: "guideAI" | "srGee" | "newWhatsapp" | "carSeller";
  bgImageUrl: StaticImageData;
  imageCredits: string;
  technologies: string[];
  projectUrl: string;
};

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const techFilters: TechFilter[] = [
  { logo: ReactLogo, name: "React" },
  { logo: ReactNativeLogo, name: "React Native" },
  { logo: PythonLogo, name: "Python" },
  { logo: TypeScriptLogo, name: "TypeScript" },
  { logo: JavaScriptLogo, name: "JavaScript" },
  { logo: NextJSLogo, name: "Next.js" },
  { logo: VueJSLogo, name: "Vue.js" },
  { logo: ExpoLogo, name: "Expo" },
  { logo: NodeJSLogo, name: "Node.js" },
  { logo: GCPLogo, name: "GCP" },
  { logo: MongoDBLogo, name: "MongoDB" },
];

const projects: Project[] = [
  {
    cardTitlte: "guideAI",
    bgImageUrl: EZTripBG,
    imageCredits: "Image by Stuart Bailey from Pixabay",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "OpenAI",
      "Firebase",
      "GCP",
      "Node.js",
    ],
    projectUrl: "https://github.com/JoaoGW/GuiaTuristico",
  },
  {
    cardTitlte: "srGee",
    bgImageUrl: SrGeeBG,
    imageCredits: "Image by Stuart Bailey from Pixabay",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "OpenAI",
      "GraphQL",
      "GitHub API",
      "Node.js",
    ],
    projectUrl: "https://github.com/JoaoGW/SrGee_VirtualAssistant",
  },
  {
    cardTitlte: "newWhatsapp",
    bgImageUrl: ZapZap2,
    imageCredits: "Image by Portal G1",
    technologies: ["Flask", "Python", "SQL Alchemy", "SQLite", "HTML", "CSS"],
    projectUrl: "https://github.com/JoaoGW/NovoWhatsApp",
  },
  {
    cardTitlte: "carSeller",
    bgImageUrl: CarSalesman,
    imageCredits: "Image by Auto | HowStuffWorks",
    technologies: [
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
    ],
    projectUrl: "https://github.com/JoaoGW/CarSellerVue",
  },
];

export default function Projetos() {
  const { messages } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("");

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.technologies.includes(activeFilter))
    : projects;

  const handleFilter = (technology: string) => {
    setActiveFilter((currentFilter) =>
      currentFilter === technology ? "" : technology,
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <HeaderTop />
      <main className="pb-36 lg:pb-16">
        <section className="relative overflow-hidden px-5 pb-32 pt-36 sm:px-8 lg:px-12 lg:pb-24 lg:pt-44">
          <div className="pointer-events-none absolute inset-x-5 bottom-0 top-28 border border-white/10 sm:inset-x-8 lg:inset-x-12" />
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto max-w-7xl"
          >
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-orange">
              <span>01</span>
              <span className="h-px w-12 bg-accent-orange" />
              <span>{messages.projects.hoverText}</span>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-16">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-6xl md:text-8xl">
                {messages.projects.pageTitle}
              </h1>
              <p className="max-w-xl text-base leading-7 text-neutral-400 lg:justify-self-end lg:text-right md:text-lg">
                {messages.home.projects.description}
              </p>
            </div>
          </motion.div>
        </section>

        <section className="bg-[#121212] px-5 py-12 sm:px-8 lg:px-12 lg:py-16" aria-labelledby="project-filters-title">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 md:flex-row md:items-end">
              <h2 id="project-filters-title" className="max-w-3xl text-2xl font-semibold tracking-[-0.045em] text-white md:text-3xl">
                {messages.projects.filterTitle}
              </h2>
              {activeFilter ? (
                <span className="text-sm text-neutral-400" aria-live="polite">
                  {activeFilter}
                </span>
              ) : null}
            </div>
            <div className="mt-7 flex flex-wrap gap-3" aria-label={messages.projects.filterTitle}>
              {techFilters.map((technology) => (
                <TechFilterButton
                  key={technology.name}
                  techLogo={technology.logo}
                  techName={technology.name}
                  isActive={activeFilter === technology.name}
                  filterAction={() => handleFilter(technology.name)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="projects-list-title">
          <div className="mx-auto max-w-7xl">
            <h2 id="projects-list-title" className="sr-only">
              {messages.projects.pageTitle}
            </h2>
            {filteredProjects.length > 0 ? (
              <div className="grid gap-5 lg:grid-cols-2">
                {filteredProjects.map((project, index) => {
                  const projectContent = messages.projects.cards[project.cardTitlte];

                  return (
                    <motion.article
                      key={project.cardTitlte}
                      {...sectionMotion}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    >
                      <ProjectCard
                        cardTitlte={projectContent.title}
                        cardDescription={projectContent.description}
                        bgImageUrl={project.bgImageUrl}
                        imageCredits={project.imageCredits}
                        technologies={project.technologies}
                        projectUrl={project.projectUrl}
                        index={`0${index + 1}`}
                        repositoryLabel={messages.home.projects.repository}
                      />
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <div className="border border-white/10 py-16 text-center" role="status" aria-live="polite">
                <p className="text-neutral-400">
                  {messages.projects.emptyTextPrefix}{" "}
                  <span className="font-semibold text-white">{activeFilter}</span>.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Navbar />
    </div>
  );
}
