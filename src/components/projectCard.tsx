"use client";
import Link from "next/link";
import { StaticImageData } from "next/image";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ProjectCardTypes = {
  cardTitlte: string;
  cardDescription: string;
  bgImageUrl: StaticImageData | string;
  hoverImageurl?: StaticImageData | string;
  imageCredits: string;
  technologies?: string[];
  projectUrl: string;
};

export function ProjectCard({
  cardTitlte,
  cardDescription,
  bgImageUrl,
  imageCredits,
  technologies = [],
  projectUrl,
}: ProjectCardTypes) {
  const bgImage = typeof bgImageUrl === "string" ? bgImageUrl : bgImageUrl.src;

  return (
    <Link
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[320px] h-[420px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl shrink-0"
    >
      <div
        className={cn(
          "relative w-full h-full rounded-2xl overflow-hidden flex flex-col",
          "border border-neutral-800 bg-neutral-950",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.6)]",
        )}
      >
        {/* Imagem com gradiente na parte inferior */}
        <div className="relative w-full h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          {/* Badge de crédito da imagem */}
          <span className="absolute bottom-2 right-3 text-[10px] text-neutral-500 z-10">
            {imageCredits}
          </span>
        </div>

        {/* Conteúdo */}
        <div className="px-5 pb-5 pt-1 flex flex-col flex-1 gap-3">
          {/* Cabeçalho: título + ícone de link */}
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-lg font-bold text-white leading-snug tracking-tight">
              {cardTitlte}
            </h2>
            <span className="mt-0.5 shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300">
              <ArrowUpRight size={14} />
            </span>
          </div>

          {/* Descrição */}
          <p className="text-sm text-neutral-400 leading-relaxed line-clamp-4 flex-1">
            {cardDescription}
          </p>

          {/* Separador */}
          {technologies.length > 0 && (
            <div className="pt-1 border-t border-neutral-800">
              <div className="flex flex-wrap gap-1.5 mt-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={cn(
                      "px-2.5 py-0.5 text-[11px] font-medium rounded-full",
                      "bg-neutral-900 border border-neutral-700 text-neutral-300",
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
