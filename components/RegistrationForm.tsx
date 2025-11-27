'use client';

import { useState, useEffect } from 'react';
import { registerSubscriber } from '../app/actions';

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [phone, setPhone] = useState('');
    const [coupon, setCoupon] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
    const [price, setPrice] = useState(10000);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (coupon.trim().toLowerCase() === 'mentto360') {
                setPrice(0);
            } else {
                setPrice(10000);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [coupon]);

    const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupon(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('company', company);
        formData.append('position', position);
        formData.append('phone', phone);
        formData.append('coupon', coupon);
        formData.append('termsAccepted', termsChecked ? '1' : '0');

        try {
            const result = await registerSubscriber(null, formData);
            if (result.success) {
                setIsSuccess(true);
            } else {
                setErrorMessage(result.message || 'Erro ao realizar inscrição.');
            }
        } catch (error) {
            setErrorMessage('Erro inesperado. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <section id="inscricao" className="py-20 px-6 bg-surface-light dark:bg-surface-dark">
                <div className="container mx-auto max-w-md text-center">
                    <div className="bg-green-100 dark:bg-green-900 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-green-800 dark:text-green-100 mb-4">Inscrição Confirmada!</h3>
                        <p className="text-green-700 dark:text-green-200">Obrigado, {name}. Entraremos em contato em breve pelo e-mail {email}.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="inscricao" className="py-20 px-6 bg-[#103c54] dark:bg-background-dark">
            <div className="container mx-auto max-w-md">
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-center text-text-light dark:text-text-dark mb-8">
                        Garanta sua Vaga
                    </h3>

                    <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                                placeholder="Seu nome"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                Empresa / Instituição
                            </label>
                            <input
                                type="text"
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                                placeholder="Sua empresa ou instituição"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="position" className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                Cargo / Posição
                            </label>
                            <input
                                type="text"
                                id="position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                                placeholder="Seu cargo"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                                placeholder="seu@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                Telefone de contato
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                                placeholder="(99) 99999-9999"
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="coupon" className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                Cupom de Desconto
                            </label>
                            <input
                                type="text"
                                id="coupon"
                                value={coupon}
                                onChange={handleCouponChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none"
                                placeholder="Digite seu cupom"
                            />
                        </div>

                        <div className="sm:col-span-2 flex items-start space-x-3">
                            <input
                                id="terms"
                                type="checkbox"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="terms" className="text-sm text-subtext-light dark:text-subtext-dark">
                                Li e concordo com os <a href="/termos" target="_blank" rel="noopener noreferrer" className="underline text-primary">termos de compromisso</a>
                            </label>
                        </div>

                        <div className="sm:col-span-2 py-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-subtext-light dark:text-subtext-dark">Valor:</span>
                                <span className={`text-xl font-bold ${price === 0 ? 'text-green-500 line-through decoration-gray-400' : 'text-text-light dark:text-text-dark'}`}>
                                    R$ 10.000,00
                                </span>
                            </div>
                            {price === 0 && (
                                <div className="flex justify-between items-center">
                                    <span className="text-subtext-light dark:text-subtext-dark">Valor com desconto:</span>
                                    <span className="text-2xl font-bold text-green-500">
                                        GRÁTIS
                                    </span>
                                </div>
                            )}
                        </div>

                        {errorMessage && (
                            <div className="sm:col-span-2 text-red-500 text-sm text-center">
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={price !== 0 || !name || !company || !position || !email || !phone || !termsChecked || isLoading}
                            className={`sm:col-span-2 w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${price === 0 && name && company && position && email && phone && termsChecked && !isLoading
                                ? 'bg-primary text-white hover:opacity-90 transform hover:-translate-y-1 shadow-lg'
                                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {isLoading ? 'Enviando...' : 'Garantir minha vaga'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
