export default function Depoimentos() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-coral-600">
            Depoimentos
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Histórias de acolhimento, cuidado e transformação
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Cada mulher vive sua maternidade de uma forma única. Conheça relatos
            de pacientes que encontraram apoio emocional durante a gestação,
            puerpério e outros momentos importantes da vida.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Depoimento 1 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-orange-100/50 border border-orange-100">
            <div className="mb-6 flex text-coral-600 text-xl">★★★★★</div>

            <p className="text-gray-700 leading-relaxed">
              "Os atendimentos com a Flávia fizeram muita, mas muita diferença
              mesmo no meu puerpério. Foram períodos difíceis que, com a ajuda e
              acompanhamento dela, foram ficando mais fáceis e tranquilos de
              passar.
              <br />
              <br />
              Hoje vejo a importância e a diferença que faz ter uma profissional
              capacitada e especialista ao meu lado para me ouvir e me acolher
              quando necessário.
              <br />
              <br />
              Agradeço de coração por poder ter a Flávia me acompanhando. Me
              sinto em um ambiente seguro, onde sei que posso falar e ser
              ouvida."
            </p>

            <div className="mt-8 pt-6 border-t border-orange-100">
              <h4 className="font-semibold text-gray-900">Maisa</h4>
              <p className="text-sm text-coral-600">Paciente</p>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-orange-100/50 border border-orange-100">
            <div className="mb-6 flex text-coral-600 text-xl">★★★★★</div>

            <p className="text-gray-700 leading-relaxed">
              "Comecei o acompanhamento durante a gravidez, em um momento de
              muitas inseguranças e ansiedade. A Flávia me ajudou a compreender
              meus sentimentos sem julgamentos e me deu ferramentas para viver
              essa fase com mais tranquilidade.
              <br />
              <br />
              Em cada consulta me senti acolhida e respeitada. Foi um suporte
              fundamental para que eu pudesse vivenciar a maternidade com mais
              confiança e leveza."
            </p>

            <div className="mt-8 pt-6 border-t border-orange-100">
              <h4 className="font-semibold text-gray-900">Carolina</h4>
              <p className="text-sm text-coral-600">Paciente</p>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-orange-100/50 border border-orange-100">
            <div className="mb-6 flex text-coral-600 text-xl">★★★★★</div>

            <p className="text-gray-700 leading-relaxed">
              "Encontrar a Flávia foi um divisor de águas para mim. Eu estava me
              sentindo sobrecarregada emocionalmente e sem saber como lidar com
              tantas mudanças que a maternidade trouxe.
              <br />
              <br />
              Desde o primeiro atendimento senti confiança e acolhimento. Aos
              poucos fui aprendendo a olhar para mim com mais carinho e a
              enfrentar os desafios com mais segurança.
              <br />
              <br />
              Sou muito grata por todo o cuidado e atenção que recebi durante
              esse processo."
            </p>

            <div className="mt-8 pt-6 border-t border-orange-100">
              <h4 className="font-semibold text-gray-900">Juliana</h4>
              <p className="text-sm text-coral-600">Paciente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
