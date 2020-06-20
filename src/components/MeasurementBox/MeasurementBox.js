import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import classes from './MeasurementBox.module.css';


const MeasurementBox = ({ label }) => {
    return (
        <div className={classes.MeasurementBox}>
            <div className={classes.Label}>{label}</div>
            <div className={classes.Circles}>
                <MeasurementCircle />
                <MeasurementCircle />
                <MeasurementCircle />
            </div>
        </div>
    );

};

export default MeasurementBox;