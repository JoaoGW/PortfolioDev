"use client";
import { useState } from "react";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TechFilterButton } from "@/components/techFilterButton";
import { ProjectCard } from "@/components/projectCard";

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

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <div>
      <HeaderTop />

      <section className="mt-[-5] mb-[-160]">
        <TextHoverEffect text="PROJETOS" size="large" />
      </section>
      <section className="flex flex-col bg-slate-900 p-16">
        <div className="flex justify-center">
          <span className="font-bold text-3xl">
            Selecione uma Tecnologia que você gostaria de ver presente nos
            projetos...
          </span>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-8 w-[70%] mt-8 mx-auto">
          <TechFilterButton
            techLogo={ReactLogo}
            techName="React"
            filterAction={() => setActiveFilter("React")}
          />
          <TechFilterButton
            techLogo={ReactNativeLogo}
            techName="React Native"
            filterAction={() => setActiveFilter("React Native")}
          />
          <TechFilterButton
            techLogo={PythonLogo}
            techName="Python"
            filterAction={() => setActiveFilter("Python")}
          />
          <TechFilterButton
            techLogo={TypeScriptLogo}
            techName="TypeScript"
            filterAction={() => setActiveFilter("TypeScript")}
          />
          <TechFilterButton
            techLogo={JavaScriptLogo}
            techName="JavaScript"
            filterAction={() => setActiveFilter("JavaScript")}
          />
          <TechFilterButton
            techLogo={NextJSLogo}
            techName="Next.js"
            filterAction={() => setActiveFilter("Next.js")}
          />
          <TechFilterButton
            techLogo={VueJSLogo}
            techName="Vue.js"
            filterAction={() => setActiveFilter("Vue.js")}
          />
          <TechFilterButton
            techLogo={ExpoLogo}
            techName="Expo"
            filterAction={() => setActiveFilter("Expo")}
          />
          <TechFilterButton
            techLogo={NodeJSLogo}
            techName="Node.js"
            filterAction={() => setActiveFilter("Node.js")}
          />
          <TechFilterButton
            techLogo={GCPLogo}
            techName="GCP"
            filterAction={() => setActiveFilter("GCP")}
          />
          <TechFilterButton
            techLogo={MongoDBLogo}
            techName="MongoDB"
            filterAction={() => setActiveFilter("MongoDB")}
          />
        </div>
        <div className="mt-12 flex flex-row justify-center gap-8 flex-wrap">
          <ProjectCard
            cardTitlte="Guia Turístico com IA"
            cardDescription="Aplicativo mobile para ajudar viajantes a explorarem o mundo de forma inteligente e personalizada.
            Integra tecnologias modernas como Inteligência Artificial na API da OpenAI e Firebase."
            bgImageUrl={EZTripBG}
            hoverImageurl={
              "https://miro.medium.com/1*a-HMmQFQNC76zCZBZfFgJg.gif"
            }
            imageCredits="Image by Stuart Bailey from Pixabay"
            technologies={[
              "React Native",
              "TypeScript",
              "Expo",
              "OpenAI",
              "Firebase",
            ]}
            projectUrl="https://github.com/JoaoGW/GuiaTuristico"
          />
          <ProjectCard
            cardTitlte="Sr. Gee"
            cardDescription='Aplicação Web para ajudar Devs a melhoraram seu código com recomendações um tanto quanto "agressivas". Integra as tecnologias da Inteligência Artificial na API da OpenAI e REST API do GitHub.'
            bgImageUrl={SrGeeBG}
            hoverImageurl={
              "https://miro.medium.com/1*kRpcLblCI85FYhvmTxjt3Q.gif"
            }
            imageCredits="Image by Stuart Bailey from Pixabay"
            technologies={[
              "Next.js",
              "TypeScript",
              "OpenAI",
              "GraphQL",
              "GitHub API",
            ]}
            projectUrl="#"
          />
        </div>
      </section>

      <Navbar />
    </div>
  );
}
