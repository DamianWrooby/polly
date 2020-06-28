import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import classes from './MeasurementBox.module.css';


const MeasurementBox = ({ type, label, data }) => {

    const dataArr = [];
    let box;
    switch (type) {
        case 'pollution':
            for (let key in data) {
                if (data[key].value !== null) {
                    dataArr.push({ label: key, value: data[key].value, maxValue: data[key].maxValue });
                }
            };
            console.log(dataArr);
            box = dataArr.length !== 0 ? (
                <div className={classes.MeasurementBox}>
                    <div className={classes.Label}>{label}</div>
                    <div className={classes.Circles}>
                        {dataArr.map((el) => {
                            return (
                                <MeasurementCircle key={el.label} label={el.label} value={el.value} maxValue={el.maxValue} />
                            );
                        })
                        }
                    </div>
                </div>
            ) : null;
            break;
        case 'weather':
            for (let key in data) {
                if (data[key].value !== null) {
                    dataArr.push({ label: key, value: data[key].value });
                }
            };
            box = dataArr.length !== 0 ? (
                <div className={classes.MeasurementBox}>
                    <div className={classes.Label}>{label}</div>
                    <div className={classes.Circles}>
                        {dataArr.map((el) => {
                            return (
                                <p key={el.label} >Weather Circle</p>
                            );
                        })
                        }
                    </div>
                </div>
            ) : null;
            break;
        default:
            box = (
                <p>No measurement content</p>
            );
    };


    return (
        <React.Fragment>
            {box}
        </React.Fragment>
    );

};

export default MeasurementBox;