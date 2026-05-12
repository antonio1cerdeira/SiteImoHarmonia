import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { AlertTriangle, FileOutput, ShieldCheck, Search, BookOpen, Check, CheckCircle2, Mail, Menu, Upload, UserRound, X } from "lucide-react";
import AnimatedStats from "./components/AnimatedStats";
import PDMAnalyzer from "./components/PDMAnalyzer";
import { useLanguage } from "./hooks/useLanguage";
import LanguageSwitcher from "./components/LanguageSwitcher";

const navLinkKeys = [
  { href: "#problema", labelKey: "nav.problem" },
  { href: "#processo", labelKey: "nav.process" },
  { href: "#funcionalidades", labelKey: "nav.features" },
  { href: "#contacto", labelKey: "nav.contact" },
];

const proofItemKeys = [
  "proof.item1",
  "proof.item2",
  "proof.item3",
];

const processStepKeys = [
  {
    icon: Upload,
    stepIndex: 0,
    titleKey: "process.steps.0.title",
    descriptionKey: "process.steps.0.description",
    displayTitleKey: "process.steps.0.displayTitle",
  },
  {
    icon: BookOpen,
    stepIndex: 1,
    titleKey: "process.steps.1.title",
    descriptionKey: "process.steps.1.description",
    displayTitleKey: "process.steps.1.displayTitle",
  },
  {
    icon: Search,
    stepIndex: 2,
    titleKey: "process.steps.2.title",
    descriptionKey: "process.steps.2.description",
    displayTitleKey: "process.steps.2.displayTitle",
  },
];

const mockupCheckKeys = [
  { icon: Check, textKey: "mockupData.checks.0.text", tone: "success" },
  { icon: Check, textKey: "mockupData.checks.1.text", tone: "success" },
  { icon: AlertTriangle, textKey: "mockupData.checks.2.text", tone: "warning" },
];

const FORM_INITIAL_STATE = {
  nome: "",
  email: "",
  perfil: "Arquiteto",
  mensagem: "",
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Logo removed per design request

function SectionHeading({ label, title, description, centered = false }) {
  return (
    <Motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      <p className="text-[11px] font-[500] uppercase tracking-[0.22em] text-[var(--text-muted)]">
        {label}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3rem)] font-[700] leading-[0.98] tracking-[-0.03em] text-[var(--text)] dark:text-[var(--text-dark)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.68)]">
          {description}
        </p>
      ) : null}
    </Motion.div>
  );
}



function HeroMockup() {
  const { t } = useLanguage();
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-0 mx-auto w-full max-w-[520px] xl:max-w-[560px]"
    >
      <div className="overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] dark:bg-[var(--surface-dark)]">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4 dark:border-[var(--border-dark)]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Motor Regulatório
            </p>
            <h3 className="mt-2 text-[18px] font-[600] text-[var(--text)] dark:text-[var(--text-dark)]">
              Análise PDM
            </h3>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] font-[500] text-[rgba(74,222,128,1)]">
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[rgba(74,222,128,1)]" />
            Em curso
          </span>
        </div>

        <Motion.div variants={heroGroup} initial="hidden" animate="visible" className="mt-5 space-y-3">
          {mockupCheckKeys.map((item, index) => {
            const Icon = item.icon;
            const isWarning = item.tone === "warning";

            return (
              <Motion.div
                key={index}
                variants={heroItem}
                className="flex items-center gap-3 rounded-[12px] border border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.04)] px-4 py-3 dark:border-[var(--border-dark)] dark:bg-[rgba(255,255,255,0.04)]"
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-[6px] ${
                    isWarning
                      ? "bg-[rgba(251,191,36,0.24)] text-[rgba(251,191,36,1)]"
                      : "bg-[rgba(74,222,128,0.24)] text-[rgba(74,222,128,1)]"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-sm font-[600] text-[var(--text)] sm:text-[15px] dark:text-[var(--text-dark)]">
                    {t(item.textKey)}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.56)]">
                    {isWarning ? t('mockupData.statusVerify') : t('mockupData.statusCompliant')}
                  </p>
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>

        <div className="mt-6 border-t border-[rgba(0,0,0,0.06)] pt-4 dark:border-[var(--border-dark)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-[400] text-[var(--text)] dark:text-[var(--text-dark)]">
              Relatório gerado em 4.2s
            </p>
            <span className="rounded-full border border-[rgba(0,0,0,0.08)] px-3 py-1 text-[11px] font-[500] text-[var(--text)] dark:border-[var(--border-dark)] dark:text-[var(--text-dark)]">
              Auditável
            </span>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}

export default function App() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [hcaptchaToken, setHcaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("#problema, #processo, #funcionalidades, #contacto");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("step-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepElements = document.querySelectorAll(".step-animate");
    stepElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (formSuccess) {
      setFormSuccess(false);
    }

    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nome = formData.nome.trim();
    const email = formData.email.trim();
    const perfil = formData.perfil.trim();
    const mensagem = formData.mensagem.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const captchaToken = hcaptchaToken.trim();

    if (!nome || !email || !perfil || !mensagem) {
      setFormError("Preenche todos os campos antes de enviar.");
      return;
    }

    if (!emailPattern.test(email)) {
      setFormError("Introduz um email válido.");
      return;
    }

    if (mensagem.length < 10) {
      setFormError("A mensagem deve ter pelo menos 10 caracteres.");
      return;
    }

    if (!captchaToken) {
      setFormError("Por favor confirma o captcha antes de enviar.");
      return;
    }

    const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!web3formsKey) {
      setFormError("Falta configurar a chave VITE_WEB3FORMS_KEY.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");
    setFormSuccess(false);

    try {
      const payload = {
        access_key: web3formsKey,
        name: nome,
        email,
        perfil,
        message: mensagem,
        "h-captcha-response": captchaToken,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setFormError(result?.message || "Não foi possível enviar a mensagem. Tenta novamente.");
        return;
      }

      setFormSuccess(true);
      setFormData(FORM_INITIAL_STATE);
      setHcaptchaToken("");
    } catch {
      setFormError("Falha de rede ao enviar a mensagem. Tenta novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 dark:bg-[var(--bg-dark)] dark:text-[var(--text-dark)]">
      <div className="grain-overlay" />

      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-[rgba(8,12,16,0.8)] border-b border-[rgba(255,255,255,0.08)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#topo" onClick={closeMenu} className="font-display-serif text-[20px] font-[700] tracking-[-0.02em] text-[var(--text-dark)]">
            ImoHarmonia
          </a>

          <nav className="hidden flex-1 justify-center gap-8 text-[10px] font-label-mono uppercase tracking-widest text-[var(--text-muted)] lg:flex">
            {navLinkKeys.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-[var(--on-surface)] underline decoration-[var(--secondary)] decoration-2 underline-offset-4'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {t(link.labelKey)}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="#contacto" className="hidden rounded-full border border-[var(--border)] px-4 py-2 text-[11px] font-[500] uppercase tracking-widest text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)] sm:inline-flex">
              {t('nav.signin')}
            </a>
            <a href="#contacto" className="hidden rounded-full bg-[var(--secondary)] px-4 py-2 text-[11px] font-[700] uppercase tracking-widest text-[var(--on-secondary)] sm:inline-flex">
              {t('nav.earlyAccess')}
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((c) => !c)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.04)] text-[var(--text)] lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <Motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }} className="border-t border-[var(--border)] bg-[rgba(8,12,16,0.95)] backdrop-blur-md px-5 pb-6 pt-4 lg:hidden">
              <nav className="flex flex-col gap-2 mb-4">
                {navLinkKeys.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`rounded-2xl px-4 py-4 text-base font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[var(--secondary)]/10 text-[var(--on-surface)] border border-[var(--secondary)]'
                          : 'border border-[var(--border)] text-[var(--text)] hover:border-[var(--outline)]'
                      }`}
                    >
                      {t(link.labelKey)}
                    </a>
                  );
                })}
              </nav>
              <a href="#contacto" onClick={closeMenu} className="flex items-center justify-center rounded-2xl bg-[var(--secondary)] px-4 py-4 text-sm font-semibold text-[var(--on-secondary)] w-full">
                {t('nav.earlyAccess')}
              </a>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="topo" className="relative z-10">
        <header className="min-h-screen flex items-center justify-center bg-[#080C10]">
          <div className="relative mx-auto px-5 text-center">
            <Motion.div variants={heroGroup} initial="hidden" animate="visible">
              <Motion.p variants={heroItem} className="mb-6 text-[11px] font-label-mono uppercase tracking-[0.3em] text-[var(--primary)]">
                {t('hero.tagline')}
              </Motion.p>

              <Motion.h1 variants={heroItem} className="mx-auto max-w-6xl leading-tight px-4 break-words">
                <div className="font-display-sans text-[clamp(1.8rem,6.5vw,3.6rem)] md:text-[96px] font-[600] text-[var(--text)]">{t('hero.title1')}</div>
                <div className="mt-4">
                  <span className="font-display-sans text-[clamp(1.6rem,6vw,3.2rem)] md:text-[96px] font-[600] text-[var(--text)]">{t('hero.title2')}</span>
                  <span className="ml-3 block sm:inline font-display-sans text-[clamp(1.6rem,6vw,3.2rem)] md:text-[96px] font-[600] text-[var(--text)]">{t('hero.title3')}</span>
                </div>
              </Motion.h1>

              <Motion.p variants={heroItem} className="mx-auto mt-8 max-w-xl text-[var(--text-muted)] font-body-lg">
                {t('hero.subtitle')}
              </Motion.p>

              <Motion.div variants={heroItem} className="mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-center">
                <a href="#processo" className="rounded-full bg-[var(--secondary)] px-8 py-4 text-[14px] font-[700] uppercase tracking-widest text-[var(--on-secondary)]">{t('hero.cta1')}</a>
                <a href="#funcionalidades" className="rounded-full border border-[var(--outline)] px-8 py-4 text-[14px] font-[500] uppercase tracking-widest text-[var(--text-muted)]">{t('hero.cta2')}</a>
              </Motion.div>
            </Motion.div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[var(--primary)]/10 blur-[140px]" />
          </div>
        </header>

        <section className="border-y border-[rgba(255,255,255,0.08)] bg-[rgba(16,20,24,0.5)] py-6">
          <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(224,227,232,0.6)]">
              {proofItemKeys.map(key => t(key)).join(" · ")}
            </p>
          </div>
        </section>

        <section id="problema" className="bg-[var(--bg-dark)] py-32">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
              <div className="relative">
                <span className="mb-8 block text-6xl text-[var(--secondary)] opacity-40">
                  “
                </span>
                <h2 className="font-display-serif text-[clamp(2.4rem,4.5vw,3.8rem)] leading-tight text-[var(--text-dark)] italic">
                  {t('problem.title')}
                </h2>
              </div>

              <div className="space-y-10">
                <p className="text-lg leading-8 text-[rgba(224,227,232,0.72)]">
                  {t('problem.description')}
                </p>

                <AnimatedStats />
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="border-t border-[rgba(255,255,255,0.08)] py-32">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h3 className="mb-20 text-center text-[11px] font-[500] uppercase tracking-[0.24em] text-[var(--primary)]">
              {t('process.title')}
            </h3>

            <div className="space-y-32">
              {processStepKeys.slice(0, 3).map((step, index) => {
                const StepIcon = step.icon;
                const reverse = index % 2 === 1;

                return (
                  <div
                    key={step.stepIndex}
                    className={`step-animate flex flex-col items-center gap-16 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-1 step-text-content">
                      <span className="step-number mb-4 block text-[64px] font-mono opacity-10">0{index + 1}</span>
                      <h4 className="mb-6 text-[clamp(1.9rem,3vw,2.6rem)] font-[500] text-[var(--text-dark)]">
                        {t(step.displayTitleKey)}
                      </h4>
                      <p className="max-w-md text-base leading-8 text-[rgba(224,227,232,0.72)]">
                        {t(step.descriptionKey)}
                      </p>
                    </div>

                    <div className="step-mockup w-full flex-1 rounded-[24px] border border-[var(--outline-variant)] bg-[var(--surface)] p-8">
                      {index === 0 ? (
                        <div className="flex items-center gap-4 rounded bg-[var(--background)] p-4">
                          <div className="rounded-full bg-[rgba(184,195,255,0.14)] p-3 text-[var(--primary)]">
                            <Upload className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-mono text-xs text-[var(--text-dark)]">PDM_ImoHarmonia.pdf</p>
                            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[var(--outline-variant)]">
                              <div className="h-full w-full bg-[var(--primary)]" />
                            </div>
                          </div>
                          <div className="rounded-full bg-[rgba(74,225,118,0.16)] p-2 text-[var(--tertiary)]">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                        </div>
                      ) : null}

                      {index === 1 ? (
                        <div className="space-y-4 font-mono text-xs">
                          <div className="flex items-center justify-between opacity-50">
                            <span>SCANNING_ARTICLE_42...</span>
                            <span className="text-[var(--tertiary)]">CONFIDENCE: 0.98</span>
                          </div>
                          <div className="flex items-center justify-between text-[var(--primary)]">
                            <span>EXTRACTING_COEFFICIENTS...</span>
                            <span className="animate-pulse">PROCESSING</span>
                          </div>
                          <div className="h-px bg-[var(--outline-variant)]" />
                          <div className="text-[10px] leading-relaxed text-[rgba(224,227,232,0.72)]">
                            Detectado: Solo Urbano de Baixa Densidade. <br />
                            Artigo 14º: afastamento lateral mínimo 3m.
                          </div>
                          <div className="flex items-center gap-3 rounded-[12px] border border-[var(--border-dark)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
                            <StepIcon className="h-4 w-4 text-[var(--primary)]" />
                            <span className="text-[11px] uppercase tracking-[0.18em] text-[rgba(224,227,232,0.68)]">
                              Leitura semântica ativa
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {index === 2 ? (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between rounded-[12px] border border-[var(--outline-variant)] bg-[var(--surface-container-low)] p-3">
                            <span className="text-sm text-[var(--text-dark)]">{t('mockupData.checks.0.label')}</span>
                            <span className="rounded-full bg-[rgba(74,225,118,0.18)] px-3 py-1 text-[10px] font-[700] uppercase tracking-[0.2em] text-[var(--tertiary)]">
                              {t('mockupData.statusCompliant')}
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-[12px] border border-[var(--outline-variant)] bg-[var(--surface-container-low)] p-3">
                            <span className="text-sm text-[var(--text-dark)]">{t('mockupData.checks.1.label')}</span>
                            <span className="rounded-full bg-[rgba(251,191,36,0.16)] px-3 py-1 text-[10px] font-[700] uppercase tracking-[0.2em] text-[var(--secondary)]">
                              {t('mockupData.statusVerify')}
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bento grid/features removed per user request */}

        <section id="funcionalidades" className="bg-[var(--surface)] py-32">
          <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-20 px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
            <div className="w-full h-auto rounded-lg overflow-hidden">
              <PDMAnalyzer />
            </div>

            <div className="space-y-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--primary)]">
                {t('features.label')}
              </span>
              <h3 className="font-display-serif text-[40px] leading-tight text-[var(--text-dark)]">
                {t('features.title')}
              </h3>
              <p className="text-lg leading-8 text-[rgba(224,227,232,0.72)]">
                {t('features.description')}
              </p>

              <div className="rounded-t border-t border-[var(--outline)] pt-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[rgba(224,227,232,0.56)]">
                  {t('features.footer')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-40 text-center">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="mb-12 text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.02] text-[var(--text-dark)]">
              {t('cta.title')}
            </h2>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--secondary)] px-12 py-5 text-[14px] font-[700] uppercase tracking-[0.24em] text-[var(--on-secondary)] transition-transform duration-300 hover:scale-105"
            >
              {t('cta.button')}
            </a>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(184,195,255,0.12)] to-transparent" />
        </section>



        <section id="contacto" className="bg-[#080C10] px-margin-mobile py-24 md:px-margin-desktop">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label={t('contact.label')}
              title={t('contact.title')}
              description={t('contact.description')}
              centered
            />

            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={sectionReveal}
              className="mt-12"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text-dark)]">{t('contact.form.nameLabel')}</span>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[10px] border border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-3 pl-11 text-[var(--text-dark)] outline-none transition-colors duration-200 placeholder:text-[rgba(107,114,128,0.72)] focus:border-[rgba(184,195,255,0.3)] focus:ring-2 focus:ring-[rgba(184,195,255,0.12)]"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text-dark)]">{t('contact.form.emailLabel')}</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[10px] border border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-3 pl-11 text-[var(--text-dark)] outline-none transition-colors duration-200 placeholder:text-[rgba(107,114,128,0.72)] focus:border-[rgba(184,195,255,0.3)] focus:ring-2 focus:ring-[rgba(184,195,255,0.12)]"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text-dark)]">{t('contact.form.messageLabel')}</span>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full rounded-[10px] border border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-3 text-[var(--text-dark)] outline-none transition-colors duration-200 placeholder:text-[rgba(107,114,128,0.72)] focus:border-[rgba(184,195,255,0.3)] focus:ring-2 focus:ring-[rgba(184,195,255,0.12)]"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </label>

                <div className="flex justify-center">
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={(token) => {
                      setHcaptchaToken(token);
                      setFormError("");
                    }}
                    onExpire={() => setHcaptchaToken("")}
                    size="normal"
                    theme="dark"
                  />
                </div>

                {formError ? <p className="text-sm text-rose-400">{formError}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-[var(--on-secondary)] transition-colors duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submitButton')}
                </button>
              </form>

              <AnimatePresence>
                {formSuccess ? (
                  <Motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="success-pop mt-5 flex items-center gap-3 rounded-2xl border border-[rgba(74,225,118,0.16)] bg-[rgba(74,225,118,0.08)] px-4 py-4 text-[rgba(134,239,172,1)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(74,225,118,0.16)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium">
                      {t('contact.success')}
                    </p>
                  </Motion.div>
                ) : null}
              </AnimatePresence>
            </Motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-margin-mobile py-12 text-[var(--text-dark)] md:px-margin-desktop dark:border-[var(--border-dark)]">
        <div className="mx-auto max-w-container-max">
          <div className="flex flex-col gap-6 border-b border-[rgba(255,255,255,0.08)] pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display-serif text-headline-md text-[var(--text-dark)] mb-2">ImoHarmonia</p>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-[rgba(224,227,232,0.56)]">
              {navLinkKeys.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors duration-200 hover:text-[var(--text-dark)]">
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>

            <p className="text-sm font-medium text-[rgba(224,227,232,0.56)]">{t('footer.credits')}</p>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-[rgba(224,227,232,0.56)] md:flex-row md:items-center md:justify-between">
            <p>{t('footer.copyright')}</p>
            <p className="text-center">{t('footer.credits')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


