import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой']);
  const randomTask = [
    'Проветрить комнату',
    'Заказать продукты',
    'Написать список задач',
    'Позвонить родителям',
    'Приготовить ужин',
  ];

  const changeTask = () => {
    const random = randomTask[Math.floor(Math.random() * randomTask.length)];
    setTasks([...tasks, random]);
  };
  const deleteTask = () => {
    if (tasks.length > 0) {
      setTasks(tasks.slice(0, -1));
    }
  };
  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={changeTask}>Добавить задачу</button>
      <button onClick={deleteTask}>Удалить последнюю задачу</button>
    </div>
  );
};

export default TaskList;
