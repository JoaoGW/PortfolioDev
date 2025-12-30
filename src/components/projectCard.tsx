"use client";
import { cn } from "@/lib/utils";
import { StaticImageData } from 'next/image';

type ProjectCardTypes = {
  cardTitlte: string,
  cardDescription: string,
  bgImageUrl: StaticImageData | string,
  hoverImageurl: StaticImageData | string,
  imageCredits: string
}

export function ProjectCard({ cardTitlte, cardDescription, bgImageUrl, hoverImageurl, imageCredits }: ProjectCardTypes) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          `group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(${ bgImageUrl })] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(${ hoverImageurl })] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(${ hoverImageurl })]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500`
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            { cardTitlte }
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            { cardDescription }
          </p>
          <span className="text-xs text-gray-400">{ imageCredits }</span>
        </div>
      </div>
    </div>
  )
}