import React, {useState, useEffect} from 'react';
import {getApi} from "../../common/api";
import TodoPage from "../todoPage/TodoPage";
import PokemonPage from "../pokemonPage/PokemonPage";
import Form from "../../components/form/Form";
import FormHook from "../formHook/FormHook";

const MainPage =(props) => {









    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }, [tasks]);
    //


    const [users, setUsers] = useState([])
    console.log(users, 'users');

    useEffect(() => {
        // getApi('todos').then((data)=> setTasks(data))
        getApi('users').then((data)=> setUsers(data))
        // getApi('posts').then((data)=> console.log(data))
    },[])



    return (
        <>


            {/*<TodoPage/>*/}
            {/*<PokemonPage/>*/}
            {/*<Form/>*/}
            <FormHook/>
            {/*<Button title={'Clear All Tasks'} action={handleClearAll} />*/}








        </>
    );
}

export default MainPage;