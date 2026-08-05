import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { faqData, therapistInfo } from '../data';
import { handleConversion } from '../util/handleConversion';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  const filteredFaqs = faqData.filter(faq => {
    const qLower = faq.question.toLowerCase();
    const aLower = faq.answer.toLowerCase();
    const searchLower = searchTerm.toLowerCase();
    return qLower.includes(searchLower) || aLower.includes(searchLower);
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Search Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-coral-200/40 pb-6">
        <div className="text-left space-y-1">
          <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 tracking-tight">
            Perguntas Frequentes
          </h3>
          <p className="font-sans text-xs md:text-sm text-charcoal-500">
            Esclareça suas principais dúvidas sobre o acompanhamento psicológico perinatal.
          </p>
        </div>

        {/* Search input field */}
        <div className="relative w-full md:w-80">
          <input
            id="faq-search-input"
            type="text"
            placeholder="Buscar dúvida (Ex: Baby Blues)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-sans focus:outline-hidden focus:border-coral-400 focus:ring-1 focus:ring-coral-300 transition-all shadow-2xs"
          />
          <Search size={14} className="text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-coral-300 shadow-2xs' 
                    : 'border-coral-100/30 hover:border-coral-200'
                }`}
              >
                {/* Header Toggle */}
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-serif font-medium text-sm md:text-base text-charcoal-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className={`p-1 rounded-full shrink-0 transition-all ${
                    isOpen ? 'bg-coral-100 text-coral-700 rotate-180' : 'bg-cream text-charcoal-400'
                  }`}>
                    <ChevronDown size={16} />
                  </span>
                </button>

                {/* Answer content collapse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-left border-t border-slate-50">
                        <p className="font-sans text-xs md:text-sm text-charcoal-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
            <HelpCircle size={32} className="text-charcoal-300 mx-auto mb-3" />
            <p className="text-sm text-charcoal-600 font-sans">
              Nenhuma pergunta encontrada para sua busca "{searchTerm}"
            </p>
            <button
              id="clear-faq-search-btn"
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs text-coral-600 hover:text-coral-700 font-semibold underline cursor-pointer"
            >
              Exibir todas as perguntas
            </button>
          </div>
        )}
      </div>

      {/* Direct Contact Note */}
      <div className="bg-cream/40 p-5 rounded-2xl border border-coral-200/50 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-coral-100/50 rounded-xl text-coral-600">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="font-serif text-charcoal-900 font-semibold text-sm">Tem outra dúvida específica?</h4>
            <p className="font-sans text-xs text-charcoal-600">Fale diretamente ou descreva sua dúvida para receber um acolhimento inicial.</p>
          </div>
        </div>

        <a
          id="faq-whatsapp-direct"
          onClick={handleConversion}
          href={`https://api.whatsapp.com/send?phone=${therapistInfo.whatsappNumber}&text=${encodeURIComponent('Olá, Flávia! Eu estava lendo as Dúvidas Frequentes no seu site e gostaria de esclarecer uma dúvida sobre meu caso.')}`}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 bg-coral-600 hover:bg-coral-700 text-white font-medium rounded-xl text-xs cursor-pointer transition-colors"
        >
          Conversar por WhatsApp
        </a>
      </div>

    </div>
  );
}
