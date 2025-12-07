import './App.css';
import UserProfil from './components/UserProfil';
import TaskList from './components/TaskList';
import ShoppingCart from './components/ShoppingCart';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme theme--${theme}`}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <UserProfil />
      <TaskList />
      <ShoppingCart />
    </div>
  );
}

export default App;
