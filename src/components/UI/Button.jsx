import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div type={props.type || 'submit'} onClick={props.onClick} className={classes.button}>
            {props.children}
        </div>
    )
}

export default Button