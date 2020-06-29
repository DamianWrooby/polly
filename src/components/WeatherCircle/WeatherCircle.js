import React from 'react';
import classes from './WeatherCircle.module.css';

const WeatherCircle = ({ label, value }) => {
    let symbol;
    switch (label) {
        case 'TEMPERATURE':
            symbol = '°C';
            break;
        case 'HUMIDITY':
            symbol = '%';
            break;
        case 'PRESSURE':
            symbol = 'hPa';
            break;
        case 'WIND':
            symbol = 'km/h';
            break;
        default:
            symbol = '';
    }
    const valueString = `${value} ${symbol}`;

    return (
        <div className={classes.WeatherCircle}>
            <h2 className={classes.Label}>{label}</h2>
            {valueString}
        </div>
    );
};

export default WeatherCircle;