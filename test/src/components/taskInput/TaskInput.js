import React from 'react';
import classes from "./TaskInput.module.sass";

const TaskInput = ({ value, onChange, onAddTask }) => {
    return (
        <div>
            <input className={classes.input} type="text" value={value} onChange={onChange} />
            <button onClick={onAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
