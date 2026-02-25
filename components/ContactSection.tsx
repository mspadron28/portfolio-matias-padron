"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulación de envío (Aquí integrarías Formspree, Resend o tu backend)
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-24 px-6 sm:px-12 lg:px-20 bg-dark overflow-hidden font-display">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: MENSAJE PERSUASIVO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-soft-white mb-4">
              {t.contact.title} <br />
              <span className="text-accent">{t.contact.subtitle}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              {t.contact.description}
            </p>
            
            {/* Opcional: Tu correo directo para mayor accesibilidad */}
            <div className="mt-10 p-4 border border-white/5 rounded-xl bg-white/[0.01] inline-block">
              <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Direct Mail</span>
              <a href="mailto:matiaspadron2@gmail.com" className="text-soft-white hover:text-accent transition-colors underline-offset-4 underline decoration-accent/30">
                matiaspadron2@gmail.com
              </a>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: FORMULARIO MINIMALISTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                  {t.contact.form.name}
                </label>
                <input 
                  required
                  type="text"
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-soft-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                  {t.contact.form.email}
                </label>
                <input 
                  required
                  type="email"
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-soft-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                  {t.contact.form.message}
                </label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-soft-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                  placeholder="I have a project..."
                />
              </div>

              <button
                disabled={status !== 'idle'}
                type="submit"
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-accent/10 ${
                  status === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-accent text-dark hover:bg-accent/90 hover:-translate-y-1 active:scale-95'
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.div key="idle" className="flex items-center gap-2">
                      <FaPaperPlane /> {t.contact.form.button}
                    </motion.div>
                  )}
                  {status === 'sending' && (
                    <motion.div key="sending" className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                      {t.contact.form.sending}
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div key="success" initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      <FaCheckCircle /> {t.contact.form.success}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;