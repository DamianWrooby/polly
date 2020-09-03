import React from 'react';
import PropTypes from 'prop-types';
import classes from './ErrorMessage.module.css';

const ErrorMessage = ({ textElement }) => {
  const classList = [
    classes.ErrorMessage,
    'animate__animated',
    'animate__bounceInDown',
    'animate__fast',
  ];
  return <div className={classList.join(' ')}>{textElement}</div>;
};

ErrorMessage.propTypes = {
  textElement: PropTypes.element.isRequired,
};

export default ErrorMessage;
