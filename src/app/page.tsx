"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Github,
  Mail,
} from "lucide-react";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { useLanguage } from "@/contexts/language-context";

import ProfilePicture from "@/assets/profile.webp";
import EZTripImage from "@/assets/Projetos/plane-6511878_1920.webp";
import SrGeeImage from "@/assets/Projetos/WB_description.webp";
import WhatsappImage from "@/assets/Projetos/whatsapp-2.webp";
import CarSellerImage from "@/assets/Projetos/carseller.webp";

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
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" as const },
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
          <p className="max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const router = useRouter();
  const { messages } = useLanguage();
  const projectCarouselRef = useRef<HTMLDivElement>(null);
  const home = messages.home;

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

  const handleDownload = async () => {
    try {
      const response = await fetch(
        "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf",
      );

      if (!response.ok) {
        throw new Error("Erro na resposta da requisição");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute(
        "download",
        "Desenvolvedor Full-Stack João Pedro do Carmo Ribeiro",
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro no Download: ", error);
      alert(home.downloadError);
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

  return (
    <div className="min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <HeaderTop />
      <main>
        <section
          id="inicio"
          className="relative flex min-h-screen items-end overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" />
          <div className="pointer-events-none absolute right-[-10rem] top-20 h-72 w-72 rounded-full bg-accent-orange/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[52%] w-1/2 bg-accent-orange/10" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)] lg:items-end"
          >
            <div>
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-orange">
                <span>{home.hero.index}</span>
                <span className="h-px w-12 bg-accent-orange" />
              </div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-6xl md:text-8xl xl:text-9xl">
                {home.hero.title}
                <span className="block text-accent-orange">{home.hero.highlight}</span>
              </h1>
              <div className="mt-9 grid gap-7 border-t border-white/15 pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <p className="max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
                  {home.hero.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => router.push("/projetos")}
                    className="inline-flex min-h-11 items-center gap-2 bg-accent-orange px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-orange/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
                  >
                    {home.hero.viewProjects}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-orange hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {home.downloadResume}
                  </button>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 border border-accent-orange/40" />
              <Image
                src={ProfilePicture}
                alt="João Pedro Ribeiro"
                priority
                className="relative aspect-square w-full object-cover grayscale"
              />
              <span className="absolute bottom-4 left-4 bg-[#0A0A0A] px-3 py-2 text-xs font-semibold tracking-[0.16em] text-white">
                JOÃO PEDRO RIBEIRO
              </span>
            </div>
          </motion.div>

          <a
            href="#sobre"
            className="absolute bottom-6 left-5 z-10 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-neutral-300 transition-colors hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange sm:left-8 lg:left-12"
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
            {home.hero.scrollHint}
          </a>
        </section>

        <div className="border-y border-white/10 bg-[#121212] py-4">
          <div className="home-marquee flex min-w-max gap-10 text-sm font-semibold tracking-[0.18em] text-neutral-400 motion-reduce:transform-none">
            {[...home.software.areas, ...home.software.areas].map((area, index) => (
              <span key={`${area.title}-${index}`} className="inline-flex items-center gap-10">
                <span>{area.title.toUpperCase()}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
              </span>
            ))}
          </div>
        </div>

        <section id="sobre" className="bg-[#121212] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="02"
              label={home.sections.about}
              title={home.about.title}
              description={home.about.description}
            />
            <motion.div {...sectionMotion} className="grid gap-5 lg:grid-cols-[1fr_1fr_1.2fr]">
              <div className="border border-white/10 p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500">
                  {home.about.availabilityLabel}
                </p>
                <p className="mt-10 text-2xl font-medium tracking-[-0.04em] text-white">
                  {home.about.availabilityValue}
                </p>
              </div>
              <div className="border border-white/10 p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500">
                  {home.about.focusLabel}
                </p>
                <p className="mt-10 text-2xl font-medium tracking-[-0.04em] text-white">
                  {home.about.focusValue}
                </p>
              </div>
              <Link
                href="/sobre"
                className="group flex min-h-40 flex-col justify-between bg-accent-orange p-6 text-black transition-colors hover:bg-accent-orange/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange md:p-8"
              >
                <ArrowUpRight className="h-6 w-6 self-end" aria-hidden="true" />
                <span className="text-2xl font-semibold tracking-[-0.04em]">
                  {home.about.exploreProfile}
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="projetos" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
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
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]"
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

        <section id="software" className="bg-[#121212] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="04"
              label={home.sections.software}
              title={home.sections.software}
              description={home.software.description}
            />
            <div className="grid border-l border-t border-white/10 lg:grid-cols-3">
              {home.software.areas.map((area, index) => (
                <motion.article
                  key={area.title}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                  className="group min-h-96 border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] md:p-8"
                >
                  <div className="flex items-center justify-between text-accent-orange">
                    <Code2 className="h-6 w-6" aria-hidden="true" />
                    <span className="text-2xl font-semibold tracking-[-0.06em]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-16 text-4xl font-semibold tracking-[-0.06em] text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-neutral-300">{area.subtitle}</p>
                  <p className="mt-5 text-sm leading-6 text-neutral-400">{area.description}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {area.technologies.map((technology) => (
                      <span key={technology} className="text-xs text-neutral-500">
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex justify-end">
              <Link
                href="/sobre"
                className="inline-flex min-h-11 items-center gap-2 border-b border-accent-orange pb-2 text-sm font-semibold text-white transition-colors hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
              >
                {home.software.viewAll}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="experiencia" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="05"
              label={home.sections.experience}
              title={home.sections.experience}
              description={home.experience.description}
            />
            <div className="divide-y divide-white/10 border-y border-white/10">
              {home.experience.cards.map((experience, index) => (
                <motion.article
                  key={experience.company}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                  className="grid gap-6 py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(14rem,0.8fr)] md:items-start md:py-10"
                >
                  <span className="text-xl font-semibold tracking-[-0.05em] text-accent-orange">0{index + 1}</span>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                      {experience.company}
                    </h3>
                    <p className="mt-2 text-base text-neutral-300">{experience.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500">
                      {experience.period}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-neutral-400">{experience.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" className="bg-[#121212] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="06"
              label={home.sections.education}
              title={home.sections.education}
              description={home.education.description}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {home.education.cards.map((education, index) => (
                <motion.article
                  key={education.institution}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                  className="relative min-h-72 border border-white/10 p-6 md:p-8"
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent-orange">0{index + 1}</span>
                  <h3 className="mt-12 text-3xl font-semibold tracking-[-0.05em] text-white">
                    {education.institution}
                  </h3>
                  <p className="mt-4 text-base leading-6 text-neutral-300">{education.program}</p>
                  <p className="absolute bottom-7 left-6 right-6 border-t border-white/10 pt-4 text-sm text-neutral-500 md:left-8 md:right-8">
                    {education.status}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="trajetoria" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
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
                  key={item.year}
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
                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="explorar" className="bg-[#121212] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
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
                    <span className="text-sm font-semibold tracking-[0.14em] text-accent-orange">{item.index}</span>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white transition-colors group-hover:text-accent-orange">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                    <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-orange" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionLead index="09" label={home.sections.faq} title={home.sections.faq} />
            <div className="border-y border-white/10">
              {home.faq.map((item) => (
                <details key={item.question} className="group border-b border-white/10 last:border-b-0">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-medium text-white marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange md:text-xl">
                    {item.question}
                    <span className="text-2xl text-accent-orange transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-7 text-neutral-400 md:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent-orange px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em]">10 / CONTATO</p>
              <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl md:text-8xl">
                {home.finalCta.title}
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <span className="text-xs font-semibold tracking-[0.16em]">{home.finalCta.emailLabel}</span>
              <a
                href="mailto:profissional.jpribeiro@gmail.com"
                className="text-xl font-semibold underline decoration-black/40 underline-offset-8 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                profissional.jpribeiro@gmail.com
              </a>
              <Link
                href="/contato"
                className="mt-5 inline-flex min-h-11 items-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {home.finalCta.contact}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0A0A0A] px-5 py-8 pb-36 text-sm text-neutral-500 sm:px-8 lg:px-12 lg:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <span>{home.footer.copyright}</span>
          <span>{home.footer.location}</span>
        </div>
      </footer>
      <Navbar />
    </div>
  );
}
