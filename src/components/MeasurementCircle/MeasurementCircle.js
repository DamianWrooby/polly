import PropTypes from 'prop-types';
import React from 'react';
import classes from './MeasurementCircle.module.css';
import DaughnutChart from '../Charts/DoughnutChart/DoughnutChart';
import Tooltip from '../Tooltip/Tooltip';

const MeasurementCircle = ({ label, value, maxValue }) => {
  const pollutionLevel = maxValue ? (value / maxValue) * 100 : null;
  console.log(pollutionLevel);
  let chartColor = '#6eb6ff';
  let chartColorBackground = '#90f2ff';

  if (pollutionLevel > 50) {
    chartColor = '#ff6200';
  } else if (pollutionLevel > 80) {
    chartColor = '#ff4000';
  } else if (pollutionLevel > 100) {
    chartColorBackground = '#ff0000';
  }
  const chartData = {
    datasets: [
      {
        data: [value, maxValue],
        backgroundColor: [chartColor, chartColorBackground],
        borderWidth: 0,
      },
    ],
    labels: ['Current', 'Norm'],
    backgroundColor: ['#000124', '#123411'],
    options: {
      tooltips: {
        enabled: false,
      },
      responsive: true,
      cutoutPercentage: 90,
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={classes.MeasurementCircle}>
      <div className={classes.Tooltip}>
        <Tooltip label={label} value={value} maxValue={maxValue} />
      </div>
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
MeasurementCircle.defaultProps = {
  maxValue: null,
};
MeasurementCircle.propTypes = {
  label: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
  value: PropTypes.number.isRequired,
};

export default MeasurementCircle;
