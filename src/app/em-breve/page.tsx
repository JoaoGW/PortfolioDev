"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Home } from "lucide-react";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { useLanguage, type LanguageCode } from "@/contexts/language-context";

const comingSoonContent: Record<
  LanguageCode,
  {
    eyebrow: string;
    displayTitle: string;
    title: string;
    description: string;
    action: string;
    status: string;
  }
> = {
  pt: {
    eyebrow: "EM BREVE / NOVOS CONTEÚDOS",
    displayTitle: "EM BREVE",
    title: "Esta próxima etapa está sendo preparada.",
    description:
      "Artigos e os conteúdos de Tecnologia Nua e Crua estarão disponíveis em breve. Enquanto isso, continue explorando o portfólio.",
    action: "Voltar para o início",
    status: "Em preparação",
  },
  en: {
    eyebrow: "COMING SOON / NEW CONTENT",
    displayTitle: "COMING SOON",
    title: "This next chapter is being prepared.",
    description:
      "Articles and Tecnologia Nua e Crua content will be available soon. In the meantime, keep exploring the portfolio.",
    action: "Back to home",
    status: "In preparation",
  },
  fr: {
    eyebrow: "BIENTÔT DISPONIBLE / NOUVEAUX CONTENUS",
    displayTitle: "BIENTÔT DISPONIBLE",
    title: "Cette prochaine étape est en préparation.",
    description:
      "Les articles et les contenus Tecnologia Nua e Crua seront bientôt disponibles. En attendant, continuez à explorer le portfolio.",
    action: "Retour à l'accueil",
    status: "En préparation",
  },
};

export default function ComingSoon() {
  const { language } = useLanguage();
  const content = comingSoonContent[language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <HeaderTop />
      <main className="relative flex min-h-screen items-center overflow-hidden px-5 py-32 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-x-5 bottom-6 top-24 border border-white/10 sm:inset-x-8 lg:inset-x-12" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[52%] w-1/2 bg-white/[0.02]" />

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] lg:items-end"
        >
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-orange">
              <span>{content.eyebrow}</span>
              <span className="h-px w-12 bg-accent-orange" />
            </div>
            <p className="text-6xl font-semibold leading-none tracking-[-0.08em] text-white/15 sm:text-7xl md:text-8xl">
              {content.displayTitle}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-5xl md:text-7xl">
              {content.title}
            </h1>
            <div className="mt-9 flex flex-wrap items-end justify-between gap-7 border-t border-white/15 pt-6">
              <p className="max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
                {content.description}
              </p>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center gap-2 bg-accent-orange px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-orange/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                {content.action}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-[#121212] p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
              GWBR TECHNOLOGIES
            </p>
            <p className="mt-16 text-2xl font-semibold tracking-[-0.05em] text-white">
              /em-breve
            </p>
            <div className="mt-5 h-px w-full bg-white/10" />
            <p className="mt-5 text-sm leading-6 text-neutral-400">
              {content.status}
            </p>
          </div>
        </motion.section>
      </main>
      <Navbar />
    </div>
  );
}
