export default function NotRecommended() {
    return (
        <section className="py-12 px-6 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-primary p-4">
                        <h4 className="text-xl font-bold text-white">NÃO recomendado para...</h4>
                    </div>
                    <ul className="p-6 md:p-8 space-y-4">
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold text-xl mr-3 mt-1">✕</span>
                            <span className="text-subtext-light dark:text-subtext-dark">Para quem gosta de planos longos, cheios de rotas e planilhas que nunca saem do papel</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold text-xl mr-3 mt-1">✕</span>
                            <span className="text-subtext-light dark:text-subtext-dark">Para quem prefere gerenciar na intuição e não com fatos e dados</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold text-xl mr-3 mt-1">✕</span>
                            <span className="text-subtext-light dark:text-subtext-dark">Para quem procrastina e evita mudanças</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold text-xl mr-3 mt-1">✕</span>
                            <span className="text-subtext-light dark:text-subtext-dark">Para quem não deseja trabalhar com metas, indicadores e responsabilidade</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 font-bold text-xl mr-3 mt-1">✕</span>
                            <span className="text-subtext-light dark:text-subtext-dark">Para quem busca fórmulas prontas, modelos engessados ou uma abordagem sem participação ativa</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
