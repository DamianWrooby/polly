import React from 'react';
import classes from './Input.module.css';

const input = ({ value, changed, blured, label }) => {
    let inputElement = null;

    inputElement = (
        <input
            value={value}
            onChange={changed}
            onBlur={blured}
        />
    );

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );
};

export default input;