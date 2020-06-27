import React from 'react';
import classes from './MeasurementCircle.module.css';
import DaughnutChart from '../Charts/DaughnutChart/DaughnutChart';

const MeasurementCircle = ({ label, value, max }) => {
    const maxValue = 1000;
    const chartData = {
        datasets: [{
            data: [value, maxValue],
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
            tooltips: {
                enabled: false
            },
            responsive: true,
            cutoutPercentage: 90,
            legend: {
                display: false
            }
        }
    };

    return (
        <div className={classes.MeasurementCircle}>
            <h2 className={classes.Label}>{label}</h2>
            <DaughnutChart
                chartData={chartData}
                width={90}
                height={90}
                options={chartData.options}
            />
        </div>
    );
};

export default MeasurementCircle;