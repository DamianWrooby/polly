import PropTypes from 'prop-types';
import React from 'react';
import classes from './WeatherCircle.module.css';

const WeatherCircle = ({ label, value }) => {
  let unit;
  switch (label) {
    case 'TEMPERATURE':
      unit = '°C';
      break;
    case 'HUMIDITY':
      unit = '%';
      break;
    case 'PRESSURE':
      unit = 'hPa';
      break;
    case 'WIND':
      unit = 'km/h';
      break;
    default:
      unit = '';
  }
  let icon;
  switch (label) {
    case 'TEMPERATURE':
      icon = 'fa fa-thermometer-half';
      break;
    case 'HUMIDITY':
      icon = 'fa fa-tint';
      break;
    case 'PRESSURE':
      icon = 'fa fa-arrow-down';
      break;
    default:
      icon = '';
  }
  const valueString = `${value}${unit}`;

  return (
    <div className={classes.WeatherCircle}>
      <i className={icon} aria-hidden="true" />
      <p>{valueString}</p>
    </div>
  );
};

WeatherCircle.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default WeatherCircle;
