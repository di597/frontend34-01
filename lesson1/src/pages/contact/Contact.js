import React from 'react';
import classes from "./Contact.module.css";

const Contact = (props) => {
    return (
        <div>
            <p className={classes.phoneNumber}>Phone: +996777888999</p>
            <p className={classes.email}>Email: dirusl@gmail.com</p>
            <p className={classes.adress}>Adress: Bishkek</p>
        </div>
    )

}


export default Contact;