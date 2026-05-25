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
          title: "Um PDM tem centenas de artigos. O teu projeto depende apenas de alguns. Encontrá-los devia ser automático!",
          desc:
            "A fragmentação dos Planos Diretores Municipais em Portugal cria um labirinto de incerteza para arquitetos, engenheiros e promotores. A leitura manual é lenta, sujeita a erro humano e consome semanas em análises preliminares.",
        }
      : {
          label: "Problem",
          title:
            "A municipal master plan has hundreds of articles. Your project depends on just a few. Finding them should be automatic.",
          desc:
            "The fragmentation of municipal plans creates uncertainty for architects, engineers, and developers. Manual reading is slow, error-prone, and can take weeks during early-stage assessments.",
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
            className={`mt-8 text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
