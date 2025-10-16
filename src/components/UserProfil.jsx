import React, { useState } from 'react';
import UserInfo from './UserInfo';

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
    <>
      <UserInfo user={user} />
      <button onClick={changeName}>Сменить имя</button>
      <button onClick={incrementAge}>Увеличить возраст</button>
      <button onClick={changeActive}>Переключить активность</button>
    </>
  );
};
export default UserProfil;
