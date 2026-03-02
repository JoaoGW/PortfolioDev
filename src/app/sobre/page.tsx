"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion } from "motion/react";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { GlareCard } from "@/components/ui/glare-card";
import { SparklesCore } from "@/components/ui/sparkles";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { Bubble } from "@/components/bubble";
import { InstitutionCard } from "@/components/institutionCard";
import { InstitutionModal } from "@/components/institutionModal";
import { SocialMediaIcons } from "@/components/socialMediaIcons";
import { PresentationTopics } from "@/components/presentationTopics";
import { EnterpriseModal } from "@/components/enterpriseModal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import WorldMap from "@/components/ui/world-map";

import ProfilePicture from "../../assets/profile.jpg";
import DockerLogo from "../../assets/Logos/docker-512.png";
import NodeLogo from "../../assets/Logos/logo-node-js-512.png";
import ReactLogo from "../../assets/Logos/logo-react-512.png";
import NextjsLogo from "../../assets/Logos/next-js-logo.webp";
import TypeScriptLogo from "../../assets/Logos/typescript-512.png";
import MongodbLogo from "../../assets/Logos/mongodb-512.png";
import PythonLogo from "../../assets/Logos/python_logo.png";
import FirebaseLogo from "../../assets/Logos/firebase-logo.png";
import GitLogo from "../../assets/Logos/Git-logo.png";
import JestLogo from "../../assets/Logos/jest-logo.png";
import JavaScriptLogo from "../../assets/Logos/logo-javascript-512.png";
import VueLogo from "../../assets/Logos/vue-js-512.png";
import AwsLogo from "../../assets/Logos/aws_logo.png";
import GoogleCloudLogo from "../../assets/Logos/googlecloud_logo.png";
import PUCLogo from "../../assets/Instituicoes/pucsp-logo.png";
import FIAPLogo from "../../assets/Instituicoes/fiap_logo.webp";
import HarvardLogo from "../../assets/Instituicoes/Harvard_logo.png";
import CultiLogo from "../../assets/Empresas/cultivare_logo.jpg";
import FiverrLogo from "../../assets/Empresas/fiverr_logo.jpg";

import { CircleAlert, FileDown, StepForward } from "lucide-react";

type curriculumFileTypes = {
  fileUrl: string;
  fileName: string;
};

export default function Sobre() {
  const [openModal, setOpenModal] = useState<"puc" | "fiap" | "harvard" | null>(
    null,
  );
  const [experienceCard, setExperienceCard] = useState<
    "culti" | "fiverr" | null
  >(null);
  const route = useRouter();

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
      alert("Ocorreu um erro ao baixar o currículo PDF");
    }
  };

  return (
    <div className="relative min-h-screen">
      <HeaderTop />
      <HeroHighlight>
        <section className="flex flex-row items-center pt-32 pb-16 mx-20">
          <Image
            src={ProfilePicture}
            alt="Minha Foto de Perfil"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              width: 500,
              height: 500,
              objectFit: "cover",
            }}
          />
          <div className="flex flex-col ml-24">
            <div className="flex flex-row mb-6 items-center gap-2">
              <span className="text-[#72BF6A] font-bold text-2xl">
                {"<span>"}
              </span>
              <span className="font-semibold text-xl">
                Olá, meu nome é João Pedro Ribeiro
              </span>
              <span className="text-[#72BF6A] font-bold text-2xl">
                {"</span>"}
              </span>
            </div>
            <div className="flex flex-col">
              <motion.span
                className="font-semibold text-3xl"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                Desenvolvedor{" "}
                <Highlight className="text-white font-bold text-4xl">
                  {"{ Full-Stack }"}
                </Highlight>{" "}
                &
              </motion.span>
              <motion.span
                className="font-semibold text-3xl"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                Desenvolvedor{" "}
                <Highlight className="text-white font-bold text-4xl">
                  {"{ Mobile Full-Stack }"}
                </Highlight>
              </motion.span>
            </div>
            <div className="flex flex-row mt-6">
              <p className="font-semibold text-xl">
                <span className="text-[#72BF6A] font-bold text-2xl mr-2">
                  {"<p>"}
                </span>
                Graduado em Ciência da Computação pela Pontifícia Universidade
                Católica de São Paulo (PUC-SP). Tenho experiência profissional
                com Frameworks Web{" "}
                <Highlight className="text-white">(Next.js e React)</Highlight>,
                Desenvolvimento de Apps Híbridos{" "}
                <Highlight className="text-white">(Android e iOS)</Highlight>,
                além de conhecimento em práticas e ferramentas de DevOps{" "}
                <Highlight className="text-white">
                  (Git, AWS, GCP, entre outros)
                </Highlight>
                .
                <span className="text-[#72BF6A] font-bold text-2xl ml-2">
                  {"</p>"}
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-6 items-center">
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={NodeLogo}
                  width={70}
                  height={70}
                  alt="Logo Node.js"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={ReactLogo}
                  width={70}
                  height={70}
                  alt="Logo React"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={NextjsLogo}
                  width={70}
                  height={70}
                  alt="Logo Next.js"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={DockerLogo}
                  width={70}
                  height={70}
                  alt="Logo Docker"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={MongodbLogo}
                  width={70}
                  height={70}
                  alt="Logo MongoDB"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={TypeScriptLogo}
                  width={70}
                  height={70}
                  alt="Logo TypeScript"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={PythonLogo}
                  width={70}
                  height={70}
                  alt="Logo Python"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <span className="text-white text-xl font-semibold">
                ... dentre muitos outros
              </span>
            </div>
          </div>
        </section>
      </HeroHighlight>
      <TracingBeam>
        <section className="bg-slate-900">
          <TextHoverEffect text="SOBRE" size="xtralarge" />
          <div className="mx-20 mt-[-80] pb-16 text-center">
            <span className="text-center text-3xl font-bold">
              Desenvolvedor de Software | Desenvolvedor Mobile | Cientista da
              Computação
            </span>
            <p className="mt-5 text-lg">
              Profissional formado em Ciência da Computação pela Pontifícia
              Universidade Católica de São Paulo (PUC-SP) e cursando
              pós-graduação em Arquitetura de Software na FIAP. Apaixonado por
              tecnologia, inovação e resolução de problemas complexos, tenho
              como foco o desenvolvimento de soluções escaláveis, intuitivas e
              de alto desempenho. Meu perfil é proativo e analítico, com forte
              capacidade de adaptação, aprendizado contínuo e sempre com
              trabalho em equipe.
            </p>
            <div className="mt-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] bg-clip-text text-transparent">
                Principais Competências
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      Desenvolvimento de software e arquitetura de sistemas
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      Integração de sistemas e otimização de processos
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      Experiência em suporte e resolução de problemas técnicos
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      Análise e melhoria da experiência do usuário
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      Colaboração interdisciplinar e metodologias ágeis (Scrum)
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      Foco em qualidade, manutenibilidade e escalabilidade
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg max-w-[75%] text-center">
                Complementarmente, realizo cursos de Ciência da Computação e
                Desenvolvimento de Software pela Universidade de Harvard,
                reforçando minha base técnica e visão global da área. Sou
                entusiasta em entender, projetar e aprimorar softwares que
                facilitem a vida das pessoas, entregando produtos sustentáveis e
                de longo prazo. Busco constantemente inovação e eficiência
                contribuindo para projetos que unem propósito, impacto e
                evolução contínua.
              </p>
            </div>
          </div>
        </section>
        <section>
          <LampContainer className="pt-44 pb-16">
            <motion.h3
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: -100 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
              style={{
                WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
                textShadow:
                  "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
              }}
            >
              TECH STACK
            </motion.h3>
            <div className="flex flex-row justify-evenly gap-6 mt-2">
              <>
                <a
                  data-tooltip-id="typescript-tip"
                  data-tooltip-content="Linguagem de Programação - TypeScript"
                >
                  <Bubble image={TypeScriptLogo} alt="TypeScript" />
                </a>
                <Tooltip id="typescript-tip" />
              </>
              <>
                <a
                  data-tooltip-id="javascript-tip"
                  data-tooltip-content="Linguagem de Programação - JavaScript"
                >
                  <Bubble image={JavaScriptLogo} alt="JavaScript" />
                </a>
                <Tooltip id="javascript-tip" />
              </>
              <>
                <a
                  data-tooltip-id="python-tip"
                  data-tooltip-content="Linguagem de Programação - Python"
                >
                  <Bubble image={PythonLogo} imgSize={80} alt="Python" />
                </a>
                <Tooltip id="python-tip" />
              </>
              <>
                <a
                  data-tooltip-id="nodejs-tip"
                  data-tooltip-content="Ambiente de Execução - Node.js"
                >
                  <Bubble image={NodeLogo} imgSize={180} alt="Node.js" />
                </a>
                <Tooltip id="nodejs-tip" />
              </>
              <>
                <a
                  data-tooltip-id="react-tip"
                  data-tooltip-content="Framework - React & React Native"
                >
                  <Bubble image={ReactLogo} alt="React" />
                </a>
                <Tooltip id="react-tip" />
              </>
              <>
                <a
                  data-tooltip-id="mongodb-tip"
                  data-tooltip-content="Banco de Dados - MongoDB"
                >
                  <Bubble image={MongodbLogo} alt="MongoDB" />
                </a>
                <Tooltip id="mongodb-tip" />
              </>
              <>
                <a
                  data-tooltip-id="nextjs-tip"
                  data-tooltip-content="Framework - Next.js"
                >
                  <Bubble image={NextjsLogo} alt="Next.js" />
                </a>
                <Tooltip id="nextjs-tip" />
              </>
            </div>
            <div className="flex flex-row justify-evenly gap-6 mt-3">
              <>
                <a
                  data-tooltip-id="docker-tip"
                  data-tooltip-content="Ferramenta de DevOps - Docker"
                >
                  <Bubble image={DockerLogo} imgSize={200} alt="Docker" />
                </a>
                <Tooltip id="docker-tip" />
              </>
              <>
                <a
                  data-tooltip-id="firebase-tip"
                  data-tooltip-content="Ferramentas e Serviços - Firebase"
                >
                  <Bubble image={FirebaseLogo} alt="Firebase" />
                </a>
                <Tooltip id="firebase-tip" />
              </>
              <>
                <a
                  data-tooltip-id="git-tip"
                  data-tooltip-content="Ferramenta de DevOps - Git"
                >
                  <Bubble image={GitLogo} alt="Git" />
                </a>
                <Tooltip id="git-tip" />
              </>
              <>
                <a
                  data-tooltip-id="jest-tip"
                  data-tooltip-content="Ferramenta de Testes - Jest"
                >
                  <Bubble image={JestLogo} alt="Jest" />
                </a>
                <Tooltip id="jest-tip" />
              </>
              <>
                <a
                  data-tooltip-id="vue-tip"
                  data-tooltip-content="Framework - Vue.js"
                >
                  <Bubble image={VueLogo} alt="Vue.js" />
                </a>
                <Tooltip id="vue-tip" />
              </>
              <>
                <a
                  data-tooltip-id="aws-tip"
                  data-tooltip-content="Ferramenta de DevOps - Amazon Web Services"
                >
                  <Bubble image={AwsLogo} alt="Amazon Web Services" />
                </a>
                <Tooltip id="aws-tip" />
              </>
              <>
                <a
                  data-tooltip-id="googlecloud-tip"
                  data-tooltip-content="Ferramenta de DevOps - Google Cloud Platform"
                >
                  <Bubble image={GoogleCloudLogo} alt="Google Cloud Platform" />
                </a>
                <Tooltip id="googlecloud-tip" />
              </>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 mt-16">
              <CircleAlert color="#FFF" size={35} />
              <PointerHighlight
                rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                pointerClassName="text-yellow-500"
              >
                <span className="text-white font-bold relative z-10">
                  Passe o mouse por cima das bolhas para conferir os nomes das
                  tecnologias, se necessário.
                </span>
              </PointerHighlight>
            </div>
          </LampContainer>
        </section>
        <section className="bg-slate-900">
          <div className="h-[28rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <motion.h4
              initial={{ opacity: 0.5, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
              style={{
                WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
                textShadow:
                  "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
              }}
            >
              ACADÊMICO
            </motion.h4>
            <div className="w-[40rem] h-40 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-px w-1/4" />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-12 mx-24 pb-20">
            <InstitutionCard
              institutionLogo={PUCLogo}
              institutionAltImage="Logo Instituição PUC-SP"
              institurionName="PUC-SP"
              institutionCourse="Ciência da Computação"
              institutionCourseLevel="Graduação / Bacharelado"
              institurionOpenDetails={() => setOpenModal("puc")}
            />
            <InstitutionCard
              institutionLogo={FIAPLogo}
              institutionAltImage="Logo Instituição FIAP"
              institurionName="FIAP"
              institutionCourse="Arquitetura de Software"
              institutionCourseLevel="Pós-Graduação"
              institurionOpenDetails={() => setOpenModal("fiap")}
            />
            <InstitutionCard
              institutionLogo={HarvardLogo}
              institutionAltImage="Logo Instituição Harvard"
              institurionName="Harvard"
              institutionCourse="CS50"
              institutionCourseLevel="Cursos Complementares"
              institurionOpenDetails={() => setOpenModal("harvard")}
            />
          </div>

          <InstitutionModal
            isOpen={openModal === "puc"}
            onClose={() => setOpenModal(null)}
            institutionLogo={PUCLogo}
            institutionName="Pontifícia Universidade Católica de São Paulo (PUC-SP)"
            courseType="Graduação / Bacharelado"
            courseName="Ciência da Computação"
            modality="Presencial"
            startDate="Fevereiro 2022"
            endDate="Dezembro 2025"
            status="Concluído"
            location="São Paulo, SP"
            description="Bacharelado em Ciência da Computação com formação sólida em fundamentos teóricos e práticos da computação. O curso teve como foco as áreas de algoritmos, estruturas de dados, engenharia de software, banco de dados, redes de computadores, inteligência artificial e desenvolvimento de sistemas em geral."
            skills={[
              "Algoritmos e Estruturas de Dados",
              "Programação Orientada a Objetos",
              "Engenharia de Software",
              "Banco de Dados",
              "Desenvolvimento Mobile",
              "Arquitetura de Software",
              "Sistemas Operacionais",
              "Redes de Computadores",
              "Inteligência Artificial",
              "Metodologias Ágeis",
            ]}
            certificates={[
              {
                name: "Diploma de Bacharel em Ciência da Computação",
                issuedDate: "Dezembro de 2025",
                link: "",
              },
              {
                name: "Instrutor na Oficina de DevOps - FCET2025",
                issuedDate: "Outubro de 2025",
                link: "",
              },
              {
                name: "Instrutor na Oficina de Desenvolvimento Mobile - FCET2025",
                issuedDate: "Outubro de 2025",
                link: "",
              },
              {
                name: "Monitor na disciplina de Laboratório de Estruturas Dinâmicas",
                issuedDate: "Junho de 2025",
                link: "",
              },
              {
                name: "Instrutor na Oficina de Desenvolvimento Web + GitHub - FCET2023",
                issuedDate: "Outubro de 2023",
                link: "",
              },
            ]}
            activities={[
              {
                title: "EZTripAI -  Trabalho de Conclusão de Curso (TCC)",
                description:
                  "Projeto voltado a ajudar turistas de todas as partes do mundo a gerarem seu roteiro de viagem e pedirem sugestões em tempo real para a Inteligência Artifical. O modelo de LLM de Inteligência Artifical adotado neste projeto é o GPT3.5-Turbo, utilizamos como base informações do usuário sobre localização, gostos pessoais, horários de abertura dos estabelecimentos e/ou pontos turísticos e informações do clima em tempo real para gerar nossas recomendações automatizadas.",
                period: "2025",
              },
              {
                title: "Evolução dos Processadores",
                description:
                  "Projeto para a disciplina de Arquitetura de Computadores sobre a Evolução dos Processadores reconhecido e solicitado pela Doutora docente Edith Ranzini como material para as turmas seguintes/futuras",
                period: "2023",
              },
            ]}
            headerBgColor="#284fc4"
          />

          <InstitutionModal
            isOpen={openModal === "fiap"}
            onClose={() => setOpenModal(null)}
            institutionLogo={FIAPLogo}
            institutionName="Faculdade de Informática e Administração Paulista (FIAP)"
            courseType="Pós-Graduação"
            courseName="Software Architecture"
            modality="EAD"
            startDate="Fevereiro 2025"
            status="Andamento"
            location="São Paulo, SP"
            description="Pós-graduação focada em dominar na prática os conhecimentos de desenvolvimento e arquitetura de software para atuar em projetos com altos níveis de complexidade. O curso abrange microsserviços, containers, aplicações serverless, desenvolvimento seguro e muito mais, preparando para criar soluções escaláveis e resolver desafios reais do mercado."
            skills={[
              "Domain-Driven Design (DDD)",
              "Arquitetura de Software",
              "Qualidade de Software",
              "Desenvolvimento Seguro",
              "Docker e Containerização",
              "Clean Architecture",
              "DevOps (CI/CD)",
              "Terraform",
              "Kubernetes",
              "OpenTelemetry",
              "API Gateway",
              "Serverless Architecture",
              "Neo4j e Grafos",
              "Arquitetura de Microsserviços",
              "SAGA Pattern",
              "Resiliência em Microsserviços",
              "Service Mesh",
            ]}
            certificates={[
              {
                name: "Nenhum Certificado foi Emitido até o momento",
                issuedDate: "",
                link: "",
              },
            ]}
            activities={[
              {
                title: "Nenhuma Atividade",
                description:
                  "Por enquanto ainda estou na fase teórica. Não tive atividades até o dado momento.",
                period: "",
              },
            ]}
            headerBgColor="#e51859"
          />

          <InstitutionModal
            isOpen={openModal === "harvard"}
            onClose={() => setOpenModal(null)}
            institutionLogo={HarvardLogo}
            institutionName="Harvard University"
            courseType="Cursos Complementares"
            courseName="CS50 - Introduction to Computer Science"
            modality="EAD"
            startDate="2025"
            endDate="2026"
            status="Cursando"
            location="Online"
            description="Curso introdutório de Ciência da Computação de Harvard. Serve como um complemento e revisão geral ao meu bacharelado principal realizado na PUC-SP. Introdução às áreas intelectuais da ciência da computação e à programação. Ensina a pensar algoritmicamente e resolver problemas de forma eficiente."
            skills={[
              "Pensamento Algorítmico",
              "Resolução de Problemas",
              "C Programming",
              "Python",
              "SQL",
              "JavaScript",
              "HTML e CSS",
              "Estruturas de Dados",
              "Algoritmos",
              "Abstração",
              "Encapsulamento",
              "Gerenciamento de Recursos",
              "Segurança de Software",
              "Engenharia de Software",
              "Desenvolvimento Web",
            ]}
            certificates={[]}
            activities={[]}
            headerBgColor="#af8f25"
          />
        </section>
        <section className="pt-16 pb-16">
          <motion.h5
            initial={{ opacity: 0.5, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "circInOut",
            }}
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            EXPERIÊNCIA
          </motion.h5>
          <div className="flex flex-row justify-center gap-4 items-center mt-8">
            <GlareCard
              className="flex flex-col items-center justify-center"
              expandCard={() => setExperienceCard("fiverr")}
            >
              <Image
                src={FiverrLogo}
                width={200}
                height={200}
                alt="Logo da Fiverr: Plataforma de Freelancing"
              />
              <span className="text-center mt-5 uppercase font-bold text-2xl">
                Desenvolvedor Web
              </span>
            </GlareCard>
            <GlareCard
              className="flex flex-col items-center justify-center"
              expandCard={() => setExperienceCard("culti")}
            >
              <Image
                src={CultiLogo}
                width={200}
                height={200}
                alt="Logo da Cultivare: Prevenção e Promoção de Saúde"
              />
              <span className="text-center mt-5 uppercase font-bold text-2xl">
                Estagiário
              </span>
            </GlareCard>

            <EnterpriseModal
              isOpen={experienceCard === "fiverr"}
              onClose={() => setExperienceCard(null)}
              companyLogo={FiverrLogo}
              companyName="Fiverr"
              role="Desenvolvedor Web"
              employmentType="Freelance"
              remuneration="Remunerado"
              startDate="Abril de 2021"
              endDate="Janeiro de 2024"
              duration="2 anos e 10 meses"
              location="Remoto"
              description="Atuação no desenvolvimento de aplicações Web, com foco estratégico na criação de landing pages performáticas e orientadas a resultados para usuários em diferentes mercados ao redor do mundo."
              responsibilities={[
                {
                  title: "Desenvolvimento de Aplicações Web",
                  description:
                    "Integrando o time de desenvolvimento de uma aplicação Web SaaS para a área da saúde utilizando tecnologias como Next.js, React, TypeScript, JavaScript, HTML e CSS, sendo o público alvo profissionais da saúde e instituições de saúde.",
                  achievements: [],
                },
                {
                  title: "Criação de Landing Pages",
                  description:
                    "Landing Pages performáticas e orientadas a resultados para usuários em diferentes mercados ao redor do mundo.",
                  achievements: [],
                },
                {
                  title: "Práticas DevOps",
                  description:
                    "Versionamento de código extremamente organizado e seguindo os padrões da indústria",
                  achievements: [],
                },
                {
                  title: "Publicação e Deploy de Apps Mobile",
                  description:
                    "Publicação e gerenciamento de aplicativos na Google Play Store, atuando em processos de build, versionamento, configuração de ambientes, análise de métricas e melhoria contínua da experiência do usuário final (UX/UI)",
                  achievements: [],
                },
              ]}
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
              role="Engenheiro de Software"
              employmentType="Estágio"
              remuneration="Não Remunerado"
              startDate="Julho de 2024"
              endDate="Dezembro de 2025"
              duration="1 ano e 6 meses"
              location="São Paulo, São Paulo, Brasil · Híbrido"
              description="Desenvolvedor integrante do time de uma aplicação Web SaaS para a área da saúde, com público-alvo voltado a profissionais e instituições de saúde. Utilizei tecnologias como Next.js, React, TypeScript, JavaScript, HTML, CSS, Node.js, MySQL e práticas DevOps."
              responsibilities={[
                {
                  title: "Desenvolvimento de Aplicação Web SaaS",
                  description:
                    "Integrando o time de desenvolvimento de uma aplicação Web SaaS para a área da saúde utilizando tecnologias como Next.js, React, TypeScript, JavaScript, HTML e CSS, sendo o público alvo profissionais da saúde e instituições de saúde.",
                  achievements: [],
                },
                {
                  title: "Implementação e Manutenção de APIs REST",
                  description:
                    "Participação na implementação e manutenção de APIs REST com Node.js, integrando o Front End e o Back-End em uma arquitetura orientada a serviços.",
                  achievements: [],
                },
                {
                  title: "Modelagem e Persistência de Dados",
                  description:
                    "Modelagem, criação e persistência de dados em MySQL utilizando SQL.",
                  achievements: [],
                },
                {
                  title: "Desenvolvimento de Funcionalidades Críticas",
                  description:
                    "Auxílio no desenvolvimento de funcionalidades importantes como o cadastro de usuários, organizações médicas, redefinição de senha e a criptografia de dados sensíveis.",
                  achievements: [],
                },
                {
                  title: "Validação de Dados",
                  description:
                    "Validação de dados no Front-End e Back-End utilizando Zod, reduzindo as inconsistências e possíveis erros de entrada.",
                  achievements: [],
                },
                {
                  title: "Práticas DevOps",
                  description:
                    "Implementação, sob supervisão do time, de práticas DevOps com Docker e automações de CI/CD do GitHub Workflows, otimizando o fluxo de desenvolvimento e deploy.",
                  achievements: [
                    "Redução de até 50% do tempo gasto dos desenvolvedores com debugs desnecessários",
                  ],
                },
              ]}
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
              achievements={[
                "Integração do Front-End e Back-End em arquitetura orientada a serviços",
                "Desenvolvimento de funcionalidades críticas como cadastro de usuários, organizações médicas e redefinição de senha",
                "Implementação da criptografia de dados sensíveis",
                "Redução de inconsistências através de validação de dados com Zod",
                "Otimização do fluxo de desenvolvimento com práticas DevOps, reduzindo em até 50% o tempo gasto com debugs desnecessários",
              ]}
            />
          </div>
        </section>
        <section className="bg-slate-900">
          <div className=" py-16">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h5
                initial={{ opacity: 0.5, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "circInOut",
                }}
                className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
                style={{
                  WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
                  textShadow:
                    "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
                }}
              >
                BRASIL & EUROPA
              </motion.h5>
              <p className="text-sm md:text-lg text-neutral-500 max-w-3xl mx-auto py-4">
                Graças a minha dupla nacionalidade, estou disponível para
                trabalhar livremente e sem necessidade de documentações extras
                tanto no Brasil quanto no Continente Europeu
              </p>
              <WorldMap
                dots={[
                  {
                    start: {
                      lat: -39.5505,
                      lng: -46.6333,
                    }, // São Paulo
                    end: {
                      lat: -38.9068,
                      lng: -43.1729,
                    }, // Rio de Janeiro
                  },
                  {
                    start: { lat: -39.5505, lng: -46.6333 }, // São Paulo
                    end: { lat: 32.8566, lng: 2.3522 }, // Paris
                  },
                  {
                    start: { lat: -38.9068, lng: -43.1729 }, // Rio de Janeiro
                    end: { lat: 35.5074, lng: -0.1278 }, // London
                  },
                  {
                    start: { lat: 32.8566, lng: 2.3522 }, // Paris
                    end: { lat: 36.52, lng: 13.405 }, // Berlin
                  },
                  {
                    start: { lat: 35.5074, lng: -0.1278 }, // London
                    end: { lat: 36.3676, lng: 4.9041 }, // Amsterdam
                  },
                  {
                    start: { lat: 36.3676, lng: 4.9041 }, // Amsterdam
                    end: { lat: 34.8503, lng: 4.3517 }, // Brussels
                  },
                  {
                    start: { lat: 34.8503, lng: 4.3517 }, // Brussels
                    end: { lat: 22.7223, lng: -9.1393 }, // Lisbon
                  },
                  {
                    start: { lat: 22.7223, lng: -9.1393 }, // Lisbon
                    end: { lat: 25.1579, lng: -8.6291 }, // Porto
                  },
                ]}
              />
            </div>
          </div>
        </section>
        <section className="pt-14 pb-8">
          <h6
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            INTERESSADO(A)?
          </h6>
          <p className="text-center text-2xl font-semibold mt-3">
            Veja o que mais você pode encontrar sobre mim
          </p>
          <div className="flex flex-col items-center justify-center my-8 mx-auto w-[75%]">
            <SocialMediaIcons />
            <div className="flex flex-row my-10 gap-5 w-full">
              <PresentationTopics
                icon={StepForward}
                title="Continuar a visita ao meu Portfólio"
                description="Conheça os meus melhores projetos práticos nesta próxima seção"
                actionRoute={() => route.push("/projetos")}
              />
              <PresentationTopics
                icon={FileDown}
                title="Baixar meu Currículo"
                description="Gostaria de baixar o meu currículo no formato clássico? (PDF)"
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
