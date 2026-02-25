"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { t, language, setLanguage } = useLanguage();

  const AnimatedDescription = ({ text }: { text: string }) => {
    const words = text.split(' ');
    return (
      <>
        <style>{`
          @keyframes highlightWord {
            0% { 
              color: rgb(156, 163, 175); /* text-gray-400 */
              opacity: 0.8;
            }
            10% { 
              color: #c88a92; /* --color-accent */
              opacity: 1;
              text-shadow: 0 0 10px rgba(200, 138, 146, 0.2);
            }
          }
          .animated-word {
            animation: highlightWord 8s ease-in-out infinite;
            transition: color 0.5s ease;
          }
        `}</style>
        {words.map((word, index) => (
          <span
            key={index}
            className="animated-word"
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            {word}{' '}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 overflow-hidden font-display">
      
      {/* 1. IMAGEN DE FONDO CON OVERLAY */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero_section_2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark/40 lg:bg-dark/25 backdrop-blur-[1px]" />
      </div>

      {/* 2. NAVEGACIÓN SUPERIOR */}
      <nav className="absolute top-0 left-0 right-0 p-6 sm:p-10 lg:p-8 flex items-center justify-between lg:justify-end gap-4 lg:gap-6 text-xs sm:text-sm z-20">
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-6">
          <a href="#inicio" className="hover:text-accent transition-colors">{t.nav.home}</a>
          <a href="#sobre-mi" className="hover:text-accent transition-colors">{t.nav.about}</a>
          <a href="#proyectos" className="hover:text-accent transition-colors">{t.nav.projects}</a>
          <a href="#contacto" className="hover:text-accent transition-colors">{t.nav.contact}</a>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
          >
            <FaGlobe size={14} className="sm:size-4" />
            <span className="uppercase tracking-tighter">
              {language === 'en' ? 'EN' : 'ES'}
            </span>
          </button>

          <a 
            href={`/cv/cv-matias-padron-${language}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block border border-accent px-3 py-1.5 sm:px-5 sm:py-2 rounded-md text-accent hover:bg-accent hover:text-dark transition-all duration-300 whitespace-nowrap"
          >
            {t.nav.cv}
          </a>
        </div>
      </nav>

      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="max-w-4xl z-10 mt-16 ">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-soft-white leading-[1.1]">
          Matías Padrón
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-2xl font-medium text-gray-300 flex flex-wrap items-center gap-2 mb-6 sm:mb-8 tracking-wide">
          {t.hero.title}
          <span className="text-accent font-mono text-2xl sm:text-3xl">{`</>`}</span>
        </h2>

        <div className="text-gray-400 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed mb-10 sm:mb-12 lg:mb-0">
          <AnimatedDescription text={t.hero.description} />
        </div>

        {/* 4. REDES SOCIALES + CV (Mobile/Tablet) */}
        <div className="flex lg:hidden gap-6 items-center mt-2">
          <a href="https://github.com/mspadron28" target="_blank" rel="noopener noreferrer" className="text-soft-white hover:text-accent transition-colors">
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/matiaspadron28/" target="_blank" rel="noopener noreferrer" className="text-soft-white hover:text-accent transition-colors">
            <FaLinkedin size={26} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=matiaspadron2@gmail.com" target="_blank" rel="noopener noreferrer" className="text-soft-white hover:text-accent transition-colors">
            <FaEnvelope size={26} />
          </a>
          {/* Separador */}
          <span className="w-px h-6 bg-white/20" />
          <a
            href={`/cv/cv-matias-padron-${language}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent px-4 py-1.5 rounded-md text-accent hover:bg-accent hover:text-dark transition-all duration-300 text-xs font-medium whitespace-nowrap"
          >
            {t.nav.cv}
          </a>
        </div>
      </div>

      {/* 5. BARRA SOCIAL VERTICAL (Desktop) */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8 items-center border-r border-white/10 pr-4 z-10">
        <a href="https://github.com/mspadron28" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-transform hover:-translate-x-1">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/matiaspadron28/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-transform hover:-translate-x-1">
          <FaLinkedin size={22} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=matiaspadron2@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-transform hover:-translate-x-1">
          <FaEnvelope size={22} />
        </a>
      </div>

    </section>
  );
};

export default HeroSection;