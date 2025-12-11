import { createContext } from 'react';

export const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  languages: ['en', 'ru', 'de'],
});
