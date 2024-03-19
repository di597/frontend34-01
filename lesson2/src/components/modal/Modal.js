import React from 'react';
import classes from './Modal.module.css';
import Input from "../input/Input";
import Button from "../button/Button";

const Modal = ({children, handleShow, onChange, inputValue}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button title={'закрыть'} action={handleShow}/>
                <p>{inputValue}</p>
                <Input
                    placeholder={'внести данные'}
                    type={'text'}
                    onChange={onChange}
                    value={inputValue}

                />
                {children}
            </div>


        </>
    )

}

export default Modal;