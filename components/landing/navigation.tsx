"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const navLinks =
    lang === "pt"
      ? [
          { name: "Início", href: "#inicio" },
          { name: "Problema", href: "#problem" },
          { name: "Funcionalidades", href: "#features" },
          { name: "Como funciona", href: "#how-it-works", nowrap: true },
          { name: "Contacto", href: "#contact" },
        ]
      : [
          { name: "Home", href: "#inicio" },
          { name: "Problem", href: "#problem" },
          { name: "Features", href: "#features" },
          { name: "How it works", href: "#how-it-works", nowrap: true },
          { name: "Contact", href: "#contact" },
        ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 md:grid md:grid-cols-3 md:justify-between ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group md:justify-self-start">
            <img
              src="/Fotos/logo.webp"
              alt="ImoHarmonia"
              width={40}
              height={40}
              loading="eager"
              className={`transition-all duration-500 ${isScrolled ? "w-7 h-7" : "w-9 h-9"}`}
            />
            <span className={`text-muted-foreground font-mono transition-all duration-500 ${isScrolled ? "text-[10px] mt-0.5" : "text-xs mt-1"}`}>{lang.toUpperCase()}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-12 md:justify-self-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group ${
                  "nowrap" in link && link.nowrap ? "whitespace-nowrap" : ""
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Language Toggle */}
          <div className="hidden md:flex justify-end md:justify-self-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className={`rounded-full border-foreground/20 hover:bg-foreground/5 transition-all duration-500 ${
                isScrolled ? "h-8 px-3 text-xs" : "h-9 px-4 text-xs"
              }`}
              onClick={toggleLang}
              aria-label={lang === "pt" ? "Mudar para inglês" : "Mudar para português"}
            >
              {lang === "pt" ? "PT" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label={lang === "pt" ? "Abrir menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              variant="outline"
              className="rounded-full h-14 text-base px-6"
              onClick={() => toggleLang()}
            >
              {lang === "pt" ? "PT" : "EN"}
            </Button>
            <Button asChild className="flex-1 bg-foreground text-background rounded-full h-14 text-base" onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#contact">{lang === "pt" ? "Acesso Antecipado" : "Early Access"}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
