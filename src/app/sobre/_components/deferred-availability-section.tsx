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
                start: {
                  lat: -39.5505,
                  lng: -46.6333,
                },
                end: {
                  lat: -38.9068,
                  lng: -43.1729,
                },
              },
              {
                start: { lat: -39.5505, lng: -46.6333 },
                end: { lat: 32.8566, lng: 2.3522 },
              },
              {
                start: { lat: -38.9068, lng: -43.1729 },
                end: { lat: 35.5074, lng: -0.1278 },
              },
              {
                start: { lat: 32.8566, lng: 2.3522 },
                end: { lat: 36.52, lng: 13.405 },
              },
              {
                start: { lat: 35.5074, lng: -0.1278 },
                end: { lat: 36.3676, lng: 4.9041 },
              },
              {
                start: { lat: 36.3676, lng: 4.9041 },
                end: { lat: 34.8503, lng: 4.3517 },
              },
              {
                start: { lat: 34.8503, lng: 4.3517 },
                end: { lat: 22.7223, lng: -9.1393 },
              },
              {
                start: { lat: 22.7223, lng: -9.1393 },
                end: { lat: 25.1579, lng: -8.6291 },
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
