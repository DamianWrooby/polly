import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DaughnutChart = ({ ...props }) => {
    return (
        <Doughnut
            data={props.data}
            width={props.width}
            height={props.height}
            options={props.options} />
    );
};

export default DaughnutChart;