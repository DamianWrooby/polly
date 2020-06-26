import React from 'react';
import classes from './AirQualityBox.module.css';

const AirQualityBox = ({ index }) => {
    const indexValue = index ? (
        <div className={classes.Index}>
            Pollution level: {index.level.toLowerCase().replace('_', ' ')}
        </div>
    ) : null;

    return (
        <div className={classes.Wrapper}>
            <div className={classes.AirQualityBox}>
                {indexValue}
            </div>
        </div>
    );
};

export default AirQualityBox;