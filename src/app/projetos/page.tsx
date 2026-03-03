"use client";
import { useState } from "react";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TechFilterButton } from "@/components/techFilterButton";
import { ProjectCard } from "@/components/projectCard";
import { StaticImageData } from "next/image";

import ReactLogo from "../../assets/Logos/logo-react-512.png";
import ReactNativeLogo from "../../assets/Logos/react-native_logo.png";
import PythonLogo from "../../assets/Logos/python_logo.png";
import TypeScriptLogo from "../../assets/Logos/typescript-512.png";
import JavaScriptLogo from "../../assets/Logos/logo-javascript-512.png";
import NextJSLogo from "../../assets/Logos/next-js-logo.webp";
import VueJSLogo from "../../assets/Logos/vue-js-512.png";
import ExpoLogo from "../../assets/Logos/expo_logo.png";
import NodeJSLogo from "../../assets/Logos/logo-node-js-512.png";
import GCPLogo from "../../assets/Logos/googlecloud_logo.png";
import MongoDBLogo from "../../assets/Logos/mongodb-512.png";
import EZTripBG from "../../assets/Projetos/plane-6511878_1920.jpg";
import SrGeeBG from "../../assets/Projetos/WB_description.png";
import ZapZap2 from "../../assets/Projetos/whatsapp-2.jpg";
import CarSalesman from "../../assets/Projetos//carseller.jpg";

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
    cardTitlte: "Guia Turístico com IA",
    cardDescription:
      "Aplicativo mobile para ajudar viajantes a explorarem o mundo de forma inteligente e personalizada. Integra tecnologias modernas como Inteligência Artificial na API da OpenAI e Firebase.",
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
    cardTitlte: "Sr. Gee - Assistente Dev",
    cardDescription:
      'Aplicação Web para ajudar Devs a melhoraram seu código com recomendações um tanto quanto "agressivas". Integra as tecnologias da Inteligência Artificial na API da OpenAI e REST API do GitHub.',
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
    cardTitlte: "Novo WhatsApp",
    cardDescription:
      "Clone melhorado do WhatsApp, utilizando tecnologias como Python, Flask, RabbitMQ, bcrypt, SQL Alchemy e SocketIO.",
    bgImageUrl: ZapZap2,
    imageCredits: "Image by Portal G1",
    technologies: ["Flask", "Python", "SQL Alchemy", "SQLite", "HTML", "CSS"],
    projectUrl: "https://github.com/JoaoGW/NovoWhatsApp",
  },
  {
    cardTitlte: "Car Seller",
    cardDescription:
      "Um dos meus primeiros projetos de uma webpage para vendas de automoveis de todos os tipos e custos. Feito em VueJS 3",
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
        <h1 className="sr-only">Projetos de João Pedro Ribeiro</h1>
        <section className="mt-[-5] mb-[-160]" aria-hidden="true">
          <TextHoverEffect text="PROJETOS" size="large" />
        </section>
        <section className="flex flex-col bg-slate-900 p-16 pb-36">
          <h2 className="sr-only">Filtrar projetos por tecnologia</h2>
          <div className="flex justify-center">
            <span className="font-bold text-3xl">
              Selecione uma Tecnologia que você gostaria de ver presente no
              projeto...
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
                  cardTitlte={project.cardTitlte}
                  cardDescription={project.cardDescription}
                  bgImageUrl={project.bgImageUrl}
                  hoverImageurl=""
                  imageCredits={project.imageCredits}
                  technologies={project.technologies}
                  projectUrl={project.projectUrl}
                />
              ))
            ) : (
              <p className="text-neutral-400 text-lg mt-8">
                Nenhum projeto encontrado com a tecnologia{" "}
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
