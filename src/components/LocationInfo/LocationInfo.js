import React from 'react';
import classes from './LocationInfo.module.css';

const LocationInfo = ({ location }) => {
    let locationText;
    if (location.street) {
        locationText = `${location.adminArea5Type}: ${location.adminArea5}, Street: ${location.street}, ${location.adminArea1Type}: ${location.adminArea1}`;
    } else {
        locationText = `${location.adminArea5Type}: ${location.adminArea5}, ${location.adminArea1Type}: ${location.adminArea1}`
    }

    return (
        <div className={classes.LocationInfo}>
            <p>Location: {locationText}</p>
        </div>
    );
};

export default LocationInfo;