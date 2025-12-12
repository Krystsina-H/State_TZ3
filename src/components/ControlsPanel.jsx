import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from './translations';

export const ControlsPanel = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { changeLanguage, language, toggleLanguage } =
    useContext(LanguageContext);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button className={`button--${theme}`} onClick={toggleLanguage}>
        {translations[language].changeLanguage}
      </button>
      <button
        className={`button--${theme} ${language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`button--${theme} ${language === 'ru' ? 'active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
      <button
        className={`button--${theme} ${language === 'de' ? 'active' : ''}`}
        onClick={() => changeLanguage('de')}
      >
        DE
      </button>

      <button className={`button--${theme}`} onClick={toggleTheme}>
        {translations[language].changeTheme}
      </button>
    </div>
  );
};
