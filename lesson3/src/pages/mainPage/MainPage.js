import React, {useState} from 'react';
import Buttons from "../../components/buttons/Buttons";

import Modal from "../../components/modal/Modal";
import TodoList from "../../components/list/TodoList";
import Button from "../../components/button/Button";

const MainPage =(props) => {
    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    // let show = false
    // console.log(show,'start')
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshowshow')

    const [tasks, setTasks] = useState([

            {
                id:1 ,
                title: 'coding',
                completed: false
            },
            {
                id:4,
                title: 'eat',
                completed: false
            },
            {
                id:6,
                title: 'sleep',
                completed: false
            }


    ])
    console.log(tasks)



    const handleShow = () => {
        // show = true
        // console.log(show, 'end')
        setShow(!show)
    }
    const [inputTask, setInputTask] = useState('')
    console.log(inputTask, 'inputTask')

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }
    const handleAdd = () => {
        setTasks(prev=>[...prev, {
            id: tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])

    }
    const handleDelete = (id) => {
        console.log(id);
    }




    return (
        <>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}


                >
                    {/*<input type="text"*/}
                    {/*       onChange={(event => setInputValue(event.target.value))}*/}
                    {/*/>*/}

                </Modal>
            }

            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}/>




            <Buttons/>
            <Button title={'Открыть'} action={handleShow}/>
            {/*<Header navBar={navBar}/>*/}
            {/*<User name = {'Diana'} age={28}/>*/}
            {/*<User name = {'Timur'} age={31}/>*/}
            {/*<User name = {'Erik'} age={22}/>*/}
            {/*<Example>*/}
            {/*    <p>User</p>*/}
            {/*    <p>Age</p>*/}
            {/*</Example>*/}
        </>
    );
}

export default MainPage;