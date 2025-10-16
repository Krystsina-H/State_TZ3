import React, { useState } from 'react';
import TaskItem from './TaskItem';

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

  console.log('TaskList перерисовывается!');

  return (
    <>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
      <button onClick={changeTask}>Добавить задачу</button>
      <button onClick={deleteTask}>Удалить последнюю задачу</button>
    </>
  );
};

export default TaskList;
