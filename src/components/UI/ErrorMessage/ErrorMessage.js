import React from 'react';
import classes from './ErrorMessage.module.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ErrorMessage = ({ textElement, action }) => {
  return (
    <div className={classes.ErrorMessage}>
      {textElement}
      <Button clicked={action} icon="fa fa-step-backward" type="button" />
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.element.isRequired,
};

export default ErrorMessage;
