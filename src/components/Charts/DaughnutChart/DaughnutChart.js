import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DaughnutChart = ({ chartData, width, height, options }) => {

    return (
        <Doughnut
            data={chartData}
            width={width}
            height={height}
            options={options} />
    );
};

export default DaughnutChart;