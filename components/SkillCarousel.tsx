"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const SkillCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Consumimos los highlights desde las traducciones
  const highlights = t.about.highlights;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div className="relative h-32 md:h-40 flex items-center">
      {highlights.map((text, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 ease-in-out w-full ${
            index === currentIndex 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="border-l-4 border-accent pl-6 py-2">
            <p className="text-soft-white text-lg md:text-xl font-medium leading-tight">
              {text}
            </p>
          </div>
        </div>
      ))}
      
      {/* Indicadores de progreso */}
      <div className="absolute -bottom-4 left-0 flex gap-2">
        {highlights.map((_, index) => (
          <div 
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-accent" : "w-2 bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;