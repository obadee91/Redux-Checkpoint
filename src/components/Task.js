import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../actions';
import './Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    if (description.trim() !== '') {
      dispatch(editTask(task.id, description));
      setEditing(false);
    }
  };

  return (
    <li className="task-item">
      {!editing ? (
        <div className="task-content">
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleTask(task.id))}
            className="task-checkbox"
          />
          <span className="task-description">{task.description}</span>
          <button onClick={() => setEditing(true)} className="edit-task-btn">Edit</button>
        </div>
      ) : (
        <div className="task-content">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="edit-task-input"
          />
          <button onClick={handleEdit} className="save-task-btn">Save</button>
        </div>
      )}
    </li>
  );
};

export default Task;
