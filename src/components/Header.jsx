import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from './translations';

export const Header = () => {
  const { language } = useContext(LanguageContext);
  return <h1>{translations[language].welcome}</h1>;
};
