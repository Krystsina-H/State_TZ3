import { LanguageContext } from '../context/LanguageContext';
import { useState } from 'react';
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => {
    setLanguage((cur) => {
      if (cur === 'en') return 'ru';
      if (cur === 'ru') return 'de';
      return 'en';
    });
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
