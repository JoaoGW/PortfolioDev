"use client";

import { PT, US, FR } from "country-flag-icons/react/3x2";
import { ChevronDownIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  useLanguage,
  type LanguageCode,
  languageMessages,
} from "@/contexts/language-context";

type Language = {
  code: LanguageCode;
  name: string;
  flag: typeof PT;
};

const languages: Language[] = [
  { code: "pt", name: languageMessages.pt.languageName, flag: PT },
  { code: "en", name: languageMessages.en.languageName, flag: US },
  { code: "fr", name: languageMessages.fr.languageName, flag: FR },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedLang =
    languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 active:bg-gray-600/50 rounded-full border border-gray-600 transition-colors cursor-pointer"
      >
        <selectedLang.flag className="w-6 h-4" />
        <span className="text-white text-sm">{selectedLang.name}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-[9999] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer text-left"
            >
              <lang.flag className="w-6 h-4" />
              <span className="text-gray-900 text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
