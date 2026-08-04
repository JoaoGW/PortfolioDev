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
            className="mt-12 py-4 text-center text-8xl font-bold tracking-tight text-accent-orange md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-accent-orange) / 0.3)",
              textShadow: "0 0 40px rgb(var(--color-accent-orange) / 0.5)",
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
                start: { lat: -43.5505, lng: -46.6333, label: "São Paulo" },
                end: { lat: -39.9167, lng: -43.9345, label: "Belo Horizonte" },
              },
              {
                start: { lat: -39.9167, lng: -43.9345, label: "Belo Horizonte" },
                end: { lat: -32.9777, lng: -38.5016, label: "Salvador" },
              },
              {
                start: { lat: -32.9777, lng: -38.5016, label: "Salvador" },
                end: { lat: -35.7939, lng: -47.8828, label: "Brasília" },
              },
              {
                start: { lat: -35.7939, lng: -47.8828, label: "Brasília" },
                end: { lat: 28.7223, lng: -9.1393, label: "Lisboa" },
              },
              {
                start: { lat: 28.7223, lng: -9.1393, label: "Lisboa" },
                end: { lat: 31.1579, lng: -8.6291, label: "Porto" },
              },
              {
                start: { lat: 31.1579, lng: -8.6291, label: "Porto" },
                end: { lat: 31.9028, lng: 12.4964, label: "Roma" },
              },
              {
                start: { lat: 31.9028, lng: 12.4964, label: "Roma" },
                end: { lat: 41.5074, lng: -0.1278, label: "Londres" },
              },
              {
                start: { lat: 41.5074, lng: -0.1278, label: "Londres" },
                end: { lat: 50.1699, lng: 14.9384, label: "Helsinki" },
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
