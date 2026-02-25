"use client";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiNestjs,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiNginx,
  SiAngular,
  SiBootstrap,
  SiFlutter,
  SiJira,
  SiTrello,
  SiN8N,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";
import SkillCarousel from "./SkillCarousel";

// Componentes SVG personalizados para evitar errores de importación
const CustomIcons = {
  Azure: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.483 21.3H2.4L9.02 5.011l3.083 3.992-6.62 12.297zM13.21 2.7l-3.32 4.195 9.092 14.405h4.618L13.21 2.7z"></path>
    </svg>
  ),
  SqlServer: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.063 15V9L12 14.25L2.938 9v6L12 20.25l9.063-5.25zM12 3.75L2.938 9L12 14.25L21.063 9L12 3.75z"></path>
    </svg>
  ),
  PowerBI: () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 9h3v13.5H9V9zm6-4.5h3v18h-3v-18zM3 13.5h3V22.5H3v-9z"></path>
    </svg>
  ),
};

const AboutSection = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Core");
  const activeContent = t.about;

  const categories = [
    { id: "Core", label: { en: "Core Skills", es: "Stack Principal" } },
    { id: "Programming", label: { en: "Programming", es: "Programación" } },
    { id: "Backend", label: { en: "Backend & DB", es: "Backend y BD" } },
    { id: "Frontend", label: { en: "Frontend", es: "Frontend" } },
    { id: "Cloud", label: { en: "Cloud & DevOps", es: "Cloud y DevOps" } },
    { id: "Tools", label: { en: "Tools", es: "Herramientas" } },
  ];

  const allSkills = [
    // Core Skills (Mostradas por defecto)

    { name: "JavaScript", icon: <FaJs />, cat: "Programming", core: true },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      cat: "Programming",
      core: true,
    },
    { name: "HTML5", icon: <FaHtml5 />, cat: "Frontend", core: true },
    { name: "CSS3", icon: <FaCss3Alt />, cat: "Frontend", core: true },
    { name: "React", icon: <FaReact />, cat: "Frontend", core: true },
    { name: "Next.js", icon: <SiNextdotjs />, cat: "Frontend", core: true },
    { name: "Nest.js", icon: <SiNestjs />, cat: "Backend", core: true },
    { name: "PostgreSQL", icon: <SiPostgresql />, cat: "Backend", core: true },
    { name: "Tailwind", icon: <SiTailwindcss />, cat: "Frontend", core: true },

    // Programming
    { name: "Python", icon: <FaPython />, cat: "Programming" },
    { name: "PHP", icon: <FaPhp />, cat: "Programming" },
    { name: "Java", icon: <FaJava />, cat: "Programming" },
    { name: "C++", icon: <SiCplusplus />, cat: "Programming" },
    { name: "C", icon: <SiC />, cat: "Programming" },
    { name: "Power BI", icon: <CustomIcons.PowerBI />, cat: "Programming" },

    // Backend & Databases
    { name: ".NET", icon: <SiDotnet />, cat: "Backend" },
    { name: "Django", icon: <SiDjango />, cat: "Backend" },
    { name: "MySQL", icon: <SiMysql />, cat: "Backend" },
    { name: "MongoDB", icon: <SiMongodb />, cat: "Backend" },
    { name: "SQL Server", icon: <CustomIcons.SqlServer />, cat: "Backend" },

    // Cloud & DevOps
    { name: "AWS", icon: <FaAws />, cat: "Cloud" },
    { name: "Azure", icon: <CustomIcons.Azure />, cat: "Cloud" }, // Corregido el nombre oficial
    { name: "NGINX", icon: <SiNginx />, cat: "Cloud" },
    {
      name: "PM2",
      icon: <span className="text-[10px] font-bold">PM2</span>,
      cat: "Cloud",
    },
    { name: "Docker", icon: <FaDocker />, cat: "Cloud" },

    // Frontend adicionales
    { name: "Angular", icon: <SiAngular />, cat: "Frontend" },
    { name: "React Native", icon: <FaReact />, cat: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap />, cat: "Frontend" },
    { name: "Flutter", icon: <SiFlutter />, cat: "Frontend" },

    // Tools
    { name: "Git/GitHub", icon: <FaGitAlt />, cat: "Tools" },
    { name: "Linux", icon: <FaLinux />, cat: "Tools" },
    { name: "Figma", icon: <FaFigma />, cat: "Tools" },
    { name: "Jira", icon: <SiJira />, cat: "Tools" },
    { name: "Trello", icon: <SiTrello />, cat: "Tools" },
    { name: "N8N", icon: <SiN8N />, cat: "Tools" },
  ];

  const filteredSkills =
    activeCategory === "Core"
      ? allSkills.filter((s) => s.core)
      : allSkills.filter((s) => s.cat === activeCategory);

  return (
    <section
      id="sobre-mi"
      className="py-2 px-6 md:py-24 sm:px-12 lg:px-20 bg-dark font-display"
    >
      <div className="my-12 md:my-20 text-center lg:text-left">
        <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-soft-white mb-4">
          {activeContent.title}
        </h2>
        <div className="h-1.5 w-32 bg-accent rounded-full mx-auto lg:mx-0" />
      </div>

      <div className="max-w-6xl mx-auto border border-white/10 rounded-2xl p-8 md:p-16 bg-white/[0.02] backdrop-blur-sm">
        {/* PARTE 1: DESCRIPCIÓN PROFESIONAL & HIGHLIGHTS */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Columna Izquierda: Biografía */}
            <div className="lg:col-span-7">
              <div className="space-y-6 text-left text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                {activeContent.description.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Columna Derecha: What I do best */}
            <div className="lg:col-span-5 lg:pl-10 lg:border-l border-white/5 h-full flex flex-col justify-center">
              <span className="text-accent text-xs tracking-[0.2em] font-bold uppercase mb-6 block">
                {language === "en" ? "What I do best:" : "En lo que destaco:"}
              </span>

              <SkillCarousel />

              <p className="mt-12 text-gray-500 text-sm italic">
                {language === "en"
                  ? "Focused on delivering high-quality software solutions and efficient system architectures."
                  : "Enfocado en entregar soluciones de software de alta calidad y arquitecturas de sistemas eficientes."}
              </p>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA SUTIL */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-20" />

        {/* PARTE 2: DASHBOARD DE HABILIDADES */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-soft-white text-xs tracking-[0.3em] font-semibold uppercase border-l-2 border-accent pl-4">
              {activeContent.skillsTitle}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar de Categorías */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 lg:w-64">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 text-left text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-accent/10 text-accent border border-accent/20 shadow-[0_0_15px_rgba(200,138,146,0.05)]"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {language === "en" ? cat.label.en : cat.label.es}
                </button>
              ))}
            </div>

            {/* Grid de Skills Dinámico */}
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={`${activeCategory}-${index}`}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(200,138,146,0.1)] transition-all duration-500 group animate-in fade-in slide-in-from-bottom-2"
                  >
                    <div className="text-accent text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold text-center group-hover:text-soft-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
