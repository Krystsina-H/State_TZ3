import React from 'react';
const UserInfo = React.memo(({ user }) => {
  console.log('UserInfo перерисовывается!', user.name);
  return (
    <>
      <h3>Информация о пользователе:</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? 'Да' : 'Нет'}</p>
    </>
  );
});

export default UserInfo;
