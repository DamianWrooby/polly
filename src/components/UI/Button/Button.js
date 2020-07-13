import React from 'react';
import classes from './Button.module.css';

const Button = ({ icon, disabled }) => {
    return (
        <button disabled={disabled}>
            <div className={classes.Wrapper}>
                <div className={classes.Box}>
                    <i className={icon} aria-hidden="true"></i>
                </div>
            </div>
        </button>
    );
};

export default Button;