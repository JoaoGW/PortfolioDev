"use client";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { useLanguage, type LanguageCode } from "@/contexts/language-context";

const loadingContent: Record<
  LanguageCode,
  { eyebrow: string; title: string; description: string; status: string }
> = {
  pt: {
    eyebrow: "GWBR TECHNOLOGIES / STATUS DO SISTEMA",
    title: "Carregando conteúdo.",
    description: "Preparando a próxima seção do portfólio.",
    status: "Carregando",
  },
  en: {
    eyebrow: "GWBR TECHNOLOGIES / SYSTEM STATUS",
    title: "Loading content.",
    description: "Preparing the next section of the portfolio.",
    status: "Loading",
  },
  fr: {
    eyebrow: "GWBR TECHNOLOGIES / ÉTAT DU SYSTÈME",
    title: "Chargement du contenu.",
    description: "Préparation de la prochaine section du portfolio.",
    status: "Chargement",
  },
};

export function PageLoading() {
  const { language } = useLanguage();
  const content = loadingContent[language];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <HeaderTop />
      <main
        aria-busy="true"
        className="relative flex min-h-screen items-center overflow-hidden px-5 py-32 sm:px-12 lg:px-16"
      >
        <div className="pointer-events-none absolute inset-x-5 bottom-6 top-24 border border-white/10 sm:inset-x-8 lg:inset-x-12" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[52%] w-1/2 bg-white/[0.02]" />

        <section className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-orange">
              <span>{content.eyebrow}</span>
              <span className="h-px w-12 bg-accent-orange" />
            </div>

            <div role="status" aria-live="polite">
              <p className="text-7xl font-semibold leading-none tracking-[-0.08em] text-white/15 sm:text-8xl md:text-9xl">
                01
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-5xl md:text-7xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
                {content.description}
              </p>
            </div>

            <div className="mt-9 max-w-xl border-t border-white/15 pt-6">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.2em] text-neutral-400">
                <span>{content.status}</span>
                <span aria-hidden="true">01 / 01</span>
              </div>
              <div
                aria-hidden="true"
                className="mt-3 h-px w-full overflow-hidden bg-white/15"
              >
                <span className="block h-full w-2/5 animate-pulse bg-accent-orange motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Navbar />
    </div>
  );
}
