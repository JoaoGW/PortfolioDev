"use client"

import Image from 'next/image';

import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";

import ProfilePicture from "../../assets/profile.jpg";
import DockerLogo from "../../assets/Logos/docker-512.png";
import NodeLogo from "../../assets/Logos/logo-node-js-512.png";
import ReactLogo from "../../assets/Logos/logo-react-512.png";
import NextjsLogo from "../../assets/Logos/next-js-logo.png";
import TypeScriptLogo from "../../assets/Logos/typescript-512.png";
import MongodbLogo from "../../assets/Logos/mongodb-512.png";

export default function Sobre(){
  return(
    <div>
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={.35}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <HeaderTop />
      <section className='flex flex-row items-center mt-32 mx-20'>
        <Image
          src={ ProfilePicture }
          alt='Minha Foto de Perfil'
          style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', width: 500, height: 500, objectFit: "cover" }}
        />
        <div className='flex flex-col ml-24'>
          <div className='flex flex-row mb-6'>
            <span className='text-[#72BF6A] font-bold text-2xl'>{"<span>"}</span>
            <span className='font-semibold text-xl'>Olá, meu nome é João Pedro</span>
            <span className='text-[#72BF6A] font-bold text-2xl'>{"</span>"}</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-semibold text-3xl'>Desenvolvedor <span className='text-[#0096C7] font-bold text-4xl'>{'{ Full-Stack }'}</span> &</span>
            <span className='font-semibold text-3xl'>Desenvolvedor <span className='text-[#0096C7] font-bold text-4xl'>{"{ Mobile }"}</span> Full-Stack</span>
          </div>
          <div className='flex flex-row mt-6'>
            <p className='font-semibold text-xl'>
              <span className='text-[#72BF6A] font-bold text-2xl mr-2'>{"<p>"}</span>
              Graduado em Ciência da Computação pela Pontifícia Universidade Católica de São Paulo. Tenho experiência relevante com Frameworks Web <span className='underline text-[#0096C7]'>(Next.js e React)</span>, Desenvolvimento de Apps Híbridos <span className='underline text-[#0096C7]'>(Android e iOS)</span>, além de conhecimento em práticas e ferramentas de DevOps <span className='underline text-[#0096C7]'>(Git, AWS, entre outros)</span>.
              <span className='text-[#72BF6A] font-bold text-2xl ml-2'>{"</p>"}</span>
            </p>
          </div>
          <div className='flex flex-row gap-4 mt-6 items-center'>
            <div className='group relative cursor-pointer'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl' />
              <Image
                src={ NodeLogo }
                width={70}
                height={70}
                alt='Logo Node.js'
                className='relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover:bg-white/10'
              />
            </div>
            <div className='group relative cursor-pointer'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl' />
              <Image
                src={ ReactLogo }
                width={70}
                height={70}
                alt='Logo React'
                className='relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover:bg-white/10'
              />
            </div>
            <div className='group relative cursor-pointer'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl' />
              <Image
                src={ NextjsLogo }
                width={70}
                height={70}
                alt='Logo Next.js'
                className='relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover:bg-white/10'
              />
            </div>
            <div className='group relative cursor-pointer'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl' />
              <Image
                src={ DockerLogo }
                width={70}
                height={70}
                alt='Logo Docker'
                className='relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover:bg-white/10'
              />
            </div>
            <div className='group relative cursor-pointer'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl' />
              <Image
                src={ MongodbLogo }
                width={70}
                height={70}
                alt='Logo MongoDB'
                className='relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover:bg-white/10'
              />
            </div>
            <div className='group relative cursor-pointer'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl' />
              <Image
                src={ TypeScriptLogo }
                width={70}
                height={70}
                alt='Logo TypeScript'
                className='relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover:bg-white/10'
              />
            </div>
            <span className='text-white text-xl font-semibold'>... dentre muitos outros</span>
          </div>
        </div>
      </section>
      <section className='bg-slate-900 mt-14'>
        <TextHoverEffect text='SOBRE'/>
      </section>
      <Navbar />
    </div>
  )
}