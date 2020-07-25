import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, icon, disabled, clicked, ariaLabel }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={clicked}
      aria-label={ariaLabel}
    >
      <div className={classes.Wrapper}>
        <div className={classes.Box}>
          <i className={icon} aria-hidden="true"></i>
        </div>
      </div>
    </button>
  );
};

export default Button;
