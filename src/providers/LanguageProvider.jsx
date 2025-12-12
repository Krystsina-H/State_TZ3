import { LanguageContext } from '../context/LanguageContext';
import { useState } from 'react';
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    setLanguage((cur) => {
      if (cur === 'en') return 'ru';
      if (cur === 'ru') return 'de';
      if (cur === 'de') return 'en';
      return cur;
    });
  };
  const changeLanguage = (lang) => {
    if (['en', 'ru', 'de'].includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
