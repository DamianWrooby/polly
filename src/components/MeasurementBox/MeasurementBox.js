import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import classes from './MeasurementBox.module.css';


const MeasurementBox = () => {
    return (
        <div className={classes.MeasurementBox}>
            <div className={classes.Label}>Label</div>
            <MeasurementCircle />
        </div>
    );

};

export default MeasurementBox;