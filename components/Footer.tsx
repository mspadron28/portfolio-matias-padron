"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-20 bg-dark border-t border-white/5 font-display">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* BRANDING OFICIAL */}
          <div className="flex flex-col items-center md:items-start">
           
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-px bg-accent" />
              <p className="text-accent text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase">
                {t.footer.brand}
              </p>
            </div>
          </div>

          {/* NAVEGACIÓN RÁPIDA */}
          <nav className="flex gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#inicio" className="hover:text-accent transition-colors">{t.nav.home}</a>
            <a href="#sobre-mi" className="hover:text-accent transition-colors">{t.nav.about}</a>
            <a href="#proyectos" className="hover:text-accent transition-colors">{t.nav.projects}</a>
            <a href="#contacto" className="hover:text-accent transition-colors">{t.nav.contact}</a>
          </nav>

          {/* REDES SOCIALES */}
          <div className="flex gap-6 text-gray-400">
            <a 
              href="https://github.com/mspadron28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-all hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/matiaspadron28/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-all hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:matiaspadron2@gmail.com" 
              className="hover:text-accent transition-all hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* COPYRIGHT INFO */}
        <div className="mt-12 pt-8 border-t border-white/[0.02] text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            © {currentYear} Matías Padrón. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;