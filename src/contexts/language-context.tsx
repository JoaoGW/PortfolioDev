"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LanguageCode = "pt" | "en" | "fr";

type LanguageMessages = {
  languageName: string;
  header: {
    brand: string;
  };
  navbar: {
    about: string;
    projects: string;
    contact: string;
    home: string;
    resume: string;
  };
  home: {
    typewriter: string[];
    knowProfile: string;
    downloadResume: string;
    downloadError: string;
  };
  projects: {
    pageTitle: string;
    hoverText: string;
    filterTitle: string;
    emptyTextPrefix: string;
    cards: {
      guideAI: { title: string; description: string };
      srGee: { title: string; description: string };
      newWhatsapp: { title: string; description: string };
      carSeller: { title: string; description: string };
    };
  };
  about: {
    greeting: string;
    roleLine1Prefix: string;
    roleLine2Prefix: string;
    introParagraph: {
      beforeWeb: string;
      web: string;
      beforeHybrid: string;
      hybrid: string;
      beforeDevOps: string;
      devOps: string;
      after: string;
    };
    manyOthers: string;
    summaryTitle: string;
    summarySubtitle: string;
    summaryParagraph1: string;
    skillsTitle: string;
    skills: string[];
    summaryParagraph2: string;
    techStackHint: string;
    academicTitle: string;
    experienceTitle: string;
    availabilityTitle: string;
    availabilityDescription: string;
    interestedTitle: string;
    interestedSubtitle: string;
    visitPortfolioTitle: string;
    visitPortfolioDescription: string;
    downloadResumeTitle: string;
    downloadResumeDescription: string;
    fiverrRole: string;
    cultiRole: string;
  };
  contact: {
    pageTitle: string;
    roleTitle: string;
    labels: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    subjects: {
      jobOpportunity: string;
      collaboration: string;
      questions: string;
      other: string;
    };
    steps: {
      questionName: string;
      questionEmailPrefix: string;
      questionEmailSuffix: string;
      questionSubject: string;
      questionMessage: string;
    };
    actions: {
      next: string;
      sending: string;
      sendMessage: string;
      sendAnother: string;
      sentTitlePrefix: string;
      sentTitleSuffix: string;
      sentSubtitle: string;
      enterHintPrefix: string;
    };
    errors: {
      missingName: string;
      invalidEmail: string;
      missingSubject: string;
      missingMessage: string;
      requestError: string;
      networkError: string;
      downloadError: string;
    };
  };
};

export const languageMessages: Record<LanguageCode, LanguageMessages> = {
  pt: {
    languageName: "Português",
    header: {
      brand: "Ribeiro",
    },
    navbar: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      home: "Home",
      resume: "Currículo",
    },
    home: {
      typewriter: ["Desenvolvedor", "Full-Stack", "&", "Mobile", "Full-Stack"],
      knowProfile: "Conhecer Perfil",
      downloadResume: "Baixar Currículo",
      downloadError: "Ocorreu um erro ao baixar o currículo PDF",
    },
    projects: {
      pageTitle: "Projetos de João Pedro Ribeiro",
      hoverText: "PROJETOS",
      filterTitle:
        "Selecione uma Tecnologia que você gostaria de ver presente no projeto...",
      emptyTextPrefix: "Nenhum projeto encontrado com a tecnologia",
      cards: {
        guideAI: {
          title: "Guia Turístico com IA",
          description:
            "Aplicativo mobile para ajudar viajantes a explorarem o mundo de forma inteligente e personalizada. Integra tecnologias modernas como Inteligência Artificial na API da OpenAI e Firebase.",
        },
        srGee: {
          title: "Sr. Gee - Assistente Dev",
          description:
            'Aplicação Web para ajudar Devs a melhoraram seu código com recomendações um tanto quanto "agressivas". Integra as tecnologias da Inteligência Artificial na API da OpenAI e REST API do GitHub.',
        },
        newWhatsapp: {
          title: "Novo WhatsApp",
          description:
            "Clone melhorado do WhatsApp, utilizando tecnologias como Python, Flask, RabbitMQ, bcrypt, SQL Alchemy e SocketIO.",
        },
        carSeller: {
          title: "Car Seller",
          description:
            "Um dos meus primeiros projetos de uma webpage para vendas de automoveis de todos os tipos e custos. Feito em VueJS 3",
        },
      },
    },
    about: {
      greeting: "Olá, meu nome é João Pedro Ribeiro",
      roleLine1Prefix: "Desenvolvedor",
      roleLine2Prefix: "Desenvolvedor",
      introParagraph: {
        beforeWeb:
          "Graduado em Ciência da Computação pela Pontifícia Universidade Católica de São Paulo (PUC-SP). Tenho experiência profissional com Frameworks Web",
        web: "(Next.js e React)",
        beforeHybrid: "Desenvolvimento de Apps Híbridos",
        hybrid: "(Android e iOS)",
        beforeDevOps:
          "além de conhecimento em práticas e ferramentas de DevOps",
        devOps: "(Git, AWS, GCP, entre outros)",
        after: ".",
      },
      manyOthers: "... dentre muitos outros",
      summaryTitle: "SOBRE",
      summarySubtitle:
        "Desenvolvedor de Software | Desenvolvedor Mobile | Cientista da Computação",
      summaryParagraph1:
        "Profissional formado em Ciência da Computação pela Pontifícia Universidade Católica de São Paulo (PUC-SP) e cursando pós-graduação em Arquitetura de Software na FIAP. Apaixonado por tecnologia, inovação e resolução de problemas complexos, tenho como foco o desenvolvimento de soluções escaláveis, intuitivas e de alto desempenho. Meu perfil é proativo e analítico, com forte capacidade de adaptação, aprendizado contínuo e sempre com trabalho em equipe.",
      skillsTitle: "Principais Competências",
      skills: [
        "Desenvolvimento de software e arquitetura de sistemas",
        "Integração de sistemas e otimização de processos",
        "Experiência em suporte e resolução de problemas técnicos",
        "Análise e melhoria da experiência do usuário",
        "Colaboração interdisciplinar e metodologias ágeis (Scrum)",
        "Foco em qualidade, manutenibilidade e escalabilidade",
      ],
      summaryParagraph2:
        "Complementarmente, realizo cursos de Ciência da Computação e Desenvolvimento de Software pela Universidade de Harvard, reforçando minha base técnica e visão global da área. Sou entusiasta em entender, projetar e aprimorar softwares que facilitem a vida das pessoas, entregando produtos sustentáveis e de longo prazo. Busco constantemente inovação e eficiência contribuindo para projetos que unem propósito, impacto e evolução contínua.",
      techStackHint:
        "Passe o mouse por cima das bolhas para conferir os nomes das tecnologias, se necessário.",
      academicTitle: "ACADÊMICO",
      experienceTitle: "EXPERIÊNCIA",
      availabilityTitle: "BRASIL & EUROPA",
      availabilityDescription:
        "Graças a minha dupla nacionalidade, estou disponível para trabalhar livremente e sem necessidade de documentações extras tanto no Brasil quanto no Continente Europeu",
      interestedTitle: "INTERESSADO(A)?",
      interestedSubtitle: "Veja o que mais você pode encontrar sobre mim",
      visitPortfolioTitle: "Continuar a visita ao meu Portfólio",
      visitPortfolioDescription:
        "Conheça os meus melhores projetos práticos nesta próxima seção",
      downloadResumeTitle: "Baixar meu Currículo",
      downloadResumeDescription:
        "Gostaria de baixar o meu currículo no formato clássico? (PDF)",
      fiverrRole: "Desenvolvedor Web",
      cultiRole: "Estagiário",
    },
    contact: {
      pageTitle: "Contato com João Pedro Ribeiro",
      roleTitle: "Desenvolvedor Full-Stack & Mobile",
      labels: {
        name: "Nome",
        email: "E-mail",
        subject: "Assunto",
        message: "Mensagem",
      },
      subjects: {
        jobOpportunity: "Oportunidade de trabalho",
        collaboration: "Projeto em conjunto",
        questions: "Dúvidas",
        other: "Outro",
      },
      steps: {
        questionName: "Olá! Qual é o seu nome?",
        questionEmailPrefix: "Prazer",
        questionEmailSuffix: "Qual é o seu e-mail?",
        questionSubject: "Sobre o que você gostaria de falar?",
        questionMessage: "Me conte mais detalhes...",
      },
      actions: {
        next: "Próximo",
        sending: "Enviando...",
        sendMessage: "Enviar mensagem",
        sendAnother: "Enviar outra mensagem",
        sentTitlePrefix: "Mensagem enviada",
        sentTitleSuffix: "Responderei em breve.",
        sentSubtitle: "Responderei em breve.",
        enterHintPrefix: "ou pressione",
      },
      errors: {
        missingName: "Por favor, insira seu nome.",
        invalidEmail: "E-mail inválido.",
        missingSubject: "Selecione um assunto.",
        missingMessage: "Escreva uma mensagem.",
        requestError: "Ocorreu um erro. Tente novamente.",
        networkError: "Erro de rede. Tente novamente.",
        downloadError: "Ocorreu um erro ao baixar o currículo PDF",
      },
    },
  },
  en: {
    languageName: "English",
    header: {
      brand: "Ribeiro",
    },
    navbar: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      home: "Home",
      resume: "Resume",
    },
    home: {
      typewriter: ["Developer", "Full-Stack", "&", "Mobile", "Full-Stack"],
      knowProfile: "View Profile",
      downloadResume: "Download Resume",
      downloadError: "An error occurred while downloading the PDF resume",
    },
    projects: {
      pageTitle: "João Pedro Ribeiro Projects",
      hoverText: "PROJECTS",
      filterTitle:
        "Select a technology you would like to see in the project...",
      emptyTextPrefix: "No projects found with technology",
      cards: {
        guideAI: {
          title: "AI Tourist Guide",
          description:
            "Mobile app to help travelers explore the world in an intelligent and personalized way. Integrates modern technologies like OpenAI API and Firebase.",
        },
        srGee: {
          title: "Sr. Gee - Dev Assistant",
          description:
            "Web application that helps developers improve their code with somewhat aggressive recommendations. Integrates OpenAI API and GitHub REST API.",
        },
        newWhatsapp: {
          title: "New WhatsApp",
          description:
            "Enhanced WhatsApp clone using technologies such as Python, Flask, RabbitMQ, bcrypt, SQLAlchemy and SocketIO.",
        },
        carSeller: {
          title: "Car Seller",
          description:
            "One of my first webpage projects for selling cars of all types and prices. Built with VueJS 3.",
        },
      },
    },
    about: {
      greeting: "Hi, my name is João Pedro Ribeiro",
      roleLine1Prefix: "Developer",
      roleLine2Prefix: "Developer",
      introParagraph: {
        beforeWeb:
          "Bachelor in Computer Science from the Pontifical Catholic University of São Paulo (PUC-SP). I have professional experience with Web Frameworks",
        web: "(Next.js and React)",
        beforeHybrid: "Hybrid App Development",
        hybrid: "(Android and iOS)",
        beforeDevOps: "as well as knowledge in DevOps practices and tools",
        devOps: "(Git, AWS, GCP, among others)",
        after: ".",
      },
      manyOthers: "... among many others",
      summaryTitle: "ABOUT",
      summarySubtitle:
        "Software Developer | Mobile Developer | Computer Scientist",
      summaryParagraph1:
        "Professional graduated in Computer Science from PUC-SP and currently pursuing a postgraduate degree in Software Architecture at FIAP. Passionate about technology, innovation and solving complex problems, I focus on building scalable, intuitive and high-performance solutions. My profile is proactive and analytical, with strong adaptability, continuous learning and teamwork.",
      skillsTitle: "Core Skills",
      skills: [
        "Software development and systems architecture",
        "Systems integration and process optimization",
        "Technical support and troubleshooting experience",
        "User experience analysis and improvement",
        "Cross-functional collaboration and agile methodologies (Scrum)",
        "Focus on quality, maintainability and scalability",
      ],
      summaryParagraph2:
        "Additionally, I take Computer Science and Software Development courses at Harvard University, strengthening my technical foundation and global perspective. I am enthusiastic about understanding, designing and improving software that makes people's lives easier, delivering sustainable long-term products. I constantly seek innovation and efficiency, contributing to projects that combine purpose, impact and continuous evolution.",
      techStackHint:
        "Hover over the bubbles to check the technology names, if needed.",
      academicTitle: "ACADEMIC",
      experienceTitle: "EXPERIENCE",
      availabilityTitle: "BRAZIL & EUROPE",
      availabilityDescription:
        "Thanks to my dual nationality, I am available to work freely and without extra documentation both in Brazil and across Europe.",
      interestedTitle: "INTERESTED?",
      interestedSubtitle: "See what else you can find about me",
      visitPortfolioTitle: "Continue visiting my Portfolio",
      visitPortfolioDescription:
        "Check out my best practical projects in the next section",
      downloadResumeTitle: "Download my Resume",
      downloadResumeDescription:
        "Would you like to download my resume in classic format? (PDF)",
      fiverrRole: "Web Developer",
      cultiRole: "Intern",
    },
    contact: {
      pageTitle: "Contact João Pedro Ribeiro",
      roleTitle: "Full-Stack & Mobile Developer",
      labels: {
        name: "Name",
        email: "E-mail",
        subject: "Subject",
        message: "Message",
      },
      subjects: {
        jobOpportunity: "Job opportunity",
        collaboration: "Collaboration project",
        questions: "Questions",
        other: "Other",
      },
      steps: {
        questionName: "Hi! What is your name?",
        questionEmailPrefix: "Nice to meet you",
        questionEmailSuffix: "What is your e-mail?",
        questionSubject: "What would you like to talk about?",
        questionMessage: "Tell me more details...",
      },
      actions: {
        next: "Next",
        sending: "Sending...",
        sendMessage: "Send message",
        sendAnother: "Send another message",
        sentTitlePrefix: "Message sent",
        sentTitleSuffix: "I will reply soon.",
        sentSubtitle: "I will reply soon.",
        enterHintPrefix: "or press",
      },
      errors: {
        missingName: "Please enter your name.",
        invalidEmail: "Invalid e-mail.",
        missingSubject: "Select a subject.",
        missingMessage: "Write a message.",
        requestError: "An error occurred. Please try again.",
        networkError: "Network error. Please try again.",
        downloadError: "An error occurred while downloading the PDF resume",
      },
    },
  },
  fr: {
    languageName: "Français",
    header: {
      brand: "Ribeiro",
    },
    navbar: {
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
      home: "Accueil",
      resume: "CV",
    },
    home: {
      typewriter: ["Développeur", "Full-Stack", "&", "Mobile", "Full-Stack"],
      knowProfile: "Voir Profil",
      downloadResume: "Télécharger CV",
      downloadError: "Une erreur est survenue lors du téléchargement du CV PDF",
    },
    projects: {
      pageTitle: "Projets de João Pedro Ribeiro",
      hoverText: "PROJETS",
      filterTitle:
        "Sélectionnez une technologie que vous souhaitez voir dans le projet...",
      emptyTextPrefix: "Aucun projet trouvé avec la technologie",
      cards: {
        guideAI: {
          title: "Guide Touristique IA",
          description:
            "Application mobile pour aider les voyageurs à explorer le monde de manière intelligente et personnalisée. Intègre des technologies modernes comme l'API OpenAI et Firebase.",
        },
        srGee: {
          title: "Sr. Gee - Assistant Dev",
          description:
            "Application Web qui aide les développeurs à améliorer leur code avec des recommandations un peu agressives. Intègre l'API OpenAI et l'API REST GitHub.",
        },
        newWhatsapp: {
          title: "Nouveau WhatsApp",
          description:
            "Clone amélioré de WhatsApp utilisant des technologies telles que Python, Flask, RabbitMQ, bcrypt, SQLAlchemy et SocketIO.",
        },
        carSeller: {
          title: "Car Seller",
          description:
            "L'un de mes premiers projets web pour la vente de voitures de tous types et prix. Réalisé avec VueJS 3.",
        },
      },
    },
    about: {
      greeting: "Bonjour, je m'appelle João Pedro Ribeiro",
      roleLine1Prefix: "Développeur",
      roleLine2Prefix: "Développeur",
      introParagraph: {
        beforeWeb:
          "Diplômé en informatique de la Pontifícia Universidade Católica de São Paulo (PUC-SP). J'ai une expérience professionnelle avec les frameworks Web",
        web: "(Next.js et React)",
        beforeHybrid: "Développement d'applications hybrides",
        hybrid: "(Android et iOS)",
        beforeDevOps:
          "ainsi qu'une connaissance des pratiques et outils DevOps",
        devOps: "(Git, AWS, GCP, entre autres)",
        after: ".",
      },
      manyOthers: "... parmi beaucoup d'autres",
      summaryTitle: "À PROPOS",
      summarySubtitle:
        "Développeur logiciel | Développeur mobile | Informaticien",
      summaryParagraph1:
        "Professionnel diplômé en informatique à la PUC-SP et actuellement en formation postuniversitaire en architecture logicielle à la FIAP. Passionné par la technologie, l'innovation et la résolution de problèmes complexes, je me concentre sur le développement de solutions évolutives, intuitives et performantes. Mon profil est proactif et analytique, avec une forte capacité d'adaptation, d'apprentissage continu et de travail en équipe.",
      skillsTitle: "Compétences Principales",
      skills: [
        "Développement logiciel et architecture des systèmes",
        "Intégration des systèmes et optimisation des processus",
        "Expérience en support et résolution de problèmes techniques",
        "Analyse et amélioration de l'expérience utilisateur",
        "Collaboration interdisciplinaire et méthodologies agiles (Scrum)",
        "Accent sur la qualité, la maintenabilité et la scalabilité",
      ],
      summaryParagraph2:
        "En complément, je suis des cours d'informatique et de développement logiciel à l'Université Harvard, renforçant ma base technique et ma vision globale du domaine. Je suis passionné par la compréhension, la conception et l'amélioration de logiciels qui facilitent la vie des gens, en livrant des produits durables à long terme. Je recherche constamment l'innovation et l'efficacité, en contribuant à des projets alliant sens, impact et évolution continue.",
      techStackHint:
        "Survolez les bulles pour voir les noms des technologies, si nécessaire.",
      academicTitle: "ACADÉMIQUE",
      experienceTitle: "EXPÉRIENCE",
      availabilityTitle: "BRÉSIL & EUROPE",
      availabilityDescription:
        "Grâce à ma double nationalité, je suis disponible pour travailler librement et sans documents supplémentaires, au Brésil comme en Europe.",
      interestedTitle: "INTÉRESSÉ(E) ?",
      interestedSubtitle: "Voyez ce que vous pouvez encore découvrir sur moi",
      visitPortfolioTitle: "Continuer la visite de mon Portfolio",
      visitPortfolioDescription:
        "Découvrez mes meilleurs projets pratiques dans la section suivante",
      downloadResumeTitle: "Télécharger mon CV",
      downloadResumeDescription:
        "Souhaitez-vous télécharger mon CV au format classique ? (PDF)",
      fiverrRole: "Développeur Web",
      cultiRole: "Stagiaire",
    },
    contact: {
      pageTitle: "Contact João Pedro Ribeiro",
      roleTitle: "Développeur Full-Stack & Mobile",
      labels: {
        name: "Nom",
        email: "E-mail",
        subject: "Sujet",
        message: "Message",
      },
      subjects: {
        jobOpportunity: "Opportunité de travail",
        collaboration: "Projet en collaboration",
        questions: "Questions",
        other: "Autre",
      },
      steps: {
        questionName: "Bonjour ! Quel est votre nom ?",
        questionEmailPrefix: "Ravi de vous rencontrer",
        questionEmailSuffix: "Quel est votre e-mail ?",
        questionSubject: "De quoi souhaitez-vous parler ?",
        questionMessage: "Dites-m'en plus...",
      },
      actions: {
        next: "Suivant",
        sending: "Envoi...",
        sendMessage: "Envoyer le message",
        sendAnother: "Envoyer un autre message",
        sentTitlePrefix: "Message envoyé",
        sentTitleSuffix: "Je répondrai bientôt.",
        sentSubtitle: "Je répondrai bientôt.",
        enterHintPrefix: "ou appuyez sur",
      },
      errors: {
        missingName: "Veuillez entrer votre nom.",
        invalidEmail: "E-mail invalide.",
        missingSubject: "Sélectionnez un sujet.",
        missingMessage: "Écrivez un message.",
        requestError: "Une erreur est survenue. Veuillez réessayer.",
        networkError: "Erreur réseau. Veuillez réessayer.",
        downloadError:
          "Une erreur est survenue lors du téléchargement du CV PDF",
      },
    },
  },
};

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  messages: LanguageMessages;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("pt");

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      "portfolio-language",
    ) as LanguageCode | null;
    if (storedLanguage && ["pt", "en", "fr"].includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, messages: languageMessages[language] }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
