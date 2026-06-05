/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  MousePointerClick,
  ShieldCheck,
  ArrowRight,
  UserCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"transformation" | "therapist">(
    "transformation",
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden py-12 lg:py-24 border-b border-coral-200/20 bg-gradient-to-b from-peach-50/30 to-white">
      {/* Background organic blurred spots for a warm cosmic/peach environment */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-peach-100/35 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-5 right-10 w-[450px] h-[450px] bg-coral-100/25 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Slogan (7 columns on large screens) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Tag/Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-100/60 text-coral-800 text-xs font-semibold"
            >
              <Heart size={14} className="text-coral-600 fill-coral-300" />
              <span>Cuidando de quem cuida • Acolhimento Perinatal</span>
            </motion.div>

            {/* Pain Point Title & Context Subtitle */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="font-serif text-charcoal-900 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
              >
                Como superar a{" "}
                <span className="font-normal italic text-coral-500 select-none">
                  irritação
                </span>{" "}
                e a{" "}
                <span className="font-normal italic text-coral-500 select-none">
                  insegurança
                </span>{" "}
                da maternidade, mesmo que você não saiba o motivo
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-charcoal-800 text-base sm:text-lg leading-relaxed max-w-2xl font-light"
              >
                A transição para a maternidade envolve não apenas alegrias, mas
                também dores, medos e angústias. Mas vou te guiar para conseguir
                passar por tudo isso com leveza, saúde mental e emocional.
              </motion.p>
            </div>

            {/* Micro quote reinforcing transition */}
            <motion.div
              variants={itemVariants}
              className="border-l-4 border-coral-400 pl-4 py-1.5 italic text-xs sm:text-sm text-charcoal-700 leading-relaxed font-serif bg-coral-100/15 pr-4 rounded-r-xl"
            >
              "O nascimento de um bebê também marca o nascimento de uma nova
              mãe. Você não precisa passar pela exaustão e pela culpa sozinha."
            </motion.div>

            {/* Direct Conversion Calls */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                id="hero-primary-cta"
                href="https://api.whatsapp.com/send?phone=5515988096168&text=Quero%20agendar%20uma%20consulta"
                target="_blank"
                className="group px-6 py-4 bg-coral-500 hover:bg-coral-600 text-white font-medium text-sm rounded-xl cursor-pointer transition-all hover:shadow-lg hover:shadow-coral-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>Agendar Conversa de Apoio</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Trust and Regulation Signals */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-2 text-xs text-charcoal-600 border-t border-coral-200/10 max-w-lg"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>CRP Ativo 06/69852</span>
              </div>
              <div className="w-1 h-1 bg-charcoal-305 rounded-full" />
              <div className="flex items-center gap-1.5">
                <UserCheck size={16} className="text-coral-500" />
                <span>Atendimento 100% Sigiloso</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Image Switcher (5 columns on large screens) */}
          <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
            {/* Main Visual Container */}
            <div className="relative w-full max-w-sm">
              {/* Decorative Warm Back-Frame */}
              <div className="absolute inset-0 bg-coral-200 border-2 border-coral-100 rounded-3xl translate-x-3 translate-y-3 -z-10 transition-transform duration-500 hover:translate-x-4 hover:translate-y-4" />
              {/* Sub-image caption */}
              <div className="mt-4 text-center max-w-sm bg-coral-100/35 px-4 py-2 rounded-2xl border border-coral-200/10">
                <span className="text-[11px] text-charcoal-600 font-serif italic">
                  {activeTab === "transformation"
                    ? '"Cuidar da sua mente é o primeiro passo para nutrir a vida do seu bebê com paz."'
                    : "Dra. Flávia Elizabeth Oliva de Morais — Psicoterapia focado no seu bem-estar psíquico."}
                </span>
              </div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-50 aspect-3/4">
                <AnimatePresence mode="wait">
                  {activeTab === "transformation" ? (
                    <motion.div
                      key="transformation-view"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative group"
                    >
                      <img
                        id="transformation-image"
                        src="mulher.png"
                        alt="Mulher alegre e tranquila segurando seu recém-nascido no colo com paz e leveza"
                        className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />

                      {/* Interactive Float Tag */}
                      <div className="absolute bottom-5 right-5 bg-charcoal-900/80 backdrop-blur text-white px-4 py-2 rounded-2xl text-[11px] leading-snug tracking-wide font-medium flex items-center gap-1.5 border border-white/10 shadow-lg">
                        <Sparkles
                          size={12}
                          className="text-peach-300 fill-peach-400"
                        />
                        <span>Resgate sua paz mental</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="therapist-view"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative group"
                    >
                      <img
                        id="therapist-portrait"
                        src="psicologa.jpeg"
                        alt="Flávia Elizabeth - Psicóloga Perinatal CRP 06/69852"
                        className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />

                      {/* Suspended Regulation Badge Card */}
                      <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl border border-coral-100 shadow-md text-left flex items-center gap-3 max-w-[260px]">
                        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                          <ShieldCheck size={18} />
                        </div>
                        <div>
                          <div className="font-bold text-[11px] text-charcoal-900 leading-tight">
                            Consulta Regulamentada
                          </div>
                          <div className="text-[9px] text-charcoal-500 font-mono mt-0.5">
                            CRP: 06/69852 • Conselho de Psicologia
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
