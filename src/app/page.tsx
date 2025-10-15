'use client';

import { Navbar } from '@/components/navbar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [AnimatedBackground, setAnimatedBackground] = useState<any>(null);

  useEffect(() => {
    const loadAnimatedBackground = async () => {
      try {
        const { AnimatedBackground: AB } = await import('animated-backgrounds');
        setAnimatedBackground(AB);
      } catch (error) {
        console.error('Failed to load AnimatedBackground:', error);
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
        interactive={true}
        interactionConfig={{
          effect: 'attract',
          strength: 0.6,
          radius: 250,
          continuous: true,
          multiTouch: true
        }}
      />
      <Navbar />
    </div>
  );
}
