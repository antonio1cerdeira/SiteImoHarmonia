"use client";

import type React from "react";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import Script from "next/script";
import { useLanguage } from "@/hooks/useLanguage";

type CtaSectionProps = {
  web3formsKey: string;
  hcaptchaSitekey: string;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

const copyByLang = {
  pt: {
    title: "Interessado no projeto?",
    description: "Para parcerias académicas, testes de acesso antecipado ou colaboração técnica.",
    nameLabel: "Nome",
    namePlaceholder: "O teu nome",
    emailLabel: "Email",
    emailPlaceholder: "nome@empresa.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Diz-nos como gostarias de colaborar.",
    submitButton: "Enviar",
    submitting: "A enviar...",
    errors: {
      allFields: "Por favor preenche todos os campos antes de enviar.",
      invalidEmail: "Por favor introduz um email válido.",
      shortMessage: "A mensagem deve ter pelo menos 10 caracteres.",
      captcha: "Por favor confirma o captcha antes de enviar.",
      missingKey: "Falta a configuração NEXT_PUBLIC_WEB3FORMS_KEY.",
      sendFailed: "Falha ao enviar a mensagem. Tenta novamente.",
      networkError: "Erro de rede ao enviar a mensagem. Tenta novamente.",
    },
    success: "Mensagem enviada! Vamos responder em breve.",
    ctaTitle: "Chega de interpretar regulamentos à mão!",
    ctaButton: "Limpar",
  },
  en: {
    title: "Interested in the project?",
    description: "For academic partnerships, early-access tests, or technical collaboration.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us how you'd like to collaborate.",
    submitButton: "Send",
    submitting: "Sending...",
    errors: {
      allFields: "Please fill in all fields before sending.",
      invalidEmail: "Please enter a valid email address.",
      shortMessage: "Message must be at least 10 characters.",
      captcha: "Please complete the captcha before sending.",
      missingKey: "Missing NEXT_PUBLIC_WEB3FORMS_KEY configuration.",
      sendFailed: "Failed to send your message. Please try again.",
      networkError: "Network error while sending. Please try again.",
    },
    success: "Message sent! We'll reply soon.",
    ctaTitle: "Stop interpreting regulations by hand!",
    ctaButton: "Clear",
  },
} as const;

export function CtaSection({ web3formsKey, hcaptchaSitekey }: CtaSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const hcaptchaElId = useId();
  const { lang } = useLanguage();
  const copy = lang === "pt" ? copyByLang.pt : copyByLang.en;

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success"; message?: string }>({
    type: "idle",
  });
  const [captchaToken, setCaptchaToken] = useState<string>("");

  useEffect(() => {
    (window as any).__imoHarmoniaOnHcaptchaVerified = (token: string) => {
      setCaptchaToken(token);
      setStatus({ type: "idle" });
    };

    (window as any).__imoHarmoniaOnHcaptchaExpired = () => {
      setCaptchaToken("");
    };

    return () => {
      try {
        delete (window as any).__imoHarmoniaOnHcaptchaVerified;
        delete (window as any).__imoHarmoniaOnHcaptchaExpired;
      } catch {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return copy.errors.allFields;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) return copy.errors.invalidEmail;
    if (form.message.trim().length < 10) return copy.errors.shortMessage;
    if (!captchaToken) return copy.errors.captcha;
    if (!web3formsKey) return copy.errors.missingKey;
    return null;
  };

  const resetCaptcha = () => {
    try {
      const hcaptcha = (window as any).hcaptcha;
      if (!hcaptcha) return;
      // Se não tivermos o id do widget, um reset global costuma funcionar em páginas com um único widget.
      if (typeof hcaptcha.reset === "function") hcaptcha.reset();
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "idle" });

    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        access_key: web3formsKey,
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        subject: copy.ctaTitle,
        from_name: "ImoHarmonia",
        "h-captcha-response": captchaToken,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) {
        setStatus({ type: "error", message: copy.errors.sendFailed });
        return;
      }

      setForm({ name: "", email: "", message: "" });
      setCaptchaToken("");
      resetCaptcha();
      setStatus({ type: "success", message: copy.success });
    } catch {
      setStatus({ type: "error", message: copy.errors.networkError });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden scroll-mt-28">
      <Script src="https://js.hcaptcha.com/1/api.js" async defer />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95] text-center lg:text-left">
                  {copy.ctaTitle}
                  <br />
                  {copy.title}
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl text-center lg:text-left lg:max-w-xl mx-auto lg:mx-0">
                  {copy.description}
                </p>

                <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-sm text-foreground/80 mb-2">{copy.nameLabel}</span>
                      <input
                        value={form.name}
                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder={copy.namePlaceholder}
                        className="w-full h-12 rounded-full border border-foreground/20 bg-transparent px-5 text-sm outline-none focus:border-foreground/40"
                        autoComplete="name"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-sm text-foreground/80 mb-2">{copy.emailLabel}</span>
                      <input
                        value={form.email}
                        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder={copy.emailPlaceholder}
                        className="w-full h-12 rounded-full border border-foreground/20 bg-transparent px-5 text-sm outline-none focus:border-foreground/40"
                        autoComplete="email"
                        inputMode="email"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block text-sm text-foreground/80 mb-2">{copy.messageLabel}</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder={copy.messagePlaceholder}
                      className="w-full min-h-32 rounded-2xl border border-foreground/20 bg-transparent px-5 py-4 text-sm outline-none focus:border-foreground/40 resize-none"
                    />
                  </label>

                  <div className="flex flex-col gap-4">
                    <div
                      id={hcaptchaElId}
                      className="h-captcha"
                      data-sitekey={hcaptchaSitekey}
                      data-callback="__imoHarmoniaOnHcaptchaVerified"
                      data-expired-callback="__imoHarmoniaOnHcaptchaExpired"
                    />

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                      >
                        {isSubmitting ? copy.submitting : copy.submitButton}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                        onClick={() => {
                          setForm({ name: "", email: "", message: "" });
                          setCaptchaToken("");
                          resetCaptcha();
                          setStatus({ type: "idle" });
                        }}
                      >
                        {copy.ctaButton}
                      </Button>
                    </div>

                    {status.type !== "idle" && (
                      <p
                        className={`text-sm font-mono ${
                          status.type === "success" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {status.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
