import React from 'react';
import classes from './AirQualityBox.module.css';

const AirQualityBox = ({ data }) => {
    const indexValue = data ? (
        <div className={classes.Index}>
            {data.indexes[0].value}
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