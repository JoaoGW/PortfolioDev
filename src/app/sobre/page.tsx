"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { GlareCard } from "@/components/ui/glare-card";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { InstitutionCard } from "@/components/institutionCard";
import { SocialMediaIcons } from "@/components/socialMediaIcons";
import { PresentationTopics } from "@/components/presentationTopics";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { useLanguage } from "@/contexts/language-context";
import { loadSobreLocale, type SobreLocaleData } from "./_data";

import ProfilePicture from "../../assets/profile.webp";
import DockerLogo from "../../assets/Logos/docker-512.webp";
import NodeLogo from "../../assets/Logos/logo-node-js-512.webp";
import ReactLogo from "../../assets/Logos/logo-react-512.webp";
import NextjsLogo from "../../assets/Logos/next-js-logo.webp";
import TypeScriptLogo from "../../assets/Logos/typescript-512.webp";
import MongodbLogo from "../../assets/Logos/mongodb-512.webp";
import PythonLogo from "../../assets/Logos/python_logo.webp";
import PUCLogo from "../../assets/Instituicoes/pucsp-logo.webp";
import FIAPLogo from "../../assets/Instituicoes/fiap_logo.webp";
import HarvardLogo from "../../assets/Instituicoes/Harvard_logo.webp";
import CultiLogo from "../../assets/Empresas/cultivare_logo.webp";
import FiverrLogo from "../../assets/Empresas/fiverr_logo.webp";

import { FileDown, StepForward } from "lucide-react";

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
  () => import("./_components/deferred-tech-stack-section"),
  {
    ssr: false,
  },
);

const DeferredAvailabilitySection = dynamic(
  () => import("./_components/deferred-availability-section"),
  {
    ssr: false,
  },
);

type curriculumFileTypes = {
  fileUrl: string;
  fileName: string;
};

export default function Sobre() {
  const { messages, language } = useLanguage();
  const [openModal, setOpenModal] = useState<"puc" | "fiap" | "harvard" | null>(
    null,
  );
  const [experienceCard, setExperienceCard] = useState<
    "culti" | "fiverr" | null
  >(null);
  const [showTechStackSection, setShowTechStackSection] = useState(false);
  const [showAvailabilitySection, setShowAvailabilitySection] = useState(false);
  const route = useRouter();

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

  return (
    <div className="relative min-h-screen">
      <HeaderTop />
      <HeroHighlight>
        <section className="flex flex-row items-center pt-32 pb-16 mx-20">
          <Image
            src={ProfilePicture}
            alt="Minha Foto de Perfil"
            priority
            sizes="(max-width: 768px) 80vw, 500px"
            width={500}
            height={500}
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              objectFit: "cover",
            }}
          />
          <div className="flex flex-col ml-24">
            <div className="flex flex-row mb-6 items-center gap-2">
              <span className="text-[#72BF6A] font-bold text-2xl">
                {"<span>"}
              </span>
              <span className="font-semibold text-xl">
                {messages.about.greeting}
              </span>
              <span className="text-[#72BF6A] font-bold text-2xl">
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
                <span className="text-[#72BF6A] font-bold text-2xl mr-2">
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
                {messages.about.manyOthers}
              </span>
            </div>
          </div>
        </section>
      </HeroHighlight>
      <TracingBeam>
        <section className="bg-slate-900">
          <TextHoverEffect
            text={messages.about.summaryTitle}
            size="xtralarge"
          />
          <div className="mx-20 mt-[-80] pb-16 text-center">
            <span className="text-center text-3xl font-bold">
              {messages.about.summarySubtitle}
            </span>
            <p className="mt-5 text-lg">{messages.about.summaryParagraph1}</p>
            <div className="mt-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] bg-clip-text text-transparent">
                {messages.about.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[0]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[1]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[2]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[3]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[4]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
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
        {showTechStackSection ? (
          <DeferredTechStackSection
            tooltips={sobreText.tooltips}
            hint={messages.about.techStackHint}
          />
        ) : null}
        <section className="bg-slate-900">
          <div className="h-[28rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h4
              className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
              style={{
                WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
                textShadow:
                  "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
              }}
            >
              {messages.about.academicTitle}
            </h4>
            <div className="w-[40rem] h-40 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-px w-1/4" />
              <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-12 mx-24 pb-20">
            <InstitutionCard
              institutionLogo={PUCLogo}
              institutionAltImage="Logo Instituição PUC-SP"
              institurionName="PUC-SP"
              institutionCourse={sobreText.academicCards.pucCourse}
              institutionCourseLevel={sobreText.academicCards.pucLevel}
              institurionOpenDetails={() => setOpenModal("puc")}
            />
            <InstitutionCard
              institutionLogo={FIAPLogo}
              institutionAltImage="Logo Instituição FIAP"
              institurionName="FIAP"
              institutionCourse={sobreText.academicCards.fiapCourse}
              institutionCourseLevel={sobreText.academicCards.fiapLevel}
              institurionOpenDetails={() => setOpenModal("fiap")}
            />
            <InstitutionCard
              institutionLogo={HarvardLogo}
              institutionAltImage="Logo Instituição Harvard"
              institurionName="Harvard"
              institutionCourse={sobreText.academicCards.harvardCourse}
              institutionCourseLevel={sobreText.academicCards.harvardLevel}
              institurionOpenDetails={() => setOpenModal("harvard")}
            />
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
            startDate="Fevereiro 2025"
            status="Andamento"
            location="São Paulo, SP"
            description={sobreText.academic.fiap.description}
            skills={sobreText.academic.fiap.skills}
            certificates={sobreText.academic.fiap.certificates}
            activities={sobreText.academic.fiap.activities}
            headerBgColor="#e51859"
          />

          <InstitutionModal
            isOpen={openModal === "harvard"}
            onClose={() => setOpenModal(null)}
            institutionLogo={HarvardLogo}
            institutionName="Harvard University"
            courseType={sobreText.academic.harvard.courseType}
            courseName={sobreText.academic.harvard.courseName}
            modality="EAD"
            startDate="2025"
            endDate="2026"
            status="Cursando"
            location="Online"
            description={sobreText.academic.harvard.description}
            skills={sobreText.academic.harvard.skills}
            certificates={[]}
            activities={[]}
            headerBgColor="#af8f25"
          />
        </section>
        <section className="pt-16 pb-16">
          <h5
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            {messages.about.experienceTitle}
          </h5>
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
                {messages.about.fiverrRole}
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
                {messages.about.cultiRole}
              </span>
            </GlareCard>

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
        <section className="pt-14 pb-8">
          <h6
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            {messages.about.interestedTitle}
          </h6>
          <p className="text-center text-2xl font-semibold mt-3">
            {messages.about.interestedSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center my-8 mx-auto w-[75%]">
            <SocialMediaIcons />
            <div className="flex flex-row my-10 gap-5 w-full">
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
