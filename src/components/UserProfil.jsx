import React, { useState } from 'react';

const UserProfil = () => {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  });
  const changeName = () => {
    setUser({ ...user, name: user.name === 'Иван' ? 'Валерий' : 'Иван' });
  };

  const incrementAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const changeActive = () => {
    setUser({ ...user, isActive: !user.isActive });
  };

  return (
    <div>
      <h2>Профиль пользователя:</h2>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? 'Да' : 'Нет'}</p>
      <button onClick={changeName}>Сменить имя</button>
      <button onClick={incrementAge}>Увеличить возраст</button>
      <button onClick={changeActive}>Переключить активность</button>
    </div>
  );
};
export default UserProfil;
