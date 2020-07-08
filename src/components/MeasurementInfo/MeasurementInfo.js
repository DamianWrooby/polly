import React from 'react';
import classes from './MeasurementInfo.module.css';

const MeasurementInfo = ({ location, time }) => {
    let locationText;
    if (location.street) {
        locationText = `${location.street}, ${location.adminArea5}, ${location.adminArea1}`;
    } else {
        locationText = `${location.adminArea5}, ${location.adminArea1}`;
    }

    const fromDate = new Date(time.from);
    const tillDate = new Date(time.till);
    const fromDateArr = fromDate.toLocaleString().split(':');
    fromDateArr.pop();
    const fromDateString = fromDateArr.join(':');
    const tillDateArr = tillDate.toLocaleString().split(' ');
    tillDateArr.shift();
    const tillHourArr = tillDateArr[0].split(':');
    tillHourArr.pop();
    const tillHourString = tillHourArr.join(':');
    const dateString = `${fromDateString} - ${tillHourString}`;

    return (
        <div className={classes.MeasurementInfo}>
            <p><span className={classes.LocationLabel}>Location:</span><br /> {locationText}</p>

            <p><span className={classes.LocationLabel}>Measurement time:</span><br /> {dateString}</p>
        </div>
    );
};

export default MeasurementInfo;