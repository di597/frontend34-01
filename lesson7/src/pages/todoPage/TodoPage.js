import React, { useEffect, useState } from 'react';
import Modal from "../../components/modal/Modal";
import TodoList from "../../components/list/TodoList";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import loadingImg from '../../common/img/74H8.gif'
import Pagination from "../../components/pagination/Pagination";

const TodoPage = () => {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [filterOption, setFilterOption] = useState('all');
    const [loading, setLoading] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [limit, setLimit] = useState(7)
    const [offset, setOffset] = useState(0)

    const handleShow = () => {
        setShow(!show);
    };

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };

    const onChangeInputSearch = (event) => {
        setInputSearch(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const handleClear = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    const handleAdd = () => {
        if (inputTask.trim() !== '') {
            setTasks(prev => [...prev, {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                title: inputTask,
                completed: false
            }]);
            setInputTask('');
        }
    };

    const handleDone = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    const handleEdit = (editTodo) => {
        setTasks(tasks.map(task => {
            if (task.id === editTodo.id) {
                return { ...task, title: editTodo.title };
            }
            return task;
        }));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')));
    };

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage) {
            setTasks(myLocalStorage);
        }
    }, []);

    const BASE_URL = 'https://jsonplaceholder.typicode.com/';

    const getApi = async(api, limit, offset) => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}${api}/?_limit=${limit}&_start=${offset}`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log('Error', e.message);
        } finally {
            setLoading(false);
        }
    };
    const page = Math.floor(offset/limit)+1
    console.log(offset);
    const handlePrev = () => {
        if (offset>0) return setOffset(prev=> prev-limit)
    }
    const handleNext =() => {
        setOffset(prev => prev+limit)


    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        getApi('todos', 10, 0).then((data) => setTasks(data));
    }, [offset, limit]);

    const filteredTasks = tasks.filter(task => {
        switch(filterOption) {
            case 'completed':
                return task.completed;
            case 'notCompleted':
                return !task.completed;
            default:
                return true;
        }
    });

    const searchedTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(inputSearch.toLowerCase()));

    return (
        <>
            <Input value={inputSearch} onChange={onChangeInputSearch} placeholder={'Введите текст'} type={'text'} />
            <select value={filterOption} onChange={handleFilterChange}>
                <option value='all'>Все задачи</option>
                <option value='completed'>Выполненные</option>
                <option value='notCompleted'>Не выполненные</option>
            </select>
            <Button title={'Открыть'} action={handleShow} />
            <Button title={'Очистить'} action={handleClear} />

            {show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                       inputTask={inputTask}
                />
            }
            {
                <Pagination prev={handlePrev} page={page} next={handleNext}/>
            }
            {loading ? <img src={loadingImg} alt="loading"/>:
                <TodoList tasks={searchedTasks}
                          handleDelete={handleDelete}
                          handleDone={handleDone}
                          handleEdit={handleEdit}
                />
            }
        </>
    );
};

export default TodoPage;
