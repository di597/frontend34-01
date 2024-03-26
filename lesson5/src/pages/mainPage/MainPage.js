import React, {useState, useEffect} from 'react';
import Buttons from "../../components/buttons/Buttons";

import Modal from "../../components/modal/Modal";
import TodoList from "../../components/list/TodoList";
import Button from "../../components/button/Button";
import User from "../user/User";

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
                id:5,
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

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }
    const handleAdd = () => {
        setTasks(prev=>[...prev, {
            id: tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])

    }
    const handleDone = (id) => {
        console.log(id)
        tasks.map(task=> {
            if(task.id===id) {
                return task.completed = !task.completed
            }
        })
        setTasks([...tasks])
    }

    const handleEdit= (editTodo) =>{
        console.log(editTodo)
        tasks.map(task=> {
            if (task.id=== editTodo.id) return task.title = editTodo.title
        })
        setTasks([...tasks])
    }
    const handleDelete = (id) => {
        setTasks(tasks.filter(task=>task.id!==id))
        // setTasks(deleted)
    }
    const [filterOption, setFilterOption] = useState('all')
    const handleFilterChange = (event) => {
        setFilterOption(event.target.value)

    }
    const filterTasks = tasks.filter(task => {
        switch (filterOption) {
            case 'all':
                return true;
            case 'completed' :
                return task.completed;
            case 'notCompleted' :
                return !task.completed;
            default:
                return true
        }
    })

    useEffect(()=> {
        console.log('useEffect');
    },[tasks])
    const sendLocalStorage = () => {
        localStorage.setItem('name', 'Diana');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')));
    };

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalStorage.length !==0) {
            setTasks(myLocalStorage)
        }
    }, []);
    const handleClearAll = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }, [tasks]);
    //
    const BASE_URL = 'https://jsonplaceholder.typicode.com/'
    const getApi = async(api) => {
        const response = await fetch(`${BASE_URL}${api}`);
        const  data = await response.json()
        return data
    };

    const [users, setUsers] = useState([])
    console.log(users, 'users');

    useEffect(() => {
        // getApi('todos').then((data)=> setTasks(data))
        getApi('users').then((data)=> setUsers(data))
        // getApi('posts').then((data)=> console.log(data))
    },[])

    useEffect(() => {
        getApi('todos').then((data)=> setTasks(data))
        getApi('users').then((data)=> console.log(data))
        getApi('posts').then((data)=> console.log(data))
    },[])

    return (
        <>
            {/*<Button title={'FETCH'} action={getTodos}/>*/}
            <User users={users}/>
            <Button title={'LocalStorage'} action={sendLocalStorage}/>
            <Button title={'GetLocalStorage'} action={getLocalStorage}/>
            <Button title={'Clear All Tasks'} action={handleClearAll} />
            <div>
                <select value={filterOption} onChange={handleFilterChange}>
                    <option value="all">All tasks</option>
                    <option value="completed">Completed tasks</option>
                    <option value="notCompleted">Not completed tasks</option>

                </select>
            </div>
            {show &&
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
                tasks={filterTasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}

            />





            {/*<Buttons/>*/}
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