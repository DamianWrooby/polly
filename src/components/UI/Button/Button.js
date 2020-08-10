import PropTypes from 'prop-types';
import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, icon, disabled, clicked, ariaLabel, addClass }) => {
  let btnClass = [];
  btnClass = addClass === 'front' ? classes.FrontBtn : null;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={clicked}
      aria-label={ariaLabel}
      className={btnClass}
    >
      <div className={classes.Wrapper}>
        <div className={classes.Box}>
          <i className={icon} aria-hidden="true" />
        </div>
      </div>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  clicked: null,
  addClass: null,
};

Button.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  addClass: PropTypes.string,
};

export default Button;
