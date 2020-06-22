import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import classes from './MeasurementBox.module.css';


const MeasurementBox = ({ data, label }) => {
    return (
        <div className={classes.MeasurementBox}>
            <div className={classes.Label}>{label}</div>
            <div className={classes.Circles}>
                <MeasurementCircle airData={data} />
                <MeasurementCircle airData={data} />
            </div>
        </div>
    );

};

export default MeasurementBox;