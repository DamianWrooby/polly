import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import classes from './MeasurementBox.module.css';


const MeasurementBox = ({ label, data }) => {

    const dataArr = [];

    for (let key in data) {
        dataArr.push({ label: key, value: data[key] });
    }
    console.log(dataArr);

    let circles = (
        <div className={classes.Circles}>
            {dataArr.map((el) => {
                return (
                    <MeasurementCircle key={el.label} label={el.label} value={el.value} />
                );
            })
            }
        </div>
    );

    return (

        <div className={classes.MeasurementBox}>
            <div className={classes.Label}>{label}</div>
            {circles}
        </div>
    );

};

export default MeasurementBox;