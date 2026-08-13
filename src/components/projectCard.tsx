"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  cardTitlte: string;
  cardDescription: string;
  bgImageUrl: StaticImageData | string;
  imageCredits: string;
  technologies?: string[];
  projectUrl: string;
  index: string;
  repositoryLabel: string;
};

export function ProjectCard({
  cardTitlte,
  cardDescription,
  bgImageUrl,
  imageCredits,
  technologies = [],
  projectUrl,
  index,
  repositoryLabel,
}: ProjectCardProps) {
  return (
    <Link
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full border border-white/10 bg-[#121212] transition-colors hover:border-accent-orange/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-orange"
    >
      <figure className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
        <Image
          src={bgImageUrl}
          alt={`Imagem do projeto ${cardTitlte}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/75 px-4 py-2 text-[10px] tracking-[0.08em] text-neutral-400">
          {imageCredits}
        </figcaption>
      </figure>

      <div className="flex min-h-72 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.16em] text-accent-orange">
              {index}
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.055em] text-white">
              {cardTitlte}
            </h2>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-neutral-400 transition-colors group-hover:text-accent-orange"
            aria-hidden="true"
          />
        </div>

        <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-400 md:text-base">
          {cardDescription}
        </p>

        <div className="mt-auto border-t border-white/10 pt-5">
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-white/15 px-2 py-1 text-xs text-neutral-300"
              >
                {technology}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-accent-orange">
            {repositoryLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
