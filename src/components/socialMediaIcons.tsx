"use client";

import { motion } from "motion/react";
import { Linkedin, Mail, Github } from "lucide-react";

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  color: string;
  label: string;
};

export function SocialMediaIcons() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/JoaoGW",
      color: "#484848",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-do-carmo-ribeiro/",
      color: "#0077b5",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "/contato",
      color: "#ea4335",
      label: "Email",
    },
  ];

  return (
    <ul className="flex gap-4 items-center self-center">
      {socialLinks.map((social, index) => (
        <motion.li
          key={index}
          className="list-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-20 h-20 bg-white text-gray-700 border-2 border-white rounded-full overflow-hidden group"
            whileHover="hover"
            initial="initial"
            aria-label={social.label}
          >
            <motion.span
              className="absolute inset-0 z-0"
              style={{ backgroundColor: social.color }}
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            <motion.span
              className="relative z-10"
              variants={{
                initial: { color: "#374151" },
                hover: { color: "#ffffff", scale: 1.2 },
              }}
              transition={{ duration: 0.3 }}
            >
              {social.icon}
            </motion.span>
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
