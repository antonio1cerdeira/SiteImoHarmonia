"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function CredibilityMarqueeSection() {
  const { lang } = useLanguage();

  const items =
    lang === "pt"
      ? ["Regulamentos urbanísticos", "PDM", "Leitura semântica", "Extração automática", "Relatório", "Revisão técnica"]
      : ["Planning regulations", "Municipal master plans", "Semantic reading", "Automatic extraction", "Report", "Technical review"];

  const caption = lang === "pt" ? "Base académica e foco em Portugal" : "Academic foundation and focus on Portugal";

  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10 lg:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="pt-4">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            {caption}
          </p>
        </div>
      </div>

      {/* Full-width marquee outside container */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {items.map((item) => (
                <span
                  key={`${setIdx}-${item}`}
                  className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
