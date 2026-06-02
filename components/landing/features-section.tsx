"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, FileCheck2, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

type Feature = {
  number: string;
  title: string;
  description: string;
  visual: "research" | "auditable" | "risk" | "portugal";
};

const featuresPt: Feature[] = [
  {
    number: "01",
    title: "Extração de factos técnicos",
    description:
      "Identifica parâmetros urbanísticos relevantes a partir de memórias descritivas, PDFs e documentação de projeto: áreas, índices, pisos, cércea, usos e outros dados necessários à análise.",
    visual: "research",
  },
  {
    number: "02",
    title: "Avaliação por regras estruturadas",
    description:
      "Cruza os factos extraídos com regras urbanísticas configuradas por município, zona, instrumento regulamentar e tipo de projeto.",
    visual: "auditable",
  },
  {
    number: "03",
    title: "Evidência e rastreabilidade",
    description:
      "Cada verificação pode apontar para o trecho do documento analisado e para a fonte regulamentar relevante, permitindo revisão técnica clara.",
    visual: "risk",
  },
  {
    number: "04",
    title: "Foco em Portugal",
    description:
      "Desenvolvido para a realidade urbanística portuguesa, com foco inicial em PDMs municipais, RGEU e processos de análise preliminar.",
    visual: "portugal",
  },
];

const featuresEn: Feature[] = [
  {
    number: "01",
    title: "Extraction of technical facts",
    description:
      "Identifies relevant urban parameters from descriptive reports, PDFs and project documentation: areas, indices, floors, height, uses and other necessary analysis data.",
    visual: "research",
  },
  {
    number: "02",
    title: "Evaluation by structured rules",
    description:
      "Crosses extracted facts with urban rules configured by municipality, zone, regulatory instrument and project type.",
    visual: "auditable",
  },
  {
    number: "03",
    title: "Evidence and traceability",
    description:
      "Each check can point to the section of the analyzed document and to the relevant regulatory source, allowing clear technical review.",
    visual: "risk",
  },
  {
    number: "04",
    title: "Portugal focus",
    description:
      "Built for Portuguese urban reality, with initial focus on municipal master plans, building regulations and preliminary analysis processes.",
    visual: "portugal",
  },
];

function AnimatedVisual({ type }: { type: string }) {
  const common = "w-full h-full text-foreground/80";
  switch (type) {
    case "research":
      return <BookOpen className={common} strokeWidth={1.25} />;
    case "auditable":
      return <FileCheck2 className={common} strokeWidth={1.25} />;
    case "risk":
      return <ShieldCheck className={common} strokeWidth={1.25} />;
    case "portugal":
      return <MapPin className={common} strokeWidth={1.25} />;
    default:
      return <BookOpen className={common} strokeWidth={1.25} />;
  }
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>

        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const features = lang === "pt" ? featuresPt : featuresEn;
  const copy =
    lang === "pt"
      ? {
          sectionLabel: "Funcionalidades",
          titleLine1: "Análise estruturada.",
          titleLine2: "Não uma resposta genérica.",
          description:
            "O ImoHarmonia não tenta responder como um chatbot jurídico. Estrutura a análise urbanística para revisão profissional.",
        }
      : {
          sectionLabel: "Features",
          titleLine1: "Structured analysis.",
          titleLine2: "Not a generic answer.",
          description:
            "ImoHarmonia doesn't try to answer like a legal chatbot. It structures urban analysis for professional review.",
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
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32 scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {copy.sectionLabel}
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 mb-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.titleLine1}
            <br />
            <span className="text-muted-foreground">{copy.titleLine2}</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground leading-relaxed max-w-3xl transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.description}
          </p>
        </div>

        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
