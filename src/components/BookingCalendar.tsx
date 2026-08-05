import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  Send, 
  CheckCircle,
  HelpCircle,
  Video,
  MapPin
} from 'lucide-react';
import { servicesData, therapistInfo } from '../data';
import { handleConversion } from '../util/handleConversion';

const DAYS_OF_WEEK = [
  { key: 'seg', label: 'Segunda-feira' },
  { key: 'ter', label: 'Terça-feira' },
  { key: 'qua', label: 'Quarta-feira' },
  { key: 'qui', label: 'Quinta-feira' },
  { key: 'sex', label: 'Sexta-feira' }
];

const PERIODS = [
  { key: 'morning', label: 'Manhã (08h às 12h)', icon: '☀️' },
  { key: 'afternoon', label: 'Tarde (13h às 18h)', icon: '⛅' },
  { key: 'night', label: 'Noite (18h às 21h)', icon: '🌙' }
];

export default function BookingCalendar() {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(servicesData[0].id);
  const [selectedDay, setSelectedDay] = useState('seg');
  const [selectedPeriod, setSelectedPeriod] = useState('afternoon');
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [customNotes, setCustomNotes] = useState('');

  const currentServiceName = servicesData.find(s => s.id === selectedService)?.title || servicesData[0].title;
  const currentDayLabel = DAYS_OF_WEEK.find(d => d.key === selectedDay)?.label || 'Segunda-feira';
  const currentPeriodLabel = PERIODS.find(p => p.key === selectedPeriod)?.label || 'Tarde';

  // Construct message
  const generateMessage = () => {
    let text = `Olá, Flávia! Eu estava navegando pelo seu site e gostaria de agendar um atendimento.
    
*Meus Dados:*
- Nome: *${name || '[Seu Nome]'}*
- Serviço: *${currentServiceName}*
- Histórico: *${isFirstTime ? 'Primeira consulta' : 'Já faço acompanhamento'}*
- Preferência de Agenda: *${currentDayLabel}* no período da *${currentPeriodLabel}*`;

    if (customNotes.trim()) {
      text += `\n- Observações: _${customNotes.trim()}_`;
    }

    return text;
  };

  const shareText = generateMessage();
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${therapistInfo.whatsappNumber}&text=${encodeURIComponent(shareText)}`;

  return (
    <div id="booking-planner" className="max-w-5xl mx-auto bg-white rounded-3xl border border-coral-100 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Reservation Inputs Form (7 columns) */}
        <div className="lg:col-span-7 p-6 md:p-10 space-y-8 text-left border-b lg:border-b-0 lg:border-r border-slate-100">
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider text-coral-600 font-bold">
              Planejamento de Consulta
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 tracking-tight">
              Agende seu Acolhimento
            </h3>
            <p className="text-xs md:text-sm text-charcoal-500 font-sans leading-relaxed">
              Preencha suas preferências de dia, horário e modalidade abaixo. A Flávia receberá todas as informações compiladas em seu WhatsApp para facilitar sua marcação de horário.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider font-mono">
                Seu Nome Completo
              </label>
              <input
                id="booking-name-input"
                type="text"
                placeholder="Ex: Amanda Silva Castro"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-cream/30 border border-slate-200 rounded-xl text-sm focus:border-coral-400 focus:outline-hidden transition-colors"
                required
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider font-mono">
                Modalidade / Motivo Principal
              </label>
              <select
                id="booking-service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-cream/30 border border-slate-200 rounded-xl text-sm focus:border-coral-400 focus:outline-hidden transition-colors cursor-pointer"
              >
                {servicesData.map(service => (
                  <option key={service.id} value={service.id} className="text-charcoal-900">
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Simulated Calendar Grid */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider font-mono">
                1. Escolha o melhor dia da semana (Seg a Sex):
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {DAYS_OF_WEEK.map((day) => {
                  const isSelected = selectedDay === day.key;
                  return (
                    <button
                      key={day.key}
                      id={`day-select-${day.key}`}
                      type="button"
                      onClick={() => setSelectedDay(day.key)}
                      className={`py-3 px-1 text-center rounded-xl text-xs font-medium border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-coral-500 border-coral-500 text-white font-semibold shadow-xs'
                          : 'bg-cream/20 border-slate-200 hover:border-coral-200 text-charcoal-700'
                      }`}
                    >
                      {day.label.split('-')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Period Selection */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider font-mono">
                2. Escolha o período preferido de atendimento:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PERIODS.map((period) => {
                  const isSelected = selectedPeriod === period.key;
                  return (
                    <button
                      key={period.key}
                      id={`period-select-${period.key}`}
                      type="button"
                      onClick={() => setSelectedPeriod(period.key)}
                      className={`p-3 text-left rounded-xl text-xs font-medium border cursor-pointer flex items-center gap-2.5 transition-all ${
                        isSelected 
                          ? 'bg-coral-50 border-coral-400 text-coral-950 font-semibold ring-1 ring-coral-300 shadow-inner'
                          : 'bg-cream/20 border-slate-200 hover:border-coral-200 text-charcoal-700'
                      }`}
                    >
                      <span className="text-base shrink-0">{period.icon}</span>
                      <span className="leading-tight">{period.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* First time patient */}
            <div className="space-y-2 pt-2">
              <span className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider font-mono">
                É sua primeira consulta com psicóloga?
              </span>
              <div className="flex gap-4">
                <label className="inline-flex items-center gap-2 text-xs font-medium text-charcoal-700 cursor-pointer">
                  <input
                    type="radio"
                    name="isFirstTime"
                    checked={isFirstTime === true}
                    onChange={() => setIsFirstTime(true)}
                    className="accent-coral-600 w-4 h-4"
                  />
                  Sim, será meu primeiro contato
                </label>
                <label className="inline-flex items-center gap-2 text-xs font-medium text-charcoal-700 cursor-pointer">
                  <input
                    type="radio"
                    name="isFirstTime"
                    checked={isFirstTime === false}
                    onChange={() => setIsFirstTime(false)}
                    className="accent-coral-600 w-4 h-4"
                  />
                  Não, já fiz psicoterapia antes
                </label>
              </div>
            </div>

            {/* Custom note Textarea */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider font-mono">
                Mensagem Opcional ou Anotações
              </label>
              <textarea
                id="booking-notes"
                placeholder="Ex: Tenho preferência por teleconsulta, sou tentante ou gestante de X semanas..."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full h-20 px-4 py-3 bg-cream/30 border border-slate-200 rounded-xl text-xs focus:border-coral-400 focus:outline-hidden transition-colors resize-none"
              />
            </div>

          </form>
        </div>

        {/* Live Message Preview and WhatsApp Action (5 columns) */}
        <div className="lg:col-span-5 bg-cream/40 p-6 md:p-10 flex flex-col justify-between space-y-8 text-left relative">
          
          {/* Top Info Cards */}
          <div className="space-y-5">
            <h4 className="font-serif text-lg font-semibold text-charcoal-900 border-b border-coral-200/50 pb-3">
              Informações importantes
            </h4>

            <div className="space-y-4 text-xs text-charcoal-700">
              <div className="flex gap-3">
                <Video size={18} className="text-coral-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-coral-950">Atendimento Online:</span>
                  Para todo o país através de chamada de vídeo. Ambiente seguro e sigiloso.
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-coral-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-coral-950">Atendimento Presencial:</span>
                  No Espaço Terapêutico UNOA, localizado no Jardim Vera Cruz em Sorocaba/SP. Ambiente acolhedor e aconchegante.
                </div>
              </div>

              <div className="p-3 bg-coral-100/50 border border-coral-200/30 rounded-xl leading-relaxed text-[11px] text-coral-900 font-medium space-y-1">
                <p>• <strong>Não atendo convênios!</strong> (Particular)</p>
                <p>• <strong>Gestantes podem iniciar em qualquer fase!</strong></p>
              </div>
            </div>

            {/* Interactive Live Preview Box */}
            <div className="pt-4 space-y-2">
              <span className="block text-[10px] uppercase font-bold text-coral-800 font-mono tracking-wide">
                Visualização do envio (WhatsApp)
              </span>
              
              <div className="bg-white p-4 rounded-xl border border-coral-200/30 font-sans shadow-sm text-xs leading-relaxed text-charcoal-700 max-h-56 overflow-y-auto whitespace-pre-line relative">
                {/* Simulated sender speech bubble design */}
                <div className="absolute top-0 right-0 bg-emerald-100 text-[10px] uppercase font-mono px-2 py-0.5 rounded-bl-lg text-emerald-800 font-semibold">
                  Pre-via
                </div>
                {shareText}
              </div>
            </div>
          </div>

          {/* Bottom WhatsApp CTA button */}
          <div className="space-y-4 pt-4">
            <a
              id="confirm-booking-whatsapp"
              href={whatsappUrl}
              onClick={handleConversion}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/10 active:scale-98 text-white font-medium text-sm rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Send size={16} />
              Enviar Reserva via WhatsApp Seguro
            </a>
            
            <p className="text-[10px] text-center text-charcoal-500 leading-normal">
              Ao clicar, você será redirecionada(o) com segurança ao aplicativo oficial do WhatsApp contendo o texto acima formatado.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
