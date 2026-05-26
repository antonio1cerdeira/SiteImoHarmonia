"use client";

import { AnimatedWave } from "./animated-wave";
import { useLanguage } from "@/hooks/useLanguage";

export function FooterSection() {
  const { lang } = useLanguage();

  type FooterLink = { name: string; href: string };

  const footerLinks =
    lang === "pt"
      ? ({
          Produto: [
            { name: "Problema", href: "#problem" },
            { name: "Como funciona", href: "#how-it-works" },
            { name: "Funcionalidades", href: "#features" },
            { name: "Contacto", href: "#contact" },
          ],
          Projeto: [
            {
              name: "IPG no Poliempreende",
              href: "https://politecnicoguarda.pt/ipg-na-final-do-poliempreende-com-projeto-para-aplicar-inteligencia-artificial-aos-pdm/",
            },
            {
              name: "Notícia (SAPO)",
              href: "https://sapo.pt/artigo/instituto-politecnico-da-guarda-na-final-do-poliempreende-com-projeto-para-aplicar-inteligencia-artificial-aos-pdm-6866c395f1d62fd0b23dd837",
            },
            { name: "Foco inicial: Portugal", href: "#integrations" },
            { name: "Rigor académico", href: "#security" },
          ],
          Recursos: [
            { name: "Processo de verificação", href: "#how-it-works" },
            { name: "Relatório auditável", href: "#security" },
            { name: "Métricas", href: "#metrics" },
            { name: "Contacto", href: "#contact" },
          ],
        } as const)
      : ({
          Product: [
            { name: "Problem", href: "#problem" },
            { name: "How it works", href: "#how-it-works" },
            { name: "Features", href: "#features" },
            { name: "Contact", href: "#contact" },
          ],
          Project: [
            {
              name: "IPG (Poliempreende)",
              href: "https://politecnicoguarda.pt/ipg-na-final-do-poliempreende-com-projeto-para-aplicar-inteligencia-artificial-aos-pdm/",
            },
            {
              name: "News (SAPO)",
              href: "https://sapo.pt/artigo/instituto-politecnico-da-guarda-na-final-do-poliempreende-com-projeto-para-aplicar-inteligencia-artificial-aos-pdm-6866c395f1d62fd0b23dd837",
            },
            { name: "Initial focus: Portugal", href: "#integrations" },
            { name: "Academic rigor", href: "#security" },
          ],
          Resources: [
            { name: "Verification flow", href: "#how-it-works" },
            { name: "Auditable report", href: "#security" },
            { name: "Metrics", href: "#metrics" },
            { name: "Contact", href: "#contact" },
          ],
        } as const);

  const typedFooterLinks = footerLinks as unknown as Record<string, readonly FooterLink[]>;

  const description =
    lang === "pt"
      ? "Plataforma de Inteligência Artificial para interpretar regulamentos urbanísticos e PDM de forma rápida, clara e auditável."
      : "AI platform to interpret planning regulations and municipal master plans quickly, clearly, and with traceability.";

  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#problem" className="inline-flex items-center gap-2 mb-6">
                <img
                  src="/Fotos/logo.webp"
                  alt="ImoHarmonia"
                  width={40}
                  height={40}
                  className="w-9 h-9"
                  loading="lazy"
                />
                <span className="text-xs text-muted-foreground font-mono">{lang.toUpperCase()}</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                {description}
              </p>

              <a
                href="https://imoharmonia.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                imoharmonia.com
              </a>
            </div>

            {/* Link Columns */}
            {Object.entries(typedFooterLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link: FooterLink) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ImoHarmonia
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {lang === "pt" ? "Desenvolvido por" : "Built by"}{" "}
              <a
                href="https://www.linkedin.com/in/rodrigohenriques00/"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                Rodrigo_Henriques
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
