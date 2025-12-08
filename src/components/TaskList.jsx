import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: Date.now() + Math.random(), text: 'Купить хлеб' },
    { id: Date.now() + Math.random(), text: 'Погулять с собакой' },
  ]);

  const randomTasks = [
    'Проветрить комнату',
    'Заказать продукты',
    'Написать список задач',
    'Позвонить родителям',
    'Приготовить ужин',
  ];

  const addTask = () => {
    const randomText =
      randomTasks[Math.floor(Math.random() * randomTasks.length)];
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        text: randomText,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task.text}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
      <button onClick={addTask}>Добавить задачу</button>
    </>
  );
};

export default TaskList;
