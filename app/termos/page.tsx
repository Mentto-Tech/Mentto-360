import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermosPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 md:py-20 max-w-4xl">
                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
                        MENTORIA IMPACTO360 - TERMO DE RESERVA DE VAGA
                    </h1>

                    <div className="space-y-8 text-text-light dark:text-text-dark leading-relaxed">

                        <section className="bg-white dark:bg-background-dark p-6 rounded-lg border-l-4 border-primary shadow-sm">
                            <p className="font-semibold"><strong>Programa:</strong> Mentoria Impacto360 – Estratégia e Inovação que Geram Resultados</p>
                            <p className="font-semibold"><strong>Realização:</strong> ASSERTI / PLAN360 – Programa SP Produz</p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">1. Objeto</h2>
                            <p className="text-subtext-light dark:text-subtext-dark">
                                O presente termo tem por objeto a reserva de vaga para participação da empresa acima identificada na Mentoria Impacto360, programa prático de planejamento estratégico, inovação e execução, com duração de 5 semanas, conforme cronograma, conteúdos e métodos descritos no material oficial da mentoria impacto360.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">2. Sobre a Mentoria</h2>
                            <p className="mb-4 text-subtext-light dark:text-subtext-dark">
                                A Mentoria Impacto360 é um programa gratuito para empresas selecionadas pelo PLAN360, com 20 horas de encontros, incluindo:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary text-subtext-light dark:text-subtext-dark">
                                <li>Definição de Propósito, Visão e Valores</li>
                                <li>Diagnóstico estratégico e definição de prioridades</li>
                                <li>Estruturação de eixos, intenções e oportunidades estratégicas</li>
                                <li>Seleção e priorização de inovação</li>
                                <li>Construção de OKRs e indicadores</li>
                                <li>Execução estratégica com métodos ágeis (Kanban, Scrum)</li>
                                <li>
                                    Aplicação guiada de metodologias modernas: Design Thinking, Lean Inception, Design Sprint, Business Model Canvas, entre outras
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">3. Condições da Reserva</h2>
                            <p className="mb-4 text-subtext-light dark:text-subtext-dark">Ao firmar este Termo de Reserva, a empresa:</p>
                            <ol className="list-decimal pl-6 space-y-3 marker:font-bold marker:text-text-light dark:marker:text-text-dark text-subtext-light dark:text-subtext-dark">
                                <li>Confirma o interesse em participar da Mentoria Impacto360.</li>
                                <li>Declara estar ciente de que as vagas são limitadas (25 vagas).</li>
                                <li>Compromete-se a participar ativamente dos encontros e atividades propostas.</li>
                                <li>
                                    Reconhece que a reserva não garante participação final se:
                                    <ul className="list-disc pl-6 mt-2 space-y-1 marker:text-subtext-light dark:marker:text-subtext-dark">
                                        <li>Não houver aderência ao perfil do PLAN360;</li>
                                        <li>A empresa não cumprir os critérios mínimos de participação;</li>
                                        <li>Houver desistência, ausência recorrente ou falta de engajamento.</li>
                                    </ul>
                                </li>
                                <li>Concorda que a vaga somente será consolidada após confirmação formal da ASSERTI/PLAN360.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">4. Gratuidade</h2>
                            <p className="text-subtext-light dark:text-subtext-dark">
                                Este programa é totalmente gratuito para empresas selecionadas no PLAN360, com valor integral subsidiado via ASSERTI e SP Produz, conforme informado no material oficial.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">5. Compromissos da Empresa</h2>
                            <p className="mb-4 text-subtext-light dark:text-subtext-dark">A empresa participante compromete-se a:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary text-subtext-light dark:text-subtext-dark">
                                <li>Disponibilizar representantes para todos os encontros (online ou presenciais).</li>
                                <li>Cumprir atividades, exercícios e práticas propostas durante a mentoria.</li>
                                <li>Fornecer informações verdadeiras para o diagnóstico estratégico.</li>
                                <li>Zelar pelo bom aproveitamento da oportunidade disponibilizada gratuitamente.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">6. Compromissos da Realização</h2>
                            <p className="mb-4 text-subtext-light dark:text-subtext-dark">A ASSERTI/PLAN360 compromete-se a:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary text-subtext-light dark:text-subtext-dark">
                                <li>Entregar a mentoria conforme escopo descrito no documento Impacto360;</li>
                                <li>Garantir a aplicação das metodologias anunciadas;</li>
                                <li>Disponibilizar os materiais necessários;</li>
                                <li>Conduzir o processo de seleção de forma transparente.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-text-light dark:text-text-dark">7. Vigência</h2>
                            <p className="text-subtext-light dark:text-subtext-dark">
                                O presente termo produz efeitos a partir da assinatura e segue vigente até a conclusão do processo de seleção e confirmação da vaga.
                            </p>
                        </section>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
