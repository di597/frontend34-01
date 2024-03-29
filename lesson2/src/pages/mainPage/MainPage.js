import React, {useState} from 'react';
import Buttons from "../../components/buttons/Buttons";

import Modal from "../../components/modal/Modal";
import List from "../../components/list/List";
import Button from "../../components/button/Button";

const MainPage =(props) => {
    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    // let show = false
    // console.log(show,'start')
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshowshow')

    const list = [
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }
    ]

    const handleShow = () => {
        // show = true
        // console.log(show, 'end')
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)

    }

    return (
        <>
            { show &&
                <Modal handleShow={handleShow} onChange={handleChange} inputValue={inputValue}>
                    {/*<input type="text"*/}
                    {/*       onChange={(event => setInputValue(event.target.value))}*/}
                    {/*/>*/}

                </Modal>
            }
            <List list={list}/>




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