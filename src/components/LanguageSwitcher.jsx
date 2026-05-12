import { useLanguage } from "../hooks/useLanguage";

export default function LanguageSwitcher() {
  const { language, setLanguage, SUPPORTED_LANGUAGES } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] px-2 py-1 text-[10px] font-mono uppercase tracking-widest">
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-1.5 py-0.5 rounded transition-colors duration-200 ${
            language === lang
              ? 'bg-[var(--secondary)] text-[var(--on-secondary)]'
              : 'text-[var(--text-muted)] hover:text-[var(--text)]'
          }`}
          aria-label={`Switch to ${lang === 'pt' ? 'Portuguese' : 'English'}`}
          aria-pressed={language === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
