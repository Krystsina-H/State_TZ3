import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from './translations';

export const ControlsPanel = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { changeLanguage, language, toggleLanguage } =
    useContext(LanguageContext);
  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button className={`button--${theme}`} onClick={toggleLanguage}>
        {translations[language].changeLanguage}
      </button>
      <select
        className={`select--${theme}`}
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="de">Deutsch</option>
      </select>
      <button className={`button--${theme}`} onClick={toggleTheme}>
        {translations[language].changeTheme}
      </button>
    </div>
  );
};
