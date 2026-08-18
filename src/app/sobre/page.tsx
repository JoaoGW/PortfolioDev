"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { SocialMediaIcons } from "@/components/socialMediaIcons";
import { PresentationTopics } from "@/components/presentationTopics";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { useLanguage } from "@/contexts/language-context";
import { loadSobreLocale, type SobreLocaleData } from "./_data";

import ProfilePicture from "../../assets/profile.webp";
import DockerLogo from "../../assets/Logos/docker-512.webp";
import ExpoLogo from "../../assets/Logos/expo_logo.webp";
import FirebaseLogo from "../../assets/Logos/firebase-logo.webp";
import GitLogo from "../../assets/Logos/Git-logo.webp";
import AwsLogo from "../../assets/Logos/aws_logo.webp";
import GoogleCloudLogo from "../../assets/Logos/googlecloud_logo.webp";
import JavaScriptLogo from "../../assets/Logos/logo-javascript-512.webp";
import JestLogo from "../../assets/Logos/jest-logo.webp";
import NodeLogo from "../../assets/Logos/logo-node-js-512.webp";
import NestJSLogo from "@/assets/Logos/NestJS.svg";
import ReactLogo from "../../assets/Logos/logo-react-512.webp";
import ReactNativeLogo from "../../assets/Logos/react-native_logo.webp";
import NextjsLogo from "../../assets/Logos/next-js-logo.webp";
import TypeScriptLogo from "../../assets/Logos/typescript-512.webp";
import MongodbLogo from "../../assets/Logos/mongodb-512.webp";
import PythonLogo from "../../assets/Logos/python_logo.webp";
import VueLogo from "../../assets/Logos/vue-js-512.webp";
import PUCLogo from "../../assets/Instituicoes/pucsp-logo.webp";
import FIAPLogo from "../../assets/Instituicoes/fiap_logo.webp";
import USPLogo from "../../assets/Instituicoes/USP_Logo.png";
import CultiLogo from "../../assets/Empresas/cultivare_logo.webp";
import FiverrLogo from "../../assets/Empresas/fiverr_logo.webp";
import MultscanLogoDark from "../../assets/Empresas/MultscanLogoDark.png";
import EZTripImage from "../../assets/Projetos/plane-6511878_1920.webp";
import SrGeeImage from "../../assets/Projetos/WB_description.webp";
import WhatsappImage from "../../assets/Projetos/whatsapp-2.webp";
import CarSellerImage from "../../assets/Projetos/carseller.webp";
import HTMLLogo from "@/assets/Logos/html.png";
import CSSLogo from "@/assets/Logos/css.webp";
import TailwindcssLogo from "@/assets/Logos/tailwindcss.png";
import PostgresqlLogo from "@/assets/Logos/PostgreSQL.png";
import MysqlLogo from "@/assets/Logos/mysql.svg";
import RedisLogo from "@/assets/Logos/Redis.png";
import JenkinsLogo from "@/assets/Logos/Jenkins.png";
import PlaywrightLogo from "@/assets/Logos/playwright.webp";
import RabbitmqLogo from "@/assets/Logos/rabbitmq.webp";
import OpenaiLogo from "@/assets/Logos/openai.svg";
import ExpressJSLogo from "@/assets/Logos/expressjs.webp";
import SQLiteLogo from "@/assets/Logos/sqlite.png";
import StripeLogo from "@/assets/Logos/stripe.png";

import {
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  FileDown,
  Github,
  StepForward,
} from "lucide-react";

const InstitutionModal = dynamic(
  () =>
    import("@/components/institutionModal").then((mod) => mod.InstitutionModal),
  { ssr: false },
);

const EnterpriseModal = dynamic(
  () =>
    import("@/components/enterpriseModal").then((mod) => mod.EnterpriseModal),
  { ssr: false },
);

const DeferredTechStackSection = dynamic(
  () => import("../../components/deferred-tech-stack-section"),
  {
    ssr: false,
  },
);

const DeferredAvailabilitySection = dynamic(
  () => import("../../components/deferred-availability-section"),
  {
    ssr: false,
  },
);

type curriculumFileTypes = {
  fileUrl: string;
  fileName: string;
};

type Project = {
  id: string;
  image: StaticImageData;
  repository: string;
  technologies: string[];
  title: string;
  description: string;
};

type SectionLeadProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const tickerTechnologyLogos: Record<string, StaticImageData | undefined> = {
  "Web (React)": ReactLogo,
  "Mobile (React Native & Expo)": ReactNativeLogo,
  Cloud: AwsLogo,
  APIs: NodeLogo,
  React: ReactLogo,
  "React Native": ReactNativeLogo,
  Expo: ExpoLogo,
  TypeScript: TypeScriptLogo,
  JavaScript: JavaScriptLogo,
  Python: PythonLogo,
  "Node.js": NodeLogo,
  NestJS: NestJSLogo,
  "Express.js": ExpressJSLogo,
  "Next.js": NextjsLogo,
  Docker: DockerLogo,
  AWS: AwsLogo,
  "Google Cloud Platform": GoogleCloudLogo,
  Git: GitLogo,
  "GitHub Actions": GitLogo,
  Firebase: FirebaseLogo,
  MongoDB: MongodbLogo,
  "Vue.js": VueLogo,
  Jest: JestLogo,
  HTML: HTMLLogo,
  CSS: CSSLogo,
  "Tailwind CSS": TailwindcssLogo,
  PostgreSQL: PostgresqlLogo,
  MySQL: MysqlLogo,
  Redis: RedisLogo,
  Jenkins: JenkinsLogo,
  Playwright: PlaywrightLogo,
  RabbitMQ: RabbitmqLogo,
  OpenAI: OpenaiLogo,
  SQLite: SQLiteLogo,
  Stripe: StripeLogo,
};

function SectionLead({ index, label, title, description }: SectionLeadProps) {
  return (
    <motion.div {...sectionMotion} className="mb-10 md:mb-14">
      <div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-orange">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent-orange" />
        <span>{label}</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-16">
        <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-7 text-neutral-400 lg:justify-self-end lg:text-right md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Sobre() {
  const { messages, language } = useLanguage();
  const home = messages.home;
  const projectCarouselRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState<"puc" | "fiap" | "usp" | null>(
    null,
  );
  const [experienceCard, setExperienceCard] = useState<
    "culti" | "fiverr" | "multscan" | null
  >(null);
  const [showTechStackSection, setShowTechStackSection] = useState(false);
  const [showAvailabilitySection, setShowAvailabilitySection] = useState(false);
  const route = useRouter();

  const projects: Project[] = [
    {
      id: "guide-ai",
      image: EZTripImage,
      repository: "https://github.com/JoaoGW/GuiaTuristico",
      technologies: ["React Native", "Expo", "OpenAI", "Firebase"],
      title: messages.projects.cards.guideAI.title,
      description: messages.projects.cards.guideAI.description,
    },
    {
      id: "sr-gee",
      image: SrGeeImage,
      repository: "https://github.com/JoaoGW/SrGee_VirtualAssistant",
      technologies: ["Next.js", "TypeScript", "OpenAI", "GitHub API"],
      title: messages.projects.cards.srGee.title,
      description: messages.projects.cards.srGee.description,
    },
    {
      id: "new-whatsapp",
      image: WhatsappImage,
      repository: "https://github.com/JoaoGW/NovoWhatsApp",
      technologies: ["Python", "Flask", "RabbitMQ", "SocketIO"],
      title: messages.projects.cards.newWhatsapp.title,
      description: messages.projects.cards.newWhatsapp.description,
    },
    {
      id: "car-seller",
      image: CarSellerImage,
      repository: "https://github.com/JoaoGW/CarSellerVue",
      technologies: ["Vue.js", "JavaScript", "TypeScript", "Node.js"],
      title: messages.projects.cards.carSeller.title,
      description: messages.projects.cards.carSeller.description,
    },
  ];

  useEffect(() => {
    const techStackTimer = window.setTimeout(() => {
      setShowTechStackSection(true);
    }, 600);

    const availabilityTimer = window.setTimeout(() => {
      setShowAvailabilitySection(true);
    }, 1200);

    return () => {
      window.clearTimeout(techStackTimer);
      window.clearTimeout(availabilityTimer);
    };
  }, []);

  const [sobreText, setSobreText] = useState<SobreLocaleData | null>(null);

  useEffect(() => {
    let isMounted = true;

    setSobreText(null);

    loadSobreLocale(language)
      .then((data) => {
        if (isMounted) {
          setSobreText(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setSobreText(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [language]);

  const handleDownload = async ({ fileUrl, fileName }: curriculumFileTypes) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Erro na resposta da requisição");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro no Download: ", error);
      alert(messages.home.downloadError);
    }
  };

  const scrollProjects = (direction: -1 | 1) => {
    const carousel = projectCarouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: carousel.clientWidth * direction * 0.8,
      behavior: "smooth",
    });
  };

  if (!sobreText) {
    return (
      <div className="relative min-h-screen">
        <HeaderTop />
        <div className="pt-40 pb-20 text-center">
          <p className="text-xl font-semibold">Carregando conteúdo...</p>
        </div>
        <Navbar />
      </div>
    );
  }

  const educationEntries = [
    {
      id: "puc" as const,
      institution: "PUC-SP",
      program: sobreText.academicCards.pucCourse,
      status: sobreText.academicCards.pucLevel,
    },
    {
      id: "fiap" as const,
      institution: "FIAP",
      program: sobreText.academicCards.fiapCourse,
      status: sobreText.academicCards.fiapLevel,
    },
    {
      id: "usp" as const,
      institution: "USP",
      program: sobreText.academicCards.uspCourse,
      status: sobreText.academicCards.uspLevel,
    },
  ];

  const experienceEntries = [
    {
      id: "multscan" as const,
      company: home.experience.cards[0]?.company,
      role: sobreText.experience.multscan.role,
      period: home.experience.cards[0]?.period,
      description: home.experience.cards[0]?.description,
      logo: MultscanLogoDark,
      logoAlt: "Logotipo da Multscan",
    },
    {
      id: "culti" as const,
      company: home.experience.cards[1]?.company,
      role: sobreText.experience.culti.role,
      period: home.experience.cards[1]?.period,
      description: home.experience.cards[1]?.description,
      logo: CultiLogo,
      logoAlt: "Logotipo da Cultivare",
    },
    {
      id: "fiverr" as const,
      company: home.experience.cards[2]?.company,
      role: messages.about.fiverrRole,
      period: home.experience.cards[2]?.period,
      description: home.experience.cards[2]?.description,
      logo: FiverrLogo,
      logoAlt: "Logotipo da Fiverr",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeaderTop />
      <HeroHighlight
        className="w-full"
        containerClassName="h-auto min-h-[32rem]"
      >
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 pb-8 pt-28 sm:px-8 lg:flex-row lg:px-12 lg:pt-32">
          <div className="relative mx-auto w-full max-w-[18rem] shrink-0 lg:mx-0 lg:w-[375px] lg:max-w-none">
            <div className="absolute -inset-3 border border-accent-orange/40" />
            <Image
              src={ProfilePicture}
              alt="Minha Foto de Perfil"
              priority
              sizes="(max-width: 1023px) 72vw, 375px"
              width={375}
              height={375}
              className="relative aspect-square h-auto w-full object-cover lg:h-[375px] lg:w-[375px]"
            />
            <span className="absolute bottom-4 left-4 bg-[#0A0A0A] px-3 py-2 text-xs font-semibold tracking-[0.16em] text-white">
              JOÃO PEDRO RIBEIRO
            </span>
          </div>
          <div className="flex w-full min-w-0 flex-1 flex-col text-white lg:ml-24">
            <div className="flex flex-row mb-6 items-center gap-2">
              <span className="text-accent-orange font-bold text-2xl">
                {"<span>"}
              </span>
              <span className="font-semibold text-xl">
                {messages.about.greeting}
              </span>
              <span className="text-accent-orange font-bold text-2xl">
                {"</span>"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-3xl">
                {messages.about.roleLine1Prefix}{" "}
                <Highlight className="text-white font-bold text-4xl">
                  {"{ Full-Stack }"}
                </Highlight>{" "}
                &
              </span>
              <span className="font-semibold text-3xl">
                {messages.about.roleLine2Prefix}{" "}
                <Highlight className="text-white font-bold text-4xl">
                  {"{ Mobile Full-Stack }"}
                </Highlight>
              </span>
            </div>
            <div className="flex flex-row mt-6">
              <p className="font-semibold text-xl">
                <span className="text-accent-orange font-bold text-2xl mr-2">
                  {"<p>"}
                </span>
                {messages.about.introParagraph.beforeWeb}{" "}
                <Highlight className="text-white">
                  {messages.about.introParagraph.web}
                </Highlight>
                , {messages.about.introParagraph.beforeHybrid}{" "}
                <Highlight className="text-white">
                  {messages.about.introParagraph.hybrid}
                </Highlight>
                , {messages.about.introParagraph.beforeDevOps}{" "}
                <Highlight className="text-white">
                  {messages.about.introParagraph.devOps}
                </Highlight>
                {messages.about.introParagraph.after}
                <span className="text-accent-orange font-bold text-2xl ml-2">
                  {"</p>"}
                </span>
              </p>
            </div>
          </div>
        </section>
      </HeroHighlight>
      <div className="overflow-hidden border-y border-white/10 bg-[#121212] py-4">
        <div className="home-marquee home-marquee--technologies flex min-w-max gap-10 text-sm font-semibold tracking-[0.18em] text-neutral-400 motion-reduce:transform-none">
          {[...home.software.techs, ...home.software.techs].map((tech, index) => {
            const technologyLogo = tickerTechnologyLogos[tech.title];

            return (
              <span key={`${tech.title}-${index}`} className="inline-flex items-center gap-10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 bg-white/5 p-1">
                  {technologyLogo ? (
                    <Image
                      src={technologyLogo}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-sm bg-accent-orange/70" />
                  )}
                </span>
                <span>{tech.title.toUpperCase()}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
              </span>
            );
          })}
        </div>
      </div>
      <TracingBeam>
        <section id="perfil" className="bg-slate-900">
          <TextHoverEffect
            text={messages.about.summaryTitle}
            size="xtralarge"
          />
          <div className="mx-5 mt-[-80] pb-8 text-center md:mx-20">
            <span className="text-center text-3xl font-bold">
              {messages.about.summarySubtitle}
            </span>
            <p className="mt-5 text-lg">{messages.about.summaryParagraph1}</p>
            <div className="mt-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-orange">
                {messages.about.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(255_107_0_/_0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[0]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(255_107_0_/_0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[1]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(255_107_0_/_0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[2]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(255_107_0_/_0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[3]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(255_107_0_/_0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[4]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(255_107_0_/_0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[5]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg max-w-[75%] text-center">
                {messages.about.summaryParagraph2}
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#0A0A0A] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="03"
              label={home.sections.projects}
              title={messages.projects.pageTitle}
              description={home.projects.description}
            />
            <div className="mb-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label={home.projects.previous}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent-orange hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label={home.projects.next}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent-orange hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div
              ref={projectCarouselRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-width:thin]"
              aria-label={home.sections.projects}
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  className="group relative flex min-h-[33rem] min-w-[84%] snap-start flex-col overflow-hidden border border-white/10 bg-[#121212] sm:min-w-[30rem] lg:min-w-[35rem]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-xs font-semibold tracking-[0.18em] text-accent-orange">
                        0{index + 1}
                      </span>
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${home.projects.repository}: ${project.title}`}
                        className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-accent-orange hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                    <h3 className="mt-8 text-3xl font-semibold tracking-[-0.05em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-8">
                      {project.technologies.map((technology) => (
                        <span
                          key={`${project.id}-${technology}`}
                          className="border border-white/15 px-2.5 py-1 text-xs text-neutral-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex justify-end">
              <Link
                href="/projetos"
                className="inline-flex min-h-11 items-center gap-2 border-b border-accent-orange pb-2 text-sm font-semibold text-white transition-colors hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
              >
                {home.projects.allProjects}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
        {showTechStackSection ? (
          <DeferredTechStackSection
            tooltips={sobreText.tooltips}
            categories={messages.about.techStackCategories}
            hint={messages.about.techStackHint}
          />
        ) : null}
        <section id="formacao" className="bg-[#121212] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="06"
              label={home.sections.education}
              title={messages.about.academicTitle}
              description={home.education.description}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {educationEntries.map((education, index) => (
                <motion.button
                  key={education.id}
                  {...sectionMotion}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  type="button"
                  onClick={() => setOpenModal(education.id)}
                  aria-label={education.institution}
                  className="group flex min-h-72 flex-col border border-white/10 p-6 text-left transition-colors hover:border-accent-orange/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange md:p-8"
                >
                  <span className="text-sm font-semibold tracking-[0.16em] text-accent-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mt-12 text-3xl font-semibold tracking-[-0.05em] text-white">
                    {education.institution}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    {education.program}
                  </p>
                  <p className="mt-auto pt-8 text-sm text-neutral-500 transition-colors group-hover:text-accent-orange">
                    {education.status}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          <InstitutionModal
            isOpen={openModal === "puc"}
            onClose={() => setOpenModal(null)}
            institutionLogo={PUCLogo}
            institutionName="Pontifícia Universidade Católica de São Paulo (PUC-SP)"
            courseType={sobreText.academic.puc.courseType}
            courseName={sobreText.academic.puc.courseName}
            modality="Presencial"
            startDate="Fevereiro 2022"
            endDate="Dezembro 2025"
            status="Concluído"
            location="São Paulo, SP"
            description={sobreText.academic.puc.description}
            skills={sobreText.academic.puc.skills}
            certificates={sobreText.academic.puc.certificates}
            activities={sobreText.academic.puc.activities}
            headerBgColor="#284fc4"
          />

          <InstitutionModal
            isOpen={openModal === "fiap"}
            onClose={() => setOpenModal(null)}
            institutionLogo={FIAPLogo}
            institutionName="Faculdade de Informática e Administração Paulista (FIAP)"
            courseType={sobreText.academic.fiap.courseType}
            courseName={sobreText.academic.fiap.courseName}
            modality="EAD"
            startDate="Fevereiro 2026"
            status="Andamento"
            location="São Paulo, SP"
            description={sobreText.academic.fiap.description}
            skills={sobreText.academic.fiap.skills}
            certificates={sobreText.academic.fiap.certificates}
            activities={sobreText.academic.fiap.activities}
            headerBgColor="#e51859"
          />

          <InstitutionModal
            isOpen={openModal === "usp"}
            onClose={() => setOpenModal(null)}
            institutionLogo={USPLogo}
            institutionName="USP - Universidade de São Paulo"
            courseType={sobreText.academic.usp.courseType}
            courseName={sobreText.academic.usp.courseName}
            modality="EAD"
            startDate="Maio de 2026"
            endDate="Dezembro de 2027"
            status="Cursando"
            location="Online"
            description={sobreText.academic.usp.description}
            skills={sobreText.academic.usp.skills}
            certificates={[]}
            activities={[]}
            headerBgColor="#7e7e7b"
          />
        </section>
        <section id="certificacoes" className="bg-[#0A0A0A] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="07"
              label={messages.about.certifications.title}
              title={messages.about.certifications.title}
              description={messages.about.certifications.description}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {messages.about.certifications.items.map((certification, index) => {
                const isPursuing = certification.status === "pursuing";

                return (
                  <motion.article
                    key={certification.name}
                    {...sectionMotion}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="flex min-h-48 flex-col border border-white/10 p-6 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <Award className="h-6 w-6 shrink-0 text-accent-orange" aria-hidden="true" />
                      <span
                        className={
                          isPursuing
                            ? "border border-white/15 px-2.5 py-1 text-xs font-semibold text-neutral-300"
                            : "border border-accent-orange/60 px-2.5 py-1 text-xs font-semibold text-accent-orange"
                        }
                      >
                        {isPursuing
                          ? messages.about.certifications.pursuingLabel
                          : messages.about.certifications.currentLabel}
                      </span>
                    </div>
                    <h3 className="mt-auto pt-10 text-2xl font-semibold tracking-[-0.05em] text-white">
                      {certification.name}
                    </h3>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="experiencia" className="bg-[#0A0A0A] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="05"
              label={home.sections.experience}
              title={messages.about.experienceTitle}
              description={home.experience.description}
            />
            <div className="divide-y divide-white/10 border-y border-white/10">
              {experienceEntries.map((experience, index) => (
                <motion.button
                  key={experience.id}
                  {...sectionMotion}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  type="button"
                  onClick={() => setExperienceCard(experience.id)}
                  aria-label={experience.company}
                  className="group grid w-full gap-5 py-7 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange md:grid-cols-[minmax(9rem,0.5fr)_minmax(0,1.1fr)_minmax(12rem,0.7fr)_auto] md:items-start md:gap-8 md:px-4"
                >
                  <span className="text-sm font-semibold tracking-[0.16em] text-accent-orange">
                    {experience.period}
                  </span>
                  <div className="flex items-start gap-4">
                    <Image
                      src={experience.logo}
                      alt={experience.logoAlt}
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 object-contain"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">
                        {experience.company}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-400">{experience.role}</p>
                    </div>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-neutral-400">
                    {experience.description}
                  </p>
                  <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-accent-orange" aria-hidden="true" />
                </motion.button>
              ))}
            </div>

            <EnterpriseModal
              isOpen={experienceCard === "multscan"}
              onClose={() => setExperienceCard(null)}
              companyLogo={MultscanLogoDark}
              companyName="Multscan - Inteligência Tecnológica"
              role={sobreText.experience.multscan.role}
              employmentType="Tempo integral"
              startDate="Março de 2026"
              location="Santo André, SP - Brasil"
              description={sobreText.experience.multscan.description}
              responsibilities={sobreText.experience.multscan.responsibilities}
              technologies={[
                { name: "Next.js", category: "frontend" },
                { name: "React Native", category: "frontend" },
                { name: "Expo", category: "frontend" },
                { name: "TypeScript", category: "frontend" },
                { name: "Node.js", category: "backend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Prisma", category: "backend" },
                { name: "PostgreSQL", category: "database" },
                { name: "Redis", category: "database" },
                { name: "Stripe", category: "other" },
                { name: "GitHub Actions", category: "tools" },
                { name: "Jenkins", category: "tools" },
                { name: "Docker", category: "tools" },
                { name: "AWS", category: "tools" },
                { name: "Google Play Store", category: "other" },
                { name: "Apple App Store", category: "other" },
                { name: "Scrum", category: "other" },
                { name: "Jira", category: "tools" },
              ]}
            />
            <EnterpriseModal
              isOpen={experienceCard === "fiverr"}
              onClose={() => setExperienceCard(null)}
              companyLogo={FiverrLogo}
              companyName="Fiverr"
              role={messages.about.fiverrRole}
              employmentType="Freelance"
              remuneration="Remunerado"
              startDate="Abril de 2021"
              endDate="Janeiro de 2024"
              duration="2 anos e 10 meses"
              location="Remoto"
              description={sobreText.experience.fiverr.description}
              responsibilities={sobreText.experience.fiverr.responsibilities}
              technologies={[
                { name: "React", category: "frontend" },
                { name: "React Native", category: "frontend" },
                { name: "TypeScript", category: "frontend" },
                { name: "JavaScript", category: "frontend" },
                { name: "HTML", category: "frontend" },
                { name: "CSS", category: "frontend" },
                { name: "Git", category: "tools" },
              ]}
              achievements={[]}
            />
            <EnterpriseModal
              isOpen={experienceCard === "culti"}
              onClose={() => setExperienceCard(null)}
              companyLogo={CultiLogo}
              companyName="Cultivare Prevenção e Promoção da Saúde"
              role={sobreText.experience.culti.role}
              employmentType="Estágio"
              remuneration="Não Remunerado"
              startDate="Julho de 2024"
              endDate="Dezembro de 2025"
              duration="1 ano e 6 meses"
              location="São Paulo, São Paulo, Brasil · Híbrido"
              description={sobreText.experience.culti.description}
              responsibilities={sobreText.experience.culti.responsibilities}
              technologies={[
                { name: "Next.js", category: "frontend" },
                { name: "React", category: "frontend" },
                { name: "TypeScript", category: "frontend" },
                { name: "JavaScript", category: "frontend" },
                { name: "HTML", category: "frontend" },
                { name: "CSS", category: "frontend" },
                { name: "Node.js", category: "backend" },
                { name: "MySQL", category: "database" },
                { name: "Zod", category: "backend" },
                { name: "Docker", category: "tools" },
                { name: "GitHub Workflows (CI/CD)", category: "tools" },
                { name: "Git", category: "tools" },
              ]}
              achievements={sobreText.experience.culti.achievements}
            />
          </div>
        </section>
        {showAvailabilitySection ? (
          <DeferredAvailabilitySection
            title={messages.about.availabilityTitle}
            description={messages.about.availabilityDescription}
          />
        ) : null}
        <section className="bg-[#0A0A0A] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="07"
              label={home.sections.trajectory}
              title={home.sections.trajectory}
              description={home.trajectory.description}
            />
            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              {home.trajectory.items.map((item, index) => (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  className="bg-[#0A0A0A] p-6 md:p-8"
                >
                  <span className="text-5xl font-semibold tracking-[-0.07em] text-accent-orange md:text-6xl">
                    {item.year}
                  </span>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#121212] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="08"
              label={home.sections.explore}
              title={home.sections.explore}
              description={home.explore.description}
            />
            <div className="divide-y divide-white/10 border-y border-white/10">
              {home.explore.items.map((item) => {
                const isResume = item.href.endsWith(".pdf");

                return (
                  <Link
                    key={item.index}
                    href={item.href}
                    download={isResume}
                    className="group grid gap-5 py-7 transition-colors hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange md:grid-cols-[5rem_minmax(0,1fr)_minmax(12rem,0.5fr)_auto] md:items-center md:py-9"
                  >
                    <span className="text-sm font-semibold tracking-[0.14em] text-accent-orange">
                      {item.index}
                    </span>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white transition-colors group-hover:text-accent-orange">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                    <ArrowUpRight
                      className="h-5 w-5 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-orange"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-[#0A0A0A] px-5 py-12 sm:px-8 lg:px-12 lg:py-[4.5rem]">
          <div className="mx-auto max-w-7xl">
            <SectionLead index="09" label={home.sections.faq} title={home.sections.faq} />
            <div className="border-y border-white/10">
              {home.faq.map((item) => (
                <details key={item.question} className="group border-b border-white/10 last:border-b-0">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-medium text-white marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange md:text-xl">
                    {item.question}
                    <span
                      className="text-2xl text-accent-orange transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-7 text-neutral-400 md:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="pt-7 pb-4">
          <motion.h6
            initial={{ opacity: 0.5, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 py-4 text-center text-8xl font-bold tracking-tight text-accent-orange md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-accent-orange) / 0.3)",
              textShadow: "0 0 40px rgb(var(--color-accent-orange) / 0.5)",
            }}
          >
            {messages.about.interestedTitle}
          </motion.h6>
          <p className="text-center text-2xl font-semibold mt-3">
            {messages.about.interestedSubtitle}
          </p>
          <div className="mx-auto my-8 flex w-[90%] flex-col items-center justify-center md:w-[75%]">
            <SocialMediaIcons />
            <div className="my-10 flex w-full flex-col gap-5 md:flex-row">
              <PresentationTopics
                icon={StepForward}
                title={messages.about.visitPortfolioTitle}
                description={messages.about.visitPortfolioDescription}
                actionRoute={() => route.push("/projetos")}
              />
              <PresentationTopics
                icon={FileDown}
                title={messages.about.downloadResumeTitle}
                description={messages.about.downloadResumeDescription}
                actionRoute={() =>
                  handleDownload({
                    fileName:
                      "Desenvolvedor Full-Stack  João Pedro do Carmo Ribeiro",
                    fileUrl:
                      "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf",
                  })
                }
              />
            </div>
          </div>
        </section>
      </TracingBeam>
      {openModal != null ? null : experienceCard != null ? null : <Navbar />}
    </div>
  );
}
