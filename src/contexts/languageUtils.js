import pt from '../i18n/pt.json';
import en from '../i18n/en.json';

export const TRANSLATIONS = {
  pt,
  en,
};

export const SUPPORTED_LANGUAGES = ['pt', 'en'];

// Função para inicializar idioma
export const getInitialLanguage = () => {
  const stored = localStorage.getItem('app-language');
  
  let newLang = 'en'; // fallback padrão

  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    newLang = stored;
  } else if (typeof navigator !== 'undefined') {
    // Detectar via navigator.language (ex: 'pt-PT' → 'pt')
    const browserLang = navigator.language.split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      newLang = browserLang;
    }
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = newLang;
  }
  
  localStorage.setItem('app-language', newLang);
  return newLang;
};
