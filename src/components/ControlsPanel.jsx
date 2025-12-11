import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from './translations';

export const ControlsPanel = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLanguage, language } = useContext(LanguageContext);
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <button className={`button--${theme}`} onClick={toggleLanguage}>
        {translations[language].changeLanguage}
      </button>
      <button className={`button--${theme}`} onClick={toggleTheme}>
        {translations[language].changeTheme}
      </button>
    </div>
  );
};
