import React from 'react';
const TaskItem = React.memo(({ task, index }) => {
  console.log(`TaskItem ${index} перерисовывается:`, task);

  return <li>{task}</li>;
});
export default TaskItem;
