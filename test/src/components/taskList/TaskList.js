import React from 'react';
import classes from "./TaskList.module.sass";
const TaskList = ({ tasks, onEditTask, onSaveTask, onRemoveTask }) => {
    return (
        <ul className="taskList">
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    {task.isEditing ? (
                        <input
                            type="text"
                            value={task.text}
                            onChange={(e) => onSaveTask(task.id, e.target.value)}
                        />
                    ) : (
                        <div className={classes.taskBox}>{task.text}</div>
                    )}
                    <div>
                        <button onClick={() => onEditTask(task.id)}>Edit</button>
                        <button onClick={() => onRemoveTask(task.id)}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
