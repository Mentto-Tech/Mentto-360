export default function Features() {
    return (
        <section className="py-20 px-6 bg-surface-light">
            <div className="container mx-auto text-center">
                <h3 className="text-4xl font-bold text-text-light mb-12">Para empresas que...</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-background-light p-8 rounded-2xl shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
                        <h4 className="text-xl font-bold text-[#103c54] mb-4">Precisam (re)definir um plano estratégico</h4>
                        <p className="text-subtext-light">Para empresas que buscam um plano que funcione de verdade no dia a dia.</p>
                    </div>
                    <div className="bg-background-light p-8 rounded-2xl shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
                        <h4 className="text-xl font-bold text-[#103c54] mb-4">Querem transformar ideias em ações</h4>
                        <p className="text-subtext-light">Ideal para quem quer organizar e priorizar iniciativas de forma eficiente.</p>
                    </div>
                    <div className="bg-background-light p-8 rounded-2xl shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
                        <h4 className="text-xl font-bold text-[#103c54] mb-4">Valorizam decisões baseadas em dados</h4>
                        <p className="text-subtext-light">Para líderes que utilizam fatos, indicadores e métricas para guiar o crescimento.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
