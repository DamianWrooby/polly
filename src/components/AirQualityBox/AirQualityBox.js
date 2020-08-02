import PropTypes from 'prop-types';
import React from 'react';
import classes from './AirQualityBox.module.css';

const AirQualityBox = ({ index }) => {
  const indexValue = index ? (
    <div className={classes.Index}>
      <p>
        <span>Pollution level: </span>
        {index.level.toLowerCase().replace('_', ' ')}
      </p>
    </div>
  ) : null;

  const boxClasses = [
    classes.AirQualityBox,
    'animate__animated',
    'animate__bounceInDown',
    'animate__fast',
  ];

  let adviceText;
  switch (index.level) {
    case 'VERY_LOW':
      adviceText = 'Take a deep breath!';
      boxClasses.push(classes.GradientLow);
      break;
    case 'LOW':
      adviceText = 'You can go for a walk.';
      boxClasses.push(classes.GradientLow);
      break;
    case 'MEDIUM':
      adviceText = 'You can go for a walk but you should not.';
      boxClasses.push(classes.GradientMedium);
      break;
    case 'HIGH':
      adviceText = 'Better stay at home.';
      boxClasses.push(classes.GradientHigh);
      break;
    case 'VERY_HIGH':
      adviceText = 'Stay at home and close all of the windows';
      boxClasses.push(classes.GradientHigh);
      break;
    case 'UNKNOWN':
      adviceText = 'Sorry. No sensors in this area.';
      boxClasses.push(classes.GradientLow);
      break;
    default:
      adviceText = '';
      break;
  }
  const advice = (
    <div className={classes.Advice}>
      <p>{adviceText}</p>
    </div>
  );
  return (
    <div className={boxClasses.join(' ')}>
      {indexValue}
      {advice}
    </div>
  );
};

AirQualityBox.propTypes = {
  index: PropTypes.shape({
    level: PropTypes.string,
  }).isRequired,
};

export default AirQualityBox;
