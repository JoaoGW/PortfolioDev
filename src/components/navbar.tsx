"use client";

import { usePathname } from "next/navigation";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useLanguage } from "@/contexts/language-context";
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
  const { messages } = useLanguage();

  const links = [
    {
      title: messages.navbar.about,
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/sobre",
    },
    {
      title: messages.navbar.projects,
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projetos",
    },
    {
      title: messages.navbar.contact,
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contato",
    },
    {
      title: messages.navbar.home,
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
      title: messages.navbar.resume,
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 scale-125">
      <FloatingDock items={links} currentPath={pathname} />
    </div>
  );
}
