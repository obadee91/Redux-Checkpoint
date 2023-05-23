import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './ListTask.css';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const showDoneTasks = useSelector((state) => state.showDoneTasks);

  const filteredTasks = showDoneTasks ? tasks : tasks.filter((task) => !task.isDone);

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
