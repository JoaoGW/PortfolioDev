"use client"

import { usePathname } from "next/navigation";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";
 
export function Navbar() {
  const pathname = usePathname();
  
  const links = [
    {
      title: "Sobre",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/sobre",
    },
    {
      title: "Projetos",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projetos",
    },
    {
      title: "Contato",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contato",
    },
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "GitHub",
      icon: (
        <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/JoaoGW",
    },
    {
      title: "LinkedIn",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-do-carmo-ribeiro/",
    },
    {
      title: "Currículo",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 scale-125">
      <FloatingDock
        items={links}
        currentPath={pathname}
      />
    </div>
  );
}