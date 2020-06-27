import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import classes from './MeasurementBox.module.css';


const MeasurementBox = ({ type, label, data }) => {

    const dataArr = [];
    let content;
    switch (type) {
        case 'pollution':
            for (let key in data) {
                dataArr.push({ label: key, value: data[key].value, maxValue: data[key].maxValue });
            };
            content = (
                <div className={classes.Circles}>
                    {dataArr.map((el) => {
                        return (
                            <MeasurementCircle key={el.label} label={el.label} value={el.value} maxValue={el.maxValue} />
                        );
                    })
                    }
                </div>
            );
            break;
        case 'weather':
            for (let key in data) {
                dataArr.push({ label: key, value: data[key].value });
            };
            content = (
                <div className={classes.Circles}>
                    {dataArr.map((el) => {
                        return (
                            <p key={el.label} >Weather Circle</p>
                        );
                    })
                    }
                </div>
            );
            break;
        default:
            content = (
                <p>No measurement content</p>
            );
    };


    return (

        <div className={classes.MeasurementBox}>
            <div className={classes.Label}>{label}</div>
            {content}
        </div>
    );

};

export default MeasurementBox;