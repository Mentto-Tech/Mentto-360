export default function Hero() {
    return (
        <section className="bg-[#103c54] text-white text-center py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                    Estratégia e Inovação que Geram Resultados
                </h2>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    Uma mentoria <span className="text-primary font-semibold">prática e personalizada</span> para empresas que querem sair do
                    planejamento teórico e construir um plano estratégico moderno, inovador e <span className="text-primary font-semibold">pronto para rodar.</span>
                </p>
                <a
                    className="mt-10 inline-block bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition-opacity"
                    href="#inscricao"
                >
                    Garantir minha vaga
                </a>
            </div>
        </section>
    );
}
