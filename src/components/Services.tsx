import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Baby,
  Brain,
  Flower,
  HeartCrack,
  Sparkles,
  ShieldAlert,
  Compass,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "../data";
import { ServiceItem } from "../types";

// Helper to render correct icon
const ServiceIcon = ({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) => {
  switch (name) {
    case "Baby":
      return <Baby size={size} className={className} />;
    case "BrainActivity":
      return <Brain size={size} className={className} />;
    case "Flower":
      return <Flower size={size} className={className} />;
    case "HeartCrack":
      return <HeartCrack size={size} className={className} />;
    case "Sparkles":
      return <Sparkles size={size} className={className} />;
    case "ShieldAlert":
      return <ShieldAlert size={size} className={className} />;
    case "Compass":
      return <Compass size={size} className={className} />;
    default:
      return <Baby size={size} className={className} />;
  }
};

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-coral-600 font-bold bg-coral-100/40 px-3 py-1.5 rounded-full inline-block">
          Áreas de Atuação
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-tight">
          Apoio Emocional sob Medida
        </h2>
        <p className="font-sans text-charcoal-600 text-sm md:text-base leading-relaxed">
          Cada fase do pré-natal ao pós-parto exige um olhar diferenciado.
          Clique em cada especialidade para conhecer os detalhes do tratamento e
          os benefícios que trazem para você e sua família.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {servicesData.map((service, index) => {
          const isExpanded = expandedId === service.id;

          return (
            <motion.div
              layout
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className={`bg-white rounded-2xl border text-left p-6 transition-all duration-300 cursor-pointer select-none origin-center ${
                isExpanded
                  ? "border-coral-300 ring-1 ring-coral-100/50 shadow-md md:col-span-2"
                  : "border-coral-100/40 hover:border-coral-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-4">
                  <div
                    className={`p-3.5 rounded-xl shrink-0 transition-colors ${
                      isExpanded
                        ? "bg-coral-100 text-coral-700"
                        : "bg-cream text-coral-600"
                    }`}
                  >
                    <ServiceIcon name={service.iconName} size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-charcoal-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 font-sans mt-0.5">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-1 rounded-full text-charcoal-400 hover:text-coral-600 transition-colors shrink-0">
                  {isExpanded ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-5 gap-6">
                      {/* Full description column */}
                      <div className="md:col-span-3 space-y-3">
                        <span className="text-[10px] bg-slate-100 text-slate-800 font-mono font-bold px-2 py-1 rounded-md uppercase">
                          Sobre este Cuidado
                        </span>
                        <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                          {service.fullDescription}
                        </p>
                      </div>

                      {/* Benefits column */}
                      <div className="md:col-span-2 bg-cream/50 p-4 rounded-xl border border-coral-200/20 space-y-3">
                        <span className="text-[10px] bg-coral-100/70 text-coral-800 font-mono font-bold px-2 py-1 rounded-md uppercase">
                          Benefícios Centrais
                        </span>
                        <ul className="space-y-2.5">
                          {service.benefits.map((benefit, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2.5 text-xs text-charcoal-700 leading-relaxed font-sans"
                            >
                              <Check
                                size={14}
                                className="text-emerald-600 shrink-0 mt-0.5"
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <a
                          onClick={(e) => {
                            e.stopPropagation(); // Avoid collapsing
                            window.open(
                              "https://wa.me/5515988096168?text=Olá! Quero agendar uma consulta.",
                              "_blank",
                            );
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral-600 hover:text-coral-700 transition-colors group"
                        >
                          Agendar consulta
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="w-1/4 mx-auto">
        <a
          href="https://api.whatsapp.com/send?phone=5515988096168&text=Quero%20agendar%20uma%20consulta"
          target="_blank"
          className="w-full text-center block py-3 bg-coral-700 hover:bg-coral-800 text-white text-lg font-bold rounded-xl transition-colors"
        >
          Agendar Consulta
        </a>
      </div>
    </div>
  );
}
