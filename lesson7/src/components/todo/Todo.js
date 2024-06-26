import React, {useState} from 'react';
import classes from './Todo.module.css';
import Button from "../button/Button";

const Todo = ({ todo, handleDelete, handleDone, handleEdit, handleCurrentEdit,isEdit }) => {
    const [ input, setInput ] = useState('');
    const handleSave = () => {
        handleEdit({
            ...todo, title: input
        });
        handleCurrentEdit('')

    }

    return (
        <>
            {
                isEdit &&  <div>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                    <Button title={'Save'} action={()=> {
                        handleEdit({
                            ...todo, title: input
                        });
                        handleCurrentEdit(null)
                    }}/>
                    <Button title={'Cancel'} action={handleCurrentEdit}/>


                </div>
            }


            <li className={`${classes.todo} ${todo.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>id: {todo.id}</p>
                    <p>title: {todo.title}</p>
                </div>
                <div className={classes.butns}>
                    <Button title={'Edit'} action={()=>handleCurrentEdit(todo.id)}/>
                    <Button title={'Delete'} action={()=>handleDelete(todo.id)}/>
                    <Button title={'Done'} action={()=>handleDone(todo.id)}/>
                </div>


            </li>
        </>
    );
};

export default Todo;
