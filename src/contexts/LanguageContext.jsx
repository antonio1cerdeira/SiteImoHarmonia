import { createContext, useState, useEffect } from 'react';
import { TRANSLATIONS, SUPPORTED_LANGUAGES, getInitialLanguage } from './languageUtils';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  // Sincronizar atributo lang quando idioma muda
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('app-language', language);
  }, [language]);

  // Mudar idioma dinamicamente
  const setLanguage = (newLang) => {
    if (SUPPORTED_LANGUAGES.includes(newLang) && newLang !== language) {
      setLanguageState(newLang);
    }
  };

  // Obter tradução aninhada de forma segura
  const t = (path) => {
    const keys = path.split('.');
    let result = TRANSLATIONS[language];

    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // Fallback para inglês se a chave não existir
        result = TRANSLATIONS['en'];
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = result[fallbackKey];
          } else {
            return path; // Retorna a chave se não encontrar
          }
        }
        return result;
      }
    }

    return result;
  };

  const value = {
    language,
    setLanguage,
    t,
    SUPPORTED_LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
