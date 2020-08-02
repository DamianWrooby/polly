/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DaughnutChart = ({ chartData, width, height, options }) => {
  return (
    <Doughnut
      data={chartData}
      width={width}
      height={height}
      options={options}
    />
  );
};

DaughnutChart.propTypes = {
  chartData: PropTypes.shape({
    datasets: PropTypes.array,
    labels: PropTypes.array,
    backgroundColor: PropTypes.array,
    options: PropTypes.object,
  }),
  options: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default DaughnutChart;
