"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLanguage();

  const copy =
    lang === "pt"
      ? {
          label: "Problema",
          title: "Um projeto depende de poucos critérios críticos. Encontrá-los, cruzá-los e justificá-los ainda consome demasiado tempo.",
          desc:
            "A análise urbanística continua demasiado dependente de leitura manual, comparação entre documentos, procura de artigos, validação de índices e interpretação repetida de regras municipais.\n\nNum contexto de simplificação do licenciamento e maior pressão sobre prazos, a análise técnica continua a exigir rigor, documentação e capacidade de justificação.\n\nO técnico precisa de confirmar áreas, índices, cérceas, afastamentos, usos, condicionantes e exceções legais. Pequenas falhas de leitura podem gerar pedidos de elementos, revisões sucessivas, atrasos e perda de confiança no processo.",
          closing: "O ImoHarmonia organiza este processo em factos, regras e evidência.",
        }
      : {
          label: "Problem",
          title: "A project depends on just a few critical criteria. Finding them, cross-referencing and justifying them still takes too much time.",
          desc:
            "Urban analysis remains too dependent on manual reading, document comparison, article searches, index validation and repeated interpretation of municipal rules.\n\nIn a context of licensing simplification and greater time pressure, technical analysis still requires rigor, documentation and justification capability.\n\nTechnicians need to confirm areas, indices, heights, setbacks, uses, constraints and legal exceptions. Small reading failures can lead to information requests, successive revisions, delays and loss of confidence in the process.",
          closing: "ImoHarmonia organizes this process into facts, rules and evidence.",
        };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="relative py-24 lg:py-32 scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {copy.label}
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.title}
          </h2>
          <p
            className={`mt-8 text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-150 whitespace-pre-line ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.desc}
          </p>
          <p
            className={`mt-8 text-xl text-foreground leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
