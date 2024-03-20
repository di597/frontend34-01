import React from 'react';
import classes from './Todo.module.css';
import Button from "../button/Button";

const Todo = ({todo, handleDelete}) => {
    return (
        <li className={classes.todo}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <button onClick={()=>handleDelete(todo.id)}>
                Delete
            </button>

        </li>
    )
}

export default Todo;