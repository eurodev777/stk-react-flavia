import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  Clock,
  Car,
  Bus,
  Eye,
  AlertCircle,
} from "lucide-react";
import { ClinicInfo } from "../types";
import GoogleMapWrapper from "./GoogleMapWrapper";

interface LocationSectionProps {
  clinic: ClinicInfo;
}

export default function LocationSection({ clinic }: LocationSectionProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "transit" | "parking">(
    "info",
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(`${clinic.address}, ${clinic.complement}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address + ", " + clinic.city)}`;

  return (
    <section
      id="clinic-location-section"
      className="py-12 md:py-16 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-lilac-dark bg-brand-lilac-light/60 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            Localização Presencial
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Venha nos fazer uma visita
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
            Consulte a rota no mapa interativo abaixo, copie o endereço completo
            ou obtenha orientações detalhadas de acesso e estacionamento.
          </p>
        </div>

        {/* Location Grid Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Map Panel (7/12 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <GoogleMapWrapper
              clinic={clinic}
              onCopyAddress={handleCopy}
              copied={copied}
            />

            {/* Action buttons immediately below map */}
            {/* <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopy}
                className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  copied
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-white border-slate-200 hover:border-brand-lilac text-slate-700 hover:text-brand-lilac-dark shadow-xs"
                }`}
                id="btn-copy-address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 animate-scale-up" />
                    Endereço Copiado com Sucesso!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-brand-lilac-dark" />
                    Copiar Endereço Completo
                  </>
                )}
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-lilac text-slate-950 font-semibold py-3 px-4 rounded-xl text-sm hover:bg-brand-lilac-hover transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                id="btn-open-route"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                Como Chegar (Abrir no Google Maps)
              </a>
            </div> */}
          </div>

          {/* Column 2: Details and Guide Tabs (5/12 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Identity Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-lilac-light flex items-center justify-center text-brand-lilac-dark shrink-0">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-900 text-lg">
                    Consultório Flávia Oliva
                  </h4>
                  <p className="text-slate-500 text-xs">
                    Psicologia Perinatal &bull; CRP 06/69852
                  </p>
                </div>
              </div>

              <hr className="border-slate-200/60" />

              <div className="space-y-3 font-sans">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-0.5">
                    Endereço
                  </span>
                  <p className="text-sm font-medium text-slate-800">
                    {clinic.address}
                  </p>
                  <p className="text-xs text-slate-500">{clinic.complement}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-0.5">
                      Bairro / CEP
                    </span>
                    <p className="text-xs font-medium text-slate-800">
                      Jardim Vera Cruz
                    </p>
                    <p className="text-xs text-slate-500">{clinic.cep}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-0.5">
                      Cidade / UF
                    </span>
                    <p className="text-xs font-medium text-slate-800">
                      Sorocaba, SP
                    </p>
                    <p className="text-xs text-slate-500">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Tabs (How to get here / accessibility) */}
            <div className="space-y-3">
              <div className="flex border-b border-slate-100 gap-4 text-xs font-semibold">
                {[
                  { key: "info", icon: Clock, label: "Atendimento" },
                  { key: "parking", icon: Car, label: "Estacionamento" },
                  { key: "transit", icon: Bus, label: "Transporte" },
                ].map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`flex items-center gap-1.5 pb-2 border-b-2 font-medium transition-all cursor-pointer ${
                        activeTab === tab.key
                          ? "border-brand-lilac-dark text-brand-lilac-dark font-semibold"
                          : "border-transparent text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <TabIcon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Contents */}
              <div className="bg-white rounded-xl py-2 min-h-[120px]">
                <AnimatePresence mode="wait">
                  {activeTab === "info" && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 text-xs text-slate-500 leading-relaxed font-sans"
                    >
                      <div className="flex justify-between items-center py-1 border-b border-slate-50">
                        <span className="font-semibold text-slate-700">
                          Segunda a Sexta
                        </span>
                        <span className="font-mono text-slate-800">
                          08:00 - 19:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-50">
                        <span className="font-semibold text-slate-700">
                          Sábado
                        </span>
                        <span className="font-mono text-slate-800">
                          08:00 - 12:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-semibold text-slate-700">
                          Domingo & Feriados
                        </span>
                        <span className="text-amber-600 font-medium">
                          Fechado
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2 italic flex gap-1 items-start">
                        <AlertCircle className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                        Os atendimentos são agendados previamente com hora
                        marcada para assegurar total privacidade e tranquilidade
                        durante a consulta perinatal.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "parking" && (
                    <motion.div
                      key="parking"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-slate-500 leading-relaxed font-sans space-y-2"
                    >
                      <p>
                        Entendemos que gestantes e mães com bebês precisam de
                        máxima comodidade ao se locomoverem para consultas
                        clínicas presenciais:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        <li>
                          <strong>Estacionamento Fácil:</strong> Há vagas
                          cortesia e rotativas demarcadas disponíveis em frente
                          ao consultório político e na própria Av. Salvador
                          Milego.
                        </li>
                        <li>
                          <strong>Acessibilidade de Carrinho de Bebê:</strong> O
                          acesso ao prédio é plano, possuindo rampas e elevador
                          amplo certificado para carrinhos e bebês conforto.
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "transit" && (
                    <motion.div
                      key="transit"
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-slate-500 leading-relaxed font-sans space-y-2"
                    >
                      <p>
                        Localizado no Jardim Vera Cruz, uma área tranquila,
                        arborizada e de fácil acesso em Sorocaba/SP:
                      </p>
                      <p className="text-slate-600">
                        <strong>Linhas de Ônibus:</strong> Várias linhas que
                        descem a Av. Dr. Armando Pannunzio param a poucos metros
                        do consultório (confluência com a Av. Salvador Milego).
                      </p>
                      <p className="text-slate-600">
                        <strong>Referências:</strong> Cruzamento próximo à
                        agências bancárias e farmácias locais, permitindo
                        resolver pendências com rapidez e segurança.
                      </p>
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
