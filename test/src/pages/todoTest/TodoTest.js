import React, { useState } from 'react';
import TaskInput from '../../components/taskInput/TaskInput';
import TaskList from '../../components/taskList/TaskList';
import classes from "./TodoTest.module.sass";

const TodoTest = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9),
                text: inputValue,
                isEditing: false
            };
            setTasks([...tasks, newTask]);
            setInputValue('');
        }
    };

    const handleClearAll = () => {
        setTasks([]);
    };

    const handleRemoveTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleEditTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isEditing: true } : task
        ));
    };

    const handleSaveTask = (taskId, updatedText) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, text: updatedText, isEditing: false } : task
        ));
    };

    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>To Do</p>
            <div className="todo-test">
                <TaskInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onAddTask={handleAddTask}
                />
                <TaskList
                    tasks={tasks}
                    onRemoveTask={handleRemoveTask}
                    onEditTask={handleEditTask}
                    onSaveTask={handleSaveTask}
                />
                <div>
                    <button onClick={handleAddTask}>Add Task</button>
                    <button onClick={handleClearAll}>Clear all</button>
                </div>
            </div>
        </div>
    );

};

export default TodoTest;
