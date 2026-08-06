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
    hero: {
      index: string;
      title: string;
      highlight: string;
      description: string;
      viewProjects: string;
      scrollHint: string;
    };
    sections: {
      about: string;
      projects: string;
      software: string;
      experience: string;
      education: string;
      trajectory: string;
      explore: string;
      faq: string;
    };
    about: {
      eyebrow: string;
      title: string;
      description: string;
      availabilityLabel: string;
      availabilityValue: string;
      focusLabel: string;
      focusValue: string;
      exploreProfile: string;
    };
    projects: {
      description: string;
      previous: string;
      next: string;
      allProjects: string;
      repository: string;
    };
    software: {
      description: string;
      viewAll: string;
      areas: Array<{
        title: string;
        subtitle: string;
        description: string;
        technologies: string[];
      }>;
      techs: Array<{
        title: string;
      }>;
    };
    experience: {
      description: string;
      cards: Array<{
        company: string;
        role: string;
        period: string;
        description: string;
      }>;
    };
    education: {
      description: string;
      cards: Array<{
        institution: string;
        program: string;
        status: string;
      }>;
    };
    trajectory: {
      description: string;
      items: Array<{ year: string; title: string; description: string }>;
    };
    explore: {
      description: string;
      items: Array<{ index: string; title: string; description: string; href: string }>;
    };
    faq: Array<{ question: string; answer: string }>;
    finalCta: {
      eyebrow: string;
      title: string;
      emailLabel: string;
      contact: string;
    };
    footer: {
      copyright: string;
      location: string;
    };
  };
  company: {
    name: string;
    hero: {
      index: string;
      title: string;
      description: string;
      primaryAction: string;
      secondaryAction: string;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ title: string; description: string }>;
    };
    aiIntegration: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
    specialties: {
      eyebrow: string;
      title: string;
      description: string;
      items: string[];
    };
    closing: {
      title: string;
      description: string;
    };
    footer: {
      copyright: string;
      location: string;
    };
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
    multscanRole: string;
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

const companySpecialties = [
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "Vue.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
  "Google Cloud Platform",
  "Git",
  "Jenkins",
  "Jest",
  "Playwright",
  "RabbitMQ",
  "OpenAI",
  "SQLite",
  "Stripe",
];

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
      hero: {
        index: "01 / PORTFÓLIO",
        title: "Soluções digitais com",
        highlight: "intenção e engenharia.",
        description:
          "João Pedro Ribeiro desenvolve produtos Web e Mobile que unem arquitetura de software, experiência de uso e entrega contínua.",
        viewProjects: "Ver projetos",
        scrollHint: "Role para explorar",
      },
      sections: {
        about: "SOBRE",
        projects: "PROJETOS",
        software: "SOFTWARE",
        experience: "EXPERIÊNCIA",
        education: "FORMAÇÃO",
        trajectory: "TRAJETÓRIA",
        explore: "EXPLORAR",
        faq: "PERGUNTAS FREQUENTES",
      },
      about: {
        eyebrow: "(Sobre mim)",
        title: "Tecnologia clara, útil e feita para durar.",
        description:
          "Formado em Ciência da Computação e especializado em arquitetura de software, construo aplicações com foco em clareza, qualidade e evolução sustentável.",
        availabilityLabel: "Disponibilidade",
        availabilityValue: "Brasil e Europa",
        focusLabel: "Atuação",
        focusValue: "Web, Mobile e Cloud",
        exploreProfile: "Conhecer perfil",
      },
      projects: {
        description:
          "Uma seleção de aplicações que combina produtos digitais, integrações e experiências centradas em pessoas.",
        previous: "Projeto anterior",
        next: "Próximo projeto",
        allProjects: "Ver todos os projetos",
        repository: "Abrir repositório",
      },
      software: {
        description:
          "Tecnologias escolhidas pelo problema que resolvem, com atenção a manutenção, desempenho e experiência de uso.",
        viewAll: "Ver stack completo",
        areas: [
          {
            title: "Web",
            subtitle: "Interfaces e produtos digitais",
            description:
              "Aplicações responsivas, acessíveis e orientadas a uma navegação clara.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "Mobile",
            subtitle: "Experiências para Android e iOS",
            description:
              "Aplicativos híbridos com interfaces consistentes e distribuição multiplataforma.",
            technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
          },
          {
            title: "Cloud & APIs",
            subtitle: "Sistemas escaláveis",
            description:
              "Serviços integrados, dados estruturados e práticas de entrega contínua.",
            technologies: ["Node.js", "PostgreSQL", "Docker", "AWS"],
          },
        ],
        techs: [
          { title: "Web (React)" },
          { title: "Mobile (React Native & Expo)" },
          { title: "Cloud" },
          { title: "APIs" },
          { title: "Next.js" },
          { title: "React" },
          { title: "React Native" },
          { title: "Expo" },
          { title: "TypeScript" },
          { title: "JavaScript" },
          { title: "Python" },
          { title: "Node.js" },
          { title: "Vue.js" },
          { title: "HTML" },
          { title: "CSS" },
          { title: "Tailwind CSS" },
          { title: "Firebase" },
          { title: "MongoDB" },
          { title: "PostgreSQL" },
          { title: "MySQL" },
          { title: "Redis" },
          { title: "Docker" },
          { title: "AWS" },
          { title: "Google Cloud Platform" },
          { title: "Git" },
          { title: "Jenkins" },
          { title: "Jest" },
          { title: "Playwright" },
          { title: "RabbitMQ" },
          { title: "OpenAI" },
          { title: "SQLite" },
          { title: "Stripe" },
        ],
      },
      experience: {
        description:
          "Experiências profissionais voltadas ao desenvolvimento de produtos, integrações e operações de software.",
        cards: [
          {
            company: "Multscan",
            role: "Engenheiro de Software Júnior",
            period: "2026 — atual",
            description:
              "Desenvolvimento e manutenção de aplicações Web e Mobile, com entregas contínuas e arquitetura headless.",
          },
          {
            company: "Cultivare",
            role: "Desenvolvedor Full Stack",
            period: "2024 — 2025",
            description:
              "Construção de funcionalidades para uma aplicação SaaS na área da saúde, incluindo APIs e persistência de dados.",
          },
          {
            company: "Fiverr",
            role: "Desenvolvedor Web Freelancer",
            period: "2021 — 2024",
            description:
              "Desenvolvimento de aplicações e landing pages para diferentes mercados e necessidades de produto.",
          },
        ],
      },
      education: {
        description:
          "Formação contínua em computação, engenharia e arquitetura de software.",
        cards: [
          {
            institution: "PUC-SP",
            program: "Bacharelado em Ciência da Computação",
            status: "Concluído em 2025",
          },
          {
            institution: "FIAP",
            program: "Pós-graduação em Arquitetura de Software",
            status: "Em andamento",
          },
          {
            institution: "USP/Esalq",
            program: "MBA em Engenharia de Software",
            status: "Em andamento",
          },
        ],
      },
      trajectory: {
        description:
          "Uma trajetória construída entre estudo, projetos práticos e evolução profissional.",
        items: [
          {
            year: "2021",
            title: "Início de tudo com Projetos Web sob demanda (Freelance)",
            description: "Início da atuação freelance e de entregas para diferentes contextos de mercado e clientes nacionais e internacionais.",
          },
          {
            year: "2022",
            title: "Início da graduação",
            description: "Graduação em Ciência da Computação pela Pontifícia Universidade Católica de São Paulo (PUC-SP)",
          },
          {
            year: "2024",
            title: "Desenvolvimento Full Stack",
            description: "Primeira experiência de estágio, com foco em produto SaaS, APIs e banco de dados para a área da saúde.",
          },
          {
            year: "2025",
            title: "Bacharel em Ciência da Computação",
            description: "Conclusão da graduação na mesma instituição que iniciei, cumprindo o prazo de 4 anos previstos.",
          },
          {
            year: "2026",
            title: "Início da primeira Pós-Graduação",
            description: "Iníciados os estudos em Arquitetura de Software na Faculdade de Informática e Administração Paulista (FIAP). Formato pós-graduação.",
          },
          {
            year: "2026",
            title: "Início do primeiro MBA",
            description: "Iníciados os estudos para o MBA em Engenharia de Software na Universidade de São Paulo (USP).",
          },
          {
            year: "2026",
            title: "Engenharia de Software",
            description: "Entrada na empresa Multscan formato CLT em tempo integral. Atuação com produtos Web e principalmente desenvolvimento Mobile. Há também aplicações Cloud, Databases e práticas de entrega contínua em grandes plataformas.",
          },
          {
            year: "2028",
            title: "Mestrado ou PhD?",
            description: "Pretendo fazer um Mestrado ou um Pós-Doutorado em uma faculdade internacional de renome a partir de 2028. Os planos para cursar são no formato EAD.",
          },
        ],
      },
      explore: {
        description: "Escolha por onde continuar a conhecer meu trabalho.",
        items: [
          { index: "001", title: "Projetos", description: "Aplicações e repositórios", href: "/projetos" },
          { index: "002", title: "GWBR Technologies", description: "Serviços e opção PJ para contratos", href: "/" },
          { index: "003", title: "Contato", description: "Vamos conversar?", href: "/contato" },
          { index: "004", title: "Currículo", description: "Versão para visualização em PDF", href: "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf" },
          { index: "005", title: "GitHub", description: "Veja minha atividade, contribuições, snippets e organizações", href: "https://github.com/JoaoGW" },
        ],
      },
      faq: [
        {
          question: "Em quais áreas você desenvolve?",
          answer: "Atuo com aplicações Web, Mobile, APIs, arquitetura de software e práticas de cloud e DevOps.",
        },
        {
          question: "Quais tecnologias você utiliza?",
          answer: "O portfólio reúne experiências com Next.js, React, React Native, TypeScript, Node.js, bancos de dados, Docker, AWS e outras ferramentas.",
        },
        {
          question: "Você está disponível para oportunidades internacionais?",
          answer: "Sim. Tenho disponibilidade para trabalhar no Brasil e na Europa.",
        },
        {
          question: "Onde posso ver os projetos e repositórios?",
          answer: "A seção de projetos reúne uma seleção de trabalhos e links para os respectivos repositórios.",
        },
      ],
      finalCta: {
        eyebrow: "CONTATO",
        title: "Vamos construir algo relevante juntos?",
        emailLabel: "E-mail profissional",
        contact: "Entrar em contato",
      },
      footer: {
        copyright: "© João Pedro Ribeiro",
        location: "São Paulo, Brasil · Disponível para Brasil e Europa",
      },
    },
    company: {
      name: "GWBR Technologies",
      hero: {
        index: "01 / GWBR TECHNOLOGIES",
        title: "Engenharia de software para empresas que querem crescer.",
        description:
          "Desenvolvimento de aplicações Web, Mobile e integrações Cloud, banco de dados e IA com foco em clareza técnica, manutenção e experiência de uso.",
        primaryAction: "Entrar em contato",
        secondaryAction: "Conhecer o portfólio",
      },
      capabilities: {
        eyebrow: "ENGENHARIA APLICADA",
        title: "Da ambição ao produto: engenharia pronta para escalar.",
        description:
          "Tecnologia escolhida para o problema que precisa ser resolvido, com atenção à evolução do software em décadas de transformação e inovação.",
        items: [
          {
            title: "Aplicações Web",
            description:
              "Interfaces responsivas e sistemas pensados para fluxos claros de trabalho.",
          },
          {
            title: "Aplicativos Mobile",
            description:
              "Experiências multiplataforma para Android e iOS com uma base de código consistente.",
          },
          {
            title: "Integrações e APIs",
            description:
              "Serviços, dados e integrações estruturados para acompanhar a operação do produto.",
          },
        ],
      },
      aiIntegration: {
        eyebrow: "INTEGRAÇÃO DE IA",
        title: "Implementação de IA que entra no produto sem quebrar o que já funciona.",
        description:
          "Integro modelos de IA a aplicações Web e Mobile, novas ou legadas, com APIs, fluxos e dados preparados para uso real.",
        items: ["Sistemas modernos", "Sistemas legados", "Web e Mobile"],
      },
      specialties: {
        eyebrow: "TECNOLOGIAS ESPECIALIZADAS",
        title: "Uma stack escolhida para cada camada do produto.",
        description:
          "Ferramentas modernas e em tendência usadas de forma complementar para criar interfaces, serviços, integrações e fluxos de entrega confiáveis.",
        items: [...companySpecialties],
      },
      closing: {
        title: "Tecnologia construída a partir do contexto.",
        description:
          "Conheça os projetos e a trajetória técnica que orientam o trabalho da GWBR Technologies.",
      },
      footer: {
        copyright: "© GWBR Technologies",
        location: "São Paulo, Brasil",
      },
    },
    projects: {
      pageTitle: "Projetos com participação",
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
        beforeHybrid: "Desenvolvimento de Apps Mobile Híbridos",
        hybrid: "(Android e iOS)",
        beforeDevOps:
          "além de conhecimento em práticas e ferramentas de DevOps",
        devOps: "(Git, AWS, GCP, entre outros)",
        after: ".",
      },
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
        "Complementarmente, realizo uma  pós-graduação MBA em Engenharia de Software pela Universidade de São Paulo (USP), reforçando minha base técnica e visão global da área. Sou entusiasta em entender, projetar e aprimorar softwares que facilitem a vida das pessoas, entregando produtos sustentáveis e de longo prazo. Busco constantemente inovação e eficiência contribuindo para projetos que unem propósito, impacto e evolução contínua.",
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
      fiverrRole: "Desenvolvedor Web - Freelancer",
      cultiRole: "Estagiário - Desenvolvimento Full Stack",
      multscanRole: "Engenheiro de Software Júnior",
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
      hero: {
        index: "01 / PORTFOLIO",
        title: "Digital solutions with",
        highlight: "intention and engineering.",
        description:
          "João Pedro Ribeiro builds Web and Mobile products that bring together software architecture, user experience and continuous delivery.",
        viewProjects: "View projects",
        scrollHint: "Scroll to explore",
      },
      sections: {
        about: "ABOUT",
        projects: "PROJECTS",
        software: "SOFTWARE",
        experience: "EXPERIENCE",
        education: "EDUCATION",
        trajectory: "TRAJECTORY",
        explore: "EXPLORE",
        faq: "FREQUENTLY ASKED QUESTIONS",
      },
      about: {
        eyebrow: "(About me)",
        title: "Clear, useful technology made to last.",
        description:
          "With a Computer Science degree and a focus on software architecture, I build applications around clarity, quality and sustainable evolution.",
        availabilityLabel: "Availability",
        availabilityValue: "Brazil and Europe",
        focusLabel: "Focus",
        focusValue: "Web, Mobile and Cloud",
        exploreProfile: "View profile",
      },
      projects: {
        description:
          "A selection of applications combining digital products, integrations and people-centered experiences.",
        previous: "Previous project",
        next: "Next project",
        allProjects: "View all projects",
        repository: "Open repository",
      },
      software: {
        description:
          "Technologies selected for the problems they solve, with attention to maintainability, performance and user experience.",
        viewAll: "View full stack",
        areas: [
          {
            title: "Web",
            subtitle: "Interfaces and digital products",
            description:
              "Responsive, accessible applications built around clear navigation.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "Mobile",
            subtitle: "Experiences for Android and iOS",
            description:
              "Hybrid apps with consistent interfaces and cross-platform distribution.",
            technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
          },
          {
            title: "Cloud & APIs",
            subtitle: "Scalable systems",
            description:
              "Integrated services, structured data and continuous delivery practices.",
            technologies: ["Node.js", "PostgreSQL", "Docker", "AWS"],
          },
        ],
        techs: [
          { title: "Web (React)" },
          { title: "Mobile (React Native & Expo)" },
          { title: "Cloud" },
          { title: "APIs" },
          { title: "Next.js" },
          { title: "React" },
          { title: "React Native" },
          { title: "Expo" },
          { title: "TypeScript" },
          { title: "JavaScript" },
          { title: "Python" },
          { title: "Node.js" },
          { title: "Vue.js" },
          { title: "HTML" },
          { title: "CSS" },
          { title: "Tailwind CSS" },
          { title: "Firebase" },
          { title: "MongoDB" },
          { title: "PostgreSQL" },
          { title: "MySQL" },
          { title: "Redis" },
          { title: "Docker" },
          { title: "AWS" },
          { title: "Google Cloud Platform" },
          { title: "Git" },
          { title: "Jenkins" },
          { title: "Jest" },
          { title: "Playwright" },
          { title: "RabbitMQ" },
          { title: "OpenAI" },
          { title: "SQLite" },
          { title: "Stripe" },
        ],
      },
      experience: {
        description:
          "Professional experiences focused on product development, integrations and software operations.",
        cards: [
          {
            company: "Multscan",
            role: "Junior Software Engineer",
            period: "2026 — present",
            description:
              "Web and Mobile application development and maintenance, with continuous delivery and headless architecture.",
          },
          {
            company: "Cultivare",
            role: "Full Stack Developer",
            period: "2024 — 2025",
            description:
              "Feature delivery for a healthcare SaaS application, including APIs and data persistence.",
          },
          {
            company: "Fiverr",
            role: "Freelance Web Developer",
            period: "2021 — 2024",
            description:
              "Web applications and landing pages for different markets and product needs.",
          },
        ],
      },
      education: {
        description:
          "Continuous education in computing, engineering and software architecture.",
        cards: [
          {
            institution: "PUC-SP",
            program: "Bachelor's degree in Computer Science",
            status: "Completed in 2025",
          },
          {
            institution: "FIAP",
            program: "Postgraduate degree in Software Architecture",
            status: "In progress",
          },
          {
            institution: "USP/Esalq",
            program: "MBA in Software Engineering",
            status: "In progress",
          },
        ],
      },
      trajectory: {
        description:
          "A path built through study, practical projects and professional growth.",
        items: [
          {
            year: "2021",
            title: "On-demand Web projects",
            description: "Started freelance work and deliveries for different markets.",
          },
          {
            year: "2024",
            title: "Full Stack Development",
            description: "SaaS product, API and database experience in healthcare.",
          },
          {
            year: "2025",
            title: "Computer Science",
            description: "Completed the degree and deepened software architecture studies.",
          },
          {
            year: "2026",
            title: "Software Engineering",
            description: "Working with Web and Mobile products, cloud and continuous delivery.",
          },
        ],
      },
      explore: {
        description: "Choose where to continue exploring my work.",
        items: [
          { index: "001", title: "Projects", description: "Applications and repositories", href: "/projetos" },
          { index: "002", title: "About", description: "Path and skills", href: "/sobre" },
          { index: "003", title: "Contact", description: "Let's talk", href: "/contato" },
          { index: "004", title: "Resume", description: "PDF version", href: "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf" },
        ],
      },
      faq: [
        {
          question: "Which areas do you work in?",
          answer: "I work with Web and Mobile applications, APIs, software architecture, cloud and DevOps practices.",
        },
        {
          question: "Which technologies do you use?",
          answer: "The portfolio includes experience with Next.js, React, React Native, TypeScript, Node.js, databases, Docker, AWS and other tools.",
        },
        {
          question: "Are you available for international opportunities?",
          answer: "Yes. I am available to work in Brazil and Europe.",
        },
        {
          question: "Where can I see projects and repositories?",
          answer: "The projects section includes a selected set of work and links to their repositories.",
        },
      ],
      finalCta: {
        eyebrow: "10 / CONTACT",
        title: "Shall we build something meaningful?",
        emailLabel: "Professional e-mail",
        contact: "Get in touch",
      },
      footer: {
        copyright: "© João Pedro Ribeiro",
        location: "São Paulo, Brazil · Available for Brazil and Europe",
      },
    },
    company: {
      name: "GWBR Technologies",
      hero: {
        index: "01 / GWBR TECHNOLOGIES",
        title: "Software engineering for digital products.",
        description:
          "Web and Mobile application development and integrations focused on technical clarity, maintainability and user experience.",
        primaryAction: "Get in touch",
        secondaryAction: "Explore the portfolio",
      },
      capabilities: {
        eyebrow: "APPLIED ENGINEERING",
        title: "From ambition to product: engineering built to scale.",
        description:
          "Technology selected for the problem at hand, with attention to the software's evolution.",
        items: [
          {
            title: "Web Applications",
            description:
              "Responsive interfaces and systems designed around clear work flows.",
          },
          {
            title: "Mobile Products",
            description:
              "Cross-platform Android and iOS experiences with a consistent codebase.",
          },
          {
            title: "Integrations and APIs",
            description:
              "Services, data and integrations structured to support product operations.",
          },
        ],
      },
      aiIntegration: {
        eyebrow: "AI INTEGRATION",
        title: "AI added to the product without breaking what already works.",
        description:
          "I integrate AI models into Web and Mobile applications—new or legacy—with APIs, flows and data prepared for real use.",
        items: ["New systems", "Legacy systems", "Web and Mobile"],
      },
      specialties: {
        eyebrow: "SPECIALIZED TECHNOLOGIES",
        title: "A stack selected for every product layer.",
        description:
          "Tools used together to build interfaces, services, integrations and dependable delivery flows.",
        items: [...companySpecialties],
      },
      closing: {
        title: "Technology built from context.",
        description:
          "Explore the projects and technical path that inform GWBR Technologies' work.",
      },
      footer: {
        copyright: "© GWBR Technologies",
        location: "São Paulo, Brazil",
      },
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
        "Additionally, I take Computer Science and Software Development courses at USP University, strengthening my technical foundation and global perspective. I am enthusiastic about understanding, designing and improving software that makes people's lives easier, delivering sustainable long-term products. I constantly seek innovation and efficiency, contributing to projects that combine purpose, impact and continuous evolution.",
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
      multscanRole: "Junior Software Engineer",
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
      hero: {
        index: "01 / PORTFOLIO",
        title: "Des solutions numériques avec",
        highlight: "intention et ingénierie.",
        description:
          "João Pedro Ribeiro développe des produits Web et Mobile qui réunissent architecture logicielle, expérience utilisateur et livraison continue.",
        viewProjects: "Voir les projets",
        scrollHint: "Faites défiler pour explorer",
      },
      sections: {
        about: "À PROPOS",
        projects: "PROJETS",
        software: "LOGICIEL",
        experience: "EXPÉRIENCE",
        education: "FORMATION",
        trajectory: "PARCOURS",
        explore: "EXPLORER",
        faq: "QUESTIONS FRÉQUENTES",
      },
      about: {
        eyebrow: "(À propos de moi)",
        title: "Une technologie claire, utile et conçue pour durer.",
        description:
          "Diplômé en informatique et spécialisé en architecture logicielle, je développe des applications axées sur la clarté, la qualité et une évolution durable.",
        availabilityLabel: "Disponibilité",
        availabilityValue: "Brésil et Europe",
        focusLabel: "Spécialités",
        focusValue: "Web, Mobile et Cloud",
        exploreProfile: "Voir le profil",
      },
      projects: {
        description:
          "Une sélection d'applications qui associent produits numériques, intégrations et expériences centrées sur les personnes.",
        previous: "Projet précédent",
        next: "Projet suivant",
        allProjects: "Voir tous les projets",
        repository: "Ouvrir le dépôt",
      },
      software: {
        description:
          "Des technologies choisies pour les problèmes qu'elles résolvent, avec attention à la maintenance, aux performances et à l'expérience utilisateur.",
        viewAll: "Voir le stack complet",
        areas: [
          {
            title: "Web",
            subtitle: "Interfaces et produits numériques",
            description:
              "Des applications responsives et accessibles, conçues autour d'une navigation claire.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "Mobile",
            subtitle: "Expériences pour Android et iOS",
            description:
              "Des applications hybrides aux interfaces cohérentes et à la distribution multiplateforme.",
            technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
          },
          {
            title: "Cloud et APIs",
            subtitle: "Systèmes évolutifs",
            description:
              "Services intégrés, données structurées et pratiques de livraison continue.",
            technologies: ["Node.js", "PostgreSQL", "Docker", "AWS"],
          },
        ],
        techs: [
          { title: "Web (React)" },
          { title: "Mobile (React Native & Expo)" },
          { title: "Cloud" },
          { title: "APIs" },
          { title: "Next.js" },
          { title: "React" },
          { title: "React Native" },
          { title: "Expo" },
          { title: "TypeScript" },
          { title: "JavaScript" },
          { title: "Python" },
          { title: "Node.js" },
          { title: "Vue.js" },
          { title: "HTML" },
          { title: "CSS" },
          { title: "Tailwind CSS" },
          { title: "Firebase" },
          { title: "MongoDB" },
          { title: "PostgreSQL" },
          { title: "MySQL" },
          { title: "Redis" },
          { title: "Docker" },
          { title: "AWS" },
          { title: "Google Cloud Platform" },
          { title: "Git" },
          { title: "Jenkins" },
          { title: "Jest" },
          { title: "Playwright" },
          { title: "RabbitMQ" },
          { title: "OpenAI" },
          { title: "SQLite" },
          { title: "Stripe" },
        ],
      },
      experience: {
        description:
          "Expériences professionnelles dédiées au développement de produits, aux intégrations et aux opérations logicielles.",
        cards: [
          {
            company: "Multscan",
            role: "Ingénieur logiciel junior",
            period: "2026 — aujourd'hui",
            description:
              "Développement et maintenance d'applications Web et Mobile, avec livraison continue et architecture headless.",
          },
          {
            company: "Cultivare",
            role: "Développeur Full Stack",
            period: "2024 — 2025",
            description:
              "Développement de fonctionnalités pour une application SaaS de santé, incluant APIs et persistance des données.",
          },
          {
            company: "Fiverr",
            role: "Développeur Web freelance",
            period: "2021 — 2024",
            description:
              "Applications Web et landing pages pour différents marchés et besoins produits.",
          },
        ],
      },
      education: {
        description:
          "Formation continue en informatique, ingénierie et architecture logicielle.",
        cards: [
          {
            institution: "PUC-SP",
            program: "Licence en informatique",
            status: "Terminée en 2025",
          },
          {
            institution: "FIAP",
            program: "Postgraduate en architecture logicielle",
            status: "En cours",
          },
          {
            institution: "USP/Esalq",
            program: "MBA en ingénierie logicielle",
            status: "En cours",
          },
        ],
      },
      trajectory: {
        description:
          "Un parcours construit entre étude, projets pratiques et évolution professionnelle.",
        items: [
          {
            year: "2021",
            title: "Projets Web à la demande",
            description: "Début du travail freelance et de livraisons pour différents marchés.",
          },
          {
            year: "2024",
            title: "Développement Full Stack",
            description: "Expérience de produit SaaS, APIs et base de données dans la santé.",
          },
          {
            year: "2025",
            title: "Informatique",
            description: "Obtention du diplôme et approfondissement de l'architecture logicielle.",
          },
          {
            year: "2026",
            title: "Ingénierie logicielle",
            description: "Produits Web et Mobile, cloud et livraison continue.",
          },
        ],
      },
      explore: {
        description: "Choisissez comment poursuivre la découverte de mon travail.",
        items: [
          { index: "001", title: "Projets", description: "Applications et dépôts", href: "/projetos" },
          { index: "002", title: "À propos", description: "Parcours et compétences", href: "/sobre" },
          { index: "003", title: "Contact", description: "Parlons-en", href: "/contato" },
          { index: "004", title: "CV", description: "Version PDF", href: "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf" },
        ],
      },
      faq: [
        {
          question: "Dans quels domaines travaillez-vous ?",
          answer: "Je travaille avec des applications Web et Mobile, des APIs, l'architecture logicielle, le cloud et les pratiques DevOps.",
        },
        {
          question: "Quelles technologies utilisez-vous ?",
          answer: "Le portfolio réunit des expériences avec Next.js, React, React Native, TypeScript, Node.js, les bases de données, Docker, AWS et d'autres outils.",
        },
        {
          question: "Êtes-vous disponible pour des opportunités internationales ?",
          answer: "Oui. Je suis disponible pour travailler au Brésil et en Europe.",
        },
        {
          question: "Où puis-je voir les projets et les dépôts ?",
          answer: "La section projets rassemble une sélection de réalisations et des liens vers leurs dépôts.",
        },
      ],
      finalCta: {
        eyebrow: "10 / CONTACT",
        title: "Construisons quelque chose d'important ?",
        emailLabel: "E-mail professionnel",
        contact: "Me contacter",
      },
      footer: {
        copyright: "© João Pedro Ribeiro",
        location: "São Paulo, Brésil · Disponible pour le Brésil et l'Europe",
      },
    },
    company: {
      name: "GWBR Technologies",
      hero: {
        index: "01 / GWBR TECHNOLOGIES",
        title: "Ingénierie logicielle pour les produits numériques.",
        description:
          "Développement d'applications Web et Mobile ainsi que d'intégrations, avec une attention à la clarté technique, à la maintenance et à l'expérience utilisateur.",
        primaryAction: "Nous contacter",
        secondaryAction: "Découvrir le portfolio",
      },
      capabilities: {
        eyebrow: "INGÉNIERIE APPLIQUÉE",
        title: "De l’ambition au produit : une ingénierie pensée pour évoluer.",
        description:
          "Une technologie choisie selon le problème à résoudre, en pensant à l'évolution du logiciel.",
        items: [
          {
            title: "Applications Web",
            description:
              "Des interfaces responsives et des systèmes conçus pour des flux de travail clairs.",
          },
          {
            title: "Produits Mobile",
            description:
              "Des expériences multiplateformes pour Android et iOS avec une base de code cohérente.",
          },
          {
            title: "Intégrations et APIs",
            description:
              "Des services, données et intégrations structurés pour soutenir l'activité du produit.",
          },
        ],
      },
      aiIntegration: {
        eyebrow: "INTÉGRATION IA",
        title: "L’IA intégrée au produit sans casser ce qui fonctionne déjà.",
        description:
          "J’intègre des modèles d’IA aux applications Web et Mobile, nouvelles ou existantes, avec des APIs, flux et données prêts pour un usage réel.",
        items: ["Nouveaux systèmes", "Systèmes existants", "Web et Mobile"],
      },
      specialties: {
        eyebrow: "TECHNOLOGIES SPÉCIALISÉES",
        title: "Une stack choisie pour chaque couche du produit.",
        description:
          "Des outils complémentaires pour concevoir des interfaces, services, intégrations et flux de livraison fiables.",
        items: [...companySpecialties],
      },
      closing: {
        title: "Une technologie conçue à partir du contexte.",
        description:
          "Découvrez les projets et le parcours technique qui orientent le travail de GWBR Technologies.",
      },
      footer: {
        copyright: "© GWBR Technologies",
        location: "São Paulo, Brésil",
      },
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
        "En complément, je suis des cours d'informatique et de développement logiciel à l'Université USP, renforçant ma base technique et ma vision globale du domaine. Je suis passionné par la compréhension, la conception et l'amélioration de logiciels qui facilitent la vie des gens, en livrant des produits durables à long terme. Je recherche constamment l'innovation et l'efficacité, en contribuant à des projets alliant sens, impact et évolution continue.",
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
      multscanRole: "Ingénieur logiciel junior"
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
