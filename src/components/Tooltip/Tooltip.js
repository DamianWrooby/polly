import React from 'react';
import classes from './Tooltip.module.css';

const Tooltip = ({ label, value, maxValue }) => {
    return (
        <div className={classes.Tooltip}>
            <p>{label}</p>
            <p>{value}</p>
            <p>{maxValue}</p>
        </div>
    );
};

export default Tooltip;