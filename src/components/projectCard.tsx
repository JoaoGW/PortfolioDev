"use client";
import { cn } from "@/lib/utils";
import { StaticImageData } from 'next/image';

type ProjectCardTypes = {
  cardTitlte: string,
  cardDescription: string,
  bgImageUrl: StaticImageData | string,
  hoverImageurl: StaticImageData | string,
  imageCredits: string,
  technologies?: string[]
}

export function ProjectCard({ cardTitlte, cardDescription, bgImageUrl, hoverImageurl, imageCredits, technologies = [] }: ProjectCardTypes) {
  const bgImage = typeof bgImageUrl === 'string' ? bgImageUrl : bgImageUrl.src;
  const hoverImage = typeof hoverImageurl === 'string' ? hoverImageurl : hoverImageurl.src;

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-cover bg-center",
          "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
        {/* Overlay escuro permanente para melhorar a legibilidade */}
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        
        {/* Overlay escuro adicional no hover para não perder o efeito original da biblioteca */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
        
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hoverImage})`
          }}
        />

        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">{ cardTitlte }</h1>
          <p className="font-normal text-base text-gray-50 relative my-4">{ cardDescription }</p>
          { technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 my-3">
              { technologies.map((tech, index) => (
                <span 
                  key={ index }
                  className="px-3 py-1 text-xs font-semibold text-white bg-slate-800 border border-slate-600 rounded-full"
                >
                  { tech }
                </span>
              ))}
            </div>
          )}
          <span className="text-xs text-gray-400">{ imageCredits }</span>
        </div>
      </div>
    </div>
  )
}