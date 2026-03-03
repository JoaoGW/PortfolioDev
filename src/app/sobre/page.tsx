"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { GlareCard } from "@/components/ui/glare-card";
import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";
import { InstitutionCard } from "@/components/institutionCard";
import { SocialMediaIcons } from "@/components/socialMediaIcons";
import { PresentationTopics } from "@/components/presentationTopics";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { useLanguage } from "@/contexts/language-context";

import ProfilePicture from "../../assets/profile.webp";
import DockerLogo from "../../assets/Logos/docker-512.webp";
import NodeLogo from "../../assets/Logos/logo-node-js-512.webp";
import ReactLogo from "../../assets/Logos/logo-react-512.webp";
import NextjsLogo from "../../assets/Logos/next-js-logo.webp";
import TypeScriptLogo from "../../assets/Logos/typescript-512.webp";
import MongodbLogo from "../../assets/Logos/mongodb-512.webp";
import PythonLogo from "../../assets/Logos/python_logo.webp";
import PUCLogo from "../../assets/Instituicoes/pucsp-logo.webp";
import FIAPLogo from "../../assets/Instituicoes/fiap_logo.webp";
import HarvardLogo from "../../assets/Instituicoes/Harvard_logo.webp";
import CultiLogo from "../../assets/Empresas/cultivare_logo.webp";
import FiverrLogo from "../../assets/Empresas/fiverr_logo.webp";

import { FileDown, StepForward } from "lucide-react";

const InstitutionModal = dynamic(
  () =>
    import("@/components/institutionModal").then((mod) => mod.InstitutionModal),
  { ssr: false },
);

const EnterpriseModal = dynamic(
  () =>
    import("@/components/enterpriseModal").then((mod) => mod.EnterpriseModal),
  { ssr: false },
);

const DeferredTechStackSection = dynamic(
  () => import("./_components/deferred-tech-stack-section"),
  {
    ssr: false,
  },
);

const DeferredAvailabilitySection = dynamic(
  () => import("./_components/deferred-availability-section"),
  {
    ssr: false,
  },
);

type curriculumFileTypes = {
  fileUrl: string;
  fileName: string;
};

export default function Sobre() {
  const { messages, language } = useLanguage();
  const [openModal, setOpenModal] = useState<"puc" | "fiap" | "harvard" | null>(
    null,
  );
  const [experienceCard, setExperienceCard] = useState<
    "culti" | "fiverr" | null
  >(null);
  const [showTechStackSection, setShowTechStackSection] = useState(false);
  const [showAvailabilitySection, setShowAvailabilitySection] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const techStackTimer = window.setTimeout(() => {
      setShowTechStackSection(true);
    }, 600);

    const availabilityTimer = window.setTimeout(() => {
      setShowAvailabilitySection(true);
    }, 1200);

    return () => {
      window.clearTimeout(techStackTimer);
      window.clearTimeout(availabilityTimer);
    };
  }, []);

  const localizedSobre = {
    pt: {
      tooltips: {
        typescript: "Linguagem de Programação - TypeScript",
        javascript: "Linguagem de Programação - JavaScript",
        python: "Linguagem de Programação - Python",
        nodejs: "Ambiente de Execução - Node.js",
        react: "Framework - React & React Native",
        mongodb: "Banco de Dados - MongoDB",
        nextjs: "Framework - Next.js",
        docker: "Ferramenta de DevOps - Docker",
        firebase: "Ferramentas e Serviços - Firebase",
        git: "Ferramenta de DevOps - Git",
        jest: "Ferramenta de Testes - Jest",
        vue: "Framework - Vue.js",
        aws: "Ferramenta de DevOps - Amazon Web Services",
        googlecloud: "Ferramenta de DevOps - Google Cloud Platform",
      },
      academicCards: {
        pucCourse: "Ciência da Computação",
        pucLevel: "Graduação / Bacharelado",
        fiapCourse: "Arquitetura de Software",
        fiapLevel: "Pós-Graduação",
        harvardCourse: "CS50",
        harvardLevel: "Cursos Complementares",
      },
      academic: {
        puc: {
          courseType: "Graduação / Bacharelado",
          courseName: "Ciência da Computação",
          description:
            "Bacharelado em Ciência da Computação com formação sólida em fundamentos teóricos e práticos da computação. O curso teve como foco as áreas de algoritmos, estruturas de dados, engenharia de software, banco de dados, redes de computadores, inteligência artificial e desenvolvimento de sistemas em geral.",
          skills: [
            "Algoritmos e Estruturas de Dados",
            "Programação Orientada a Objetos",
            "Engenharia de Software",
            "Banco de Dados",
            "Desenvolvimento Mobile",
            "Arquitetura de Software",
            "Sistemas Operacionais",
            "Redes de Computadores",
            "Inteligência Artificial",
            "Metodologias Ágeis",
          ],
          certificates: [
            {
              name: "Diploma de Bacharel em Ciência da Computação",
              issuedDate: "Dezembro de 2025",
              link: "",
            },
            {
              name: "Instrutor na Oficina de DevOps - FCET2025",
              issuedDate: "Outubro de 2025",
              link: "",
            },
            {
              name: "Instrutor na Oficina de Desenvolvimento Mobile - FCET2025",
              issuedDate: "Outubro de 2025",
              link: "",
            },
            {
              name: "Monitor na disciplina de Laboratório de Estruturas Dinâmicas",
              issuedDate: "Junho de 2025",
              link: "",
            },
            {
              name: "Instrutor na Oficina de Desenvolvimento Web + GitHub - FCET2023",
              issuedDate: "Outubro de 2023",
              link: "",
            },
          ],
          activities: [
            {
              title: "EZTripAI -  Trabalho de Conclusão de Curso (TCC)",
              description:
                "Projeto voltado a ajudar turistas de todas as partes do mundo a gerarem seu roteiro de viagem e pedirem sugestões em tempo real para a Inteligência Artifical. O modelo de LLM de Inteligência Artifical adotado neste projeto é o GPT3.5-Turbo, utilizamos como base informações do usuário sobre localização, gostos pessoais, horários de abertura dos estabelecimentos e/ou pontos turísticos e informações do clima em tempo real para gerar nossas recomendações automatizadas.",
              period: "2025",
            },
            {
              title: "Evolução dos Processadores",
              description:
                "Projeto para a disciplina de Arquitetura de Computadores sobre a Evolução dos Processadores reconhecido e solicitado pela Doutora docente Edith Ranzini como material para as turmas seguintes/futuras",
              period: "2023",
            },
          ],
        },
        fiap: {
          courseType: "Pós-Graduação",
          courseName: "Software Architecture",
          description:
            "Pós-graduação focada em dominar na prática os conhecimentos de desenvolvimento e arquitetura de software para atuar em projetos com altos níveis de complexidade. O curso abrange microsserviços, containers, aplicações serverless, desenvolvimento seguro e muito mais, preparando para criar soluções escaláveis e resolver desafios reais do mercado.",
          skills: [
            "Domain-Driven Design (DDD)",
            "Arquitetura de Software",
            "Qualidade de Software",
            "Desenvolvimento Seguro",
            "Docker e Containerização",
            "Clean Architecture",
            "DevOps (CI/CD)",
            "Terraform",
            "Kubernetes",
            "OpenTelemetry",
            "API Gateway",
            "Serverless Architecture",
            "Neo4j e Grafos",
            "Arquitetura de Microsserviços",
            "SAGA Pattern",
            "Resiliência em Microsserviços",
            "Service Mesh",
          ],
          certificates: [
            {
              name: "Nenhum Certificado foi Emitido até o momento",
              issuedDate: "",
              link: "",
            },
          ],
          activities: [
            {
              title: "Nenhuma Atividade",
              description:
                "Por enquanto ainda estou na fase teórica. Não tive atividades até o dado momento.",
              period: "",
            },
          ],
        },
        harvard: {
          courseType: "Cursos Complementares",
          courseName: "CS50 - Introduction to Computer Science",
          description:
            "Curso introdutório de Ciência da Computação de Harvard. Serve como um complemento e revisão geral ao meu bacharelado principal realizado na PUC-SP. Introdução às áreas intelectuais da ciência da computação e à programação. Ensina a pensar algoritmicamente e resolver problemas de forma eficiente.",
          skills: [
            "Pensamento Algorítmico",
            "Resolução de Problemas",
            "C Programming",
            "Python",
            "SQL",
            "JavaScript",
            "HTML e CSS",
            "Estruturas de Dados",
            "Algoritmos",
            "Abstração",
            "Encapsulamento",
            "Gerenciamento de Recursos",
            "Segurança de Software",
            "Engenharia de Software",
            "Desenvolvimento Web",
          ],
        },
      },
      experience: {
        fiverr: {
          description:
            "Atuação no desenvolvimento de aplicações Web, com foco estratégico na criação de landing pages performáticas e orientadas a resultados para usuários em diferentes mercados ao redor do mundo.",
          responsibilities: [
            {
              title: "Desenvolvimento de Aplicações Web",
              description:
                "Integrando o time de desenvolvimento de uma aplicação Web SaaS para a área da saúde utilizando tecnologias como Next.js, React, TypeScript, JavaScript, HTML e CSS, sendo o público alvo profissionais da saúde e instituições de saúde.",
              achievements: [],
            },
            {
              title: "Criação de Landing Pages",
              description:
                "Landing Pages performáticas e orientadas a resultados para usuários em diferentes mercados ao redor do mundo.",
              achievements: [],
            },
            {
              title: "Práticas DevOps",
              description:
                "Versionamento de código extremamente organizado e seguindo os padrões da indústria",
              achievements: [],
            },
            {
              title: "Publicação e Deploy de Apps Mobile",
              description:
                "Publicação e gerenciamento de aplicativos na Google Play Store, atuando em processos de build, versionamento, configuração de ambientes, análise de métricas e melhoria contínua da experiência do usuário final (UX/UI)",
              achievements: [],
            },
          ],
        },
        culti: {
          role: "Engenheiro de Software",
          description:
            "Desenvolvedor integrante do time de uma aplicação Web SaaS para a área da saúde, com público-alvo voltado a profissionais e instituições de saúde. Utilizei tecnologias como Next.js, React, TypeScript, JavaScript, HTML, CSS, Node.js, MySQL e práticas DevOps.",
          responsibilities: [
            {
              title: "Desenvolvimento de Aplicação Web SaaS",
              description:
                "Integrando o time de desenvolvimento de uma aplicação Web SaaS para a área da saúde utilizando tecnologias como Next.js, React, TypeScript, JavaScript, HTML e CSS, sendo o público alvo profissionais da saúde e instituições de saúde.",
              achievements: [],
            },
            {
              title: "Implementação e Manutenção de APIs REST",
              description:
                "Participação na implementação e manutenção de APIs REST com Node.js, integrando o Front End e o Back-End em uma arquitetura orientada a serviços.",
              achievements: [],
            },
            {
              title: "Modelagem e Persistência de Dados",
              description:
                "Modelagem, criação e persistência de dados em MySQL utilizando SQL.",
              achievements: [],
            },
            {
              title: "Desenvolvimento de Funcionalidades Críticas",
              description:
                "Auxílio no desenvolvimento de funcionalidades importantes como o cadastro de usuários, organizações médicas, redefinição de senha e a criptografia de dados sensíveis.",
              achievements: [],
            },
            {
              title: "Validação de Dados",
              description:
                "Validação de dados no Front-End e Back-End utilizando Zod, reduzindo as inconsistências e possíveis erros de entrada.",
              achievements: [],
            },
            {
              title: "Práticas DevOps",
              description:
                "Implementação, sob supervisão do time, de práticas DevOps com Docker e automações de CI/CD do GitHub Workflows, otimizando o fluxo de desenvolvimento e deploy.",
              achievements: [
                "Redução de até 50% do tempo gasto dos desenvolvedores com debugs desnecessários",
              ],
            },
          ],
          achievements: [
            "Integração do Front-End e Back-End em arquitetura orientada a serviços",
            "Desenvolvimento de funcionalidades críticas como cadastro de usuários, organizações médicas e redefinição de senha",
            "Implementação da criptografia de dados sensíveis",
            "Redução de inconsistências através de validação de dados com Zod",
            "Otimização do fluxo de desenvolvimento com práticas DevOps, reduzindo em até 50% o tempo gasto com debugs desnecessários",
          ],
        },
      },
    },
    en: {
      tooltips: {
        typescript: "Programming Language - TypeScript",
        javascript: "Programming Language - JavaScript",
        python: "Programming Language - Python",
        nodejs: "Runtime Environment - Node.js",
        react: "Framework - React & React Native",
        mongodb: "Database - MongoDB",
        nextjs: "Framework - Next.js",
        docker: "DevOps Tool - Docker",
        firebase: "Tools and Services - Firebase",
        git: "DevOps Tool - Git",
        jest: "Testing Tool - Jest",
        vue: "Framework - Vue.js",
        aws: "DevOps Tool - Amazon Web Services",
        googlecloud: "DevOps Tool - Google Cloud Platform",
      },
      academicCards: {
        pucCourse: "Computer Science",
        pucLevel: "Undergraduate / Bachelor's Degree",
        fiapCourse: "Software Architecture",
        fiapLevel: "Postgraduate",
        harvardCourse: "CS50",
        harvardLevel: "Complementary Courses",
      },
      academic: {
        puc: {
          courseType: "Undergraduate / Bachelor's Degree",
          courseName: "Computer Science",
          description:
            "Bachelor's degree in Computer Science with a solid foundation in theoretical and practical computing fundamentals, focused on algorithms, software engineering, databases, computer networks, AI and system development.",
          skills: [
            "Algorithms and Data Structures",
            "Object-Oriented Programming",
            "Software Engineering",
            "Databases",
            "Mobile Development",
            "Software Architecture",
            "Operating Systems",
            "Computer Networks",
            "Artificial Intelligence",
            "Agile Methodologies",
          ],
          certificates: [
            {
              name: "Bachelor's Degree Diploma in Computer Science",
              issuedDate: "December 2025",
              link: "",
            },
            {
              name: "DevOps Workshop Instructor - FCET2025",
              issuedDate: "October 2025",
              link: "",
            },
            {
              name: "Mobile Development Workshop Instructor - FCET2025",
              issuedDate: "October 2025",
              link: "",
            },
            {
              name: "Teaching Assistant - Dynamic Structures Lab",
              issuedDate: "June 2025",
              link: "",
            },
            {
              name: "Web Development + GitHub Workshop Instructor - FCET2023",
              issuedDate: "October 2023",
              link: "",
            },
          ],
          activities: [
            {
              title: "EZTripAI - Final Graduation Project",
              description:
                "Project focused on helping tourists worldwide generate travel itineraries and receive real-time AI recommendations using GPT-3.5 Turbo and contextual user/location/weather data.",
              period: "2025",
            },
            {
              title: "Processor Evolution",
              description:
                "Project for the Computer Architecture course recognized by professor Edith Ranzini and used as support material for future classes.",
              period: "2023",
            },
          ],
        },
        fiap: {
          courseType: "Postgraduate",
          courseName: "Software Architecture",
          description:
            "Postgraduate program focused on practical software architecture and development for high-complexity projects, covering microservices, containers, serverless, secure development and more.",
          skills: [
            "Domain-Driven Design (DDD)",
            "Software Architecture",
            "Software Quality",
            "Secure Development",
            "Docker and Containerization",
            "Clean Architecture",
            "DevOps (CI/CD)",
            "Terraform",
            "Kubernetes",
            "OpenTelemetry",
            "API Gateway",
            "Serverless Architecture",
            "Neo4j and Graphs",
            "Microservices Architecture",
            "SAGA Pattern",
            "Microservices Resilience",
            "Service Mesh",
          ],
          certificates: [
            {
              name: "No certificate has been issued yet",
              issuedDate: "",
              link: "",
            },
          ],
          activities: [
            {
              title: "No Activities Yet",
              description:
                "Currently in the theoretical phase, with no activities completed so far.",
              period: "",
            },
          ],
        },
        harvard: {
          courseType: "Complementary Courses",
          courseName: "CS50 - Introduction to Computer Science",
          description:
            "Harvard's introductory CS course, complementing my undergraduate degree and reinforcing algorithmic thinking and efficient problem solving.",
          skills: [
            "Algorithmic Thinking",
            "Problem Solving",
            "C Programming",
            "Python",
            "SQL",
            "JavaScript",
            "HTML and CSS",
            "Data Structures",
            "Algorithms",
            "Abstraction",
            "Encapsulation",
            "Resource Management",
            "Software Security",
            "Software Engineering",
            "Web Development",
          ],
        },
      },
      experience: {
        fiverr: {
          description:
            "Worked on Web application development, strategically focused on building high-performance and conversion-oriented landing pages for users across multiple markets worldwide.",
          responsibilities: [
            {
              title: "Web Application Development",
              description:
                "Worked on a healthcare SaaS Web application using Next.js, React, TypeScript, JavaScript, HTML and CSS for healthcare professionals and institutions.",
              achievements: [],
            },
            {
              title: "Landing Page Development",
              description:
                "Built high-performance and result-oriented landing pages for different global markets.",
              achievements: [],
            },
            {
              title: "DevOps Practices",
              description:
                "Highly organized version control and workflows aligned with industry standards.",
              achievements: [],
            },
            {
              title: "Mobile App Publishing and Deployment",
              description:
                "Published and managed apps on Google Play Store, including build, versioning, environment setup, metrics analysis and UX/UI improvements.",
              achievements: [],
            },
          ],
        },
        culti: {
          role: "Software Engineer",
          description:
            "Developer in a healthcare SaaS Web application team for healthcare professionals and institutions, using Next.js, React, TypeScript, JavaScript, HTML, CSS, Node.js, MySQL and DevOps practices.",
          responsibilities: [
            {
              title: "Healthcare SaaS Web Development",
              description:
                "Worked in the development team of a healthcare SaaS Web app using Next.js, React, TypeScript, JavaScript, HTML and CSS.",
              achievements: [],
            },
            {
              title: "REST API Implementation and Maintenance",
              description:
                "Participated in implementing and maintaining REST APIs with Node.js, integrating front-end and back-end in service-oriented architecture.",
              achievements: [],
            },
            {
              title: "Data Modeling and Persistence",
              description: "Designed and persisted data in MySQL using SQL.",
              achievements: [],
            },
            {
              title: "Critical Feature Development",
              description:
                "Helped build critical features such as user registration, medical organizations, password reset and sensitive data encryption.",
              achievements: [],
            },
            {
              title: "Data Validation",
              description:
                "Validated data in front-end and back-end with Zod, reducing inconsistencies and input errors.",
              achievements: [],
            },
            {
              title: "DevOps Practices",
              description:
                "Implemented, under team supervision, DevOps practices with Docker and GitHub Workflows CI/CD automation to optimize development and deployment.",
              achievements: [
                "Up to 50% reduction in developer time spent on unnecessary debugging",
              ],
            },
          ],
          achievements: [
            "Front-end and back-end integration in service-oriented architecture",
            "Development of critical features such as user registration, medical organizations and password reset",
            "Implementation of sensitive data encryption",
            "Reduced inconsistencies through data validation with Zod",
            "Optimized development flow with DevOps practices, reducing unnecessary debugging time by up to 50%",
          ],
        },
      },
    },
    fr: {
      tooltips: {
        typescript: "Langage de programmation - TypeScript",
        javascript: "Langage de programmation - JavaScript",
        python: "Langage de programmation - Python",
        nodejs: "Environnement d'exécution - Node.js",
        react: "Framework - React & React Native",
        mongodb: "Base de données - MongoDB",
        nextjs: "Framework - Next.js",
        docker: "Outil DevOps - Docker",
        firebase: "Outils et Services - Firebase",
        git: "Outil DevOps - Git",
        jest: "Outil de test - Jest",
        vue: "Framework - Vue.js",
        aws: "Outil DevOps - Amazon Web Services",
        googlecloud: "Outil DevOps - Google Cloud Platform",
      },
      academicCards: {
        pucCourse: "Informatique",
        pucLevel: "Licence / Baccalauréat",
        fiapCourse: "Architecture Logicielle",
        fiapLevel: "Postgraduate",
        harvardCourse: "CS50",
        harvardLevel: "Cours Complémentaires",
      },
      academic: {
        puc: {
          courseType: "Licence / Baccalauréat",
          courseName: "Informatique",
          description:
            "Licence en informatique avec une base solide en fondements théoriques et pratiques, axée sur les algorithmes, l'ingénierie logicielle, les bases de données, les réseaux, l'IA et le développement de systèmes.",
          skills: [
            "Algorithmes et Structures de Données",
            "Programmation Orientée Objet",
            "Ingénierie Logicielle",
            "Bases de Données",
            "Développement Mobile",
            "Architecture Logicielle",
            "Systèmes d'Exploitation",
            "Réseaux Informatiques",
            "Intelligence Artificielle",
            "Méthodologies Agiles",
          ],
          certificates: [
            {
              name: "Diplôme de Licence en Informatique",
              issuedDate: "Décembre 2025",
              link: "",
            },
            {
              name: "Formateur Atelier DevOps - FCET2025",
              issuedDate: "Octobre 2025",
              link: "",
            },
            {
              name: "Formateur Atelier Développement Mobile - FCET2025",
              issuedDate: "Octobre 2025",
              link: "",
            },
            {
              name: "Moniteur - Laboratoire de Structures Dynamiques",
              issuedDate: "Juin 2025",
              link: "",
            },
            {
              name: "Formateur Atelier Développement Web + GitHub - FCET2023",
              issuedDate: "Octobre 2023",
              link: "",
            },
          ],
          activities: [
            {
              title: "EZTripAI - Projet de fin d'études",
              description:
                "Projet visant à aider les touristes du monde entier à générer des itinéraires et obtenir des suggestions IA en temps réel avec GPT-3.5 Turbo et des données contextuelles.",
              period: "2025",
            },
            {
              title: "Évolution des Processeurs",
              description:
                "Projet du cours d'architecture des ordinateurs reconnu par la professeure Edith Ranzini et utilisé comme support pédagogique.",
              period: "2023",
            },
          ],
        },
        fiap: {
          courseType: "Postgraduate",
          courseName: "Software Architecture",
          description:
            "Programme de spécialisation axé sur la pratique de l'architecture et du développement logiciel pour des projets complexes, couvrant microservices, conteneurs, serverless, sécurité et plus.",
          skills: [
            "Domain-Driven Design (DDD)",
            "Architecture Logicielle",
            "Qualité Logicielle",
            "Développement Sécurisé",
            "Docker et Containerisation",
            "Clean Architecture",
            "DevOps (CI/CD)",
            "Terraform",
            "Kubernetes",
            "OpenTelemetry",
            "API Gateway",
            "Architecture Serverless",
            "Neo4j et Graphes",
            "Architecture Microservices",
            "SAGA Pattern",
            "Résilience des Microservices",
            "Service Mesh",
          ],
          certificates: [
            {
              name: "Aucun certificat émis pour le moment",
              issuedDate: "",
              link: "",
            },
          ],
          activities: [
            {
              title: "Aucune activité pour le moment",
              description:
                "Je suis actuellement en phase théorique, sans activité pratique jusqu'à présent.",
              period: "",
            },
          ],
        },
        harvard: {
          courseType: "Cours Complémentaires",
          courseName: "CS50 - Introduction to Computer Science",
          description:
            "Cours introductif en informatique de Harvard, complémentaire à mon parcours principal, avec accent sur la pensée algorithmique et la résolution efficace de problèmes.",
          skills: [
            "Pensée Algorithmique",
            "Résolution de Problèmes",
            "C Programming",
            "Python",
            "SQL",
            "JavaScript",
            "HTML et CSS",
            "Structures de Données",
            "Algorithmes",
            "Abstraction",
            "Encapsulation",
            "Gestion des Ressources",
            "Sécurité Logicielle",
            "Ingénierie Logicielle",
            "Développement Web",
          ],
        },
      },
      experience: {
        fiverr: {
          description:
            "Développement d'applications Web avec un focus stratégique sur des landing pages performantes et orientées résultats pour différents marchés internationaux.",
          responsibilities: [
            {
              title: "Développement d'Applications Web",
              description:
                "Participation à une application SaaS Web dans le domaine de la santé avec Next.js, React, TypeScript, JavaScript, HTML et CSS.",
              achievements: [],
            },
            {
              title: "Création de Landing Pages",
              description:
                "Landing pages performantes orientées résultats pour différents marchés mondiaux.",
              achievements: [],
            },
            {
              title: "Pratiques DevOps",
              description:
                "Versionnement de code très organisé selon les standards de l'industrie.",
              achievements: [],
            },
            {
              title: "Publication et Déploiement d'Apps Mobiles",
              description:
                "Publication et gestion d'applications sur Google Play Store avec build, versioning, environnements, métriques et amélioration UX/UI.",
              achievements: [],
            },
          ],
        },
        culti: {
          role: "Ingénieur Logiciel",
          description:
            "Développeur dans une équipe d'application SaaS Web pour la santé, destinée aux professionnels et institutions de santé, avec Next.js, React, TypeScript, JavaScript, HTML, CSS, Node.js, MySQL et pratiques DevOps.",
          responsibilities: [
            {
              title: "Développement SaaS Web Santé",
              description:
                "Participation à l'équipe de développement d'une application SaaS Web santé avec Next.js, React, TypeScript, JavaScript, HTML et CSS.",
              achievements: [],
            },
            {
              title: "Implémentation et Maintenance d'APIs REST",
              description:
                "Participation à l'implémentation et maintenance d'APIs REST avec Node.js, intégrant Front-End et Back-End en architecture orientée services.",
              achievements: [],
            },
            {
              title: "Modélisation et Persistance des Données",
              description:
                "Modélisation, création et persistance des données en MySQL avec SQL.",
              achievements: [],
            },
            {
              title: "Développement de Fonctionnalités Critiques",
              description:
                "Aide au développement de fonctionnalités critiques comme l'inscription utilisateurs, organisations médicales, réinitialisation de mot de passe et chiffrement de données sensibles.",
              achievements: [],
            },
            {
              title: "Validation des Données",
              description:
                "Validation des données Front-End et Back-End avec Zod, réduisant incohérences et erreurs d'entrée.",
              achievements: [],
            },
            {
              title: "Pratiques DevOps",
              description:
                "Mise en place, sous supervision, de pratiques DevOps avec Docker et automatisations CI/CD GitHub Workflows, optimisant le cycle de développement et déploiement.",
              achievements: [
                "Jusqu'à 50 % de réduction du temps perdu en débogages inutiles",
              ],
            },
          ],
          achievements: [
            "Intégration Front-End et Back-End en architecture orientée services",
            "Développement de fonctionnalités critiques: inscription, organisations médicales et réinitialisation de mot de passe",
            "Implémentation du chiffrement des données sensibles",
            "Réduction des incohérences via validation des données avec Zod",
            "Optimisation du flux de développement avec DevOps, réduisant les débogages inutiles jusqu'à 50 %",
          ],
        },
      },
    },
  };

  const sobreText = localizedSobre[language];

  const handleDownload = async ({ fileUrl, fileName }: curriculumFileTypes) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Erro na resposta da requisição");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro no Download: ", error);
      alert(messages.home.downloadError);
    }
  };

  return (
    <div className="relative min-h-screen">
      <HeaderTop />
      <HeroHighlight>
        <section className="flex flex-row items-center pt-32 pb-16 mx-20">
          <Image
            src={ProfilePicture}
            alt="Minha Foto de Perfil"
            priority
            sizes="(max-width: 768px) 80vw, 500px"
            width={500}
            height={500}
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              objectFit: "cover",
            }}
          />
          <div className="flex flex-col ml-24">
            <div className="flex flex-row mb-6 items-center gap-2">
              <span className="text-[#72BF6A] font-bold text-2xl">
                {"<span>"}
              </span>
              <span className="font-semibold text-xl">
                {messages.about.greeting}
              </span>
              <span className="text-[#72BF6A] font-bold text-2xl">
                {"</span>"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-3xl">
                {messages.about.roleLine1Prefix}{" "}
                <Highlight className="text-white font-bold text-4xl">
                  {"{ Full-Stack }"}
                </Highlight>{" "}
                &
              </span>
              <span className="font-semibold text-3xl">
                {messages.about.roleLine2Prefix}{" "}
                <Highlight className="text-white font-bold text-4xl">
                  {"{ Mobile Full-Stack }"}
                </Highlight>
              </span>
            </div>
            <div className="flex flex-row mt-6">
              <p className="font-semibold text-xl">
                <span className="text-[#72BF6A] font-bold text-2xl mr-2">
                  {"<p>"}
                </span>
                {messages.about.introParagraph.beforeWeb}{" "}
                <Highlight className="text-white">
                  {messages.about.introParagraph.web}
                </Highlight>
                , {messages.about.introParagraph.beforeHybrid}{" "}
                <Highlight className="text-white">
                  {messages.about.introParagraph.hybrid}
                </Highlight>
                , {messages.about.introParagraph.beforeDevOps}{" "}
                <Highlight className="text-white">
                  {messages.about.introParagraph.devOps}
                </Highlight>
                {messages.about.introParagraph.after}
                <span className="text-[#72BF6A] font-bold text-2xl ml-2">
                  {"</p>"}
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-6 items-center">
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={NodeLogo}
                  width={70}
                  height={70}
                  alt="Logo Node.js"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={ReactLogo}
                  width={70}
                  height={70}
                  alt="Logo React"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={NextjsLogo}
                  width={70}
                  height={70}
                  alt="Logo Next.js"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={DockerLogo}
                  width={70}
                  height={70}
                  alt="Logo Docker"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={MongodbLogo}
                  width={70}
                  height={70}
                  alt="Logo MongoDB"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={TypeScriptLogo}
                  width={70}
                  height={70}
                  alt="Logo TypeScript"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <div className="group/icon relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-xl opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300 blur-xl" />
                <Image
                  src={PythonLogo}
                  width={70}
                  height={70}
                  alt="Logo Python"
                  className="relative transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-2 rounded-lg p-2 bg-white/5 backdrop-blur-sm group-hover/icon:bg-white/10"
                />
              </div>
              <span className="text-white text-xl font-semibold">
                {messages.about.manyOthers}
              </span>
            </div>
          </div>
        </section>
      </HeroHighlight>
      <TracingBeam>
        <section className="bg-slate-900">
          <TextHoverEffect
            text={messages.about.summaryTitle}
            size="xtralarge"
          />
          <div className="mx-20 mt-[-80] pb-16 text-center">
            <span className="text-center text-3xl font-bold">
              {messages.about.summarySubtitle}
            </span>
            <p className="mt-5 text-lg">{messages.about.summaryParagraph1}</p>
            <div className="mt-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] bg-clip-text text-transparent">
                {messages.about.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-5xl mx-auto">
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[0]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[1]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[2]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[3]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#72BF6A]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(114,191,106,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/5 to-[#0096C7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#72BF6A] to-[#0096C7] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[4]}
                    </span>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#0096C7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0096C7]/5 to-[#72BF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0096C7] to-[#72BF6A] flex-shrink-0 group-hover:scale-150 transition-transform duration-300 animate-pulse" />
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {messages.about.skills[5]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg max-w-[75%] text-center">
                {messages.about.summaryParagraph2}
              </p>
            </div>
          </div>
        </section>
        {showTechStackSection ? (
          <DeferredTechStackSection
            tooltips={sobreText.tooltips}
            hint={messages.about.techStackHint}
          />
        ) : null}
        <section className="bg-slate-900">
          <div className="h-[28rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h4
              className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
              style={{
                WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
                textShadow:
                  "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
              }}
            >
              {messages.about.academicTitle}
            </h4>
            <div className="w-[40rem] h-40 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#72BF6A] to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent h-px w-1/4" />
              <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-12 mx-24 pb-20">
            <InstitutionCard
              institutionLogo={PUCLogo}
              institutionAltImage="Logo Instituição PUC-SP"
              institurionName="PUC-SP"
              institutionCourse={sobreText.academicCards.pucCourse}
              institutionCourseLevel={sobreText.academicCards.pucLevel}
              institurionOpenDetails={() => setOpenModal("puc")}
            />
            <InstitutionCard
              institutionLogo={FIAPLogo}
              institutionAltImage="Logo Instituição FIAP"
              institurionName="FIAP"
              institutionCourse={sobreText.academicCards.fiapCourse}
              institutionCourseLevel={sobreText.academicCards.fiapLevel}
              institurionOpenDetails={() => setOpenModal("fiap")}
            />
            <InstitutionCard
              institutionLogo={HarvardLogo}
              institutionAltImage="Logo Instituição Harvard"
              institurionName="Harvard"
              institutionCourse={sobreText.academicCards.harvardCourse}
              institutionCourseLevel={sobreText.academicCards.harvardLevel}
              institurionOpenDetails={() => setOpenModal("harvard")}
            />
          </div>

          <InstitutionModal
            isOpen={openModal === "puc"}
            onClose={() => setOpenModal(null)}
            institutionLogo={PUCLogo}
            institutionName="Pontifícia Universidade Católica de São Paulo (PUC-SP)"
            courseType={sobreText.academic.puc.courseType}
            courseName={sobreText.academic.puc.courseName}
            modality="Presencial"
            startDate="Fevereiro 2022"
            endDate="Dezembro 2025"
            status="Concluído"
            location="São Paulo, SP"
            description={sobreText.academic.puc.description}
            skills={sobreText.academic.puc.skills}
            certificates={sobreText.academic.puc.certificates}
            activities={sobreText.academic.puc.activities}
            headerBgColor="#284fc4"
          />

          <InstitutionModal
            isOpen={openModal === "fiap"}
            onClose={() => setOpenModal(null)}
            institutionLogo={FIAPLogo}
            institutionName="Faculdade de Informática e Administração Paulista (FIAP)"
            courseType={sobreText.academic.fiap.courseType}
            courseName={sobreText.academic.fiap.courseName}
            modality="EAD"
            startDate="Fevereiro 2025"
            status="Andamento"
            location="São Paulo, SP"
            description={sobreText.academic.fiap.description}
            skills={sobreText.academic.fiap.skills}
            certificates={sobreText.academic.fiap.certificates}
            activities={sobreText.academic.fiap.activities}
            headerBgColor="#e51859"
          />

          <InstitutionModal
            isOpen={openModal === "harvard"}
            onClose={() => setOpenModal(null)}
            institutionLogo={HarvardLogo}
            institutionName="Harvard University"
            courseType={sobreText.academic.harvard.courseType}
            courseName={sobreText.academic.harvard.courseName}
            modality="EAD"
            startDate="2025"
            endDate="2026"
            status="Cursando"
            location="Online"
            description={sobreText.academic.harvard.description}
            skills={sobreText.academic.harvard.skills}
            certificates={[]}
            activities={[]}
            headerBgColor="#af8f25"
          />
        </section>
        <section className="pt-16 pb-16">
          <h5
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            {messages.about.experienceTitle}
          </h5>
          <div className="flex flex-row justify-center gap-4 items-center mt-8">
            <GlareCard
              className="flex flex-col items-center justify-center"
              expandCard={() => setExperienceCard("fiverr")}
            >
              <Image
                src={FiverrLogo}
                width={200}
                height={200}
                alt="Logo da Fiverr: Plataforma de Freelancing"
              />
              <span className="text-center mt-5 uppercase font-bold text-2xl">
                {messages.about.fiverrRole}
              </span>
            </GlareCard>
            <GlareCard
              className="flex flex-col items-center justify-center"
              expandCard={() => setExperienceCard("culti")}
            >
              <Image
                src={CultiLogo}
                width={200}
                height={200}
                alt="Logo da Cultivare: Prevenção e Promoção de Saúde"
              />
              <span className="text-center mt-5 uppercase font-bold text-2xl">
                {messages.about.cultiRole}
              </span>
            </GlareCard>

            <EnterpriseModal
              isOpen={experienceCard === "fiverr"}
              onClose={() => setExperienceCard(null)}
              companyLogo={FiverrLogo}
              companyName="Fiverr"
              role={messages.about.fiverrRole}
              employmentType="Freelance"
              remuneration="Remunerado"
              startDate="Abril de 2021"
              endDate="Janeiro de 2024"
              duration="2 anos e 10 meses"
              location="Remoto"
              description={sobreText.experience.fiverr.description}
              responsibilities={sobreText.experience.fiverr.responsibilities}
              technologies={[
                { name: "React", category: "frontend" },
                { name: "React Native", category: "frontend" },
                { name: "TypeScript", category: "frontend" },
                { name: "JavaScript", category: "frontend" },
                { name: "HTML", category: "frontend" },
                { name: "CSS", category: "frontend" },
                { name: "Git", category: "tools" },
              ]}
              achievements={[]}
            />
            <EnterpriseModal
              isOpen={experienceCard === "culti"}
              onClose={() => setExperienceCard(null)}
              companyLogo={CultiLogo}
              companyName="Cultivare Prevenção e Promoção da Saúde"
              role={sobreText.experience.culti.role}
              employmentType="Estágio"
              remuneration="Não Remunerado"
              startDate="Julho de 2024"
              endDate="Dezembro de 2025"
              duration="1 ano e 6 meses"
              location="São Paulo, São Paulo, Brasil · Híbrido"
              description={sobreText.experience.culti.description}
              responsibilities={sobreText.experience.culti.responsibilities}
              technologies={[
                { name: "Next.js", category: "frontend" },
                { name: "React", category: "frontend" },
                { name: "TypeScript", category: "frontend" },
                { name: "JavaScript", category: "frontend" },
                { name: "HTML", category: "frontend" },
                { name: "CSS", category: "frontend" },
                { name: "Node.js", category: "backend" },
                { name: "MySQL", category: "database" },
                { name: "Zod", category: "backend" },
                { name: "Docker", category: "tools" },
                { name: "GitHub Workflows (CI/CD)", category: "tools" },
                { name: "Git", category: "tools" },
              ]}
              achievements={sobreText.experience.culti.achievements}
            />
          </div>
        </section>
        {showAvailabilitySection ? (
          <DeferredAvailabilitySection
            title={messages.about.availabilityTitle}
            description={messages.about.availabilityDescription}
          />
        ) : null}
        <section className="pt-14 pb-8">
          <h6
            className="mt-12 bg-gradient-to-br from-[#72BF6A] via-slate-200 to-[#0096C7] py-4 bg-clip-text text-center text-8xl font-bold tracking-tight text-transparent md:text-8xl"
            style={{
              WebkitTextStroke: "2px rgba(114, 191, 106, 0.3)",
              textShadow:
                "0 0 40px rgba(114, 191, 106, 0.5), 0 0 80px rgba(0, 150, 199, 0.3)",
            }}
          >
            {messages.about.interestedTitle}
          </h6>
          <p className="text-center text-2xl font-semibold mt-3">
            {messages.about.interestedSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center my-8 mx-auto w-[75%]">
            <SocialMediaIcons />
            <div className="flex flex-row my-10 gap-5 w-full">
              <PresentationTopics
                icon={StepForward}
                title={messages.about.visitPortfolioTitle}
                description={messages.about.visitPortfolioDescription}
                actionRoute={() => route.push("/projetos")}
              />
              <PresentationTopics
                icon={FileDown}
                title={messages.about.downloadResumeTitle}
                description={messages.about.downloadResumeDescription}
                actionRoute={() =>
                  handleDownload({
                    fileName:
                      "Desenvolvedor Full-Stack  João Pedro do Carmo Ribeiro",
                    fileUrl:
                      "/Desenvolvedor_Full-Stack_João_Pedro_do_Carmo_Ribeiro.pdf",
                  })
                }
              />
            </div>
          </div>
        </section>
      </TracingBeam>
      {openModal != null ? null : experienceCard != null ? null : <Navbar />}
    </div>
  );
}
