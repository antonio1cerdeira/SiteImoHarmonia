"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { useLanguage } from "@/hooks/useLanguage";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  const copy =
    lang === "pt"
      ? {
          eyebrow: "REGULATÓRIO × CONFORMIDADE URBANÍSTICA",
          h1: ["O motor de conformidade", "urbanística para projetos,", "PDMs e decisões técnicas."],
          sub: "O ImoHarmonia transforma documentos técnicos, PDMs e regras municipais numa análise estruturada de conformidade urbanística, com factos, critérios explícitos, evidência e rastreabilidade.",
          microcopy: "A plataforma apoia a decisão técnica. Não substitui o profissional nem emite parecer jurídico.",
          primary: "Pedir acesso antecipado →",
          secondary: "Ver como funciona ↓",
        }
      : {
          eyebrow: "REGULATORY × URBAN COMPLIANCE",
          h1: ["The urban compliance engine", "for projects, plans and", "technical decisions."],
          sub: "ImoHarmonia transforms technical documents, municipal master plans and municipal rules into structured urban compliance analysis, with facts, explicit criteria, evidence and traceability.",
          microcopy: "The platform supports technical decision-making. It does not replace the professional nor provide legal advice.",
          primary: "Request early access →",
          secondary: "See how it works ↓",
        };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden scroll-mt-28">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-65 pointer-events-none [filter:contrast(1.15)]">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            {copy.eyebrow}
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">{copy.h1[0]}</span>
            <span className="block">{copy.h1[1]}</span>
            <span className="block">{copy.h1[2]}</span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.sub}
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group">
              <a href="#contact">
                {copy.primary}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5">
              <a href="#how-it-works">{copy.secondary}</a>
            </Button>
          </div>
        </div>

        {/* Microcopy */}
        <p 
          className={`mt-16 text-sm text-muted-foreground max-w-md transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {copy.microcopy}
        </p>
        
      </div>
      
      {/* Proof marquee removed to avoid repeated content */}
      
      {/* Scroll indicator */}
      
    </section>
  );
}
