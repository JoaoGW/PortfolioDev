import { Linkedin } from "lucide-react";
import { LanguageSelector } from "./languageSelector";

export function HeaderTop(){
  return(
    <div className="fixed top-0 left-0 right-0 bg-[#171717ce] w-full h-auto p-5 flex flex-row justify-between z-50">
      <div className="border border-white rounded-3xl py-2 px-5 w-28 flex flex-row justify-center">
        <span className="playwrite text-center">Ribeiro</span>
      </div>
      <div className="flex flex-row items-center">
        <button className="mr-8"><Linkedin /></button>
        <LanguageSelector />
      </div>
    </div>
  )
}