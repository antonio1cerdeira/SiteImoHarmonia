"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, FileCheck2, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const featuresPt = [
  {
    number: "01",
    title: "Investigação aplicada",
    description:
      "O ImoHarmonia nasceu no Instituto Politécnico da Guarda com investigação real em Direito do Urbanismo e processamento de linguagem natural.",
    visual: "research",
  },
  {
    number: "02",
    title: "Auditável",
    description: "Cada verificação aponta para os artigos relevantes no PDF, para revisão técnica clara e rastreável.",
    visual: "auditable",
  },
  {
    number: "03",
    title: "Menos risco",
    description: "Menos erro humano e mais confiança nas análises preliminares, com contexto e critérios explícitos.",
    visual: "risk",
  },
  {
    number: "04",
    title: "Foco em Portugal",
    description: "Começa pelos municípios portugueses e pelos PDM municipais, pensado para o contexto real do urbanismo.",
    visual: "portugal",
  },
] as const;

const featuresEn = [
  {
    number: "01",
    title: "Applied research",
    description:
      "ImoHarmonia was developed at Guarda Polytechnic Institute with real research in Urban Law and natural language processing.",
    visual: "research",
  },
  {
    number: "02",
    title: "Auditable",
    description: "Each check points to relevant PDF articles for clear, traceable technical review.",
    visual: "auditable",
  },
  {
    number: "03",
    title: "Lower risk",
    description: "Less human error and more confidence in early assessments, with explicit context and criteria.",
    visual: "risk",
  },
  {
    number: "04",
    title: "Portugal first",
    description: "Starts with Portuguese municipalities and municipal master plans, built for real-world workflows.",
    visual: "portugal",
  },
] as const;

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

function FeatureCard({ feature, index }: { feature: (typeof featuresPt)[0]; index: number }) {
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
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Visual */}
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
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 scroll-mt-28"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Funcionalidades
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {lang === "pt" ? "Rigor académico." : "Academic rigor."}
            <br />
            <span className="text-muted-foreground">
              {lang === "pt" ? "Não uma ideia de fim de semana." : "Not a weekend idea."}
            </span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
