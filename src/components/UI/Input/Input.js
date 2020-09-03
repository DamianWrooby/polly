import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = ({
  value,
  changed,
  blured,
  label,
  invalid,
  validationFeedback,
  fieldId,
}) => {
  let inputElement = null;
  const inputClasses = [];
  const feedbackClasses = [classes.Feedback];
  if (invalid) {
    inputClasses.push(classes.Invalid);
    feedbackClasses.push(classes.In);
  }
  inputElement = (
    <input
      type="text"
      aria-label="text-input"
      className={inputClasses.join(' ')}
      value={value}
      onChange={changed}
      onBlur={blured}
    />
  );

  return (
    <div className={[classes.Input]}>
      <label htmlFor={fieldId}>
        <span className={classes.Label}>{label}</span>
      </label>
      {inputElement}
      <p className={feedbackClasses.join(' ')}>{validationFeedback}</p>
    </div>
  );
};
Input.defaultProps = {
  label: '',
  invalid: false,
  validationFeedback: '',
};

Input.propTypes = {
  blured: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  validationFeedback: PropTypes.string,
  value: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
};

export default Input;
