"use client";

import type { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { CircleAlert } from "lucide-react";

import { Bubble } from "@/components/bubble";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { LampContainer } from "@/components/ui/lamp";
import type { SobreTooltips } from "@/app/sobre/_data/types";

import TypeScriptLogo from "@/assets/Logos/typescript-512.webp";
import JavaScriptLogo from "@/assets/Logos/logo-javascript-512.webp";
import PythonLogo from "@/assets/Logos/python_logo.webp";
import NodeLogo from "@/assets/Logos/logo-node-js-512.webp";
import ReactLogo from "@/assets/Logos/logo-react-512.webp";
import MongodbLogo from "@/assets/Logos/mongodb-512.webp";
import NextjsLogo from "@/assets/Logos/next-js-logo.webp";
import DockerLogo from "@/assets/Logos/docker-512.webp";
import FirebaseLogo from "@/assets/Logos/firebase-logo.webp";
import GitLogo from "@/assets/Logos/Git-logo.webp";
import JestLogo from "@/assets/Logos/jest-logo.webp";
import VueLogo from "@/assets/Logos/vue-js-512.webp";
import AwsLogo from "@/assets/Logos/aws_logo.webp";
import GoogleCloudLogo from "@/assets/Logos/googlecloud_logo.webp";
import OpenAILogo from "@/assets/Logos/openai.svg";
import NestJSLogo from "@/assets/Logos/NestJS.svg";
import ExpressJSLogo from "@/assets/Logos/expressjs.webp";
import PostgreSQLLogo from "@/assets/Logos/PostgreSQL.png";
import SQLiteLogo from "@/assets/Logos/sqlite.png";
import RedisLogo from "@/assets/Logos/Redis.png";
import JenkinsLogo from "@/assets/Logos/Jenkins.png";

type Technology = {
  name: string;
  image: StaticImageData;
  tooltip: keyof SobreTooltips;
};

type DeferredTechStackSectionProps = {
  tooltips: SobreTooltips;
  categories: {
    languages: string;
    frameworks: string;
    dataAndAI: string;
    cloudAndDevOps: string;
  };
  hint: string;
};

export default function DeferredTechStackSection({
  tooltips,
  categories,
  hint,
}: DeferredTechStackSectionProps) {
  const technologyCategories: Array<{
    title: string;
    technologies: Technology[];
  }> = [
    {
      title: categories.languages,
      technologies: [
        { name: "TypeScript", image: TypeScriptLogo, tooltip: "typescript" },
        { name: "JavaScript", image: JavaScriptLogo, tooltip: "javascript" },
        { name: "Python", image: PythonLogo, tooltip: "python" },
      ],
    },
    {
      title: categories.frameworks,
      technologies: [
        { name: "React", image: ReactLogo, tooltip: "react" },
        { name: "Next.js", image: NextjsLogo, tooltip: "nextjs" },
        { name: "Vue.js", image: VueLogo, tooltip: "vue" },
        { name: "Node.js", image: NodeLogo, tooltip: "nodejs" },
        { name: "NestJS", image: NestJSLogo, tooltip: "nestjs" },
        { name: "Express.js", image: ExpressJSLogo, tooltip: "expressjs" },
      ],
    },
    {
      title: categories.dataAndAI,
      technologies: [
        { name: "MongoDB", image: MongodbLogo, tooltip: "mongodb" },
        { name: "Firebase", image: FirebaseLogo, tooltip: "firebase" },
        { name: "PostgreSQL", image: PostgreSQLLogo, tooltip: "postgresql" },
        { name: "SQLite", image: SQLiteLogo, tooltip: "sqlite" },
        { name: "Redis", image: RedisLogo, tooltip: "redis" },
        { name: "OpenAI", image: OpenAILogo, tooltip: "openai" },
      ],
    },
    {
      title: categories.cloudAndDevOps,
      technologies: [
        { name: "Docker", image: DockerLogo, tooltip: "docker" },
        { name: "Git", image: GitLogo, tooltip: "git" },
        { name: "Jest", image: JestLogo, tooltip: "jest" },
        { name: "Jenkins", image: JenkinsLogo, tooltip: "jenkins" },
        { name: "AWS", image: AwsLogo, tooltip: "aws" },
        {
          name: "Google Cloud Platform",
          image: GoogleCloudLogo,
          tooltip: "googlecloud",
        },
      ],
    },
  ];

  return (
    <section aria-label="Tech Stack">
      <LampContainer className="px-5 pb-10 pt-36 sm:px-8 lg:px-12" tone="soft-yellow">
        <motion.h3
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-6 py-4 text-center text-5xl font-bold tracking-tight text-accent-orange sm:text-6xl md:text-8xl"
          style={{
            WebkitTextStroke: "1px rgb(var(--color-accent-orange) / 0.2)",
            textShadow: "0 0 18px rgb(var(--color-accent-orange) / 0.2)",
          }}
        >
          TECH STACK
        </motion.h3>

        <div className="mt-12 w-4/5 max-w-none space-y-10">
          {technologyCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
              aria-labelledby={`tech-stack-category-${categoryIndex}`}
              className="border-t border-white/10 pt-5"
            >
              <h4
                id={`tech-stack-category-${categoryIndex}`}
                className="text-center text-xs font-semibold tracking-[0.2em] text-neutral-400"
              >
                {category.title}
              </h4>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-7">
                {category.technologies.map((technology) => (
                  <li
                    key={technology.name}
                    title={tooltips[technology.tooltip]}
                    className="flex w-[104px] justify-center"
                  >
                    <Bubble
                      image={technology.image}
                      alt={technology.name}
                      size={104}
                      animated={false}
                    />
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-center">
          <CircleAlert className="h-7 w-7 shrink-0 text-white" aria-hidden="true" />
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10 font-bold text-white">{hint}</span>
          </PointerHighlight>
        </div>
      </LampContainer>
    </section>
  );
}
