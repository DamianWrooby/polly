import PropTypes from 'prop-types';
import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, icon, disabled, clicked, ariaLabel }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={clicked}
      aria-label={ariaLabel}
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
};

Button.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
