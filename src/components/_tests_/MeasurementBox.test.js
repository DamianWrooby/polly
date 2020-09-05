import React from 'react';
import { render } from '@testing-library/react';

import MeasurementBox from '../MeasurementBox/MeasurementBox';

const testData = {
  PM1: {
    value: null,
    maxValue: null,
  },
  PM25: {
    value: 5,
    maxValue: 25,
  },
  PM10: {
    value: 10,
    maxValue: 50,
  },
};

describe('MeasurementBox', () => {
  test('renders proper info when type is set wrong', () => {
    const { getByText } = render(
      <MeasurementBox type="type" label="label" data={testData} tip="tip" />
    );
    expect(getByText(/No measurement content/)).toBeInTheDocument();
  });

  test('renders properly MeasurementBox component when data prop is set properly', () => {
    const { getByText, getAllByText } = render(
      <MeasurementBox
        type="pollution"
        label="label"
        data={testData}
        tip="tip"
      />
    );

    expect(getByText(/label/)).toBeInTheDocument();
    expect(getByText(/tip/)).toBeInTheDocument();
    expect(getAllByText(/PM25/)).toHaveLength(2);
    expect(getAllByText(/WHO norm:/)).toHaveLength(2);
  });
});
