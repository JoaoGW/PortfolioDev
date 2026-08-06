"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { LogoWaterEffect } from "@/app/_components/logo-water-effect";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { useLanguage } from "@/contexts/language-context";

import GWBRLogo from "@/assets/Logos/GWBR_Logotipo.png";
import AwsLogo from "@/assets/Logos/aws_logo.webp";
import DockerLogo from "@/assets/Logos/docker-512.webp";
import ExpoLogo from "@/assets/Logos/expo_logo.webp";
import FirebaseLogo from "@/assets/Logos/firebase-logo.webp";
import GitLogo from "@/assets/Logos/Git-logo.webp";
import GoogleCloudLogo from "@/assets/Logos/googlecloud_logo.webp";
import JavaScriptLogo from "@/assets/Logos/logo-javascript-512.webp";
import JestLogo from "@/assets/Logos/jest-logo.webp";
import NodeLogo from "@/assets/Logos/logo-node-js-512.webp";
import MongodbLogo from "@/assets/Logos/mongodb-512.webp";
import ReactLogo from "@/assets/Logos/logo-react-512.webp";
import ReactNativeLogo from "@/assets/Logos/react-native_logo.webp";
import NextjsLogo from "@/assets/Logos/next-js-logo.webp";
import PythonLogo from "@/assets/Logos/python_logo.webp";
import TypeScriptLogo from "@/assets/Logos/typescript-512.webp";
import VueLogo from "@/assets/Logos/vue-js-512.webp";

type SectionLeadProps = {
  index: string;
  label: string;
  title: string;
  description: string;
};

const sectionMotion = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

type TechnologyLogo = {
  source?: StaticImageData;
  useGradientMask: boolean;
};

const technologyLogos: Record<string, TechnologyLogo> = {
  "Next.js": { source: NextjsLogo, useGradientMask: false },
  React: { source: ReactLogo, useGradientMask: true },
  "React Native": { source: ReactNativeLogo, useGradientMask: false },
  Expo: { source: ExpoLogo, useGradientMask: false },
  TypeScript: { source: TypeScriptLogo, useGradientMask: true },
  JavaScript: { source: JavaScriptLogo, useGradientMask: true },
  Python: { source: PythonLogo, useGradientMask: true },
  "Node.js": { source: NodeLogo, useGradientMask: true },
  "Vue.js": { source: VueLogo, useGradientMask: true },
  Docker: { source: DockerLogo, useGradientMask: true },
  AWS: { source: AwsLogo, useGradientMask: true },
  "Google Cloud Platform": { source: GoogleCloudLogo, useGradientMask: true },
  Git: { source: GitLogo, useGradientMask: false },
  "GitHub Actions": { source: GitLogo, useGradientMask: false },
  Firebase: { source: FirebaseLogo, useGradientMask: true },
  MongoDB: { source: MongodbLogo, useGradientMask: true },
  Jest: { source: JestLogo, useGradientMask: true },
};

const logoFadeStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, rgb(0 0 0 / 0.15), rgb(0 0 0 / 1))",
  maskImage:
    "linear-gradient(to right, rgb(0 0 0 / 0.15), rgb(0 0 0 / 1))",
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
        <p className="max-w-xl text-base leading-7 text-neutral-400 lg:justify-self-end lg:text-right md:text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { messages } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const company = messages.company;
  const home = messages.home;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <HeaderTop />
      <main>
        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden px-5 py-32 sm:px-12 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-x-5 bottom-6 top-24 border border-white/10 sm:inset-x-8 lg:inset-x-12" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[52%] w-1/2 bg-white/[0.02]" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)] lg:items-center"
          >
            <div className="max-w-4xl">
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-orange">
                <span>{company.hero.index}</span>
                <span className="h-px w-12 bg-accent-orange" />
              </div>
              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-4xl md:text-6xl xl:text-8xl">
                {company.hero.title}
              </h1>
              <div className="mt-9 grid gap-7 border-t border-white/15 pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <p className="max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
                  {company.hero.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contato"
                    className="inline-flex min-h-11 items-center gap-2 bg-accent-orange px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-orange/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {company.hero.primaryAction}
                  </Link>
                  <Link
                    href="/sobre"
                    className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-orange hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
                  >
                    {company.hero.secondaryAction}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
            <motion.div {...sectionMotion} className="mx-auto w-full max-w-md lg:max-w-none">
              <LogoWaterEffect src={GWBRLogo} alt={company.name} />
            </motion.div>
          </motion.div>
        </section>

        <div className="overflow-hidden border-y border-white/10 bg-[#121212] py-4">
          <div className="home-marquee home-marquee--technologies flex min-w-max gap-10 text-sm font-semibold tracking-[0.18em] text-neutral-400 motion-reduce:transform-none">
            {[...home.software.techs, ...home.software.techs].map(
              (technology, index) => (
                <span key={`${technology.title}-${index}`} className="inline-flex items-center gap-10">
                  <span>{technology.title.toUpperCase()}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
                </span>
              ),
            )}
          </div>
        </div>

        <section
          id="engenharia"
          className="bg-[#121212] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="02"
              label={company.capabilities.eyebrow}
              title={company.capabilities.title}
              description={company.capabilities.description}
            />
            <div className="grid border-l border-t border-white/10 md:grid-cols-3">
              {company.capabilities.items.map((capability, index) => (
                <motion.article
                  key={capability.title}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  className="group min-h-80 border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] md:p-8"
                >
                  <span className="text-2xl font-semibold tracking-[-0.06em] text-accent-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mt-16 text-4xl font-semibold tracking-[-0.06em] text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
                    {capability.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tecnologias"
          className="px-5 pb-10 pt-18 sm:px-8 lg:px-12 lg:pb-12 lg:pt-16"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="03"
              label={company.specialties.eyebrow}
              title={company.specialties.title}
              description={company.specialties.description}
            />
            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {company.specialties.items.map((technology, index) => {
                const logo = technologyLogos[technology];
                const logoStyle = logo?.useGradientMask ? logoFadeStyle : undefined;

                return (
                  <motion.article
                    key={technology}
                    {...sectionMotion}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                    className="group relative flex min-h-44 flex-col justify-between overflow-hidden border-b border-r border-white/10 p-6"
                  >
                    <span className="relative z-10 text-xs font-semibold tracking-[0.16em] text-accent-orange">
                      0{index + 1}
                    </span>
                    <span className="relative z-10 text-2xl font-semibold tracking-[-0.05em] text-white">
                      {technology}
                    </span>
                    {logo?.source ? (
                      <Image
                        src={logo.source}
                        alt=""
                        aria-hidden="true"
                        style={logoStyle}
                        className="pointer-events-none absolute -right-4 bottom-4 h-24 w-24 object-contain grayscale brightness-0 invert contrast-200"
                      />
                    ) : (
                      <Github
                        aria-hidden="true"
                        style={logoStyle}
                        className="pointer-events-none absolute -right-4 bottom-4 h-24 w-24 text-white"
                      />
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="ia"
          className="bg-[#0A0A0A] px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-12 lg:pt-36"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLead
              index="04"
              label={company.aiIntegration.eyebrow}
              title={company.aiIntegration.title}
              description={company.aiIntegration.description}
            />
            <div className="grid border-l border-t border-white/10 md:grid-cols-3">
              {company.aiIntegration.items.map((item, index) => (
                <motion.article
                  key={item}
                  {...sectionMotion}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  className="flex min-h-48 flex-col justify-between border-b border-r border-white/10 p-6 md:p-8"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-accent-orange">
                    0{index + 1}
                  </span>
                  <h3 className="max-w-xs text-3xl font-semibold tracking-[-0.06em] text-white">
                    {item}
                  </h3>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-12 pt-2 sm:px-8 lg:px-12 lg:pb-16 lg:pt-4">
          <motion.div
            {...sectionMotion}
            className="mx-auto grid max-w-7xl gap-8 border border-white/10 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-10"
          >
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                {company.closing.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400">
                {company.closing.description}
              </p>
            </div>
            <Link
              href="/projetos"
              className="inline-flex min-h-11 items-center gap-2 border-b border-accent-orange pb-2 text-sm font-semibold text-white transition-colors hover:text-accent-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
            >
              {company.hero.secondaryAction}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </section>

        <section className="bg-accent-orange px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em]">
                {home.finalCta.eyebrow}
              </p>
              <motion.h2
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, clipPath: "inset(0 0% 0 0)" }
                }
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl md:text-8xl"
              >
                {home.finalCta.title}
              </motion.h2>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <span className="text-xs font-semibold tracking-[0.16em]">
                {home.finalCta.emailLabel}
              </span>
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
      <footer className="border-t border-white/10 px-5 py-8 pb-36 text-sm text-neutral-500 sm:px-8 lg:px-12 lg:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <span>{company.footer.copyright}</span>
          <span>{company.footer.location}</span>
        </div>
      </footer>
      <Navbar />
    </div>
  );
}
