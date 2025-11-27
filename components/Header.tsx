import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-[#103c54] dark:bg-[#111827]">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Impacto 360</h1>
                <Link
                    className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    href="#"
                >
                    Contato
                </Link>
            </div>
        </header>
    );
}
