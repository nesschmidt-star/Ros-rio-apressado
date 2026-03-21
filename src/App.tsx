/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Moon, 
  Sun, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Music
} from 'lucide-react';

const WhatsAppButton = ({ className = "", text = "Falar no WhatsApp agora" }) => (
  <a 
    href="https://wa.me/5531975704151?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Rosário%20Apressado" 
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-spiritual-gold hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${className}`}
  >
    <MessageCircle className="w-5 h-5" />
    {text}
  </a>
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-spiritual-purple'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`h-px w-24 mx-auto mt-6 ${light ? 'bg-spiritual-gold/50' : 'bg-spiritual-gold'}`}
    />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-spiritual-gold/30">

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-spiritual-purple">

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Rosário Apressado para Proteção Espiritual
          </h1>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-spiritual-beige">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-1/2 flex justify-center w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md">

                {/* ✅ IMAGEM CORRIGIDA AQUI */}
                <img 
                  src="/benzedeira.png"
                  alt="Benzedeira - Quem sou eu"
                  className="w-full h-[500px] object-cover"
                />

              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif text-spiritual-purple mb-6">
                Quem sou eu
              </h2>
              <p className="text-gray-700">
                Texto sobre a benzedeira...
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}