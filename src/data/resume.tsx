import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rafael Martins Paiva",
  initials: "RP",
  url: "https://paiva.qzz.io",
  location: "São Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/S%C3%A3o+Paulo",
  description:
    "Sou um desenvolvedor full-stack freelancer, com experiência em hackathons e na criação de sites e aplicações web — incluindo projetos no modelo SaaS.",
  summary: `Sou um desenvolvedor full-stack que trabalhou diversas vezes sobre demanda, criando sites e aplicações web de diferentes tipos — desde [projetos autorais](/#projects) até soluções sob medida para clientes.
Já participei de alguns [hackathons](/#hackathons) e gosto de transformar ideias em experiências digitais funcionais, com foco em usabilidade, design e boas práticas de desenvolvimento.`,
  avatarUrl: "/me.png",
  skills: [
    // Frontend
    "React",
    "Next.js",
    "TypeScript",

    // Backend
    "Node.js",
    "Python",
    "FastAPI",
    "Django",
    "Java",
    "Spring Boot",
    "ASP.NET Core",
    "C#",

    // Banco de Dados e Cache
    "PostgreSQL",
    "MongoDB",
    "Redis",

    // Outros
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rafael.martins.paiva@outlook.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rafael-Martins-Paiva",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rafael-martins-paiva",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "CONAHACK / NASA Space Apps Challenge 2024",
      dates: "October 5th - 6th, 2024",
      location: "Brasil (online + multicidade)",
      description:
        "Participei do maior hackathon de ciência aberta do mundo, desenvolvendo uma solução baseada nos conjuntos de dados públicos da NASA para enfrentar desafios reais de ciência ambiental e espacial. Colaborei com uma equipe distribuída, criando um protótipo open-source alinhado às missões científicas da NASA e elegível para avaliação global.",
      image: "/nasa.jpeg",
      links: [
        {
          title: "post oficial",
          icon: <Icons.globe className="size-3" />,
          href: "https://conahack.com.br/",
        },
      ],
    },
    {
      title: "Hackathon WorCAP 2025 / INPE",
      dates: "September 1st - 7th, 2025",
      location: "Brasil (online + uso de Kaggle)",
      description:
        "Desenvolvemos uma solução para detectar cicatrizes de queimadas em biomas brasileiros usando imagens de satélite bi-temporais e técnicas de sensoriamento remoto e machine learning. A equipe colaborou de forma remota, enviando os modelos e código por meio da plataforma Kaggle e focando em reprodutibilidade, inovação e desempenho.",
      image: "/Hackathon do INPE (WorCAP 2025).jpeg",
      links: [
        {
          title: "post oficial",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.gov.br/inpe/pt-br/eventos/worcap-2025/hackathon",
        },
      ],
    },
  ],
} as const;
