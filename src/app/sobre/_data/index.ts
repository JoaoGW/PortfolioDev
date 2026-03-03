import type { LanguageCode } from "@/contexts/language-context";
import type { SobreLocaleData } from "./types";

const loadPt = async (): Promise<SobreLocaleData> => {
  const [tooltips, academicCards, academic, experience] = await Promise.all([
    import("./pt/tooltips"),
    import("./pt/academic-cards"),
    import("./pt/academic"),
    import("./pt/experience"),
  ]);

  return {
    tooltips: tooltips.ptTooltips,
    academicCards: academicCards.ptAcademicCards,
    academic: academic.ptAcademic,
    experience: experience.ptExperience,
  };
};

const loadEn = async (): Promise<SobreLocaleData> => {
  const [tooltips, academicCards, academic, experience] = await Promise.all([
    import("./en/tooltips"),
    import("./en/academic-cards"),
    import("./en/academic"),
    import("./en/experience"),
  ]);

  return {
    tooltips: tooltips.enTooltips,
    academicCards: academicCards.enAcademicCards,
    academic: academic.enAcademic,
    experience: experience.enExperience,
  };
};

const loadFr = async (): Promise<SobreLocaleData> => {
  const [tooltips, academicCards, academic, experience] = await Promise.all([
    import("./fr/tooltips"),
    import("./fr/academic-cards"),
    import("./fr/academic"),
    import("./fr/experience"),
  ]);

  return {
    tooltips: tooltips.frTooltips,
    academicCards: academicCards.frAcademicCards,
    academic: academic.frAcademic,
    experience: experience.frExperience,
  };
};

export async function loadSobreLocale(language: LanguageCode): Promise<SobreLocaleData> {
  switch (language) {
    case "pt":
      return loadPt();
    case "en":
      return loadEn();
    case "fr":
      return loadFr();
    default:
      return loadPt();
  }
}

export type { SobreLocaleData } from "./types";
