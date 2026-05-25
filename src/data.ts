import { ServiceItem, EPDSQuestion, FAQItem } from './types';

export const therapistInfo = {
  name: "Flávia Elizabeth Oliva de Morais",
  title: "Psicóloga Perinatal",
  crp: "06/69852",
  slogan: "Cuidando de quem cuida",
  ctaText: "Oferecendo apoio emocional humanizado e especializado na gestação, parto e pós-parto.",
  aboutText: "Seja bem vindo(a), me chamo Flávia Elizabeth Oliva de Morais. Sou Psicóloga Perinatal (CRP: 06/69852), formada pela UNIP, especializada em \"Psicologia Perinatal e da Parentalidade\", oferecendo acolhimento emocional para mulheres durante a gestação, puerpério e maternidade.",
  aboutLong: "A transição para a maternidade envolve não apenas alegrias, mas também intensas transformações biológicas, psicológicas e sociais na vida de uma mulher. Meu trabalho é oferecer suporte especializado, ético e empático, criando um ambiente seguro e acolhedor para que as dores, as transformações da maternidade, medos e angústias sejam compartilhados e transformados em força, saúde mental e vínculos familiares seguros.",
  whatsappNumber: "5515988096168", 
  phone: "(15) 98809-6168",
  email: "flaviaoliva.psicologa@gmail.com",
  location: "Sorocaba/SP",
  consultationDetails: {
    format: "Atendimento Online para todo o país por chamada de vídeo. Atendimento Presencial no Espaço Terapêutico UNOA, no Jardim Vera Cruz em Sorocaba/SP.",
    approach: "Psicoterapia com base científica, particular (não atendo convênios). Gestantes podem iniciar em qualquer fase!",
    duration: "Sessões individuais com foco em acolhimento emocional na gestação, puerpério e maternidade."
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: "prenatal-psicologico",
    title: "Pré-Natal Psicológico (PNP)",
    shortDescription: "Preparando e acolhendo o emocional dos pais durante a gestação.",
    fullDescription: "Desenvolvimento preventivo focado em preparar psicologicamente a mulher e o parceiro/parceira para a transição da maternidade e paternidade. Trabalhamos medos do parto, expectativas da maternidade real, amamentação, as dores do puerpério e as mudanças de identidade, prevenindo transtornos de humor e fortalecendo a rede de apoio.",
    benefits: [
      "Espaço seguro para falar de medos, angústias e expectativas",
      "Prevenção ativa da depressão e ansiedade pós-parto",
      "Fortalecimento da comunicação do casal e divisão de papéis",
      "Construção de planos realistas para o puerpério e rede de apoio"
    ],
    iconName: "Baby"
  },
  {
    id: "transtornos-humor",
    title: "Tratamento de Transtornos de Humor Perinatais",
    shortDescription: "Apoio clínico especializado em ansiedade, depressão e psicose puerperal.",
    fullDescription: "O puerpério e a gravidez envolvem oscilações hormonais severas e grande sobrecarga mental. Ofereço intervenção psicoterapêutica delicada e baseada em evidências para sintomas e transtornos como a depressão gestacional e pós-parto, transtornos de ansiedade generalizada (TAG), TOC perinatal e psicose puerperal, integrando acolhimento, cuidados médicos e proteção ao bebê.",
    benefits: [
      "Diagnóstico precoce e desmistificação do sofrimento mental materno",
      "Redução da culpa e dos sentimentos de inadequação materna",
      "Recuperação assistida da qualidade de vida e sono da mãe",
      "Acompanhamento interdisciplinar coordenado com psiquiatras e obstetras"
    ],
    iconName: "BrainActivity" // standard Brain
  },
  {
    id: "infertilidade",
    title: "Apoio Psicológico na Infertilidade",
    shortDescription: "Acolhimento empático e suporte durante tratamentos de reprodução assistida.",
    fullDescription: "A jornada para engravidar pode ser repleta de perdas invisíveis, ansiedade severa e desgaste na relação conjugal. O suporte psicológico na infertilidade acompanha casais e tentantes em cada etapa da reprodução assistida, acolhendo o desgaste dos procedimentos médicos, lidando com os ciclos de esperança e frustração e auxiliando na tomada de decisões importantes.",
    benefits: [
      "Manejo do estresse crônico associado aos ciclos de tratamento",
      "Acolhimento para o luto associado a tentativas sem sucesso",
      "Suporte emocional para tomadas de decisão difíceis",
      "Fortalecimento da união do casal durante o estresse do processo"
    ],
    iconName: "Flower"
  },
  {
    id: "luto-perinatal",
    title: "Acolhimento no Luto Perinatal",
    shortDescription: "Suporte especializado para passar pelo sofrimento da perda gestacional ou neonatal.",
    fullDescription: "A perda de um bebê, seja no início da gestação, no parto ou logo após, gera uma dor profunda que frequentemente é silenciada ou minimizada pela sociedade. O acolhimento no luto perinatal oferece um espaço digno, respeitoso e amoroso para chorar a perda, validar a existência desse filho na história familiar e elaborar o luto de forma saudável.",
    benefits: [
      "Validação social e emocional da parentalidade interrompida",
      "Prevenção e tratamento do luto complicado ou patológico",
      "Suporte em gestações subsequentes após uma perda perinatal",
      "Ajuda para os parceiros e rede de apoio processarem a perda juntos"
    ],
    iconName: "HeartCrack"
  },
  {
    id: "vinculo",
    title: "Fortalecimento de Vínculo Mãe, Pai e Bebê",
    shortDescription: "Fomento ao apego seguro e comunicação inicial no início da vida.",
    fullDescription: "Auxílio clínico direcionado a construir e fortalecer o laço afetivo inicial e a comunicação entre pais e bebê. Indicado quando a gestante ou puérpera sente dificuldade de conexão, rejeição involuntária ou distanciamento afetivo, ajudando a compreender os sinais sômitos e emocionais do bebê, promovendo o apego e a segurança emocional familiar.",
    benefits: [
      "Leitura sensível dos sinais comunicativos do bebê",
      "Estímulo ao apego seguro e ao aleitamento sem culpa",
      "Redução da ansiedade ligada aos cuidados diários com o recém-nascido",
      "Prevenção de problemas futuros de desenvolvimento e apego infantil"
    ],
    iconName: "Sparkles"
  },
  {
    id: "gestacao-risco",
    title: "Manejo de Gestação de Risco",
    shortDescription: "Apoio e contenção emocional na iminência de partos prematuros ou condições clínicas complexas.",
    fullDescription: "Diagnósticos médicos desafiadores, repouso absoluto prolongado ou risco à saúde da mãe ou do bebê impõem uma carga psicológica altíssima. Esse serviço oferece intervenção de suporte para diminuir o pânico, regular o sistema nervoso, criar resiliência mental e preparar a família para as incertezas de tratamentos intensivos ou partos antecipados.",
    benefits: [
      "Técnicas de relaxamento mental e regulação de ansiedade severa",
      "Apoio para lidar com o isolamento do repouso prolongado",
      "Preparação emocional realista para cenários de UTI neonatal",
      "Preservação do bem-estar mental materno com impacto direto na estabilidade gestacional"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "adaptacao-maternidade",
    title: "Adaptação à Maternidade e Planejamento Familiar",
    shortDescription: "Facilitando a reestruturação da rotina, carreira e identidade feminina no pós-parto.",
    fullDescription: "A chegada de um filho reorganiza por completo a vida da mulher. Auxilio na ressignificação da carreira, na negociação das demandas com o parceiro ou parceira, nas dinâmicas corporativas, no retorno ao trabalho pós-licença e no gerenciamento das pressões sociais sobre a 'mãe perfeita'. Um espaço para planejar, estruturar e viver a maternidade de forma singular, real e autossuficiente.",
    benefits: [
      "Ressignificação da carreira e conciliação de papéis de mãe e profissional",
      "Combate ao esgotamento físico e mental (Burnout Materno)",
      "Exercício da auto-compaixão contra a cobrança social de perfeição",
      "Fortalecimento da autonomia e auto-estima da mulher"
    ],
    iconName: "Compass"
  }
];

export const epdsQuestions: EPDSQuestion[] = [
  {
    id: 1,
    questionText: "Eu tenho sido capaz de rir e ver o lado divertido das coisas:",
    options: [
      { text: "Tanto quanto antes", score: 0 },
      { text: "Não tanto agora", score: 1 },
      { text: "Definitivamente não tanto agora", score: 2 },
      { text: "De jeito nenhum", score: 3 }
    ],
    tip: "Esta questão avalia a capacidade de sentir prazer e leveza no cotidiano."
  },
  {
    id: 2,
    questionText: "Eu tenho olhado o futuro com otimismo:",
    options: [
      { text: "Tanto quanto antes", score: 0 },
      { text: "Menos do que eu costumava fazer", score: 1 },
      { text: "Definitivamente menos do que eu costumava fazer", score: 2 },
      { text: "Praticamente de jeito nenhum", score: 3 }
    ],
    tip: "Reflete sobre a esperança e o ânimo em relação aos próximos dias ou semanas."
  },
  {
    id: 3,
    questionText: "Eu tenho me culpado desnecessariamente quando as coisas dão errado:",
    options: [
      { text: "Sim, na maioria das vezes", score: 3 },
      { text: "Sim, algumas vezes", score: 2 },
      { text: "Não muito frequentemente", score: 1 },
      { text: "Não, nunca", score: 0 }
    ],
    tip: "Sentimentos de culpa exagerada ou inadequada são muito frequentes no sofrimento perinatal."
  },
  {
    id: 4,
    questionText: "Eu tenho me sentido ansiosa ou preocupada sem uma boa razão:",
    options: [
      { text: "Não, de jeito nenhum", score: 0 },
      { text: "Quase nunca", score: 1 },
      { text: "Sim, algumas vezes", score: 2 },
      { text: "Sim, muito frequentemente", score: 3 }
    ],
    tip: "Preocupações excessivas que parecem desproporcionais ou difíceis de controlar."
  },
  {
    id: 5,
    questionText: "Eu tenho me sentido assustada ou em pânico sem um bom motivo:",
    options: [
      { text: "Sim, bastante", score: 3 },
      { text: "Sim, algumas vezes", score: 2 },
      { text: "Não, não muito", score: 1 },
      { text: "Não, de jeito nenhum", score: 0 }
    ],
    tip: "Mede episódios agudos de angústia ou de reações de pânico físico e mental."
  },
  {
    id: 6,
    questionText: "As coisas têm se acumulado sobre mim e eu sinto que não dou conta:",
    options: [
      { text: "Sim, na maioria das vezes não consigo lidar com as coisas de jeito nenhum", score: 3 },
      { text: "Sim, às vezes não tenho lidado com as coisas tão bem quanto antes", score: 2 },
      { text: "Não, na maioria das vezes tenho lidado bem com as coisas", score: 1 },
      { text: "Não, tenho lidado com as coisas tão bem quanto antes", score: 0 }
    ],
    tip: "Avalia a sensação de sobrecarga e a percepção de recursos emocionais de enfrentamento."
  },
  {
    id: 7,
    questionText: "Eu tenho me sentido tão infeliz que tenho tido dificuldade para dormir:",
    options: [
      { text: "Sim, na maioria das vezes", score: 3 },
      { text: "Sim, às vezes", score: 2 },
      { text: "Não muito frequentemente", score: 1 },
      { text: "Não, de jeito nenhum", score: 0 }
    ],
    tip: "Refere-se à insônia causada por tristeza ou preocupação, e não pelo choro do bebê."
  },
  {
    id: 8,
    questionText: "Eu tenho me sentido triste ou miserável (muito desanimada):",
    options: [
      { text: "Sim, na maioria das vezes", score: 3 },
      { text: "Sim, bastante frequentemente", score: 2 },
      { text: "Não muito frequentemente", score: 1 },
      { text: "Não, de jeito nenhum", score: 0 }
    ],
    tip: "Explora o afeto deprimido prolongado, desânimo ou melancolia profunda."
  },
  {
    id: 9,
    questionText: "Eu tenho me sentido tão infeliz que tenho chorado:",
    options: [
      { text: "Sim, na maioria das vezes", score: 3 },
      { text: "Sim, bastante frequentemente", score: 2 },
      { text: "Só de vez em quando", score: 1 },
      { text: "Não, de jeito nenhum", score: 0 }
    ],
    tip: "Medição de labilidade emocional significativa ou episódios recorrentes de choro compulsivo."
  },
  {
    id: 10,
    questionText: "O pensamento de machucar a mim mesma já passou pela minha cabeça:",
    options: [
      { text: "Sim, bastante frequentemente", score: 3 },
      { text: "Às vezes", score: 2 },
      { text: "Quase nunca", score: 1 },
      { text: "Nunca", score: 0 }
    ],
    tip: "ATENÇÃO: Avalia pensamentos de autoagressão. Qualquer resposta diferente de 'Nunca' merece escuta profissional."
  }
];

export const faqData: FAQItem[] = [
  {
    id: "o-que-e-perinatal",
    question: "O que é Psicologia Perinatal?",
    answer: "É uma especialidade da psicologia dedicada a estudar, prevenir, diagnosticar e tratar os processos biológicos e emocionais da transição de vida em torno de uma nova gestação. Abrange as fases de planejamento familiar, tratamentos de fertilidade, gestação, parto, aborto e o pós-parto (puerpério) até os primeiros anos de vida do bebê. O psicólogo atua acolhendo as transformações psíquicas dessa fase de crise vital positiva e desafiadora."
  },
  {
    id: "pnp-importancia",
    question: "Por que fazer o Pré-Natal Psicológico (PNP)?",
    answer: "O Pré-Natal Psicológico é um formato de intervenção psicoterapêutica preventiva e educativa. Embora a saúde física da gestante seja monitorada com rigor pelo obstetra, as transformações mentais e os medos sobre o parto, puerpério e novos papéis frequentemente são negligenciados. O PNP permite dialogar livremente sobre medos reais, negociar dinâmicas com o parceiro ou parceira, elaborar fantasias, reduzir significativamente o estresse gestacional e prevenir o surgimento de depressão e ansiedade graves pós-parto, melhorando a transição do casal."
  },
  {
    id: "blues-vs-depressao",
    question: "Qual a diferença entre 'Baby Blues' e Depressão Pós-Parto?",
    answer: "O 'Baby Blues' (ou disforia puerperal) é um quadro transitório e fisiológico de instabilidade emocional benigna que afeta até 80% das puérperas logo nos primeiros dias após o parto (do 3º ao 15º dia), causado pela queda abrupta dos hormônios gestacionais somada à privação de sono e exaustão física. Apresenta melancolia leve, choro fácil e irritabilidade, mas melhora espontaneamente. Já a Depressão Pós-Parto (DPP) é um transtorno de humor grave que pode surgir a qualquer momento no primeiro ano do bebê, caracterizada por sentimentos profundos de incapacidade, apatia de si e com o bebê, choro frequente, extrema culpa, pânico ou irritabilidade crônica que não melhoram com o tempo. A DPP exige tratamento especializado com psicoterapia e muitas vezes suporte farmacológico seguro para a amamentação."
  },
  {
    id: "luto-perinatal-como-ajudar",
    question: "Por que a terapia é importante após uma perda gestacional ou neonatal?",
    answer: "O luto perinatal é considerado um luto 'desautorizado' ou 'invisibilizado' pela sociedade. Comentários bem-intencionados como 'logo você engravida de novo' ou 'Deus quis assim' bloqueiam e invalidam a dor dos pais, que perderam não só um bebê, mas todos os sonhos e investimentos psíquicos projetados nele. A psicoterapia oferece um porto seguro para legitimar a perda, compreender que o sofrimento é proporcional ao amor, e guiar a elaboração da dor sem que o casal caia em culpa patológica ou sinta vergonha de sofrer."
  },
  {
    id: "homens-sofrem",
    question: "Os parceiros e pais também precisam ou podem receber esse apoio?",
    answer: "Com certeza. Pesquisas científicas demonstram que cerca de 10% dos pais/parceiros desenvolvem quadros de depressão paterna no primeiro ano de vida do bebê. Embora eles não passem pela alteração hormonal direta da gestação, vivenciam o choque de responsabilidade financeira, a exclusão temporária da atenção primária, cansaço brutal, mudanças na relação amorosa do casal e suas próprias idealizações. O fortalecimento do vínculo paterno e a estruturação de um espaço no pré-natal psicológico para parceiros são de extrema importância para a saúde mental coletiva do ecossistema familiar."
  }
];
