"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={ref} className="text-6xl lg:text-8xl font-display tracking-tight">
      <span className={hasAnimated ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 200ms ease" }}>
        {value}
      </span>
    </div>
  );
}

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLanguage();

  const metrics =
    lang === "pt"
      ? [
          { value: "6–12h", label: "Estimativa por projeto (leitura manual de PDMs)" },
          { value: "#1", label: "Interpretação regulatória em licenciamento" },
          { value: "308", label: "Municípios de Portugal continental" },
          { value: "4.2s", label: "Exemplo de geração de relatório" },
        ]
      : [
          { value: "6–12h", label: "Estimate per project (manual plan review)" },
          { value: "#1", label: "Where AI helps most: permitting interpretation" },
          { value: "308", label: "Municipalities in mainland Portugal" },
          { value: "4.2s", label: "Example report generation time" },
        ];

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
    <section id="metrics" ref={sectionRef} className="relative py-24 lg:py-32 border-y border-foreground/10 scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedValue value={metric.value} />
              <div className="mt-4 text-lg text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
