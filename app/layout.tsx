import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Impacto 360 - Estratégia e Inovação",
  description: "Uma mentoria prática e personalizada para empresas que querem sair do planejamento teórico e construir um plano estratégico moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} antialiased font-display bg-background-light text-text-light`}
      >
        {children}
      </body>
    </html>
  );
}
