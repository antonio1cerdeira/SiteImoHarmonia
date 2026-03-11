import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Clock3,
  Coins,
  Code2,
  FileCheck2,
  FileSearch,
  Files,
  GraduationCap,
  Landmark,
  Layers3,
  MapPinned,
  Megaphone,
  Menu,
  Palette,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Sun,
  Trophy,
  Users,
  X,
  Moon,
} from "lucide-react";

const navItems = [
  ["#sobre", "Sobre"],
  ["#problema", "Problema"],
  ["#funcionamento", "Como funciona"],
  ["#funcionalidades", "Funcionalidades"],
  ["#poliempreende", "Poliempreende 2025"],
  ["#equipa", "Equipa"],
];

const metrics = [
  ["IA aplicada", "Interpretação assistida de PDM e regulamentos urbanos"],
  ["Leitura clara", "Menos ambiguidade para decisões técnicas mais rápidas"],
  ["Foco prático", "Pensado para arquitetos, engenheiros e urbanistas"],
];

const problems = [
  [Layers3, "Complexidade normativa", "Regulamentos extensos acumulam artigos, condicionantes e exceções difíceis de cruzar rapidamente."],
  [Landmark, "Burocracia técnica", "A leitura manual de legislação obriga a validações sucessivas antes de avançar com um projeto."],
  [FileSearch, "Interpretação difícil", "Mesmo profissionais experientes enfrentam ambiguidades na leitura das regras aplicáveis."],
  [Clock3, "Consumo de tempo", "Arquitetos e engenheiros passam horas a consolidar informação dispersa em vários documentos."],
];

const steps = [
  [BrainCircuit, "01", "Análise automática de regulamentos com Inteligência Artificial", "A plataforma processa regulamentos urbanísticos e destaca o que é relevante para acelerar a leitura técnica."],
  [MapPinned, "02", "Identificação de permissões e restrições urbanísticas", "As regras surgem organizadas por permissões, limitações e condicionantes para reduzir interpretação dispersa."],
  [Files, "03", "Apoio na criação de documentação técnica", "A informação consolidada ajuda a estruturar documentação com mais consistência e menos margem para erro."],
];

const features = [
  [ScanSearch, "Análise inteligente de PDM", "Leitura orientada por IA para encontrar rapidamente normas relevantes em documentos extensos."],
  [Sparkles, "Interpretação automática de normas", "Transforma linguagem regulamentar complexa em informação mais clara e operacional."],
  [ShieldCheck, "Identificação de restrições urbanísticas", "Sinaliza limitações, condicionantes e requisitos com leitura mais direta."],
  [Building2, "Apoio a arquitetos e engenheiros", "Organiza contexto técnico útil para decisões mais rápidas ao longo do projeto."],
  [FileCheck2, "Redução de erros em projetos", "Menos interpretação manual repetitiva significa mais consistência na preparação técnica."],
];

const achievements = [
  [Trophy, "Vitória regional", "O projeto venceu a fase regional do Poliempreende 2025."],
  [Coins, "Prémio monetário", "Recebeu um prémio de 2000€ para acelerar o desenvolvimento."],
  [GraduationCap, "Final nacional", "Representará o Instituto Politécnico da Guarda na Universidade de Aveiro."],
];

const teamAreas = [
  [Code2, "Engenharia Informática"],
  [Palette, "Design"],
  [Megaphone, "Marketing"],
  [Users, "Comunicação"],
  [BadgeCheck, "Gestão de Recursos Humanos"],
];

const faqs = [
  [
    "O que é o Imo Harmonia?",
    "O Imo Harmonia é uma plataforma que utiliza Inteligência Artificial para simplificar a interpretação de Planos Diretores Municipais e regulamentos urbanísticos.",
  ],
  [
    "A quem se destina o projeto?",
    "O projeto foi pensado para arquitetos, engenheiros e profissionais ligados ao urbanismo que precisam de analisar regras, permissões e restrições com maior clareza.",
  ],
  [
    "Qual é o principal objetivo da plataforma?",
    "O objetivo é reduzir a complexidade da leitura regulamentar, poupar tempo na análise técnica e tornar a informação urbanística mais acessível.",
  ],
  [
    "Qual é a origem do projeto?",
    "O Imo Harmonia foi desenvolvido por estudantes do Instituto Politécnico da Guarda e distinguido no âmbito do Poliempreende 2025.",
  ],
];

const mockupScreens = [
  {
    id: "dashboard",
    label: "Dashboard",
    src: "/Fotos/Dashboad.png",
    alt: "Mockup do dashboard da plataforma Imo Harmonia",
  },
  {
    id: "Login",
    label: "Login",
    src: "/Fotos/login.png",
    alt: "Mockup de Login da plataforma Imo Harmonia",
  },
  {
    id: "projetos",
    label: "Projetos",
    src: "/Fotos/Projetos.png",
    alt: "Mockup da vista de projetos da plataforma Imo Harmonia",
  },
  {
    id: "precheck",
    label: "PreCheck",
    src: "/Fotos/PreCheck.png",
    alt: "Mockup da funcionalidade PreCheck da plataforma Imo Harmonia",
  },
];

const motionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <Motion.div className={className} {...motionProps} transition={{ ...motionProps.transition, delay }}>
      {children}
    </Motion.div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
      <span className="badge-pill">{eyebrow}</span>
      <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>
    </Reveal>
  );
}

function SmartCityPreview({ activeMockup, setActiveMockup }) {
  return (
    <Reveal className="relative mx-auto w-full max-w-[720px]" delay={0.15}>
      <div className="absolute left-4 top-8 h-40 w-40 rounded-full bg-cyan-300/35 blur-3xl" />
      <div className="absolute right-6 top-2 h-44 w-44 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-36 w-36 rounded-full bg-sky-200/35 blur-3xl" />

      <div className="relative">
        <Motion.div
          className="overflow-hidden rounded-[32px] border border-white/70 bg-white/78 p-3 shadow-[0_32px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/78 dark:shadow-[0_32px_90px_rgba(2,6,23,0.38)]"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2 }}
          key={activeMockup.id}
        >
          <img
            src={activeMockup.src}
            alt={activeMockup.alt}
            className="w-full rounded-[24px] border border-slate-200/70 shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:border-white/10"
          />
        </Motion.div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {mockupScreens.map((screen, index) => {
            const isActive = screen.id === activeMockup.id;

            return (
              <Motion.button
                key={screen.id}
                type="button"
                onClick={() => setActiveMockup(screen)}
                className={`overflow-hidden rounded-[24px] border p-2 text-left transition ${
                  isActive
                    ? "border-cyan-300 bg-white shadow-[0_18px_45px_rgba(34,211,238,0.18)] dark:border-cyan-400/40 dark:bg-slate-900"
                    : "border-white/70 bg-white/70 shadow-[0_16px_35px_rgba(15,23,42,0.1)] hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/70"
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.28 + index * 0.06 }}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full rounded-[18px] border border-slate-200/70 dark:border-white/10"
                />
                <div className="px-2 pb-1 pt-3">
                  <p className="text-sm font-semibold text-slate-950 dark:text-slate-100">{screen.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    {isActive ? "Vista ativa" : "Clique para ver"}
                  </p>
                </div>
              </Motion.button>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMockup, setActiveMockup] = useState(mockupScreens[0]);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = window.localStorage.getItem("imo-harmonia-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("imo-harmonia-theme", theme);
  }, [theme]);

  return (
    <div className={`relative overflow-x-hidden ${theme === "dark" ? "dark" : ""}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,248,255,0.6),transparent)]" />
      <header className="fixed inset-x-0 top-0 z-[80] w-full border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <a href="#topo" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <img
                src="/Fotos/logo.png"
                alt="Logótipo Imo Harmonia"
                className="h-8 w-8 object-contain dark:brightness-0 dark:invert"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Imo Harmonia</p>
              <p className="text-base font-semibold text-slate-950">Urbanismo Descomplicado</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-slate-950">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="#sobre" className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:inline-flex">
              Explorar o Projeto
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 lg:hidden">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <Motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/60 bg-white/92 px-6 pb-6 pt-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden">
              <nav className="flex flex-col gap-2">
                {navItems.map(([href, label]) => (
                  <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950">
                    {label}
                  </a>
                ))}
              </nav>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#2563eb_0%,#06b6d4_52%,#8b5cf6_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.28)]">
                Explorar o Projeto
                <ArrowRight className="h-4 w-4" />
              </a>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="topo" className="pt-24 sm:pt-28">
        <section className="relative px-6 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
            <Reveal className="relative z-10">
              <span className="badge-pill">Plataforma de IA para leitura urbanística</span>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl">Imo Harmonia<span className="mt-3 block bg-[linear-gradient(135deg,#0f172a_0%,#2563eb_44%,#06b6d4_72%,#8b5cf6_100%)] bg-clip-text text-transparent">Urbanismo Descomplicado</span></h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">Uma plataforma que utiliza Inteligência Artificial para simplificar a interpretação dos Planos Diretores Municipais (PDM).</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">O objetivo é transformar regulamentos extensos e difíceis de interpretar em apoio técnico mais claro, rápido e útil para profissionais que precisam de decidir com confiança.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#sobre" className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#2563eb_0%,#06b6d4_52%,#8b5cf6_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.34)] transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(37,99,235,0.4)]">Explorar o Projeto<ArrowRight className="h-5 w-5" /></a>
                <a href="#poliempreende" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/85 px-7 py-4 text-base font-semibold text-slate-900 shadow-[0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-slate-300">Ver Poliempreende 2025</a>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {metrics.map(([value, label], index) => (
                  <Reveal key={value} className="glass-card p-5" delay={0.14 + index * 0.08}>
                    <p className="text-lg font-semibold tracking-[-0.04em] text-slate-950">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <SmartCityPreview activeMockup={activeMockup} setActiveMockup={setActiveMockup} />
          </div>
        </section>

        <section id="sobre" className="section-shell px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Sobre o projeto" title="Uma plataforma criada no IPG para tornar o urbanismo muito mais acessível." text="O Imo Harmonia foi desenvolvido por estudantes do Instituto Politécnico da Guarda (IPG) e usa Inteligência Artificial para analisar regulamentos urbanísticos, simplificar a interpretação de regras dos PDM e reduzir a complexidade enfrentada por arquitetos, engenheiros e profissionais do urbanismo." /><div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"><Reveal className="glass-card p-8 sm:p-10"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Missão</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Menos complexidade. Mais clareza técnica.</h3><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">A plataforma foi pensada para apoiar a análise de regulamentos municipais com uma experiência mais intuitiva, moderna e objetiva, reduzindo o esforço necessário para compreender normas, permissões e restrições urbanísticas.</p></Reveal><Reveal delay={0.1} className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.22),transparent_34%)]" /><div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Impacto</p><ul className="mt-8 space-y-4 text-base leading-7 text-slate-200"><li className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />Simplifica a interpretação de regras urbanísticas complexas.</li><li className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />Apoia decisões técnicas com leitura mais rápida e segura.</li><li className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />Aproxima tecnologia, urbanismo e experiência prática de projeto.</li></ul></div></Reveal></div></div></section>

        <section id="problema" className="section-shell px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="O problema" title="Os regulamentos urbanísticos continuam a ser complexos, burocráticos e demorados." text="Profissionais de arquitetura, engenharia e urbanismo passam frequentemente horas a interpretar legislação manualmente, a cruzar artigos e a confirmar condicionantes antes de conseguirem avançar com segurança." /><div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{problems.map((item, index) => { const Icon = item[0]; const title = item[1]; const text = item[2]; return <Motion.article key={title} className="glass-card p-7" {...motionProps} transition={{ ...motionProps.transition, delay: index * 0.08 }} whileHover={{ y: -8 }}><div className="icon-wrap"><Icon className="h-5 w-5" /></div><h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-slate-950">{title}</h3><p className="mt-4 text-base leading-7 text-slate-600">{text}</p></Motion.article>; })}</div></div></section>

        <section id="funcionamento" className="section-shell px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Como funciona" title="Três etapas simples para transformar regulamentação extensa em apoio técnico acionável." text="A experiência foi desenhada para parecer uma plataforma tecnológica premium: clara, orientada por IA e focada em resultados concretos no trabalho diário." /><div className="mt-14 grid gap-6 lg:grid-cols-3">{steps.map((item, index) => { const Icon = item[0]; const number = item[1]; const title = item[2]; const text = item[3]; return <Motion.article key={number} className="glass-card group relative overflow-hidden p-8" {...motionProps} transition={{ ...motionProps.transition, delay: index * 0.1 }} whileHover={{ y: -10 }}><div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"><div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_30%)]" /></div><div className="relative"><div className="flex items-center justify-between"><span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">{number}</span><div className="icon-wrap"><Icon className="h-5 w-5" /></div></div><h3 className="mt-10 text-2xl font-semibold tracking-[-0.05em] text-slate-950">{title}</h3><p className="mt-4 text-base leading-7 text-slate-600">{text}</p></div></Motion.article>; })}</div></div></section>

        <section id="funcionalidades" className="section-shell px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Funcionalidades" title="Ferramentas desenhadas para um fluxo de trabalho urbano mais rápido e mais rigoroso." text="Cada funcionalidade foi pensada para reduzir fricção, apoiar leitura técnica e elevar a qualidade da interpretação regulamentar." /><div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{features.map((item, index) => { const Icon = item[0]; const title = item[1]; const text = item[2]; return <Motion.article key={title} className="glass-card group p-7" {...motionProps} transition={{ ...motionProps.transition, delay: index * 0.07 }} whileHover={{ y: -8 }}><div className="flex items-start justify-between gap-4"><div className="icon-wrap"><Icon className="h-5 w-5" /></div><ArrowRight className="h-5 w-5 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-slate-500" /></div><h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-slate-950">{title}</h3><p className="mt-4 text-base leading-7 text-slate-600">{text}</p></Motion.article>; })}</div></div></section>

        <section id="poliempreende" className="section-shell px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Poliempreende 2025" title="Um projeto académico com validação real e projeção nacional." text="O Imo Harmonia venceu a fase regional do Poliempreende 2025, recebeu um prémio de 2000€ e vai representar o Instituto Politécnico da Guarda na final nacional, na Universidade de Aveiro." /><div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"><Reveal className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-slate-950 px-8 py-10 text-white shadow-[0_28px_90px_rgba(15,23,42,0.2)] sm:px-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.24),transparent_34%)]" /><div className="relative"><span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">Projeto premiado</span><h3 className="mt-8 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white">Inovação tecnológica criada no IPG para simplificar decisões urbanísticas.</h3><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">O reconhecimento no Poliempreende reforça a relevância do projeto e confirma o potencial da plataforma para transformar a forma como regulamentos urbanísticos são lidos e aplicados.</p></div></Reveal><div className="grid gap-6">{achievements.map((item, index) => { const Icon = item[0]; const title = item[1]; const text = item[2]; return <Reveal key={title} className="glass-card p-7" delay={index * 0.08}><div className="flex items-center gap-4"><div className="icon-wrap"><Icon className="h-5 w-5" /></div><div><h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">{title}</h3><p className="mt-2 text-base leading-7 text-slate-600">{text}</p></div></div></Reveal>; })}</div></div></div></section>

        <section id="equipa" className="section-shell px-6 pb-16 lg:px-8 lg:pb-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Equipa" title="Uma equipa multidisciplinar com visão tecnológica, criativa e estratégica." text="O projeto foi desenvolvido por estudantes do Instituto Politécnico da Guarda com competências complementares em Engenharia Informática, Design, Marketing, Comunicação e Gestão de Recursos Humanos." /><div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.05fr]"><div className="grid gap-6"><Reveal className="glass-card overflow-hidden p-4"><div className="overflow-hidden rounded-[28px] border border-white/60 bg-slate-50 dark:border-white/10 dark:bg-slate-900/60"><img src="/Fotos/equipa.jpeg" alt="Equipa do projeto Imo Harmonia" className="h-auto max-h-[520px] w-full object-contain sm:min-h-[360px] sm:object-cover" /></div><figcaption className="px-3 pb-3 pt-6"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Instituto Politécnico da Guarda</p><p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-slate-950">Talento académico de várias áreas a construir um produto com ambição real.</p></figcaption></Reveal><Reveal delay={0.16} className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(240,249,255,0.92),rgba(245,243,255,0.92))] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,0.86),rgba(30,41,59,0.92))] dark:shadow-[0_24px_70px_rgba(2,6,23,0.38)]"><div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-400/10" /><div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-400/10" /><div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Visão comum</p><p className="mt-5 max-w-xl text-2xl font-semibold tracking-[-0.05em] text-slate-950">Criar um produto premium que torne o urbanismo mais simples, tecnológico e acessível.</p></div></Reveal></div><div className="grid content-start gap-6"><Reveal className="glass-card p-8" delay={0.1}><p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Áreas envolvidas</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{teamAreas.map((item) => { const Icon = item[0]; const label = item[1]; return <div key={label} className="rounded-[24px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_16px_40px_rgba(2,6,23,0.3)]"><div className="icon-wrap"><Icon className="h-5 w-5" /></div><p className="mt-5 text-lg font-semibold tracking-[-0.03em] text-slate-950">{label}</p></div>; })}</div></Reveal></div></div></div></section>

        <section className="section-shell px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="FAQ" title="Perguntas frequentes sobre o projeto." text="Uma síntese curta para contextualizar a proposta, o objetivo e o enquadramento do Imo Harmonia." /><div className="mt-14 grid gap-6 md:grid-cols-2">{faqs.map(([question, answer], index) => <Reveal key={question} className="glass-card p-7" delay={index * 0.06}><p className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{question}</p><p className="mt-4 text-base leading-7 text-slate-600">{answer}</p></Reveal>)}</div></div></section>

        <section className="px-6 pb-16 lg:px-8 lg:pb-20"><div className="mx-auto max-w-7xl"><Reveal className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(240,249,255,0.95),rgba(245,243,255,0.95))] px-8 py-10 shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:px-10 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(15,23,42,0.9),rgba(30,41,59,0.92))] dark:shadow-[0_28px_90px_rgba(2,6,23,0.42)]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_32%)]" /><div className="relative"><span className="badge-pill">Síntese final</span><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">O Imo Harmonia pretende tornar a interpretação urbanística mais simples, clara e acessível.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Trata-se de um projeto académico desenvolvido no Instituto Politécnico da Guarda, com foco na aplicação de Inteligência Artificial para apoiar a leitura de regulamentos urbanísticos e reduzir a complexidade enfrentada por profissionais da área.</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_10px_24px_rgba(2,6,23,0.24)]">Projeto desenvolvido no IPG</span><span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_10px_24px_rgba(2,6,23,0.24)]">Inteligência Artificial aplicada ao urbanismo</span><span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_10px_24px_rgba(2,6,23,0.24)]">Distinguido no Poliempreende 2025</span></div></div></Reveal></div></section>
      </main>

      <footer className="px-6 pb-8 lg:px-8 lg:pb-10"><div className="mx-auto max-w-7xl"><div className="rounded-[32px] border border-white/70 bg-white/75 px-8 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xl font-semibold tracking-[-0.04em] text-slate-950">Imo Harmonia</p><p className="mt-2 text-base text-slate-600">Instituto Politécnico da Guarda</p><p className="text-base text-slate-600">Projeto apresentado no Poliempreende 2025</p></div><p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">© 2025 Imo Harmonia</p></div></div></div></footer>
    </div>
  );
}



