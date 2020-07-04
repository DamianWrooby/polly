import React from 'react';
import classes from './Input.module.css';

const input = ({ value, changed, blured, label, invalid, validationFeedback }) => {
    let inputElement = null;
    const inputClasses = [];
    const feedbackClasses = [classes.Feedback];
    if (invalid) {
        inputClasses.push(classes.Invalid);
        feedbackClasses.push(classes.In);
    }
    inputElement = (
        <input
            className={inputClasses.join(' ')}
            value={value}
            onChange={changed}
            onBlur={blured}
        />
    );

    return (
        <div className={classes.Input}>
            <label>{label}</label>
            {inputElement}
            <p className={feedbackClasses.join(' ')}>{validationFeedback}</p>
        </div>
    );
};

export default input;