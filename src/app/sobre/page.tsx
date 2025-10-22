"use client"

import Image from 'next/image';

import { motion } from "motion/react";

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from "@/components/ui/lamp";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { Bubble } from '@/components/bubble';
import { SparklesCore } from "@/components/ui/sparkles";

import ProfilePicture from "../../assets/profile.jpg";
import DockerLogo from "../../assets/Logos/docker-512.png";
import NodeLogo from "../../assets/Logos/logo-node-js-512.png";
import ReactLogo from "../../assets/Logos/logo-react-512.png";
import NextjsLogo from "../../assets/Logos/next-js-logo.png";
import TypeScriptLogo from "../../assets/Logos/typescript-512.png";
import MongodbLogo from "../../assets/Logos/mongodb-512.png";
import KotlinLogo from "../../assets/Logos/kotlin_logo.png";
import FirebaseLogo from "../../assets/Logos/firebase-logo.png";
import GitLogo from "../../assets/Logos/Git-logo.png";
import JestLogo from "../../assets/Logos/jest-logo.png";
import JavaScriptLogo from "../../assets/Logos/logo-javascript-512.png";
import VueLogo from "../../assets/Logos/vue-js-512.png";
import PUCLogo from "../../assets/Instituicoes/pucsp-logo.png";
import FIAPLogo from "../../assets/Instituicoes/fiap_logo.webp";
import HarvardLogo from "../../assets/Instituicoes/Harvard_logo.png";

import { CircleAlert } from 'lucide-react';
import { InstitutionCard } from '@/components/institutionCard';

export default function Sobre(){
  return(
    <div className="relative min-h-screen">
      <DottedGlowBackground
        className="absolute inset-0 pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
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
          <div className='flex flex-row mb-6 items-center gap-2'>
            <span className='text-[#72BF6A] font-bold text-2xl'>{"<span>"}</span>
            <span className='font-semibold text-xl'>Olá, meu nome é João Pedro</span>
            <span className='text-[#72BF6A] font-bold text-2xl'>{"</span>"}</span>
          </div>
          <div className='flex flex-col'>
            <motion.span 
              className='font-semibold text-3xl'
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              Desenvolvedor <Highlight className='text-white font-bold text-4xl'>{'{ Full-Stack }'}</Highlight> &
            </motion.span>
            <motion.span 
              className='font-semibold text-3xl'
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 1.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              Desenvolvedor <Highlight className='text-white font-bold text-4xl'>{"{ Mobile Full-Stack }"}</Highlight>
            </motion.span>
          </div>
          <div className='flex flex-row mt-6'>
            <p className='font-semibold text-xl'>
              <span className='text-[#72BF6A] font-bold text-2xl mr-2'>{"<p>"}</span>
              Graduado em Ciência da Computação pela Pontifícia Universidade Católica de São Paulo (PUC-SP). Tenho experiência relevante com Frameworks Web <Highlight className='text-white'>(Next.js e React)</Highlight>, Desenvolvimento de Apps Híbridos <Highlight className='text-white'>(Android e iOS)</Highlight>, além de conhecimento em práticas e ferramentas de DevOps <Highlight className='text-white'>(Git, AWS, entre outros)</Highlight>.
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
        <div className='mx-20 mt-[-80] pb-16 text-center'>
          <span className='text-center text-3xl font-bold'>Desenvolvedor de Software | Desenvolvedor Mobile | Cientista da Computação</span>
          <p className='mt-5 text-lg'>
            Profissional formado em Ciência da Computação pela Pontifícia Universidade Católica de São Paulo (PUC-SP) e atualmente 
            cursando pós-graduação em Arquitetura de Software na FIAP. Apaixonado por tecnologia, inovação e resolução de problemas 
            complexos, tenho como foco o desenvolvimento de soluções escaláveis, intuitivas e de alto desempenho. 
            Meu perfil é proativo e analítico, com forte capacidade de adaptação, aprendizado contínuo e sempre com trabalho em equipe.
          </p>
          <div className='mt-8 mb-8'>
            <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] bg-clip-text text-transparent'>
              Principais Competências
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-5xl mx-auto'>
              <div className='group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-center gap-3 relative z-10'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse' />
                  <span className='text-slate-200 font-medium leading-relaxed'>Desenvolvimento de software e arquitetura de sistemas</span>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-center gap-3 relative z-10'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse' />
                  <span className='text-slate-200 font-medium leading-relaxed'>Integração de sistemas e otimização de processos</span>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-center gap-3 relative z-10'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse' />
                  <span className='text-slate-200 font-medium leading-relaxed'>Experiência em suporte e resolução de problemas técnicos</span>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-center gap-3 relative z-10'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse' />
                  <span className='text-slate-200 font-medium leading-relaxed'>Análise e melhoria da experiência do usuário</span>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-center gap-3 relative z-10'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse' />
                  <span className='text-slate-200 font-medium leading-relaxed'>Colaboração interdisciplinar e metodologias ágeis (Scrum)</span>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-center gap-3 relative z-10'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse' />
                  <span className='text-slate-200 font-medium leading-relaxed'>Foco em qualidade, manutenibilidade e escalabilidade</span>
                </div>
              </div>
            </div>
          </div>
          <p className='text-lg'>
            Complementarmente, realizei cursos de Ciência da Computação e Desenvolvimento de Software pela Universidade de Harvard, 
            reforçando minha base técnica e visão global da área. Sou entusiasta em entender, projetar e aprimorar softwares que facilitem 
            a vida das pessoas, entregando produtos sustentáveis e de longo prazo. Busco constantemente inovação, eficiência e excelência 
            técnica, contribuindo para projetos que unem propósito, impacto e evolução contínua.
          </p>
        </div>
      </section>
      <section>
        <LampContainer className='pt-44 pb-16'>
          <motion.h3
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: -100 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: '2px rgba(114, 191, 106, 0.3)',
              textShadow: '0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)'
            }}
          >
            TECH STACK
          </motion.h3>
          <div className='flex flex-row justify-evenly gap-6 mt-2'>
            <>
              <a data-tooltip-id="typescript-tip" data-tooltip-content="Linguagem de Programação - TypeScript">
                <Bubble image={ TypeScriptLogo } alt='TypeScript' />
              </a>
              <Tooltip id="typescript-tip" />
            </>
            <>
              <a data-tooltip-id="kotlin-tip" data-tooltip-content="Linguagem de Programação - Kotlin">
                <Bubble image={ KotlinLogo } imgSize={ 200 } alt='Kotlin' />
              </a>
              <Tooltip id="kotlin-tip" />
            </>
            <>
              <a data-tooltip-id="javascript-tip" data-tooltip-content="Linguagem de Programação - JavaScript">
                <Bubble image={ JavaScriptLogo } alt='JavaScript' />
              </a>
              <Tooltip id="javascript-tip" />
            </>
            <>
              <a data-tooltip-id="nodejs-tip" data-tooltip-content="Ambiente de Execução - Node.js">
                <Bubble image={ NodeLogo } imgSize={ 180 } alt='Node.js' />
              </a>
              <Tooltip id="nodejs-tip" />
            </>
            <>
              <a data-tooltip-id="react-tip" data-tooltip-content="Framework - React & React Native">
                <Bubble image={ ReactLogo } alt='React' />
              </a>
              <Tooltip id="react-tip" />
            </>
            <>
              <a data-tooltip-id="mongodb-tip" data-tooltip-content="Banco de Dados - MongoDB">
                <Bubble image={ MongodbLogo } alt='MongoDB' />
              </a>
              <Tooltip id="mongodb-tip" />
            </>
            <>
              <a data-tooltip-id="nextjs-tip" data-tooltip-content="Framework - Next.js">
                <Bubble image={ NextjsLogo } imgSize={ 175 } alt='Next.js' />
              </a>
              <Tooltip id="nextjs-tip" />
            </>
          </div>
          <div className='flex flex-row justify-evenly gap-6 mt-3'>
            <>
              <a data-tooltip-id="docker-tip" data-tooltip-content="Ferramenta de DevOps - Docker">
                <Bubble image={ DockerLogo } imgSize={ 200 } alt='Docker' />
              </a>
              <Tooltip id="docker-tip" />
            </>
            <>
              <a data-tooltip-id="firebase-tip" data-tooltip-content="Ferramentas e Serviços - Firebase">
                <Bubble image={ FirebaseLogo } alt='Firebase' />
              </a>
              <Tooltip id="firebase-tip" />
            </>
            <>
              <a data-tooltip-id="git-tip" data-tooltip-content="Ferramenta de DevOps - Git">
                <Bubble image={ GitLogo } alt='Git' />
              </a>
              <Tooltip id="git-tip" />
            </>
            <>
              <a data-tooltip-id="jest-tip" data-tooltip-content="Ferramenta de Testes - Jest">
                <Bubble image={ JestLogo } alt='Jest' />
              </a>
              <Tooltip id="jest-tip" />
            </>
            <>
              <a data-tooltip-id="vue-tip" data-tooltip-content="Framework - Vue.js">
                <Bubble image={ VueLogo } alt='Vue.js' />
              </a>
              <Tooltip id="vue-tip" />
            </>
          </div>
          <div className='flex flex-row justify-center items-center gap-2 mt-16'>
            <CircleAlert color='#FFF' size={35} />
            <span className='text-white font-bold'>Passe o mouse por cima das bolhas para conferir os nomes das tecnologias, se necessário.</span>
          </div>
        </LampContainer>
      </section>
      <section className='bg-slate-900'>
        <div className="h-[28rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <motion.h4
            initial={{ opacity: 0.5, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: '2px rgba(114, 191, 106, 0.3)',
              textShadow: '0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)'
            }}
          >
            ACADÊMICO
          </motion.h4>
          <div className="w-[40rem] h-40 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className='flex flex-row justify-center gap-12 mx-24 pb-20'>
          <InstitutionCard 
            institutionLogo={ PUCLogo } 
            institutionAltImage='Logo Instituição PUC-SP' 
            institurionName='PUC-SP' 
            institutionCourse='Ciência da Computação'
            institutionCourseLevel='Graduação / Bacharelado'
            institurionOpenDetails={ () => {} }
          />
          <InstitutionCard 
            institutionLogo={ FIAPLogo } 
            institutionAltImage='Logo Instituição FIAP' 
            institurionName='FIAP' 
            institutionCourse='Arquitetura de Software'
            institutionCourseLevel='Pós-Graduação'
            institurionOpenDetails={ () => {} }
          />
          <InstitutionCard 
            institutionLogo={ HarvardLogo } 
            institutionAltImage='Logo Instituição Harvard' 
            institurionName='Harvard' 
            institutionCourse='CS50'
            institutionCourseLevel='Cursos Complementares'
            institurionOpenDetails={ () => {} }
          />
        </div>
      </section>
      <Navbar />
    </div>
  )
}