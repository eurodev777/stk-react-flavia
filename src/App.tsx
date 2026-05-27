import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Award,
  Heart,
  CalendarDays,
  Mail,
  Phone,
  ShieldCheck,
  MapPin,
  HeartHandshake,
  MousePointerClick,
  ChevronRight,
  Sparkles,
  Bookmark,
  Check,
} from "lucide-react";
import { therapistInfo } from "./data";
import Services from "./components/Services";
import BookingCalendar from "./components/BookingCalendar";
import FAQ from "./components/FAQ";
import FloatWhatsapp from "./components/FloatWhatsapp";
import EPDSTest from "./components/EPDSTest";
import local from "./assets/local.jpeg";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-coral-200 selection:text-coral-950 flex flex-col font-sans">
      {/* PROFESSIONAL NAVBAR HEADER */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-coral-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Brand Logo and Title */}
          <a href="#" className="flex flex-col text-left group">
            <h1 className="font-serif text-lg md:text-xl font-bold text-charcoal-900 leading-none group-hover:text-coral-700 transition-colors">
              Flávia Oliva
            </h1>
            <span className="text-[10px] md:text-xs font-mono font-medium tracking-wide text-coral-600 mt-0.5">
              Psicologia Perinatal • CRP 06/69852
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-charcoal-700">
            <a href="#sobre" className="hover:text-coral-600 transition-colors">
              Sobre Mim
            </a>
            <a
              href="#servicos"
              className="hover:text-coral-600 transition-colors"
            >
              Especialidades
            </a>
            <a
              href="#agendamento"
              className="hover:text-coral-600 transition-colors"
            >
              Agendamentos
            </a>
            <a href="#faq" className="hover:text-coral-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              id="header-cta-btn"
              href="#agendamento"
              className="px-5 py-2.5 bg-coral-700 hover:bg-coral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:shadow-sm"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            id="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 rounded-lg text-charcoal-700 hover:bg-coral-100/50 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV MENU SLIDE OUT */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-cream border-b border-coral-200/30 sticky top-[61px] z-40 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col text-left text-sm font-semibold uppercase tracking-wider text-charcoal-750">
              <a
                href="#sobre"
                onClick={closeMobileMenu}
                className="hover:text-coral-600 py-2 border-b border-coral-100/50 block"
              >
                Sobre Mim
              </a>
              <a
                href="#servicos"
                onClick={closeMobileMenu}
                className="hover:text-coral-600 py-2 border-b border-coral-100/50 block"
              >
                Especialidades
              </a>
              <a
                href="#agendamento"
                onClick={closeMobileMenu}
                className="hover:text-coral-600 py-2 border-b border-coral-100/50 block"
              >
                Agendamentos
              </a>
              <a
                href="#faq"
                onClick={closeMobileMenu}
                className="hover:text-coral-600 py-2 block"
              >
                FAQ
              </a>

              <div className="pt-2">
                <a
                  href="#agendamento"
                  onClick={closeMobileMenu}
                  className="w-full text-center block py-3.5 bg-coral-700 hover:bg-coral-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE BODY LAYOUT CONTAINER */}
      <main className="grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-12 md:py-24 border-b border-coral-200/10">
          {/* Subtle Background Blobs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-peach-100/45 rounded-full filter blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-coral-100/30 rounded-full filter blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headline and Slogan (7 columns on large screens) */}
              {/* <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-100/50 text-coral-800 text-xs font-semibold">
                  <Heart size={14} className="text-coral-600 fill-coral-300" />
                  <span>Cuidando de quem cuida</span>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-charcoal-900 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Apoio emocional na{" "}
                    <span className="text-coral-600 underline decoration-coral-200 decoration-wavy decoration-2">
                      gestação
                    </span>
                    , parto e pós-parto.
                  </h2>

                  <p className="font-sans text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl">
                    Oferecendo um espaço seguro, ético e empático focado no
                    bem-estar psíquico da mulher e no fortalecimento do vínculo
                    familiar.
                  </p>
                </div>

                <div className="border-l-4 border-coral-400 pl-4 py-1 italic text-xs sm:text-sm text-charcoal-600 leading-relaxed font-serif">
                  "O nascimento de um bebê também marca o nascimento de uma nova
                  mãe e um novo pai. Ofereço suporte de saúde mental focado em
                  suavizar essa transição."
                  <span className="block mt-1.5 font-sans font-bold text-xs uppercase tracking-wider text-charcoal-500 not-italic">
                    — Flávia Elizabeth, CRP 06/69852
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    id="hero-primary-cta"
                    href="#agendamento"
                    className="px-6 py-3.5 bg-coral-700 hover:bg-coral-800 text-white font-medium text-sm rounded-xl cursor-pointer transition-all hover:shadow-lg hover:shadow-coral-600/15 text-center"
                  >
                    Agendar Horário
                  </a>
                  <a
                    id="hero-secondary-cta"
                    href="#autoavaliacao"
                    className="px-6 py-3.5 bg-white hover:bg-gray-50 text-charcoal-850 font-medium text-sm rounded-xl border border-charcoal-300 transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    Fazer Autoavaliação EPDS
                    <MousePointerClick size={16} className="text-coral-500" />
                  </a>
                </div>
              </div> */}

              {/* Right Column: High Quality Portrait (5 columns on large screens) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
                <div className="text-center mb-6 max-w-sm px-4">
                  <p className="text-sm font-serif italic text-charcoal-800 leading-relaxed mt-1 font-medium">
                    "Cuidando de quem cuida, oferecendo apoio emocional na
                    gestação, parto e pós-parto"
                  </p>
                </div>
                <div className="relative w-full max-w-sm">
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 bg-coral-200 border border-coral-300 rounded-3xl translate-x-3 translate-y-3 -z-10" />

                  {/* Actual Photo */}
                  <div className="rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-slate-100 aspect-3/4">
                    <img
                      id="therapist-portrait"
                      src="psicologa.jpeg"
                      alt="Flávia Elizabeth Oliva de Morais - Psicóloga Perinatal"
                      className="w-full h-full object-cover select-none scale-102 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Suspended Badge Card */}
                  <div className="absolute bottom-5 -left-4 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl border border-coral-100 shadow-md text-left flex items-center gap-3 max-w-xs">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-charcoal-900 leading-tight">
                        Consulta Regulamentada
                      </div>
                      <div className="text-[10px] text-charcoal-500 font-mono mt-0.5">
                        CRP: 06/69852 • Ativo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTRAIT/BIOGRAPHY 'SOBRE MIM' SECTION */}
        <section id="sobre" className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile copy column */}
              <div className="text-left space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-coral-600 font-bold bg-coral-100/40 px-3 py-1.5 rounded-full inline-block">
                    Biografia Profissional
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-tight">
                    Flávia Oliva
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 font-mono">
                    Psicóloga Perinatal • CRP: 06/69852
                  </p>
                </div>

                <div className="space-y-4 font-sans text-charcoal-700 text-sm md:text-base leading-relaxed">
                  <p className="font-semibold text-charcoal-900 text-base md:text-lg">
                    {therapistInfo.aboutText}
                  </p>

                  <p>{therapistInfo.aboutLong}</p>

                  {/* <p>
                    Ofereço uma escuta qualificada que busca aliviar a
                    sobrecarga da maternidade real, desmistificar o puerpério e
                    preparar emocionalmente as gestantes para o parto, além de
                    dar suporte em situações complexas como perdas gestacionais,
                    gestações de alto risco e processos de reprodução assistida.
                  </p> */}
                </div>

                {/* Professional Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex gap-3 text-left">
                    <div className="p-2 rounded-xl bg-coral-100/60 text-coral-700 shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs text-charcoal-900 uppercase tracking-wide">
                        Foco Multidisciplinar
                      </h4>
                      <p className="text-xs text-charcoal-500 mt-1">
                        Interação e comunicação harmônica com obstetras e
                        pediatras.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 text-left">
                    <div className="p-2 rounded-xl bg-coral-100/60 text-coral-700 shrink-0">
                      <HeartHandshake size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs text-charcoal-900 uppercase tracking-wide">
                        Acolhimento Altamente Humano
                      </h4>
                      <p className="text-xs text-charcoal-500 mt-1">
                        Um ambiente ético livre de pressões, modismos e
                        julgamentos morais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Approach Cards Column */}
              <div className="bg-white p-6 md:p-10 rounded-3xl border border-coral-200/40 shadow-xs space-y-6 text-left">
                <h3 className="font-serif text-xl font-bold text-charcoal-900 border-b border-coral-100 pb-3 flex items-center gap-2">
                  <Bookmark size={18} className="text-coral-600" />
                  Como é nossa psicoterapia?
                </h3>

                <div className="space-y-5">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-charcoal-900">
                      1. Atendimento Sem Barreiras Geográficas
                    </h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Consultas por videochamada segura. Com o atendimento
                      online, você não precisa se deslocar, facilitando a adesão
                      durante a gestação avançada, repouso médico ou puerpério
                      com recém-nascido no colo.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-charcoal-900">
                      2. Atendimento Presencial
                    </h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Atendimento presencial no Espaço Terapêutico UNOA,
                      localizado no Jardim Vera Cruz em Sorocaba/SP Ambiente
                      acolhedor e aconchegante.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-charcoal-900">
                      3. Validação do Ecossistema Familiar
                    </h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Acolhimento ao parceiro, parceira e estruturação dos
                      papéis paternos. Fortalecimento da comunicação conjugal
                      como pilar para diminuir a sobrecarga materna secundária.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-150 flex items-center justify-between text-xs font-semibold text-charcoal-500 bg-cream/35 p-4 rounded-xl">
                  <span>Plataformas em conformidade com CFP:</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                    Sala Virtual Segura e Privada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full lg:h-[160vh] h-[80vh] flex items-center justify-center pb-16">
          <img src={local} className="lg:w-1/2 h-full" />
        </section>

        {/* EMBRACING SLOGAN BANNER */}
        <section className="bg-coral-600 text-white py-12 md:py-16 text-center relative overflow-hidden">
          {/* Faded Leaf background curves */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
            <Heart size={400} className="text-white shrink-0" />
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic">
              "Acolher a mãe é também acolher o bebê. <br className="sm:hidden block" />A saúde emocional dos pais
              é o alicerce fundamental para a formação de um apego seguro e de
              uma infância saudável."
            </h3>

            <div className="h-0.5 w-16 bg-white/40 mx-auto rounded-full my-3" />

            <span className="block font-mono text-xs uppercase tracking-widest text-coral-100 font-bold">
              Psicologia baseada no afeto e na evidência científica
            </span>
          </div>
        </section>

        {/* POR QUE FAZER TERAPIA? */}
        {/* <section className="py-16 md:py-24 bg-cream border-t border-b border-coral-200/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-3">
                <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-tight">
                  Por que fazer terapia nessa fase?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="space-y-6 text-left flex flex-col justify-center">
                  <p className="font-sans text-charcoal-800 text-base md:text-lg leading-relaxed font-semibold">
                    A chegada de um filho transforma profundamente a vida da
                    mulher.
                  </p>
                  <p className="font-sans text-charcoal-700 text-sm md:text-base leading-relaxed">
                    Mudanças hormonais, emocionais, familiares e profissionais
                    podem gerar inseguranças, ansiedade, medo, culpa e
                    sobrecarga emocional.
                  </p>
                  <p className="font-sans text-charcoal-700 text-sm md:text-base leading-relaxed">
                    A terapia perinatal oferece um espaço seguro de escuta e
                    acolhimento para que a mulher possa viver essa fase com mais
                    equilíbrio emocional, autoconhecimento e suporte
                    psicológico.
                  </p>
                  <div className="bg-coral-100/40 p-5 rounded-2xl border border-coral-200/30">
                    <p className="font-serif text-charcoal-900 text-sm md:text-base font-bold italic">
                      "Cada mulher vive a maternidade de uma forma única e não
                      precisa passar por isso sozinha."
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border border-coral-200/40 shadow-xs text-left flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-coral-600" />
                      Ela pode ajudar em momentos como:
                    </h3>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Tentativa de engravidar",
                        "Gestação",
                        "Medos relacionados ao parto",
                        "Ansiedade na maternidade",
                        "Puerpério",
                        "Sobrecarga emocional",
                        "Alterações no relacionamento",
                        "Construção da identidade materna",
                        "Dificuldade de adaptação à nova rotina",
                        "Sentimentos de culpa, exaustão ou insegurança",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs md:text-sm text-charcoal-700 leading-tight"
                        >
                          <Check
                            size={16}
                            className="text-coral-600 shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex justify-center">
                    <a
                      href="#agendamento"
                      className="w-full text-center py-3 bg-coral-700 hover:bg-coral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                    >
                      Buscar Apoio Emocional
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* SERVICES / SPECIALTIES SECTION */}
        <section id="servicos" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Services />
          </div>
        </section>

        {/* INTERACTIVE COMPANION EPDS SELF ASSESSMENT */}
        {/* <section id="autoavaliacao" className="py-16 md:py-24 bg-cream/60 border-t border-b border-coral-200/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EPDSTest />
          </div>
        </section> */}

        {/*预约 RESERVATION PRE-BOOKING SYSTEM */}
        {/* <section id="agendamento" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <span className="text-xs uppercase font-mono tracking-widest text-coral-600 font-bold bg-coral-100/40 px-3 py-1.5 rounded-full inline-block">
                Marcação Rápida
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 tracking-tight">
                Planeje Sua Sessão Exploratória
              </h2>
              <p className="font-sans text-xs md:text-sm text-charcoal-600 leading-relaxed">
                Escolha o horário, período e dia da semana. Enviaremos um resumo
                estruturado para o WhatsApp da Flávia para que ela possa te
                responder com as opções de datas livres.
              </p>
            </div>

            <BookingCalendar />
          </div>
        </section> */}

        {/* FAQ ACCORDION SECTION */}
        <section
          id="faq"
          className="py-16 md:py-24 bg-cream/70 border-t border-coral-200/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-charcoal-900 text-charcoal-400 py-12 md:py-16 border-t border-coral-100/10 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-left mb-12">
            {/* Logo and CRP */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-serif text-base font-bold text-white block">
                  Flávia Oliva
                </span>
                <span className="text-coral-500 font-mono text-xs block font-bold">
                  Psicóloga Perinatal • CRP: 06/69852
                </span>
              </div>
              <p className="text-charcoal-400 leading-relaxed font-sans text-xs">
                Acolhendo o emocional de mulheres na gestação, puerpério e
                maternidade de forma ética, ética e humana. Cuidando de quem
                cuida.
              </p>

              <div className="inline-flex items-center gap-1.5 text-[10px] bg-charcoal-800 text-charcoal-300 px-3 py-1.5 rounded-lg font-mono">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span>Cadastro e-Psi Ativo para teleconsulta</span>
              </div>
            </div>

            {/* Contato e Localização */}
            <div className="space-y-3 font-sans text-xs text-charcoal-400">
              <h4 className="font-serif text-white font-semibold uppercase tracking-wider text-xs">
                Contato e Locais
              </h4>
              <ul className="space-y-2">
                <li>
                  <strong className="text-charcoal-300 block">
                    WhatsApp / Telefone:
                  </strong>
                  <a
                    href="https://wa.me/5515988096168"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-coral-400 underline font-medium block"
                  >
                    (15) 98809-6168
                  </a>
                </li>
                <li>
                  <strong className="text-charcoal-300 block">E-mail:</strong>
                  <a
                    href="mailto:flaviaoliva.psicologa@gmail.com"
                    className="hover:text-coral-400 underline block"
                  >
                    flaviaoliva.psicologa@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="text-charcoal-300 block">
                    Atendimento Presencial:
                  </strong>
                  <span>
                    Espaço Terapêutico UNOA • Jardim Vera Cruz, Sorocaba/SP
                  </span>
                </li>
                <li>
                  <strong className="text-charcoal-300 block">
                    Atendimento Online:
                  </strong>
                  <span>Todo o país via chamada de vídeo segura</span>
                </li>
                <li className="pt-1 text-[11px] text-coral-500 font-semibold leading-normal">
                  Particular (Não atendo convênios)
                  <br />
                  Gestantes podem iniciar em qualquer fase!
                </li>
              </ul>
            </div>

            {/* Quick Links Nav */}
            <div className="space-y-3">
              <h4 className="font-serif text-white font-semibold uppercase tracking-wider text-xs">
                Acesso rápido
              </h4>
              <ul className="space-y-2 uppercase text-[10px] tracking-widest font-bold">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-coral-500 transition-colors"
                  >
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-coral-500 transition-colors"
                  >
                    Especialidades
                  </a>
                </li>
                <li>
                  <a
                    href="#agendamento"
                    className="hover:text-coral-500 transition-colors"
                  >
                    Agendar
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-coral-500 transition-colors"
                  >
                    Dúvidas Comuns
                  </a>
                </li>
              </ul>
            </div>

            {/* General Legals / Ethics */}
            <div className="space-y-3">
              <h4 className="font-serif text-white font-semibold uppercase tracking-wider text-xs">
                Conduta Ética
              </h4>
              <p className="text-charcoal-400 leading-relaxed text-xs">
                A prática psicológica de Flávia Oliva atende integralmente ao
                Código de Ética Profissional do Psicólogo estabelecido pelo
                Conselho Federal de Psicologia (CFP). No Brasil, todo psicólogo
                atuante necessita de registro ativo de CRP no conselho regional
                correspondente.
              </p>

              <div className="pt-2 flex gap-3 text-coral-500 font-medium">
                <a
                  href="https://site.cfp.org.br"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  CFP Oficial
                </a>
                <a
                  href="https://e-psi.cfp.org.br"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Conselho e-Psi
                </a>
              </div>
            </div>
          </div>

          {/* Border Div */}
          <div className="border-t border-charcoal-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-charcoal-500 text-xs">
            <p>
              © {new Date().getFullYear()} Flávia Elizabeth Oliva de Morais.
              Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <span>
                Desenvolvido por{" "}
                <a href="sohtink.com.br" target="_blank">
                  Sothink Mkt
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <FloatWhatsapp />
    </div>
  );
}
