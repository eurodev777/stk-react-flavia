import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  RotateCcw, 
  AlertCircle, 
  CheckCircle2, 
  HeartHandshake, 
  Send 
} from 'lucide-react';
import { epdsQuestions, therapistInfo } from '../data';
import { TestResult } from '../types';

export default function EPDSTest() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = intro, 1-10 = questions, 11 = result
  const [answers, setAnswers] = useState<Record<number, number>>({}); // question index -> chosen score

  const isIntro = currentStep === 0;
  const isResult = currentStep === epdsQuestions.length + 1;
  const questionIndex = currentStep - 1;
  const currentQuestion = epdsQuestions[questionIndex];

  const handleSelectOption = (score: number) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: score
    });
    
    // Auto advance with tiny delay for feedback
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleNext = () => {
    if (currentStep < epdsQuestions.length + 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = (): TestResult => {
    const score = epdsQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);

    // Check Question 10 (id === 10)
    const q10Score = answers[10] || 0;
    const hasRiskOfSelfHarm = q10Score > 0;

    let riskLevel: 'low' | 'moderate' | 'high' = 'low';
    let title = "Bem-estar Emocional Estável";
    let explanation = "Seu resultado aponta para sintomas mínimos ou leves de ansiedade ou tristeza nesta fase. É perfeitamente comum vivenciar dias de cansaço ou flutuações de humor devido à rotina de cuidados e cansaço físico.";
    let recommendation = "Continue monitorando seu sono, reserve breves momentos de descanso quando possível e conte com sua rede de apoio. Se em algum momento sentir angústias crescentes, a psicoterapia perinatal é preventiva e pode ser iniciada para fortalecer sua saúde mental.";

    if (score >= 10 && score <= 12) {
      riskLevel = 'moderate';
      title = "Sintomatologia Moderada (Alerta Amarelo)";
      explanation = "Seu resultado sugere a presença de sintomas moderados de sofrimento emocional, ansiedade ou tristeza perinatal (como cansaço extremo, culpa persistente ou angústia frequente). É um momento importante de escuta e atenção.";
      recommendation = "Recomendamos que você divida essas sensações com pessoas de confiança e com seu parceiro/parceira. Não guarde para si: buscar um acompanhamento profissional preventivo ajudará a organizar essas emoções e evitar que progridam para um quadro de depressão severa.";
    } else if (score >= 13) {
      riskLevel = 'high';
      title = "Indicação de Sofrimento Elevado (Alerta Clínico)";
      explanation = "Seu resultado indica que você tem enfrentado um nível considerável de sofrimento emocional, com sentimentos frequentes de tristeza, desamparo, culpa ou sobrecarga severa. Esse sofrimento é real, biológico e psicológico, e você NÃO precisa passar por isso sozinha.";
      recommendation = "É de extrema importância buscar uma avaliação diagnóstica de uma psicóloga especialista. A gravidez e o pós-parto envolvem alterações hormonais e psíquicas profundas que necessitam de intervenção segura e acolhimento clínico especializado. A depressão pós-parto tem tratamento eficaz e restabelecerá seu bem-estar.";
    }

    if (hasRiskOfSelfHarm) {
      recommendation = "Atenção Prioritária: Como você sinalizou que pensamentos de se machucar ou ideias de autoagressão passaram pela sua mente (Questão 10), recomendamos de forma imediata e urgente uma conversa de acolhimento. A psicoterapia de suporte especializada é o seu espaço seguro para falar desses pensamentos sem julgamento. Busque apoio profissional agora mesmo. Você não está sozinha.";
    }

    return {
      score,
      riskLevel,
      title,
      explanation,
      recommendation,
      hasRiskOfSelfHarm
    };
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  const result = isResult ? calculateResult() : null;

  // Generate WhatsApp message with results
  const getWhatsAppShareUrl = () => {
    if (!result) return "";
    const baseText = `Olá, Flávia! Fiz a autoavaliação da Escala de Depressão Pós-Natal de Edimburgo (EPDS) em seu site.
    
*Resultado:*
- Score Total: *${result.score}/30*
- Classificação: *${result.title}*
- Alerta de Pensamentos Intrusivos: *${result.hasRiskOfSelfHarm ? "Sim (Sinalizado na Questão 10)" : "Não"}*

Gostaria de agendar uma consulta com você para conversar e receber esse acolhimento especializado.`;
    
    return `https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(baseText)}`;
  };

  // Progress metrics
  const progressPercent = Math.round((Object.keys(answers).length / epdsQuestions.length) * 100);

  return (
    <div id="epds-assessment" className="w-full bg-cream p-1 rounded-3xl border border-coral-200/50 shadow-sm relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-peach-100 rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-clay-100 rounded-full filter blur-3xl opacity-30 -ml-20 -mb-20 pointer-events-none" />

      <div className="p-6 md:p-10 relative z-10">
        
        {/* Intro view */}
        {isIntro && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral-100/60 text-coral-800 text-xs font-medium mb-4">
              <Info size={14} className="text-coral-600" />
              <span>Escala de Edimburgo (EPDS)</span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal-900 tracking-tight mb-4">
              Autoavaliação da Saúde Mental Materna
            </h3>
            
            <p className="font-sans text-charcoal-700 leading-relaxed text-base md:text-lg mb-6">
              A gravidez e o pós-parto são momentos de profundas transformações e sobrecarga emocional. 
              Esta escala cientificamente validada (EPDS) ajuda mulheres a monitorar a ansiedade, a tristeza 
              e os sentimentos de cansaço acumulado nas últimas semanas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left my-8">
              <div className="bg-white p-4 rounded-2xl border border-coral-100/50 shadow-xs">
                <div className="text-coral-600 font-semibold text-lg mb-1">10 Perguntas</div>
                <div className="text-xs text-charcoal-600">Simples, intuitivas e rápidas de responder (menos de 3 minutos).</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-coral-100/50 shadow-xs">
                <div className="text-coral-600 font-semibold text-lg mb-1">100% Anônimo</div>
                <div className="text-xs text-charcoal-600">Nenhum dado pessoal seu é coletado no nosso servidor. Fica só em seu navegador.</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-coral-100/50 shadow-xs">
                <div className="text-coral-600 font-semibold text-lg mb-1">Suporte Prático</div>
                <div className="text-xs text-charcoal-600">Opção de compartilhar o resultado via WhatsApp seguro para acolhimento com a Flávia.</div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-left text-xs text-amber-900 leading-relaxed mb-8 flex gap-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Aviso Importante:</span> Esta triagem digital serve como um indicador informativo de conscientização e autocuidado. Ela <span className="font-semibold underline">não substitui</span> um diagnóstico médico ou clínico realizado por profissionais especializados de saúde ou psicologia.
              </div>
            </div>

            <button
              id="start-epds-btn"
              onClick={() => setCurrentStep(1)}
              className="px-8 py-4 bg-coral-600 hover:bg-coral-700 text-white font-medium rounded-2xl cursor-pointer transition-all hover:shadow-lg hover:shadow-coral-600/20 active:scale-98"
            >
              Iniciar Autoavaliação Gratuita
            </button>
          </motion.div>
        )}

        {/* Question views */}
        {currentStep > 0 && currentStep <= epdsQuestions.length && (
          <div className="max-w-2xl mx-auto">
            {/* Header of Active Quiz */}
            <div className="flex justify-between items-center mb-6">
              <button
                id="epds-back-btn"
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-500 hover:text-coral-700 bg-white/80 hover:bg-white border border-charcoal-200/50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <ChevronLeft size={14} />
                Voltar
              </button>
              
              <span className="text-xs font-mono text-charcoal-500 bg-coral-100/40 text-coral-800 font-semibold px-2.5 py-1 rounded-md">
                Questão {currentStep} de {epdsQuestions.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div 
                className="h-full bg-coral-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Questions Container with Slide Fade Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-coral-200/30 shadow-xs"
              >
                <h4 className="font-serif text-lg md:text-xl text-charcoal-900 mb-6 leading-relaxed">
                  {currentQuestion.questionText}
                </h4>

                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = answers[currentQuestion.id] === option.score;
                    return (
                      <button
                        key={index}
                        id={`epds-q${currentQuestion.id}-opt${index}`}
                        onClick={() => handleSelectOption(option.score)}
                        className={`w-full p-4 text-left rounded-xl border text-sm md:text-base transition-all duration-200 cursor-pointer ${
                          isSelected 
                            ? 'bg-coral-50 border-coral-400 text-coral-950 font-medium pl-6 ring-1 ring-coral-300 shadow-inner' 
                            : 'border-slate-200 hover:border-coral-200 hover:bg-coral-50/20 text-charcoal-800'
                        }`}
                      >
                        {option.text}
                      </button>
                    );
                  })}
                </div>

                {/* Helpful Caring Tip */}
                <div className="mt-8 pt-4 border-t border-dashed border-gray-100 flex items-start gap-2 text-xs text-charcoal-500">
                  <Info size={14} className="text-coral-400 shrink-0 mt-0.5" />
                  <p className="italic leading-relaxed">{currentQuestion.tip}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-end gap-2">
              <button
                id="epds-skip-next-btn"
                disabled={answers[currentQuestion.id] === undefined}
                onClick={handleNext}
                className={`py-3 px-5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors ${
                  answers[currentQuestion.id] !== undefined
                    ? 'bg-coral-600 text-white cursor-pointer hover:bg-coral-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === epdsQuestions.length ? 'Visualizar Resultado' : 'Próxima'}
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Results View */}
        {isResult && result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            {/* Success Icon Indicator */}
            <div className="text-center mb-6">
              <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-3 border border-emerald-100 shadow-sm animate-bounce">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900">Autoavaliação Concluída</h3>
              <p className="text-xs text-charcoal-500">Resultado gerado de forma privada e segura</p>
            </div>

            {/* Card Result Information */}
            <div className="bg-white rounded-2xl border border-coral-100 overflow-hidden shadow-xs mb-6">
              {/* Header result accent band */}
              <div className={`p-5 text-white flex justify-between items-center ${
                result.riskLevel === 'high' 
                  ? 'bg-rose-500' 
                  : result.riskLevel === 'moderate' 
                    ? 'bg-amber-500' 
                    : 'bg-emerald-500'
              }`}>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold opacity-90">Classificação da Escala</span>
                  <div className="font-serif text-lg md:text-xl font-bold">{result.title}</div>
                </div>
                
                {/* Score badge */}
                <div className="text-right bg-white/20 px-3.5 py-1.5 rounded-xl">
                  <span className="block text-[10px] uppercase font-bold opacity-80 leading-none">Pontuação</span>
                  <span className="font-mono text-2xl font-bold leading-none">{result.score}</span>
                  <span className="text-xs opacity-80">/30</span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-800 uppercase tracking-wider mb-2">Entendendo seu Momento:</h4>
                  <p className="text-sm md:text-base text-charcoal-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {result.explanation}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-charcoal-800 uppercase tracking-wider mb-2">Orientações e Próximos Passos:</h4>
                  <div className={`p-4 rounded-xl text-sm leading-relaxed border ${
                    result.hasRiskOfSelfHarm || result.riskLevel === 'high'
                      ? 'bg-rose-50 border-rose-200 text-rose-950 font-medium'
                      : result.riskLevel === 'moderate'
                        ? 'bg-amber-50 border-amber-200 text-amber-950'
                        : 'bg-emerald-55/20 border-emerald-200 text-emerald-950'
                  }`}>
                    {result.recommendation}
                  </div>
                </div>
              </div>
            </div>

            {/* Crisis text / priority support */}
            {result.hasRiskOfSelfHarm && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6 text-xs text-red-900 leading-relaxed flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Apoio em Crise Nacional (Brasil):</span> Se você ou alguém que você conhece está passando por um momento de extrema angústia ou pensamentos de autoagressão, saiba que há escuta gratuita e sigilosa 24 horas por dia. Ligue para o <span className="font-bold">CVV (Centro de Valorização da Vida) pelo número 188</span> ou visite o hospital mais próximo. Sua vida é valiosa.
                </div>
              </div>
            )}

            {/* Actions for User */}
            <div className="bg-cream/40 p-5 rounded-2xl border border-coral-200/50 flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left">
              <div>
                <h5 className="font-serif text-charcoal-900 font-semibold mb-1">Como a Flávia pode te apoiar?</h5>
                <p className="text-xs text-charcoal-600 max-w-sm">Você pode agendar um acolhimento por WhatsApp e de forma opcional levar seu resultado impresso ou digital para a primeira sessão.</p>
              </div>

              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 shrink-0">
                <button
                  id="epds-reset-btn"
                  onClick={handleReset}
                  className="px-4 py-3 bg-white hover:bg-gray-50 text-charcoal-700 font-medium rounded-xl border border-charcoal-300/80 text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <RotateCcw size={14} />
                  Refazer Teste
                </button>
                
                <a
                  id="share-epds-whatsapp"
                  href={getWhatsAppShareUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:shadow-lg shadow-emerald-600/10 active:scale-98"
                >
                  <Send size={14} />
                  Falar com Flávia via WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-charcoal-500 leading-relaxed max-w-md mx-auto">
              <p>Referência científica: Cox, J.L., Holden, J.M., and Sagovsky, R. 1987. Detection of postnatal depression: Development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry 150:782-786.</p>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
