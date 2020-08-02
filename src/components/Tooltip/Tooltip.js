/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React from 'react';
import classes from './Tooltip.module.css';

const Tooltip = ({ label, value, maxValue }) => {
  const norm = maxValue ? (
    <p className={classes.Norm}>WHO norm:{maxValue} µg/m³</p>
  ) : (
    <p className={classes.Norm}>WHO norm: none</p>
  );
  return (
    <div>
      <p className={classes.Label}>{label} </p>
      <p className={classes.Value}>{value} </p>
      {norm}
    </div>
  );
};
Tooltip.defaultProps = {
  maxValue: null,
};
Tooltip.propTypes = {
  label: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  value: PropTypes.number.isRequired,
};

export default Tooltip;
