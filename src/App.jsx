import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import UserProfil from './components/UserProfil';
import TaskList from './components/TaskList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProfil />
      <hr />
      <TaskList />
      <hr />
      <ShoppingCart />
    </>
  );
}

export default App;
