import React from 'react';
import classes from './Example.module.css';

function Example({children}) {
    return (
        <div>
            {children}
            <p className={classes.user}>User</p>

        </div>
    );
}

export default Example;