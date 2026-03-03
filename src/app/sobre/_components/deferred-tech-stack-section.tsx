"use client";

import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Bubble } from "@/components/bubble";

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

import { CircleAlert } from "lucide-react";

type Tooltips = {
  typescript: string;
  javascript: string;
  python: string;
  nodejs: string;
  react: string;
  mongodb: string;
  nextjs: string;
  docker: string;
  firebase: string;
  git: string;
  jest: string;
  vue: string;
  aws: string;
  googlecloud: string;
};

type DeferredTechStackSectionProps = {
  tooltips: Tooltips;
  hint: string;
};

export default function DeferredTechStackSection({
  tooltips,
  hint,
}: DeferredTechStackSectionProps) {
  return (
    <section>
      <LampContainer className="pt-44 pb-16">
        <motion.h3
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
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
            <a title={tooltips.typescript} aria-label={tooltips.typescript}>
              <Bubble
                image={TypeScriptLogo}
                alt="TypeScript"
                animated={false}
              />
            </a>
          </>
          <>
            <a title={tooltips.javascript} aria-label={tooltips.javascript}>
              <Bubble
                image={JavaScriptLogo}
                alt="JavaScript"
                animated={false}
              />
            </a>
          </>
          <>
            <a title={tooltips.python} aria-label={tooltips.python}>
              <Bubble
                image={PythonLogo}
                imgSize={80}
                alt="Python"
                animated={false}
              />
            </a>
          </>
          <>
            <a title={tooltips.nodejs} aria-label={tooltips.nodejs}>
              <Bubble
                image={NodeLogo}
                imgSize={180}
                alt="Node.js"
                animated={false}
              />
            </a>
          </>
          <>
            <a title={tooltips.react} aria-label={tooltips.react}>
              <Bubble image={ReactLogo} alt="React" animated={false} />
            </a>
          </>
          <>
            <a title={tooltips.mongodb} aria-label={tooltips.mongodb}>
              <Bubble image={MongodbLogo} alt="MongoDB" animated={false} />
            </a>
          </>
          <>
            <a title={tooltips.nextjs} aria-label={tooltips.nextjs}>
              <Bubble image={NextjsLogo} alt="Next.js" animated={false} />
            </a>
          </>
        </div>
        <div className="flex flex-row justify-evenly gap-6 mt-3">
          <>
            <a title={tooltips.docker} aria-label={tooltips.docker}>
              <Bubble
                image={DockerLogo}
                imgSize={200}
                alt="Docker"
                animated={false}
              />
            </a>
          </>
          <>
            <a title={tooltips.firebase} aria-label={tooltips.firebase}>
              <Bubble image={FirebaseLogo} alt="Firebase" animated={false} />
            </a>
          </>
          <>
            <a title={tooltips.git} aria-label={tooltips.git}>
              <Bubble image={GitLogo} alt="Git" animated={false} />
            </a>
          </>
          <>
            <a title={tooltips.jest} aria-label={tooltips.jest}>
              <Bubble image={JestLogo} alt="Jest" animated={false} />
            </a>
          </>
          <>
            <a title={tooltips.vue} aria-label={tooltips.vue}>
              <Bubble image={VueLogo} alt="Vue.js" animated={false} />
            </a>
          </>
          <>
            <a title={tooltips.aws} aria-label={tooltips.aws}>
              <Bubble
                image={AwsLogo}
                alt="Amazon Web Services"
                animated={false}
              />
            </a>
          </>
          <>
            <a title={tooltips.googlecloud} aria-label={tooltips.googlecloud}>
              <Bubble
                image={GoogleCloudLogo}
                alt="Google Cloud Platform"
                animated={false}
              />
            </a>
          </>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 mt-16">
          <CircleAlert color="#FFF" size={35} />
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="text-white font-bold relative z-10">{hint}</span>
          </PointerHighlight>
        </div>
      </LampContainer>
    </section>
  );
}
