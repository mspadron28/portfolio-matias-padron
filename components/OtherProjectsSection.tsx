"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

const OtherProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="h-14 text-xl font-semibold text-soft-white group-hover:text-accent transition-colors leading-snug">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors z-10"
          >
            <FiExternalLink size={20} />
          </a>
        </div>

        {/* CONTENEDOR DE DESCRIPCIÓN CON POP-UP AL HOVER */}
        <div className="relative mb-6">
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 transition-opacity duration-300 group-hover:opacity-0">
            {project.description}
          </p>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-0 left-0 w-full z-20 bg-dark/95 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md"
                style={{ minHeight: "100%" }}
              >
                <p className="text-gray-200 text-sm leading-relaxed italic">
                  {project.description}
                </p>
                {/* Sutil indicador de "Full View" */}
                <div className="mt-2 w-8 h-1 bg-accent/50 rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech?.map((skill: string) => (
          <span
            key={skill}
            className="px-2 py-1 bg-black/40 border border-white/5 rounded text-[10px] font-medium text-gray-500 uppercase tracking-tighter"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const OtherProjectsSection = () => {
  const { t } = useLanguage();

  const otherProjectsMeta: Record<string, { link: string; tech: string[] }> = {
    "DIRMOV - Psychometric Module": {
      link: "https://test-dirmov-ec.vercel.app/",
      tech: ["Nest.js", "Next.js", "PostgreSQL", "Vercel"],
    },
    "DIRMOV - Módulo Psicométrico": {
      link: "https://test-dirmov-ec.vercel.app/",
      tech: ["Nest.js", "Next.js", "PostgreSQL", "Vercel"],
    },
    "Cowboy Bebop - Aero Western Arcade": {
      link: "https://github.com/mspadron28/CowboyBebop_VideoGame2D_Godot",
      tech: ["Godot Engine", "GDScript", "Game Design"],
    },
    "App de seguimiento de gimnasio Expo": {
      link: "https://github.com/mspadron28/GymTrackerApp_Expo",
      tech: ["React Native", "Supabase", "Expo"],
    },
    "Gym tracker app Expo": {
      link: "https://github.com/mspadron28/GymTrackerApp_Expo",
      tech: ["React Native", "Supabase", "Expo"],
    },
  };

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-soft-white/80">
            {t.otherProjects.title}
          </h2>
          <div className="h-1 w-12 bg-accent/50 rounded-full mt-2" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.otherProjects.items.map((project: any, index: number) => {
            const meta = otherProjectsMeta[project.title] || {
              link: "#",
              tech: [],
            };
            const merged = { ...project, ...meta };
            return (
              <OtherProjectCard key={index} project={merged} index={index} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OtherProjectsSection;