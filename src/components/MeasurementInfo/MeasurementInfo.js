import React from 'react';
import classes from './MeasurementInfo.module.css';

const MeasurementInfo = ({ location, currentData }) => {
    let locationText;
    if (location.street) {
        locationText = `${location.street}, ${location.adminArea5}, ${location.adminArea1}`;
    } else {
        locationText = `${location.adminArea5}, ${location.adminArea1}`;
    }

    const date = new Date(currentData.tillDateTime);
    const dateString = date.toLocaleString();

    console.log(dateString);
    return (
        <div className={classes.MeasurementInfo}>
            <p>Location: {locationText}</p>
            <p>Measurement time: {dateString}</p>
        </div>
    );
};

export default MeasurementInfo;