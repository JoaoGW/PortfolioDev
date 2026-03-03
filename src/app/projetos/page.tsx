"use client";
import { useState } from "react";

import { StaticImageData } from "next/image";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TechFilterButton } from "@/components/techFilterButton";
import { ProjectCard } from "@/components/projectCard";

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
import CarSalesman from "../../assets/Projetos//carseller.webp";

type TechFilter = {
  logo: StaticImageData;
  name: string;
};

type Project = {
  cardTitlte: string;
  cardDescription: string;
  bgImageUrl: StaticImageData | string;
  imageCredits: string;
  technologies: string[];
  projectUrl: string;
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
    cardDescription: "guideAI",
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
    cardDescription: "srGee",
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
    cardDescription: "newWhatsapp",
    bgImageUrl: ZapZap2,
    imageCredits: "Image by Portal G1",
    technologies: ["Flask", "Python", "SQL Alchemy", "SQLite", "HTML", "CSS"],
    projectUrl: "https://github.com/JoaoGW/NovoWhatsApp",
  },
  {
    cardTitlte: "carSeller",
    cardDescription: "carSeller",
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
  const [activeFilter, setActiveFilter] = useState<string>("");

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.technologies.includes(activeFilter))
    : projects;

  const handleFilter = (tech: string) => {
    setActiveFilter((prev) => (prev === tech ? "" : tech));
  };

  return (
    <div>
      <HeaderTop />
      <main>
        <h1 className="sr-only">{messages.projects.pageTitle}</h1>
        <section className="mt-[-5] mb-[-160]" aria-hidden="true">
          <TextHoverEffect text={messages.projects.hoverText} size="large" />
        </section>
        <section className="flex flex-col bg-slate-900 p-16 pb-36">
          <h2 className="sr-only">Filtrar projetos por tecnologia</h2>
          <div className="flex justify-center">
            <span className="font-bold text-3xl">
              {messages.projects.filterTitle}
            </span>
          </div>
          <div className="flex flex-row justify-center flex-wrap gap-8 w-[70%] mt-8 mx-auto">
            {techFilters.map((tech) => (
              <TechFilterButton
                key={tech.name}
                techLogo={tech.logo}
                techName={tech.name}
                isActive={activeFilter === tech.name}
                filterAction={() => handleFilter(tech.name)}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-row justify-center gap-8 flex-wrap">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.cardTitlte}
                  cardTitlte={
                    messages.projects.cards[
                      project.cardTitlte as keyof typeof messages.projects.cards
                    ].title
                  }
                  cardDescription={
                    messages.projects.cards[
                      project.cardDescription as keyof typeof messages.projects.cards
                    ].description
                  }
                  bgImageUrl={project.bgImageUrl}
                  hoverImageurl=""
                  imageCredits={project.imageCredits}
                  technologies={project.technologies}
                  projectUrl={project.projectUrl}
                />
              ))
            ) : (
              <p className="text-neutral-400 text-lg mt-8">
                {messages.projects.emptyTextPrefix}{" "}
                <span className="text-white font-semibold">{activeFilter}</span>
                .
              </p>
            )}
          </div>
        </section>
      </main>

      <Navbar />
    </div>
  );
}
