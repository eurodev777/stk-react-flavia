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
import WhatsAppWidget from "./components/WhatsAppWidget";
import Hero from "./components/HeroSection";
import GoogleMapWrapper from "./components/GoogleMapWrapper";
import LocationSection from "./components/LocationSection";
import { ClinicInfo } from "./types";
import Depoimentos from "./components/Depoimentos";

// Available avatars for the chat head
const AVATARS = [
  {
    id: "psicologa-flavia",
    label: "Flávia Oliva",
    role: "Psicóloga Perinatal",
    url: "/image.png",
  },
];

const clinicData: ClinicInfo = {
  name: "Flávia Oliva",
  title: "Psicologia Perinatal",
  crp: "06/69852",
  address: "Av. Salvador Milego, 146",
  complement: "Jardim Vera Cruz",
  cep: "18050-010",
  city: "Sorocaba",
  state: "SP",
  phone: "(15) 99123-4567",
  email: "contato@flaviaoliva.com.br",
  whatsappUrl:
    "https://wa.me/5515991234567?text=Olá%20Flávia%20Oliva,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas%20de%20psicologia%20perinatal.",
  instagramUrl: "https://instagram.com/flaviaoliva.psicologia",
  coordinates: {
    lat: -23.518175,
    lng: -47.487856,
  },
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "5515988096168";
  const message = "Olá! Gostaria de agendar uma consulta";
  const bubbleText = "Agendar Consulta";
  const position = "bottom-right";
  const animation = "pulse";
  const colorTheme = "whatsapp";
  // Advanced features
  const useChatPopup = true;
  const alwaysShowBubble = true;
  const showNotificationDot = true;
  // Agent profile
  const selectedAvatarId = "psicologa-flavia";
  const agentName = "Flávia Oliva";
  const agentSubtitle = "Psicóloga Perinatal";
  // Avatar ativo
  const activeAvatar =
    AVATARS.find((a) => a.id === selectedAvatarId) || AVATARS[0];
  const notifyClick = () => {
    const dateStr = new Date().toLocaleTimeString("pt-BR");

    console.log(
      `[${dateStr}] Clicou no balão de atendimento! (${
        useChatPopup ? "Abriu popover de chat" : "Direcionou ao WhatsApp Web"
      })`,
    );
  };

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
            <a href="#faq" className="hover:text-coral-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              id="header-cta-btn"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5515988096168&text=Quero%20agendar%20uma%20consulta"
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
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>
        </div>
      </header>

      {/* MOBILE NAV MENU SLIDE OUT */}
      <AnimatePresence>
        {" "}
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
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
                  href="https://api.whatsapp.com/send?phone=5515988096168&text=Quero%20agendar%20uma%20consulta"
                  target="_blank"
                  onClick={closeMobileMenu}
                  className="w-full text-center block py-3.5 bg-coral-700 hover:bg-coral-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}{" "}
      </AnimatePresence>

      {/* CORE BODY LAYOUT CONTAINER */}
      <main className="grow">
        {/* HERO SECTION */}
        <Hero />

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
                  <p className="text-base md:text-lg">
                    Seja bem vindo(a), me chamo Flávia Elizabeth Oliva de
                    Morais. Sou Psicóloga Perinatal (CRP: 06/69852), Formada
                    pela UNIP há mais de 20 anos, especializada em Psicologia
                    Perinatal e da Parentalidade, oferecendo{" "}
                    <span className="font-semibold text-charcoal-900">
                      acolhimento emocional para mulheres durante a gestação,
                      puerpério e maternidade.
                    </span>
                  </p>
                  <p>{therapistInfo.aboutLong}</p>
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

              <div className="w-full">
                <img
                  src="psicologa.jpeg"
                  width={350}
                  className="mx-auto rounded-3xl"
                />
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

        <LocationSection clinic={clinicData} />

        {/* EMBRACING SLOGAN BANNER */}
        <section className="bg-coral-600 text-white py-12 md:py-16 text-center relative overflow-hidden">
          {/* Faded Leaf background curves */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
            <Heart size={400} className="text-white shrink-0" />
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic">
              "Acolher a mãe é também acolher o bebê.{" "}
              <br className="sm:hidden block" />A saúde emocional dos pais é o
              alicerce fundamental para a formação de um apego seguro e de uma
              infância saudável."
            </h3>

            <div className="h-0.5 w-16 bg-white/40 mx-auto rounded-full my-3" />

            <span className="block font-mono text-xs uppercase tracking-widest text-coral-100 font-bold">
              Psicologia baseada no afeto e na evidência científica
            </span>
          </div>
        </section>

        {/* SERVICES / SPECIALTIES SECTION */}
        <section id="servicos" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Services />
          </div>
        </section>

        <Depoimentos />

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
                    href="https://api.whatsapp.com/send?phone=5515988096168&text=Quero%20agendar%20uma%20consulta"
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
              © {new Date().getFullYear()}
              Flávia Elizabeth Oliva de Morais. Todos os direitos reservados.
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

      {/* <FloatWhatsapp /> */}
      <WhatsAppWidget
        phoneNumber={phoneNumber}
        message={message}
        bubbleText={bubbleText}
        position={position}
        animation={animation}
        colorTheme={colorTheme}
        useChatPopup={useChatPopup}
        alwaysShowBubble={alwaysShowBubble}
        showNotificationDot={showNotificationDot}
        onWidgetClick={notifyClick}
        avatarUrl={activeAvatar.url}
        agentName={agentName}
        agentSubtitle={agentSubtitle}
      />
    </div>
  );
}
