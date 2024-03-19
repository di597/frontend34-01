import React from 'react';
import classes from './Modal.module.css';
import Input from "../input/Input";

const Modal = ({children, handleShow, onChange, inputValue}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>Закрыть</button>
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