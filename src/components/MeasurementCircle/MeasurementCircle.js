import React from 'react';
import classes from './MeasurementCircle.module.css';
import DaughnutChart from '../Charts/DaughnutChart/DaughnutChart';

const MeasurementCircle = () => {
    const data = {
        datasets: [{
            data: [10, 90],
            backgroundColor: [
                'rgba(34, 244, 23, 1)',
                'rgba(167, 124, 23, 1)'
            ],
            borderWidth: 0,

        }],
        labels: [
            'Current',
            'Norm'
        ],
        backgroundColor: [
            '#000124',
            '#123411'
        ],
        options: {
            responsive: true,
            cutoutPercentage: 90,
            legend: {
                display: false
            }
        }
    };

    return (
        <div className={classes.MeasurementCircle}>
            <DaughnutChart
                data={data}
                width={90}
                height={90}
                options={data.options}
            />
        </div>
    );
};

export default MeasurementCircle;