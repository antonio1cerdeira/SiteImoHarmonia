import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Bot,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  FileOutput,
  FileSearch,
  Landmark,
  Mail,
  MapPinned,
  Menu,
  Moon,
  ScanSearch,
  Search,
  ShieldCheck,
  Sun,
  Trophy,
  Upload,
  UserRound,
  X,
  Zap,
} from "lucide-react";

const Motion = motion;

const navLinks = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#contacto", label: "Contacto" },
];

const problemCards = [
  {
    title: "PDMs extensos e de difícil interpretação",
    description:
      "Centenas de páginas de regulamentação local que variam de município para município.",
  },
  {
    title: "Erros custam tempo e dinheiro",
    description:
      "Um erro de interpretação regulamentar pode atrasar meses um projeto e gerar custos inesperados.",
  },
  {
    title: "Profissionais sobrecarregados",
    description:
      "Arquitetos e engenheiros gastam horas em verificações que poderiam ser automatizadas.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Carrega o PDM ou projeto em PDF",
  },
  {
    icon: BookOpen,
    title: "Leitura",
    description: "A IA interpreta e estrutura o documento",
  },
  {
    icon: Search,
    title: "Extração",
    description: "Factos e regras são extraídos automaticamente",
  },
  {
    icon: ShieldCheck,
    title: "Validação",
    description: "Conformidade verificada contra regras locais",
  },
  {
    icon: FileText,
    title: "Relatório",
    description: "Resultado claro, auditável e exportável",
  },
];

const featureCards = [
  {
    icon: Bot,
    title: "Leitura automática de PDM",
    description:
      "Processamento de documentos regulamentares em linguagem natural.",
  },
  {
    icon: BadgeCheck,
    title: "Verificação de conformidade",
    description:
      "Motor de regras que valida parâmetros urbanísticos automaticamente.",
  },
  {
    icon: FileOutput,
    title: "Relatórios exportáveis",
    description: "Outputs claros, estruturados e prontos para uso profissional.",
  },
  {
    icon: MapPinned,
    title: "Contexto municipal",
    description: "Adaptado às especificidades de cada município português.",
  },
  {
    icon: FileSearch,
    title: "Evidência rastreável",
    description: "Cada conclusão ligada ao trecho exato do regulamento.",
  },
  {
    icon: Zap,
    title: "Velocidade real",
    description: "Análises que demoram dias, concluídas em minutos.",
  },
];

const faqItems = [
  {
    question: "O Imo Harmonia já está disponível?",
    answer:
      "O projeto está em desenvolvimento académico no IPG. Acompanha a nossa evolução.",
  },
  {
    question: "Para que perfis profissionais é indicado?",
    answer:
      "Arquitetos, engenheiros, técnicos de urbanismo e todos os profissionais que lidam com regulamentação PDM.",
  },
  {
    question: "Como funciona a análise por IA?",
    answer:
      "A plataforma processa documentos PDF, extrai regras e valida parâmetros de forma automática e auditável.",
  },
  {
    question: "Que municípios são suportados?",
    answer:
      "O MVP foca-se em municípios da região da Guarda, com expansão progressiva prevista.",
  },
  {
    question: "É possível colaborar com o projeto?",
    answer: "Sim. Entra em contacto através do formulário abaixo.",
  },
];

const trustItems = [
  { icon: Landmark, label: "Projeto académico IPG" },
  { icon: Bot, label: "IA aplicada ao urbanismo" },
  { icon: Trophy, label: "Poliempreende 2025" },
];

const mockupChecks = [
  { icon: Check, text: "Índice de ocupação: conforme", tone: "success" },
  { icon: Check, text: "Afastamentos mínimos: conforme", tone: "success" },
  {
    icon: AlertTriangle,
    text: "Altura máxima: verificar",
    tone: "warning",
  },
];

const FORM_INITIAL_STATE = {
  nome: "",
  email: "",
  perfil: "Arquiteto",
  mensagem: "",
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function LogoMark({ theme }) {
  return (
    <img
      src="/Fotos/logo.png"
      alt="Imo Harmonia logo"
      className="h-11 w-11 rounded-[15px] object-cover"
      style={{ filter: theme === "dark" ? "brightness(0) invert(1)" : "none" }}
    />
  );
}

function SectionHeading({ label, title, description, centered = false }) {
  const alignment = centered
    ? "mx-auto max-w-4xl text-center"
    : "max-w-4xl";

  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={alignment}
    >
      <p className="text-xs font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {label}
      </p>
      <h2
        className="mt-4 font-display text-[clamp(2rem,4.2vw,3rem)] font-[700] leading-[0.98] tracking-[-0.02em] text-[var(--text)] dark:text-[var(--text-dark)]"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 font-[400] text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.68)]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-0 mx-auto w-full max-w-[480px] lg:justify-self-end xl:max-w-[520px]"
    >
      <div className="overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--surface)] p-5 dark:bg-[var(--surface-dark)]">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              MOTOR REGULATÓRIO
            </p>
            <h3 className="mt-2 text-[18px] font-[600] text-[var(--text)] dark:text-[var(--text-dark)]">
              Análise PDM
            </h3>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] font-[500] text-[rgba(74,222,128,1)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[rgba(74,222,128,1)] pulse-dot" />
            Em curso
          </span>
        </div>

        <motion.div variants={heroGroup} initial="hidden" animate="visible" className="mt-5 space-y-3">
          {mockupChecks.map((item) => {
            const Icon = item.icon;
            const isWarning = item.tone === "warning";

            return (
              <motion.div
                key={item.text}
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
                  <p className="text-sm font-[600] text-[var(--text)] sm:text-[15px] dark:text-[var(--text-dark)]">{item.text}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.56)]">
                    {isWarning ? "Verificar" : "Conforme"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
    </motion.div>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[rgba(255,255,255,0.04)] transition-colors duration-300 dark:border-[var(--border-dark)] dark:bg-[rgba(255,255,255,0.05)]"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="pr-4 text-base font-semibold text-[var(--text)] dark:text-[var(--text-dark)] sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-t border-[var(--border)] px-5 py-5 text-[15px] leading-7 text-[var(--text-muted)] dark:border-[var(--border-dark)] dark:text-[rgba(240,239,233,0.68)] sm:px-6">
              {item.answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const storedTheme = window.localStorage.getItem("imo-harmonia-theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const [formSuccess, setFormSuccess] = useState(false);
  const [hcaptchaToken, setHCaptchaToken] = useState("");
  const [hcaptchaError, setHCaptchaError] = useState("");
  const hcaptchaRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("imo-harmonia-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (formSuccess) {
      setFormSuccess(false);
    }

    if (hcaptchaError) {
      setHCaptchaError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!hcaptchaToken) {
      setHCaptchaError("Por favor confirma o captcha antes de enviar.");
      return;
    }

    setFormSuccess(true);
    setFormData(FORM_INITIAL_STATE);
    setHCaptchaToken("");
    hcaptchaRef.current?.resetCaptcha?.();
  };

  return (
    <div className="relative overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 dark:bg-[var(--bg-dark)] dark:text-[var(--text-dark)]">


      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[rgba(249,249,249,0.96)] dark:border-[var(--border-dark)] dark:bg-[rgba(13,13,18,0.95)]"
            : "border-b border-[var(--border)] bg-[rgba(249,249,249,0.88)] dark:border-[var(--border-dark)] dark:bg-[rgba(13,13,18,0.85)]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#topo" className="flex items-center gap-3" onClick={closeMenu}>
            <LogoMark theme={theme} />
            <div>
              <p className="font-display text-xl font-[700] tracking-[-0.04em] text-[var(--text)] dark:text-[var(--text-dark)]">
                Imo Harmonia
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.6)]">
                Urbanismo Descomplicado
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--text-muted)] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[var(--text)] dark:hover:text-[var(--text-dark)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#solucao"
              className="hidden rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[rgba(255,255,255,0.12)] hover:text-[var(--text-dark)] dark:border-[var(--border-dark)] dark:text-[var(--text-dark)] dark:hover:border-[rgba(255,255,255,0.12)] sm:inline-flex"
            >
              Saber Mais
            </a>
            <button
              type="button"
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.8)] text-[var(--text)] transition-colors duration-200 hover:border-[rgba(255,255,255,0.12)] hover:text-[var(--text-dark)] dark:border-[var(--border-dark)] dark:bg-[var(--surface-elevated-dark)] dark:text-[var(--text-dark)] dark:hover:border-[rgba(255,255,255,0.12)] dark:hover:text-[var(--text-dark)]"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.8)] text-[var(--text)] transition-colors duration-200 dark:border-[var(--border-dark)] dark:bg-[var(--surface-elevated-dark)] dark:text-[var(--text-dark)] lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[var(--border)] bg-[rgba(249,249,249,0.96)] px-5 pb-5 pt-3 dark:border-[var(--border-dark)] dark:bg-[rgba(13,13,18,0.94)] lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[rgba(255,255,255,0.12)] hover:text-[var(--text-dark)] dark:border-[var(--border-dark)] dark:text-[var(--text-dark)] dark:hover:border-[rgba(255,255,255,0.12)]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#solucao"
                  onClick={closeMenu}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--accent-dark)]"
                >
                  Saber Mais
                </a>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="topo" className="relative z-10">
        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] xl:gap-16">
            <motion.div
              variants={heroGroup}
              initial="hidden"
              animate="visible"
              className="relative z-10 min-w-0 overflow-visible"
            >
              <motion.div
                variants={heroItem}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-xs font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  Instituto Politécnico da Guarda
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-xs font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  <Trophy className="h-4 w-4" />
                  Poliempreende 2025
                </span>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="mt-8 font-display text-[clamp(40px,5vw,64px)] font-[700] leading-[0.92] tracking-[-0.02em] text-[var(--text)] dark:text-[var(--text-dark)]"
              >
                Urbanismo
                <br />
                Descomplicado.
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mt-7 max-w-2xl text-lg leading-8 font-[400] text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.68)] sm:text-xl"
              >
                Aplicamos Inteligência Artificial à leitura de PDM e
                regulamentos urbanísticos — para que arquitetos e engenheiros
                percam menos tempo com burocracia.
              </motion.p>

              <motion.div
                variants={heroItem}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#problema"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-[700] text-white transition-colors duration-200 hover:bg-[var(--accent-dark)]"
                >
                  Conhecer o Projeto
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#solucao"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-6 py-3.5 text-sm font-[500] text-[var(--text)] transition-colors duration-200 hover:border-[rgba(255,255,255,0.08)] hover:text-[var(--text-dark)] dark:border-[rgba(255,255,255,0.08)] dark:text-[var(--text-dark)]"
                >
                  Saber Como Funciona
                </a>
              </motion.div>

              <motion.div
                variants={heroItem}
                className="mt-10 flex flex-wrap gap-4 text-sm text-[var(--text-muted)]"
              >
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="inline-flex items-center gap-2 text-[var(--text-muted)]">
                      <Icon className="h-4 w-4 text-[var(--text-muted)]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <HeroMockup />
          </div>
        </section>

        <section id="problema" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="O Problema"
              title="O urbanismo português é complexo por natureza."
              description="Entre regulamentos extensos, variações municipais e validações demoradas, o trabalho técnico perde horas em leitura e cruzamento de regras."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {problemCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={sectionReveal}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[20px] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-7 dark:bg-[rgba(255,255,255,0.04)]"
                >
                  <h3 className="font-display text-2xl font-[700] tracking-[-0.02em] text-[var(--text)] dark:text-[var(--text-dark)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 font-[400] text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.68)]">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="solucao"
          className="px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="A Solução"
              title="IA que lê regulamentos. Para que não tenhas de o fazer."
              description="Um fluxo claro, explicável e pensado para equipas técnicas que precisam de rapidez sem perder rigor regulamentar."
            />

            <div className="mt-14">
              <div className="grid gap-6 lg:grid-cols-5">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.article
                      key={step.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={sectionReveal}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-[20px] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-6 dark:bg-[rgba(255,255,255,0.04)]"
                    >
                      <div className="flex flex-col gap-4 text-center">
                        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                          <StepIcon className="h-6 w-6" />
                        </span>
                        <div>
                        <h3 className="font-display text-2xl font-[700] tracking-[-0.02em] text-[var(--text)] dark:text-[var(--text-dark)]">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-7 font-[400] text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.68)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="funcionalidades"
          className="px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Funcionalidades"
              title="Construído para profissionais do urbanismo."
              description="Cada módulo foi desenhado para reduzir interpretação manual, acelerar validação e produzir evidência clara."
            />

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {featureCards.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={sectionReveal}
                  transition={{ delay: index * 0.06 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-14 text-4xl font-[700] tracking-[-0.02em] text-[rgba(0,0,0,0.18)] dark:text-[rgba(255,255,255,0.18)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-[700] tracking-[-0.02em] text-[var(--text)] dark:text-[var(--text-dark)]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 font-[400] text-[var(--text-muted)]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={sectionReveal}
            className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--bg)] px-6 py-16 text-center sm:px-10 dark:border-[var(--border-dark)] dark:bg-[var(--bg-dark)]"
          >
            <div className="mx-auto max-w-4xl">
              <div className="award-trophy mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(37,99,235,0.16)] bg-[rgba(37,99,235,0.08)] text-[var(--accent)]">
                <Trophy className="h-9 w-9" />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                Reconhecimento
              </p>
              <h2
                className="mt-4 font-display text-[clamp(2.2rem,4.2vw,3rem)] font-[700] leading-[0.98] tracking-[-0.05em] text-[var(--text)] dark:text-[var(--text-dark)]"
                style={{ textWrap: "balance" }}
              >
                Vencedores do Poliempreende 2025
              </h2>
              <p className="mt-5 text-lg leading-8 text-[rgba(14,14,15,0.68)] dark:text-[rgba(240,239,233,0.68)]">
                Concurso de empreendedorismo do Instituto Politécnico da Guarda,
                edição 2025.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Perguntas frequentes."
              description="As respostas essenciais para perceber o estado, o foco e o potencial do projeto."
              centered
            />

            <div className="mt-12 space-y-4">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() =>
                    setOpenFaq((current) => (current === index ? -1 : index))
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Contacto"
              title="Fala connosco."
              description="Para parcerias, dúvidas técnicas ou interesse no projeto."
              centered
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={sectionReveal}
              className="mx-auto mt-12 max-w-2xl rounded-[8px] border border-[var(--border)] bg-[rgba(255,255,255,0.7)] p-6 dark:border-[var(--border-dark)] dark:bg-[rgba(255,255,255,0.05)] sm:p-8"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text)] dark:text-[var(--text-dark)]">
                    Nome
                  </span>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.46)]" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 pl-11 text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[rgba(107,114,128,0.72)] focus:border-[rgba(0,0,0,0.16)] focus:ring-2 focus:ring-[rgba(0,0,0,0.08)] dark:border-[var(--border-dark)] dark:bg-[var(--surface-dark)] dark:text-[var(--text-dark)]"
                      placeholder="O teu nome"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text)] dark:text-[var(--text-dark)]">
                    Email
                  </span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)] dark:text-[rgba(240,239,233,0.46)]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 pl-11 text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[rgba(107,114,128,0.72)] focus:border-[rgba(0,0,0,0.16)] focus:ring-2 focus:ring-[rgba(0,0,0,0.08)] dark:border-[var(--border-dark)] dark:bg-[var(--surface-dark)] dark:text-[var(--text-dark)]"
                      placeholder="nome@empresa.pt"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text)] dark:text-[var(--text-dark)]">
                    Perfil profissional
                  </span>
                  <select
                    name="perfil"
                    value={formData.perfil}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition-colors duration-200 focus:border-[rgba(0,0,0,0.16)] focus:ring-2 focus:ring-[rgba(0,0,0,0.08)] dark:border-[var(--border-dark)] dark:bg-[var(--surface-dark)] dark:text-[var(--text-dark)]"
                  >
                    <option>Arquiteto</option>
                    <option>Engenheiro</option>
                    <option>Técnico Municipal</option>
                    <option>Estudante</option>
                    <option>Outro</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--text)] dark:text-[var(--text-dark)]">
                    Mensagem
                  </span>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition-colors duration-200 placeholder:text-[rgba(107,114,128,0.72)] focus:border-[rgba(0,0,0,0.16)] focus:ring-2 focus:ring-[rgba(0,0,0,0.08)] dark:border-[var(--border-dark)] dark:bg-[var(--surface-dark)] dark:text-[var(--text-dark)]"
                    placeholder="Conta-nos como gostarias de colaborar."
                  />
                </label>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <HCaptcha
                    sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                    onVerify={(token) => {
                      setHCaptchaToken(token);
                      setHCaptchaError("");
                    }}
                    onExpire={() => setHCaptchaToken("")}
                    ref={hcaptchaRef}
                    size="normal"
                    theme={theme}
                  />
                </div>
                {hcaptchaError ? (
                  <p className="text-sm text-rose-500">{hcaptchaError}</p>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--accent-dark)]"
                >
                  Enviar Mensagem
                </button>
              </form>

              <AnimatePresence>
                {formSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 flex items-center gap-3 rounded-2xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] px-4 py-4 text-[rgba(22,101,52,1)] dark:border-[rgba(74,222,128,0.16)] dark:bg-[rgba(34,197,94,0.1)] dark:text-[rgba(134,239,172,1)]"
                  >
                    <span className="success-pop inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(34,197,94,0.14)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium">
                      Mensagem enviada! Entraremos em contacto em breve.
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-10 text-[var(--text)] dark:border-[var(--border-dark)] dark:bg-[var(--bg-dark)] dark:text-[var(--text-dark)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 border-b border-[rgba(0,0,0,0.08)] pb-6 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3"> 
              <LogoMark theme={theme} /> 
              <div>
                <p className="font-display text-xl font-[700] tracking-[-0.04em] text-[var(--text)] dark:text-[var(--text-dark)]">
                  Imo Harmonia
                </p>
                <p className="text-sm text-[var(--text-muted)] dark:text-white/56">Urbanismo Descomplicado</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-muted)] dark:text-white/62">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[var(--text)] dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <p className="text-sm font-medium text-[var(--text-muted)] dark:text-white/62">
              IPG · Poliempreende 2025
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-[var(--text-muted)] dark:text-white/56 md:flex-row md:items-center md:justify-between">
            <p>© 2025 Imo Harmonia · BolinaTEC</p>
            <p className="text-center">
              Desenvolvido com ❤️ por Rodrigo Henriques
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
