import React from 'react';
import classes from './AirQualityBox.module.css';

const AirQualityBox = ({ index }) => {
    const indexValue = index ? (
        <div className={classes.Index}>
            <p>Pollution level: {index.level.toLowerCase().replace('_', ' ')}</p>
        </div>
    ) : null;

    let adviceText;
    switch (index.level) {
        case 'VERY_LOW':
            adviceText = 'Take a deep breath!';
            break;
        case 'LOW':
            adviceText = 'You can go for a walk.';
            break;
        case 'MEDIUM':
            adviceText = 'You can go for a walk but you should not.';
            break;
        case 'HIGH':
            adviceText = 'Better stay at home.';
            break;
        case 'VERY_HIGH':
            adviceText = 'Stay at home and close all of the windows';
            break;
        case 'UNKNOWN':
            adviceText = 'No sensors in this area. Try searching for a different location.';
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
        <div className={classes.Wrapper}>
            <div className={classes.AirQualityBox}>
                {indexValue}
                {advice}
            </div>
        </div>
    );
};

export default AirQualityBox;