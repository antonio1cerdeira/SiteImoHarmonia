"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

function UploadCard({ lang }: { lang: "pt" | "en" }) {
  const copy =
    lang === "pt"
      ? { action: "Carregar", done: "Concluído" }
      : { action: "Upload", done: "Done" };
  return (
    <div className="border border-background/10 bg-background/[0.03]">
      <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-background/20" />
          <div className="w-3 h-3 rounded-full bg-background/20" />
          <div className="w-3 h-3 rounded-full bg-background/20" />
        </div>
        <span className="text-xs font-mono text-background/40">PDM_ImoHarmonia.pdf</span>
      </div>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-background/10 flex items-center justify-center text-background/70">
            <span className="font-mono text-xs">PDF</span>
          </div>
          <div className="flex-1">
            <div className="h-2 bg-background/10 overflow-hidden relative">
              <div className="upload-progress h-full w-full bg-background/60" />
              <div className="upload-shimmer absolute inset-0 opacity-40" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-background/60">{copy.action}</span>
              <span className="text-green-400 inline-flex items-center gap-2">
                <Check className="w-4 h-4" aria-hidden />
                <span className="text-xs font-mono">{copy.done}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .upload-progress {
          transform-origin: left;
          animation: uploadFill 6.5s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        @keyframes uploadFill {
          0% {
            transform: scaleX(0);
            opacity: 0.65;
          }
          70% {
            transform: scaleX(1);
            opacity: 0.95;
          }
          85% {
            transform: scaleX(1);
            opacity: 0.9;
          }
          100% {
            transform: scaleX(0);
            opacity: 0.65;
          }
        }

        .upload-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.16) 45%,
            transparent 85%
          );
          transform: translateX(-60%);
          animation: shimmer 3.4s ease-in-out infinite;
          mix-blend-mode: overlay;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-60%);
          }
          100% {
            transform: translateX(60%);
          }
        }
      `}</style>
    </div>
  );
}

function AnalysisCard({ lang }: { lang: "pt" | "en" }) {
  const copy =
    lang === "pt"
      ? {
          title: "A ler e a extrair",
          confidence: "CONFIANÇA: 0.98",
          lines: ["A ANALISAR_ARTIGO_42...", "A EXTRAIR_COEFICIENTES...", "A PROCESSAR"],
          detected: ["Detectado: Solo Urbano de Baixa Densidade.", "Artigo 14º: afastamento lateral mín. 3m."],
        }
      : {
          title: "Reading & extracting",
          confidence: "CONFIDENCE: 0.98",
          lines: ["ANALYZING_ARTICLE_42...", "EXTRACTING_COEFFICIENTS...", "PROCESSING"],
          detected: ["Detected: Low-density urban land.", "Article 14: lateral setback min. 3m."],
        };
  return (
    <div className="border border-background/10 bg-background/[0.03]">
      <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
        <span className="text-xs font-mono text-background/40">{copy.title}</span>
        <span className="text-xs font-mono text-green-400">{copy.confidence}</span>
      </div>
      <div className="p-6 lg:p-8 font-mono text-sm text-background/70 space-y-2">
        {copy.lines.map((line) => (
          <div key={line} className="text-background/40">
            {line}
          </div>
        ))}
        <div className="pt-2 text-background/70">
          {copy.detected[0]}
          <br />
          {copy.detected[1]}
        </div>
      </div>
    </div>
  );
}

function ReportCard({ lang }: { lang: "pt" | "en" }) {
  const copy =
    lang === "pt"
      ? {
          headerLeft: "Relatório",
          headerRight: "Auditável",
          row1: "Índice de Impermeabilização",
          statusOk: "CONFORME",
          row2: "Cércea Máxima Admitida",
          statusCheck: "VERIFICAR",
        }
      : {
          headerLeft: "Report",
          headerRight: "Auditable",
          row1: "Impermeable surface index",
          statusOk: "OK",
          row2: "Maximum building height",
          statusCheck: "REVIEW",
        };
  return (
    <div className="border border-background/10 bg-background/[0.03]">
      <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
        <span className="text-xs font-mono text-background/40">{copy.headerLeft}</span>
        <span className="text-xs font-mono text-background/40">{copy.headerRight}</span>
      </div>
      <div className="p-6 lg:p-8 space-y-4">
        <div className="flex items-center justify-between gap-4 border border-background/10 px-4 py-3">
          <span className="text-sm text-background/70">{copy.row1}</span>
          <span className="text-xs font-mono px-2 py-1 bg-green-400/15 text-green-300 rounded-full">{copy.statusOk}</span>
        </div>
        <div className="flex items-center justify-between gap-4 border border-background/10 px-4 py-3">
          <span className="text-sm text-background/70">{copy.row2}</span>
          <span className="text-xs font-mono px-2 py-1 bg-yellow-400/15 text-yellow-300 rounded-full">{copy.statusCheck}</span>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const copy =
    lang === "pt"
      ? {
          eyebrow: "Processo de Verificação",
          titleTop: "Carregas o documento.",
          titleBottom: "A IA lê por ti.",
          steps: [
            {
              title: "Carregas o documento.",
              body: "O motor do ImoHarmonia aceita PDFs técnicos e cartografia, processando o contexto geográfico e administrativo de imediato.",
            },
            {
              title: "A IA lê por ti.",
              body: "Análise semântica profunda. Identificamos índices de edificabilidade, afastamentos e condicionantes em milissegundos.",
            },
            {
              title: "Recebes um relatório auditável.",
              body: "Um sumário executivo com links diretos para os artigos originais, pronto para ser anexado ao processo de licenciamento.",
            },
          ],
        }
      : {
          eyebrow: "Verification Flow",
          titleTop: "You upload the document.",
          titleBottom: "AI reads it for you.",
          steps: [
            {
              title: "You upload the document.",
              body: "ImoHarmonia accepts technical PDFs and maps, processing geographic and administrative context immediately.",
            },
            {
              title: "AI reads it for you.",
              body: "Deep semantic analysis. We identify indices, setbacks, and constraints in milliseconds.",
            },
            {
              title: "You get an auditable report.",
              body: "An executive summary with direct links to the original articles, ready to attach to the permitting process.",
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
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden scroll-mt-28"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            {copy.eyebrow}
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {copy.titleTop}
            <br />
            <span className="text-background/50">{copy.titleBottom}</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
          {/* Mobile order: 01 text, 01 card, 02 text, 02 card, 03 text, 03 card */}

          {/* 01 */}
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="text-6xl font-display text-background/10 mb-4">01</div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4">{copy.steps[0].title}</h3>
            <p className="text-background/60 leading-relaxed max-w-xl">
              {copy.steps[0].body}
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-start-1 self-center">
            <UploadCard lang={lang} />
          </div>

          {/* 02 */}
          <div className="lg:col-start-2 lg:row-start-2">
            <div className="text-6xl font-display text-background/10 mb-4">02</div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4">{copy.steps[1].title}</h3>
            <p className="text-background/60 leading-relaxed max-w-xl">
              {copy.steps[1].body}
            </p>
          </div>
          <div className="lg:col-start-1 lg:row-start-2 self-center">
            <AnalysisCard lang={lang} />
          </div>

          {/* 03 */}
          <div className="lg:col-start-1 lg:row-start-3">
            <div className="text-6xl font-display text-background/10 mb-4">03</div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4">{copy.steps[2].title}</h3>
            <p className="text-background/60 leading-relaxed max-w-xl">
              {copy.steps[2].body}
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-start-3 self-center">
            <ReportCard lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
