"use client"
import { useState } from "react";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TechFilterButton } from "@/components/techFilterButton";

import ReactLogo from "../../assets/Logos/logo-react-512.png";

export default function Projetos(){
  const [activeFilter, setActiveFilter] = useState<string>();

  return(
    <div>
      <HeaderTop />

      <section className="mt-[-5] mb-[-160]">
        <TextHoverEffect text='PROJETOS' size="large"/>
      </section>
      <section className='flex flex-col bg-slate-900 p-24'>
        <div><span>Selecione uma Tecnologia que você gostaria de ver mais</span></div>
        <div className="flex flex-row flex-wrap gap-8">
          <TechFilterButton techLogo={ ReactLogo } techName="React" filterAction={ () => setActiveFilter("") } />
          <TechFilterButton techLogo={ ReactLogo } techName="React" filterAction={ () => setActiveFilter("") } />
        </div>
      </section>

      <Navbar />
    </div>
  )
}