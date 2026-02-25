"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const ProjectCard = ({ project, index, onImageClick }: { project: any, index: number, onImageClick: (img: string) => void }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
      gap-8 lg:gap-16 items-center border border-white/10 rounded-3xl p-6 lg:p-12 
      bg-white/[0.02] backdrop-blur-sm overflow-hidden mb-12 lg:mb-24`}
    >
      {/* EFECTO HOVER: OVERLAY ACCENT */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />

      {/* BLOQUE DE TEXTO */}
      <div className="flex-1 z-10">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-3xl lg:text-4xl font-bold text-soft-white">
            {project.title}
          </h3>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors duration-300"
          >
            <FiExternalLink size={24} />
          </a>
        </div>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((skill: string) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:border-accent/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* BLOQUE DE IMAGEN CON TRIGGER DE POP-UP */}
      <div 
        className="flex-1 w-full relative overflow-hidden rounded-2xl cursor-zoom-in"
        onClick={() => project.image && onImageClick(project.image)}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="aspect-video bg-zinc-800 relative"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white/10 font-bold text-4xl">
              {project.title}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectsMeta: Record<string, { link: string; image: string, tech: string[] }> = {
    Construpedia: {
      link: 'https://construpedia.ai',
      image: '/projects/construpedia.png',
      tech: ['Next.js', 'NestJS', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'AI Integration'],
    },
    'Artex Marketplace': {
      link: 'https://artex.la',
      image: '/projects/artex.png',
      tech: ['Next.js', 'Django', 'Tailwind CSS', 'PostgreSQL', 'AWS'],
    },
    'Structural AI': {
      link: 'https://structuralads.com/',
      image: '/projects/structural.png',
      tech: ['Next.js', 'NestJS', 'Tailwind CSS', 'PostgreSQL', 'N8N', 'Docker'],
    },
  };

  return (
    <section id="proyectos" className="py-2 px-6 md:py-24 sm:px-12 lg:px-20 bg-dark min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="my-12 md:my-20 text-center lg:text-left"
        >
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-soft-white mb-4">
            {t.projects.title}
          </h2>
          <div className="h-1.5 w-32 bg-accent rounded-full mx-auto lg:mx-0" />
        </motion.div>

        <div className="space-y-12">
          {t.projects.items.map((project: any, index: number) => {
            const meta = projectsMeta[project.title] || {};
            const merged = { ...project, ...meta };
            return (
              <ProjectCard 
                key={index} 
                project={merged} 
                index={index} 
                onImageClick={(img) => setSelectedImage(img)}
              />
            );
          })}
        </div>
      </div>

      {/* OVERLAY DE IMAGEN (POP-UP) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            {/* Botón de cierre */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={40} />
            </button>

            {/* Imagen a tamaño completo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()} // Evita cerrar al clickear la imagen
            >
              <Image
                src={selectedImage}
                alt="Full project preview"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;