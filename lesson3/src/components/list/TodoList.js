import React from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.css';

const TodoList = ({tasks, handleDelete}) => {
    return (
        <ul className={classes.tasks}>
            {
                tasks.map(item=> <Todo
                    key={item.id}
                    todo={item}
                    handleDelete={handleDelete}/>)
            }

        </ul>

    )

}



export default TodoList;