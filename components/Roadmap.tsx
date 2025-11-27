export default function Roadmap() {
    return (
        <section className="py-20 px-6 bg-surface-light">
            <div className="container mx-auto text-center max-w-4xl">
                <p className="text-primary font-semibold tracking-widest mb-2">O CAMINHO DA EXECUÇÃO</p>
                <h3 className="text-4xl font-bold text-text-light">5 semanas para transformar <br /> <span className="text-primary">estratégia em execução</span></h3>
                <div className="mt-16 relative max-w-3xl mx-auto w-fit">
                    {/* Vertical Line */}
                    <div className="absolute left-[1.25rem] transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -z-10"></div>

                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-surface-light flex-shrink-0">1</div>
                            <h4 className="font-bold text-lg text-text-light text-left">Direção Estratégica</h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-surface-light flex-shrink-0">2</div>
                            <h4 className="font-bold text-lg text-text-light text-left">Diagnóstico Estratégico</h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-surface-light flex-shrink-0">3</div>
                            <h4 className="font-bold text-lg text-text-light text-left">Inovação Estratégica</h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-surface-light flex-shrink-0">4</div>
                            <h4 className="font-bold text-lg text-text-light text-left">Indicadores Estratégicos em Ação</h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-surface-light flex-shrink-0">5</div>
                            <h4 className="font-bold text-lg text-text-light text-left">Execução Ágil do Plano</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
