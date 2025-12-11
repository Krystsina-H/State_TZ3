import './App.css';
import { Header } from './components/Header';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { ControlsPanel } from './components/ControlsPanel';
import { UserProfil } from './components/UserProfil';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme theme--${theme}`}>
      <ControlsPanel />
      <Header />
      <UserProfil />
    </div>
  );
}

export default App;
