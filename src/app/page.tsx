'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import * as motion from "motion/react-client"

import { TypewriterWordsEffect } from '@/components/ui/typewriter-effect';
import { Navbar } from '@/components/navbar';
import { HeaderTop } from '@/components/headerTop';
import { Button } from "@/components/ui/moving-border";
import { Brain, FileDown } from 'lucide-react';

type typingWordsTypes = {
  text: string
}

export default function Home() {
  const router = useRouter();

  const [showPresentationModal, setShowPresentationModal] = useState<boolean>(false);
  const [AnimatedBackground, setAnimatedBackground] = useState<any>(null);
  const typingWords: typingWordsTypes[] = [
    {
      text: "Desenvolvedor"
    },
    {
      text: "Full-Stack"
    },
    {
      text: "&"
    },
    {
      text: "Mobile"
    },
    {
      text: "Full-Stack"
    }
  ]

  useEffect(() => {
    const loadAnimatedBackground = async () => {
      try {
        const { AnimatedBackground: AB } = await import('animated-backgrounds');
        setAnimatedBackground(AB);
      } catch (error) {
        console.error(error);
      }
    };

    loadAnimatedBackground();
  }, []);

  if (!AnimatedBackground) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: -1
      }} />
    );
  }

  return (
    <div>
      <AnimatedBackground
        animationName="neuralNetwork"
        theme="landingPage"
        particles={300}
        interactive={true}
        interactionConfig={{
          effect: 'attract',
          strength: 0.6,
          radius: 250,
          continuous: true,
          multiTouch: true
        }}
      />
      <HeaderTop />
      <section className="fixed inset-0 flex flex-col justify-center items-center z-10">
        <motion.h1
          className="text-white playwrite text-5xl mb-6"
          initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 3.0,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
          João Pedro do Carmo Ribeiro
        </motion.h1>
        <TypewriterWordsEffect words={ typingWords }/>
        <div className='flex flex-row mt-10 gap-10'>
          <Button
            className="bg-white dark:bg-slate-700 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-3"
            borderRadius="1.75rem"
            onClick={ () => router.push("/sobre") }
          >
            <Brain color='#FFF' />
            Conhecer Perfil
          </Button>
          <Button
            className="bg-white dark:bg-slate-700 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-2"
            borderRadius="1.75rem"
            onClick={ () => {} }
          >
            <FileDown color='#FFF' />
            Baixar Currículo
          </Button>
        </div>
      </section>
      <Navbar />
    </div>
  );
}
