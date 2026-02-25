import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Usaremos Inter para un look más tech/SaaS
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Personalización de marca para Matías Padrón
  title: "Matías Padrón | Software Engineer & Full-Stack Developer",
  description: "Software Engineer specialized in building scalable web platforms and robust backend systems.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Next.js", "Scalable Systems", "Ecuador"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-dark text-soft-white`}
      >
        {/* Envolvemos toda la aplicación con el contexto de idioma */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}