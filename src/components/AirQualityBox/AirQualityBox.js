import React from 'react';
import classes from './AirQualityBox.module.css';

const AirQualityBox = ({ data }) => {
    const indexValue = data ? (
        <div className={classes.Index}>
            Pollution level: {data.indexes[0].level.toLowerCase().replace('_', ' ')}
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