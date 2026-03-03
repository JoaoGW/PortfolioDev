"use client";

import type { ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type GlareCardProps = {
  children: ReactNode;
  className?: string;
  expandCard?: () => void;
};

export function GlareCard({ children, className, expandCard }: GlareCardProps) {
  return (
    <button
      type="button"
      onClick={expandCard}
      className={cn(
        "relative rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-transform duration-200 hover:scale-[1.01]",
        className,
      )}
    >
      {children}
    </button>
  );
}
