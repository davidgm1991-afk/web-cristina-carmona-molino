import { createContext, useState } from 'react';
import es from '../i18n/es';
import en from '../i18n/en';

const translations = { es, en };

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
