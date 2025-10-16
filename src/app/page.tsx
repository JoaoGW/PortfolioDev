'use client';
import { useEffect, useState } from 'react';

import * as motion from "motion/react-client"

import { TypewriterWordsEffect } from '@/components/ui/typewriter-effect';
import { Navbar } from '@/components/navbar';
import { HeaderTop } from '@/components/headerTop';

type typingWordsTypes = {
  text: string
}

export default function Home() {
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
      </section>
      <Navbar />
    </div>
  );
}
