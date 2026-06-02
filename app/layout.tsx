import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from "@/components/language-provider"

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imoharmonia.com'),
  title: 'ImoHarmonia | Inteligência Artificial para Regulamento Urbano',
  description: 'Imo Harmonia é uma plataforma de Inteligência Artificial para interpretar regulamentos urbanísticos e PDM de forma rápida, clara e auditável.',
  keywords: ['Imo Harmonia', 'Urbanismo Descomplicado', 'urbanismo', 'PDM', 'Inteligência Artificial', 'regulamentos urbanísticos', 'arquitetos', 'engenheiros', 'Instituto Politécnico da Guarda', 'Poliempreende 2025'],
  authors: [{ name: 'Imo Harmonia' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://imoharmonia.com',
  },
  openGraph: {
    title: 'Imo Harmonia | Urbanismo Descomplicado com IA',
    description: 'Plataforma de IA que simplifica regulamentos urbanísticos e PDM para arquitetos, engenheiros e técnicos municipais. Vencedor Poliempreende 2025.',
    url: 'https://imoharmonia.com',
    siteName: 'Imo Harmonia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Imo Harmonia',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imo Harmonia | Urbanismo Descomplicado com IA',
    description: 'Plataforma de IA que simplifica regulamentos urbanísticos e PDM para arquitetos, engenheiros e técnicos municipais. Vencedor Poliempreende 2025.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/Fotos/logo.webp',
    shortcut: '/Fotos/logo.webp',
    apple: '/Fotos/logo.webp',
  },
}

export const viewport = {
  themeColor: '#080C10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Imo Harmonia',
    alternateName: 'Urbanismo Descomplicado',
    description: 'Plataforma de Inteligência Artificial que simplifica a interpretação de regulamentos urbanísticos e PDM, para arquitetos, engenheiros e profissionais do urbanismo.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://imoharmonia.com',
    inLanguage: 'pt-PT',
    provider: {
      '@type': 'Organization',
      name: 'Imo Harmonia',
    },
    award: 'Poliempreende 2025 — Instituto Politécnico da Guarda',
  }

  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
