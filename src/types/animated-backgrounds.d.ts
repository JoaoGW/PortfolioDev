declare module 'animated-backgrounds' {
  import { CSSProperties, ReactNode } from 'react';

  export interface InteractionConfig {
    effect?: 'attract' | 'repel' | 'gravity' | 'burst';
    strength?: number;
    radius?: number;
    continuous?: boolean;
  }

  export interface AnimationControls {
    isPlaying: boolean;
    speed: number;
    play: () => void;
    pause: () => void;
    reset: () => void;
    setSpeed: (speed: number) => void;
    toggle: () => void;
  }

  export interface LayerConfig {
    animation: string;
    opacity?: number;
    blendMode?: string;
    speed?: number;
    config?: any;
  }

  export interface AnimatedBackgroundProps {
    animationName: string;
    fallbackAnimation?: string;
    fps?: number;
    blendMode?: string;
    style?: CSSProperties;
    interactive?: boolean;
    interactionConfig?: InteractionConfig;
    theme?: string;
    preset?: string;
    animationControls?: AnimationControls;
    enablePerformanceMonitoring?: boolean;
    adaptivePerformance?: boolean;
  }

  export interface LayeredBackgroundProps {
    layers?: LayerConfig[];
    fps?: number;
    style?: CSSProperties;
    enablePerformanceMonitoring?: boolean;
  }

  export interface AnimatedTextProps {
    text?: string;
    effect?: 'typewriter' | 'fadeIn' | 'bounce' | 'glitch' | 'rainbow';
    config?: {
      speed?: number;
      loop?: boolean;
      delay?: number;
      color?: string;
    };
    styles?: CSSProperties;
  }

  export const AnimatedBackground: React.FC<AnimatedBackgroundProps>;
  export const LayeredBackground: React.FC<LayeredBackgroundProps>;
  export const AnimatedText: React.FC<AnimatedTextProps>;
  
  // Hook exports
  export function useAnimationControls(options?: {
    initialSpeed?: number;
    autoPlay?: boolean;
  }): AnimationControls;

  export function usePerformanceMonitor(options?: {
    sampleSize?: number;
    warningThreshold?: number;
    autoOptimize?: boolean;
  }): {
    fps: number;
    avgFps: number;
    memoryUsage: number;
    performanceLevel: string;
    warnings: string[];
    isOptimal: boolean;
    recordFrame: () => void;
    getOptimizationSuggestions: () => string[];
    reset: () => void;
  };

  // Theme and color scheme exports
  export const COLOR_SCHEMES: Record<string, any>;
  export const THEMES: Record<string, any>;
  export class ThemeManager {
    applyTheme(theme: string): any;
    getRandomColor(type?: string): string;
    createGradient(context: CanvasRenderingContext2D, type?: string, coords?: any): CanvasGradient | null;
    createCustomTheme(name: string, theme: any): void;
    getEffectColor(effect: string): string;
    getAnimationSettings(animation: string): any;
    getAvailableThemes(): string[];
    getRecommendedAnimations(): string[];
  }
  export const themeManager: ThemeManager;

  // Gesture recognizer
  export const GestureRecognizer: {
    detectPinch: (event: TouchEvent) => any;
    detectSwipe: (start: any, end: any, threshold?: number) => any;
  };

  // Animation functions
  export function starryNight(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function floatingBubbles(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function gradientWave(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function particleNetwork(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function galaxySpiral(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function rainbowWaves(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function geometricShapes(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function fireflies(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function matrixRain(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function quantumField(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function electricStorm(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function cosmicDust(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function neonPulse(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function auroraBorealis(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function oceanWaves(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function neuralNetwork(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, options?: any): () => void;
  export function createInteractionHandler(canvas: HTMLCanvasElement, config?: InteractionConfig): any;
}