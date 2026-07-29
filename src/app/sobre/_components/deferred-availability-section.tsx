"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
});

type DeferredAvailabilitySectionProps = {
  title: string;
  description: string;
};

export default function DeferredAvailabilitySection({
  title,
  description,
}: DeferredAvailabilitySectionProps) {
  return (
    <section className="bg-slate-900">
      <div className=" py-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h5
            initial={{ opacity: 0.5, x: 160 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            {title}
          </motion.h5>
          <p className="text-sm md:text-lg text-neutral-500 max-w-3xl mx-auto py-4">
            {description}
          </p>
          <WorldMap
            dots={[
              {
                start: { lat: -19.9167, lng: -43.9345, label: "Belo Horizonte" },
                end: { lat: -12.9777, lng: -38.5016, label: "Salvador" },
              },
              {
                start: { lat: -12.9777, lng: -38.5016, label: "Salvador" },
                end: { lat: -15.7939, lng: -47.8828, label: "Brasília" },
              },
              {
                start: { lat: -15.7939, lng: -47.8828, label: "Brasília" },
                end: { lat: 41.9028, lng: 12.4964, label: "Roma" },
              },
              {
                start: { lat: 41.9028, lng: 12.4964, label: "Roma" },
                end: { lat: 51.5074, lng: -0.1278, label: "Londres" },
              },
              {
                start: { lat: 51.5074, lng: -0.1278, label: "Londres" },
                end: { lat: 60.1699, lng: 24.9384, label: "Helsinki" },
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
