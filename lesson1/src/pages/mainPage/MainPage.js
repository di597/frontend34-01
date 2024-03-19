import React from 'react';
import Buttons from "../../components/buttons/Buttons";
import User from "../user/User";
import Input from "../input/Input";
import Example from "../../components/example/Example";

const MainPage =(props) => {
    return (
        <React.Fragment>
            <Buttons/>
            <User name = {'Diana'} age={28}/>
            <User name = {'Timur'} age={31}/>
            <User name = {'Erik'} age={22}/>
            <Input/>
            <Example>
                <p>User</p>
                <p>Age</p>
            </Example>
            <input/>
        </React.Fragment>
    );
}

export default MainPage;