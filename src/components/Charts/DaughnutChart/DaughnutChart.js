import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';

const DaughnutChart = ({ ...props }) => {
    Chart.pluginService.register({
        beforeDraw: function (chart) {
            const width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            ctx.restore();
            const fontSize = (height / 50).toFixed(2);
            ctx.font = fontSize + "em Arial";
            ctx.textBaseline = "middle";

            const text = 'label',
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    });

    return (
        <Doughnut
            data={props.chartData}
            width={props.width}
            height={props.height}
            options={props.options} />
    );
};

export default DaughnutChart;