import React, { memo } from 'react';
const UserInfo = memo(({ user }) => {
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
