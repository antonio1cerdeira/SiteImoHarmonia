"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  const copy =
    lang === "pt"
      ? {
          line: "Menos tempo a procurar artigos. Mais clareza antes de decidir.",
          primary: "Pedir acesso antecipado →",
          secondary: "Ver como funciona ↓",
        }
      : {
          line: "Less time searching articles. More clarity before deciding.",
          primary: "Request early access →",
          secondary: "See how it works ↓",
        };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const contact = document.getElementById("contact");
      const contactNear = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false;

      setIsVisible(y > 240 && !contactNear);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="mx-auto max-w-[1040px]">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-5 border border-foreground/10 bg-background/80 backdrop-blur-xl shadow-lg rounded-2xl px-5 py-4">
          <div className="text-base text-muted-foreground">{copy.line}</div>
          <div className="flex gap-3 justify-end">
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-7 h-12">
              <a href="#contact">
                {copy.primary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 hover:bg-foreground/5 px-7 h-12">
              <a href="#how-it-works">{copy.secondary}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
