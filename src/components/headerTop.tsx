import { useRouter } from "next/navigation";

import { LanguageSelector } from "./languageSelector";

import { Github, Linkedin } from "lucide-react";

export function HeaderTop() {
  const route = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#171717f0] w-full h-auto p-5 flex flex-row justify-between z-50">
      <button
        className="border border-white rounded-3xl py-2 px-5 w-28 flex flex-row justify-center"
        onClick={() => {
          route.push("/");
        }}
      >
        <span className="playwrite text-center">Ribeiro</span>
      </button>
      <div className="flex flex-row items-center">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-do-carmo-ribeiro/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mr-8" onClick={() => {}}>
            <Linkedin />
          </button>
        </a>
        <a href="https://github.com/JoaoGW" target="_blank" rel="noreferrer">
          <button className="mr-8" onClick={() => {}}>
            <Github />
          </button>
        </a>
        <LanguageSelector />
      </div>
    </div>
  );
}
