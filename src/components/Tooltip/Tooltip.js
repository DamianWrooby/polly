import React from 'react';
import classes from './Tooltip.module.css';

const Tooltip = ({ label, value, maxValue }) => {
    const norm = maxValue ? <p className={classes.Norm}>WHO norm: {maxValue} µg/m³</p> : <p className={classes.Norm}>WHO norm: none</p>;
    return (
        <div>
            <p className={classes.Label}>{label} </p>
            <p className={classes.Value}>{value} </p>
            {norm}
        </div>
    );
};

export default Tooltip;