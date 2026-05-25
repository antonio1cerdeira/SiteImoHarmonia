"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLanguage();

  const copy =
    lang === "pt"
      ? {
          eyebrow: "Confiança",
          title: ["Clareza.", "Rastreabilidade."],
          description:
            "Feito para profissionais que precisam de justificar decisões com base no regulamento, sem perder tempo a procurar artigos e exceções manualmente.",
          certifications: ["Auditável", "Revisão técnica", "Rastreável", "Portugal"],
          features: [
            {
              icon: Shield,
              title: "Contexto legal",
              description: "As respostas preservam o enquadramento e os artigos relevantes para revisão.",
            },
            {
              icon: Lock,
              title: "Rastreabilidade",
              description: "Decisões claras, com critérios explícitos e prontas para validação técnica.",
            },
            {
              icon: Eye,
              title: "Menos ruído",
              description: "Encontra rapidamente o que interessa no meio de centenas de artigos.",
            },
            {
              icon: FileCheck,
              title: "Consistência",
              description: "Estrutura o documento em regras, factos e condicionantes, de forma uniforme.",
            },
          ],
        }
      : {
          eyebrow: "Trust",
          title: ["Clarity.", "Traceability."],
          description:
            "Built for professionals who need to justify decisions based on the regulation, without wasting time hunting articles and exceptions by hand.",
          certifications: ["Auditable", "Technical review", "Traceable", "Portugal"],
          features: [
            {
              icon: Shield,
              title: "Legal context",
              description: "Keeps the framing and relevant articles for review.",
            },
            {
              icon: Lock,
              title: "Traceability",
              description: "Clear decisions, explicit criteria, ready for technical validation.",
            },
            {
              icon: Eye,
              title: "Less noise",
              description: "Find what matters quickly among hundreds of articles.",
            },
            {
              icon: FileCheck,
              title: "Consistency",
              description: "Structures content into rules, facts, and constraints in a uniform way.",
            },
          ],
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
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              {copy.eyebrow}
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              {copy.description}
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {copy.certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-6">
            {copy.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
