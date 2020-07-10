import React from 'react';
import classes from './Tooltip.module.css';

const Tooltip = ({ label, value, maxValue }) => {
    return (
        <div>
            <p className={classes.Label}>{label} </p>
            <p className={classes.Value}>{value} </p>
            <p className={classes.Norm}>WHO norm: {maxValue} µg/m³</p>
        </div>
    );
};

export default Tooltip;