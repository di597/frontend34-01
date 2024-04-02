import React from 'react';
import {useForm} from "react-hook-form";
import classes from './FormHook.module.sass';

const FormHook = () => {
    const {register, handleSubmit, clearErrors, formState: {errors}, reset,setValue, watch} = useForm({
        defaultValues:{

        }
    })
    const submit = (data) => {
        console.log(data, 'submit')
    }
    const error = (data) => {
        console.log (data, 'error')
    }
    console.log(!!errors?.name?.message, 'errors.name.message')
    return (
        <>
            <form onSubmit={handleSubmit(submit, error)}>
                <input
                    type="text"
                    {
                    ...register('name', {required: 'имя должно быть введено'})
                    }
                    aria-invalid={errors.name ? true : false}
                    className={classes.input}
                />
                {
                    !!errors?.name?.message && <p>{errors.name.message}</p>
                }
                <input
                    type="number"
                    {
                        ...register('age', {required: true})
                    }
                />
                <button>отправить</button>
            </form>

        </>
    );
};

export default FormHook;