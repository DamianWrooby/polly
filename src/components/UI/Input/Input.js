import React from 'react';
import classes from './Input.module.css';

const input = ({
  value,
  changed,
  blured,
  label,
  sublabel,
  invalid,
  validationFeedback,
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
      className={inputClasses.join(' ')}
      value={value}
      onChange={changed}
      onBlur={blured}
    />
  );

  return (
    <div className={[classes.Input]}>
      <label>
        <span className={classes.Label}>{label}</span>
        <br />
        <span className={classes.Sublabel}>{sublabel}</span>
      </label>
      {inputElement}
      <p className={feedbackClasses.join(' ')}>{validationFeedback}</p>
    </div>
  );
};

export default input;
