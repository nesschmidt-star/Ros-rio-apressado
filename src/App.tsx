/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import benzedeiraImg from './benzedeira.png';
import coachImg from './coach.png';
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
      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="https://wa.me/5531975704151?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Rosário%20Apressado"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-spiritual-purple">
        {/* Background Image with Overlay and Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=2000" 
            alt="Rosário Apressado - Velas e Oração" 
            className="w-full h-full object-cover opacity-50 scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Sacred Gradient Overlay - Maximum Spiritual Impact */}
          <div className="absolute inset-0 bg-gradient-to-b from-spiritual-purple/95 via-spiritual-purple/60 to-spiritual-purple/95"></div>
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.3)_0%,transparent_70%)]"
          ></motion.div>
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Particle/Light Effect Overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-spiritual-gold rounded-full blur-md"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full blur-sm"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, -25, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-spiritual-gold rounded-full blur-md"
            ></motion.div>

            {/* Floating Sacred Music Notes */}
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0], y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 right-1/3 text-spiritual-gold/20"
            >
              <Music size={32} />
            </motion.div>
            <motion.div 
              animate={{ rotate: [0, -15, 15, 0], y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute bottom-1/4 left-1/4 text-spiritual-gold/15"
            >
              <Music size={24} />
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="text-spiritual-gold w-12 h-12 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Rosário Apressado para <br />
              <motion.span 
                animate={{ 
                  textShadow: [
                    "0 0 15px rgba(212,175,55,0.4)",
                    "0 0 30px rgba(212,175,55,0.8)",
                    "0 0 15px rgba(212,175,55,0.4)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-spiritual-gold italic"
              >
                Proteção Espiritual
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Quando as energias estão pesadas, a oração pode abrir caminhos. 
              Sinta a paz e a leveza de uma alma protegida.
            </p>
            <WhatsAppButton text="Receber oração agora pelo WhatsApp" className="text-lg" />
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-spiritual-beige to-transparent"></div>
      </header>

      {/* Problems Section */}
      <section className="py-24 bg-spiritual-beige">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="O Rosário Apressado é uma oração feita com fé profunda para trazer paz, proteção e clareza para sua jornada.">
            Você está passando por isso?
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Moon className="w-6 h-6" />, title: "Energia Pesada", desc: "Sensação constante de cansaço e peso nos ombros." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Inveja e Mau-olhado", desc: "Sentir que olhares negativos estão travando sua vida." },
              { icon: <Sun className="w-6 h-6" />, title: "Angústia sem Explicação", desc: "Tristeza ou aperto no peito que não parece ter motivo físico." },
              { icon: <Heart className="w-6 h-6" />, title: "Dificuldades no Amor", desc: "Conflitos constantes ou caminhos fechados para o coração." },
              { icon: <ArrowRight className="w-6 h-6" />, title: "Portas Fechadas", desc: "Projetos que não andam e oportunidades que desaparecem." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Falta de Proteção", desc: "Sentir-se vulnerável a influências espirituais negativas." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-spiritual-gold/10 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-spiritual-purple/5 rounded-full flex items-center justify-center text-spiritual-purple mb-6 group-hover:bg-spiritual-purple group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3 text-spiritual-purple">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Um processo simples, pautado na fé e no respeito à sua história.">
            Como funciona o atendimento
          </SectionTitle>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Contato Inicial", desc: "Clique no botão e entre em contato diretamente pelo WhatsApp." },
              { step: "02", title: "Sua Intenção", desc: "Conte brevemente sua situação ou o que deseja limpar e proteger." },
              { step: "03", title: "A Oração", desc: "O rosário é rezado com intenção espiritual específica para você e suas necessidades." },
              { step: "04", title: "Confirmação", desc: "Você recebe a confirmação e uma orientação espiritual para manter sua energia elevada." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 mb-12 last:mb-0"
              >
                <div className="text-4xl font-serif text-spiritual-gold/30 font-bold leading-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-spiritual-purple">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-spiritual-beige overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative flex justify-center w-full"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md bg-spiritual-purple/5">
                <img 
                  src={benzedeiraImg}
                  alt="Benzedeira - Quem sou eu" 
                  className="w-full h-[500px] md:h-[600px] object-cover object-top block"
                  onError={(e) => {
                    // Fallback para imagem profissional caso a local falhe no Vercel
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-spiritual-gold/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-spiritual-purple/10 rounded-full blur-2xl -z-0"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-spiritual-gold font-medium tracking-widest uppercase text-sm mb-4 block text-center">Tradição e Fé</span>
              <h2 className="text-4xl md:text-5xl font-serif text-spiritual-purple mb-6 text-center uppercase">Quem sou eu e como posso te ajudar</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Com anos de dedicação ao auxílio espiritual, carrego comigo a sabedoria das orações ancestrais e a força do Rosário Apressado.
                </p>
                <p>
                  Meu trabalho é pautado na simplicidade e na fé verdadeira. Acredito que a oração é a chave que abre portas e a luz que dissipa qualquer escuridão.
                </p>
                <p>
                  Cada rosário é rezado com entrega total, buscando trazer para sua vida o equilíbrio, a proteção contra o mal e a abertura dos caminhos que você tanto necessita.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-spiritual-gold rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-medium text-spiritual-purple">Atendimento humanizado e discreto</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Relatos de quem buscou luz e encontrou paz através da oração.">
            Depoimentos de Fé
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Maria Helena", 
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
                text: "Sentia um peso enorme nas costas e nada dava certo. Após o rosário, senti uma leveza que não sentia há anos. Gratidão eterna." 
              },
              { 
                name: "Carlos Eduardo", 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
                text: "Minha casa estava carregada e as brigas eram constantes. A oração trouxe uma paz que mudou o ambiente da minha família." 
              },
              { 
                name: "Ana Paula", 
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
                text: "Estava com os caminhos profissionais fechados. Poucos dias depois do benzimento, uma porta se abriu de forma inesperada." 
              },
              { 
                name: "Ricardo S.", 
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
                text: "O acolhimento e a força da oração são indescritíveis. Me senti protegido e renovado espiritualmente." 
              },
              { 
                name: "Lúcia M.", 
                image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150",
                text: "Recuperei meu sono e minha alegria. O mau-olhado que me cercava foi dissipado pela luz dessa oração." 
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-spiritual-beige/30 p-8 rounded-2xl relative border border-spiritual-gold/5"
              >
                <div className="flex gap-1 mb-4 text-spiritual-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-spiritual-gold/20">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-medium text-spiritual-purple">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-spiritual-purple relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-spiritual-gold rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 md:w-64 md:h-64 relative mx-auto flex-shrink-0"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-spiritual-gold/30 shadow-2xl bg-spiritual-purple/20">
                <img 
                  src={coachImg}
                  alt="Coach Espiritual" 
                  className="w-full h-full object-cover object-top block"
                  onError={(e) => {
                    // Fallback para imagem profissional caso a local falhe no Vercel
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="absolute -inset-4 border border-white/20 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Receba agora seu <br />
                <span className="text-spiritual-gold italic">Rosário Apressado</span>
              </h2>
              <p className="text-xl text-white/80 mb-12">
                Não permita que as energias negativas travem sua felicidade. 
                A oração pode trazer paz, proteção e luz para sua vida hoje mesmo.
              </p>
              <div className="flex justify-center lg:justify-start">
                <WhatsAppButton text="Falar no WhatsApp agora" className="text-xl px-12 py-5" />
              </div>
              <p className="mt-8 text-white/50 text-sm">
                Atendimento 100% online e sigiloso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-spiritual-beige border-t border-spiritual-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-6 text-spiritual-purple font-serif text-2xl">
            <Sparkles className="text-spiritual-gold w-6 h-6" />
            <span>Luz e Oração</span>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            © {new Date().getFullYear()} Luz e Oração. Todos os direitos reservados. 
            Desenvolvido com fé e dedicação para o seu bem-estar espiritual.
          </p>
        </div>
      </footer>
    </div>
  );
}
