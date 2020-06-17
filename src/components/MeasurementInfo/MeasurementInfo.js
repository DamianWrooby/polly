import React from 'react';
import classes from './MeasurementInfo.module.css';

const MeasurementInfo = ({ location }) => {
    let locationText;
    if (location.street) {
        locationText = `${location.street}, ${location.adminArea5}, ${location.adminArea1}`;
    } else {
        locationText = `${location.adminArea5}, ${location.adminArea1}`;
    }

    return (
        <div className={classes.MeasurementInfo}>
            <p>Location: {locationText}</p>
            <p>Measurement time: </p>
        </div>
    );
};

export default MeasurementInfo;